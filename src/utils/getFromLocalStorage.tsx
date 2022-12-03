export const getFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key)
  return JSON.parse(value)
}
