<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { defineClientComponent, useData } from 'vitepress'
import {
  PLUGIN_CATEGORIES,
  categoryLabels,
  onlinePlugins,
  pluginIcon,
  pluginUrl,
} from '../lib/onlinePlugins'
import { sortByName } from '../lib/util'

const { lang, isDark } = useData()
const isZh = computed(() => lang.value === 'zh')

const LunaIconList = defineClientComponent(() => import('luna-icon-list/vue'))
const LunaWindow = defineClientComponent(() => import('luna-window/vue'))

const filter = ref('')
const category = ref('all')
const tabRefs = ref({})
const indicator = ref({ left: 0, width: 0, ready: false })
const windows = ref([])
let iconList = null
let nextWindowId = 1

const tabs = computed(() => ['all', ...PLUGIN_CATEGORIES])
const showCategoryTabs = computed(() => !filter.value.trim())
const theme = computed(() => (isDark.value ? 'dark' : 'light'))

function pluginName(plugin) {
  return isZh.value && plugin.nameZh ? plugin.nameZh : plugin.name
}

function pluginDescription(plugin) {
  if (isZh.value && plugin.descriptionZh) return plugin.descriptionZh
  return plugin.description || ''
}

function matchesFilter(plugin, query) {
  if (!query) return true
  const q = query.toLowerCase()
  return (
    pluginName(plugin).toLowerCase().includes(q) ||
    pluginDescription(plugin).toLowerCase().includes(q) ||
    plugin.id.toLowerCase().includes(q)
  )
}

const visiblePlugins = computed(() => {
  const query = filter.value.trim()
  const list = onlinePlugins.filter((plugin) => {
    if (
      !query &&
      category.value !== 'all' &&
      plugin.category !== category.value
    ) {
      return false
    }
    return matchesFilter(plugin, query)
  })
  return sortByName(list, pluginName)
})

const icons = computed(() =>
  visiblePlugins.value.map((plugin) => {
    const name = pluginName(plugin)
    const description = pluginDescription(plugin)
    return {
      url: pluginUrl(plugin),
      src: pluginIcon(plugin),
      name,
      title: description ? `${name} - ${description}` : name,
      style: { borderRadius: '6px' },
    }
  })
)

function updateIndicator() {
  const tab = tabRefs.value[category.value]
  if (!tab) return
  indicator.value = {
    left: tab.offsetLeft,
    width: tab.offsetWidth,
    ready: true,
  }
}

watch(
  [category, showCategoryTabs, isZh],
  async () => {
    if (!showCategoryTabs.value) return
    await nextTick()
    updateIndicator()
  },
  { immediate: true }
)

function setCategory(id) {
  category.value = id
}

function openWindow({ title, url }) {
  const margin = 32
  const width = Math.min(800, Math.max(360, window.innerWidth - margin * 2))
  const height = Math.min(600, Math.max(280, window.innerHeight - margin * 2))
  const offset = (windows.value.length % 8) * 28
  const maxX = Math.max(0, window.innerWidth - width)
  const maxY = Math.max(0, window.innerHeight - height)
  windows.value.push({
    id: nextWindowId++,
    title,
    url,
    x: Math.min(
      maxX,
      Math.max(0, Math.round((window.innerWidth - width) / 2) + offset)
    ),
    y: Math.min(
      maxY,
      Math.max(0, Math.round((window.innerHeight - height) / 2) + offset)
    ),
    width,
    height,
  })
}

function onWindowCreate(instance, id) {
  let destroyed = false
  const originalDestroy = instance.destroy
  instance.destroy = () => {
    if (destroyed) return
    destroyed = true
    originalDestroy()
  }
  instance.on('destroy', () => {
    destroyed = true
    windows.value = windows.value.filter((item) => item.id !== id)
  })
}

function onCreate(instance) {
  iconList = instance
  iconList.on('click', (_e, icon) => {
    const data = icon?.data
    if (data?.url) openWindow({ title: data.name || '', url: data.url })
  })
  iconList.on('dblclick', (_e, icon) => {
    const url = icon?.data?.url
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
  })
}

