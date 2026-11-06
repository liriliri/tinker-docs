export function pinyinMatch(
  input: string,
  keyword: string,
  namePy?: [string, string]
): boolean {
  const lowerInput = input.toLowerCase()
  const lowerKeyword = keyword.toLowerCase()
  if (lowerInput.includes(lowerKeyword)) return true
  if (!namePy) return false
  return namePy[0].includes(lowerKeyword) || namePy[1].includes(lowerKeyword)
}

export function sortByName<T>(arr: T[], getName: (item: T) => string): T[] {
  return arr.slice().sort((a, b) => getName(a).localeCompare(getName(b), 'zh'))
}
