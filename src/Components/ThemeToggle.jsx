import { LuMoon, LuSun } from "react-icons/lu";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // ✅ initialize immediately (no flicker)
    if (typeof window === "undefined") return false;

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // apply class on mount + when state changes
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    // ✅ listen to system theme changes
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const storedTheme = localStorage.getItem("theme");
      if (!storedTheme) {
        setIsDarkMode(e.matches);
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none",
      )}
    >
      {isDarkMode ? (
        <LuSun className="h-6 w-6 text-yellow-300" />
      ) : (
        <LuMoon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