function onSearchKeydown(e) {
  if (e.key === 'ArrowDown') {
    if (iconList?.select(0)) {
      e.preventDefault()
      iconList.focus()
    }
    return
  }
  if (e.key !== 'Enter') return
  const first = visiblePlugins.value[0]
  if (first) openWindow({ title: pluginName(first), url: pluginUrl(first) })
}

function setTabRef(id, el) {
  if (el) {
    tabRefs.value[id] = el
  } else {
    delete tabRefs.value[id]
  }
}

function categoryLabel(id) {
  const labels = categoryLabels[id]
  return isZh.value ? labels.zh : labels.en
}
</script>

<template>
  <div class="launcher">
    <div class="titlebar">
      <div class="search">
        <input
          v-model="filter"
          type="search"
          autocomplete="off"
          spellcheck="false"
          :placeholder="isZh ? '搜索工具' : 'Search Tool'"
          @keydown="onSearchKeydown"
        />
      </div>
    </div>

    <div class="body" :class="{ 'with-tabs': showCategoryTabs }">
      <div v-if="icons.length === 0 && filter.trim()" class="empty">
        {{ isZh ? '无结果' : 'No Result' }}
      </div>
      <LunaIconList
        v-else
        class="icon-list"
        :icons="icons"
        :size="48"
        :theme="theme"
        @create="onCreate"
      />
    </div>

    <div v-if="showCategoryTabs" class="tabs-wrap">
      <div class="tabs">
        <div
          class="indicator"
          :class="{ ready: indicator.ready }"
          :style="{
            transform: `translateX(${indicator.left}px)`,
            width: `${indicator.width}px`,
          }"
        />
        <button
          v-for="id in tabs"
          :key="id"
          type="button"
          class="tab"
          :class="{ active: category === id }"
          :ref="(el) => setTabRef(id, el)"
          @click="setCategory(id)"
        >
          {{ categoryLabel(id) }}
        </button>
      </div>
    </div>

    <LunaWindow
      v-for="item in windows"
      :key="item.id"
      :theme="theme"
      :title="item.title"
      :content="item.url"
      :x="item.x"
      :y="item.y"
      :width="item.width"
      :height="item.height"
      @create="(instance) => onWindowCreate(instance, item.id)"
    />
  </div>
</template>

<style scoped>
.launcher {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--vp-nav-height, 64px));
  max-width: 1152px;
  margin: 0 auto;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.titlebar {
  display: flex;
  align-items: center;
  height: 50px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.search {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.search input {
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 18px;
  color: var(--vp-c-text-1);
  background: transparent;
}

.search input::placeholder {
  color: var(--vp-c-text-3);
}

.search input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

.body {
  position: relative;
  flex: 1;
  min-height: 280px;
  overflow: auto;
}

.body.with-tabs {
  padding-bottom: 52px;
}

.empty {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  opacity: 0.5;
}

.icon-list {
  height: 100%;
  min-height: 280px;
}

.tabs-wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 16px;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 10;
}

.tabs {
  pointer-events: auto;
  position: relative;
  display: flex;
  align-items: center;
  gap: 2px;
  height: 36px;
  max-width: calc(100% - 24px);
  padding: 4px;
  overflow-x: auto;
  border-radius: 999px;
  background: color-mix(in srgb, var(--vp-c-bg) 72%, transparent);
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-2, 0 4px 16px rgba(0, 0, 0, 0.08));
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  opacity: 0.85;
  transition: opacity 0.2s ease;
}

.tabs:hover {
  opacity: 1;
}

.tabs::-webkit-scrollbar {
  display: none;
}

.indicator {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 0;
  border-radius: 999px;
  background: color-mix(in srgb, var(--vp-c-brand-1) 18%, transparent);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    width 0.28s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease;
}

.indicator.ready {
  opacity: 1;
}

.tab {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 13px;
  opacity: 0.75;
  cursor: pointer;
  transition: color 0.2s ease, opacity 0.2s ease, background-color 0.2s ease;
}

.tab:hover:not(.active) {
  color: var(--vp-c-text-1);
  opacity: 1;
  background: var(--vp-c-bg-soft);
}

.tab.active {
  color: var(--vp-c-brand-1);
  opacity: 1;
  font-weight: 500;
}

@media (max-width: 640px) {
  .search input {
    font-size: 16px;
  }
}
</style>
