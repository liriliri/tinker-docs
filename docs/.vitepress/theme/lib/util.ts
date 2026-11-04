import { compare, pinyin } from 'pinyin'

const chineseRe = /[\u4e00-\u9fa5]/

function toPinyin(str: string): string {
  if (!chineseRe.test(str)) return str
  return pinyin(str, { style: 'normal', segment: true })
    .map((parts) => parts[0])
    .join('')
}

function toFirstLetter(str: string): string {
  if (!chineseRe.test(str)) return str
  return pinyin(str, { style: 'first_letter', segment: true })
    .map((parts) => parts[0])
    .join('')
}

export function pinyinMatch(input: string, keyword: string): boolean {
  input = input.toLowerCase()
  keyword = keyword.toLowerCase()
  return (
    input.includes(keyword) ||
    toPinyin(input).includes(keyword) ||
    toFirstLetter(input).includes(keyword)
  )
}

export function sortByName<T>(arr: T[], getName: (item: T) => string): T[] {
  return arr.slice().sort((a, b) => compare(getName(a), getName(b)))
}
