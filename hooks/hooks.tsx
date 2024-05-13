"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useInViewActiveSection(
  sectionName: string,
  thresholdValue = 0.75,
) {
  const { ref, inView } = useInView({
    threshold: thresholdValue,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return { ref, inView };
}

// export function useTheme() {
//   const [theme, setTheme] = useState<DarkMode>(() => {
//     const themeInLocalStorage = localStorage.getItem("theme");
//     if (themeInLocalStorage) {
//       return themeInLocalStorage as DarkMode;
//     } else {
//       const preferredTheme = window.matchMedia(
//         "(prefers-color-scheme: dark)",
//       ).matches;
//       const preferredThemeColor = preferredTheme ? "dark" : "light";
//       window.localStorage.setItem("theme", preferredThemeColor);
//       return preferredThemeColor;
//     }
//   });
//   const toggleTheme = () => {
//     const currentTheme = theme === "light" ? "dark" : "light";
//     setTheme(currentTheme);
//     window.localStorage.setItem("theme", currentTheme);
//   };
//
//   return { theme, toggleTheme };
// }
