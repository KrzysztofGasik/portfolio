"use client";

import { motion } from "framer-motion";
import { useDarkMode } from "@/context/dark-mode-context";

const fadeInAnimationOptions = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.075 * index,
    },
  }),
};

export default function Skill({
  name,
  index,
}: {
  name: string;
  index: number;
}) {
  const { isDarkMode } = useDarkMode();
  return (
    <motion.li
      className={`${isDarkMode === "yes" ? "dark-skill" : "skill"}`}
      variants={fadeInAnimationOptions}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      {name}
    </motion.li>
  );
}
