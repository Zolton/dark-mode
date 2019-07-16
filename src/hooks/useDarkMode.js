import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [value, setValue] = useLocalStorage("isDarkModeEnabled");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    useLocalStorage ? setDarkMode(true) : setDarkMode(false);
  }, [darkMode]);

  return [storedValue, setValue];
}

export default useDarkMode;
