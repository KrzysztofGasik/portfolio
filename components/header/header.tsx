"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/dark-mode-context";

import classes from "./header.module.css";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const { theme } = useTheme();

  const linkClasses = (name: string) => {
    if (activeSection === name) {
      return `${theme === "dark" ? classes.navigationLinkDark : classes.navigationLink} ${classes.navigationLinkActive} ${classes.transition}`;
    }
    return `${theme === "dark" ? classes.navigationLinkDark : classes.navigationLink} ${classes.transition}`;
  };

  return (
    <header className={classes.header}>
      <motion.div
        className={`${theme === "dark" ? classes.navigationBarDark : classes.navigationBar} transition-150`}
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 0.87,
        }}
      >
        <nav className={classes.nav}>
          <ul className={classes.navigationList}>
            {links.map(({ hash, name }) => (
              <motion.li
                key={hash}
                className={classes.navigationItem}
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
                        ? `${theme === "dark" ? `${classes.navigationLinkLabelActiveDark} transition-250` : `${classes.navigationLinkLabelActive} ${classes.navigationLinkLabel} transition-250`} `
                        : `${classes.navigationLinkLabel} transition-250`
                    }
                  >
                    {name}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
