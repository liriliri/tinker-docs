import { compare } from 'pinyin'

export function sortByName<T>(arr: T[], getName: (item: T) => string): T[] {
  return arr.slice().sort((a, b) => compare(getName(a), getName(b)))
}
