import { useState, useEffect } from "react";

type Theme = "light" | "dark";

// Toggle between 'light' and 'dark' theme
const useTheme = (): [Theme, () => void] => {
  // Retrieve the stored theme from local storage or set default to 'light'
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme ? savedTheme : "light";
  });

  // Effect to update the theme in local storage and apply the theme class to the document body
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  // Toggle between 'light' and 'dark' theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return [theme, toggleTheme];
};

export default useTheme;
