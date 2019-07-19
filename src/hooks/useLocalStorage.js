import React, { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}

export default useLocalStorage;

// Higher Order comp.  Takes in key, initial Value.
//If there's nothing in local storage that matches it,
// the HOC creates a key: value pair, otherwise it
//returns what was entered as a parameter
