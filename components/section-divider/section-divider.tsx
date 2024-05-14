"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/dark-mode-context";
import classes from "./section-divider.module.css";

export default function SectionDivider() {
  const { theme } = useTheme();
  return (
    <motion.div
      className={`${theme === "dark" ? classes.sectionDividerDark : classes.sectionDivider}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    ></motion.div>
  );
}
