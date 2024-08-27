import { useState, useEffect } from "react";

type Theme = "light" | "dark";
const THEME = 'theme';

// Toggle between 'light' and 'dark' theme
const useTheme = (): [Theme, () => void] => {
  // Retrieve the stored theme from local storage or set default to 'light'
  const [theme, setTheme] = useState<Theme>(() => {
    // Prevent error caused by late localStorage init
    if (typeof localStorage === "undefined") return "light";

    const savedTheme = localStorage.getItem(THEME) as Theme | null;
    return savedTheme ? savedTheme : "light";
  });

  // Set theme state on localstorage load
  useEffect(() => {
    setTheme(localStorage.getItem(THEME) as Theme);
  }, []);

  // Toggle between 'light' and 'dark' theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Toggle theme in local storage and set theme class to document body
    localStorage.setItem(THEME, newTheme);
    document.documentElement.className = newTheme;
  };

  return [theme, toggleTheme];
};

export default useTheme;
