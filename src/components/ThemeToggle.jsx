import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Importing the icons

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-800">
      {theme === "dark" ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
    </button>
  );
};

export default ThemeToggle;
