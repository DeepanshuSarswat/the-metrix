export const setData = (query, selectedItems) => {
    localStorage.setItem(query, JSON.stringify(selectedItems));
}

export const getData = (query) => {

    const storedArrayJSON = localStorage.getItem(query);

    if (storedArrayJSON !== null) {
      const retrievedArray = JSON.parse(storedArrayJSON);

      return retrievedArray;
    } 
    
    else {
      console.log("The key does not exist in localStorage.");
    }
    
}