export const storeItem = (itemToStore, key) => {
  localStorage.setItem(key, itemToStore);

  return localStorage.getItem(key);
};
