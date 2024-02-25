function updateLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  export { updateLocalStorage };