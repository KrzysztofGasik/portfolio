"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/dark-mode-context";
import classes from "./skill.module.css";

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
  const { theme } = useTheme();
  return (
    <motion.li
      className={`${theme === "dark" ? classes.skillDark : classes.skill}`}
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
