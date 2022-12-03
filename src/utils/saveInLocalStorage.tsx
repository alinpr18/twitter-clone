export const saveInLocalStorage = (key: string, value: any) => {
  let valueFromLocalStorage = localStorage.getItem(key)
  if (valueFromLocalStorage) {
    valueFromLocalStorage = JSON.parse(valueFromLocalStorage)
    if (Array.isArray(valueFromLocalStorage)) {
      valueFromLocalStorage.push(value)
    }
    localStorage.setItem(key, JSON.stringify(valueFromLocalStorage))
  } else {
    localStorage.setItem(key, JSON.stringify([value]))
  }
}
