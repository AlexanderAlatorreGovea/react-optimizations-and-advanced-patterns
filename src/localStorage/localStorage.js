export const storeItem = (itemToStore, key) => {
  const arr = [];
  
  localStorage.setItem(key, [...arr, itemToStore]);
};
