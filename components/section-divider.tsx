"use client";

import { motion } from "framer-motion";
import { useDarkMode } from "@/context/dark-mode-context";

export default function SectionDivider() {
  const { isDarkMode } = useDarkMode();
  return (
    <motion.div
      className={`${isDarkMode ? "dark-section-divider" : "section-divider"}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    ></motion.div>
  );
}
