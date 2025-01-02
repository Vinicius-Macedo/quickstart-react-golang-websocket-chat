import { useEffect, useState } from "react";

interface DarkThemeSwitchProps {}

export function DarkThemeSwitch(props: DarkThemeSwitchProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleTheme} className="fixed right-8 bottom-8">
        {isDarkMode ? (
          <span className="dark:text-white">Light Mode</span>
        ) : (
          <span>DarkMode</span>
        )}
      </button>
    </div>
  );
}
