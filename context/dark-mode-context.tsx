"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeOptions = "light" | "dark";

type Theme = {
  theme: ThemeOptions;
  toggleTheme: () => void;
};

export const DarkModeContext = createContext<Theme | null>(null);

const DarkModeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeOptions>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("body-dark-mode");
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const getThemeFromLocalstorage = window.localStorage.getItem(
      "theme",
    ) as ThemeOptions | null;
    const windowMatches = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (!!getThemeFromLocalstorage) {
      setTheme(getThemeFromLocalstorage);
      window.localStorage.setItem("theme", getThemeFromLocalstorage);
      if (getThemeFromLocalstorage === "dark") {
        document.body.classList.add("body-dark-mode");
      }
    } else if (windowMatches && getThemeFromLocalstorage === null) {
      const switchToDark = windowMatches ? "dark" : "light";
      setTheme(switchToDark);
      window.localStorage.setItem("theme", switchToDark);
      if (switchToDark === "dark") {
        document.body.classList.add("body-dark-mode");
      }
    }
  }, []);

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(DarkModeContext);
  if (context === null) {
    throw new Error(
      "useDarkModeContext must be used within an DarkModeContextProvider",
    );
  }
  return context;
}

export default DarkModeContextProvider;
