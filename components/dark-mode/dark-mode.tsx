"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "@/context/dark-mode-context";

export default function DarkMode() {
  const { isDarkMode, toggleTheme } = useDarkMode();
  return (
    <button
      className={`${isDarkMode ? "dark-mode-button transition" : "light-mode-button transition"}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <FaMoon className="dark-mode-icon transition" />
      ) : (
        <FaSun className="dark-mode-icon transition" />
      )}
    </button>
  );
}
