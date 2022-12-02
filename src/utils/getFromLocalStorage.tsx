export const getFromLocalStorage = (key: string) => {
  let value = localStorage.getItem(key);
  return JSON.parse(value);
};
