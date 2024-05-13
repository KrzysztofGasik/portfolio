"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type DarkModeOptions = "yes" | "no";

type DarkMode = {
  isDarkMode: DarkModeOptions;
  toggleTheme: () => void;
};

export const DarkModeContext = createContext<DarkMode | null>(null);

const DarkModeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<DarkModeOptions>("no");

  const toggleTheme = () => {
    setIsDarkMode(isDarkMode === "yes" ? "no" : "yes");
    document.body.classList.toggle("body-dark-mode");
    window.localStorage.setItem("isDarkMode", isDarkMode);
  };

  useEffect(() => {
    const getDarkModeFromLocalStorage = window.localStorage.getItem(
      "isDarkMode",
    ) as DarkModeOptions | null;
    const windowMatches = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (getDarkModeFromLocalStorage) {
      console.log("getDarkModeFromLocalStorage", getDarkModeFromLocalStorage);
      setIsDarkMode(getDarkModeFromLocalStorage);
      window.localStorage.setItem("isDarkMode", getDarkModeFromLocalStorage);
      if (getDarkModeFromLocalStorage === "yes") {
        document.body.classList.add("body-dark-mode");
      }
    } else if (windowMatches && getDarkModeFromLocalStorage === null) {
      const switchToDark = windowMatches ? "yes" : "no";
      setIsDarkMode(switchToDark);
      window.localStorage.setItem("isDarkMode", switchToDark);
      if (switchToDark === "yes") {
        document.body.classList.add("body-dark-mode");
      }
    }
  }, []);

  const value = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === null) {
    throw new Error(
      "useDarkModeContext must be used within an DarkModeContextProvider",
    );
  }
  return context;
}

export default DarkModeContextProvider;
