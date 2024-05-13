"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useDarkMode } from "@/context/dark-mode-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const linkClasses = (name: string) => {
    if (activeSection === name) {
      return `${isDarkMode ? "dark-navigation-link" : "navigation-link"} navigation-link-active transition`;
    }
    return `${isDarkMode ? "dark-navigation-link" : "navigation-link"} transition`;
  };

  const { isDarkMode } = useDarkMode();

  return (
    <header>
      <motion.div
        className={`${isDarkMode ? "dark-navigation-bar" : "navigation-bar"}`}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{
          y: 0,
          x: "-50%",
          opacity: 0.75,
        }}
      ></motion.div>
      <nav>
        <ul className="navigation-list">
          {links.map(({ hash, name }) => (
            <motion.li
              key={hash}
              className="navigation-item"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={hash}
                className={linkClasses(name)}
                onClick={() => {
                  setActiveSection(name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span
                  className={
                    activeSection === name
                      ? `${isDarkMode ? "dark-navigation-link-label-active" : "navigation-link-label-active"} navigation-link-label`
                      : "navigation-link-label"
                  }
                >
                  {name}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
