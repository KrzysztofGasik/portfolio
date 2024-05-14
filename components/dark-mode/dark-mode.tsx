"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/context/dark-mode-context";
import classes from "./dark-mode.module.css";

export default function DarkMode() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={`${theme === "dark" ? classes.darkModeButton : classes.lightModeButton} transition-150`}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <FaMoon className={`${classes.icon} transition-250`} />
      ) : (
        <FaSun className={`${classes.icon} transition-250`} />
      )}
    </button>
  );
}
