export const saveData = (data, key) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('Error saving data to localStorage:', error);
    }
  };
  
  export const loadData = (key) => {
    try {
      const savedData = localStorage.getItem(key);
      return savedData ? JSON.parse(savedData) : null;
    } catch (error) {
      console.log('Error loading data from localStorage:', error);
      return null;
    }
  };