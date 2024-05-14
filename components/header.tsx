"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/dark-mode-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

    const { theme } = useTheme();

    const linkClasses = (name: string) => {
      if (activeSection === name) {
        return `${theme === "dark" ? "dark-navigation-link" : "navigation-link"} navigation-link-active transition`;
    }
      return `${theme === "dark" ? "dark-navigation-link" : "navigation-link"} transition`;

  };

  return (
    <header>
      <motion.div
        className={`${theme === "dark" ? "dark-navigation-bar" : "navigation-bar"}`}
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
                      ? `${theme === "dark" ? "dark-navigation-link-label-active" : "navigation-link-label-active"} navigation-link-label`
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
