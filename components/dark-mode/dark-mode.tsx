"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/context/dark-mode-context";

export default function DarkMode() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={`${theme === "dark" ? "dark-mode-button transition" : "light-mode-button transition"}`}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <FaMoon className="dark-mode-icon transition" />
      ) : (
        <FaSun className="dark-mode-icon transition" />
      )}
    </button>
  );
}
