import { motion } from "framer-motion";
import React from "react";

export default function IntroductionText() {
  return (
    <motion.h1
      className="introduction-text"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="bold">Hi, {`I'm`} Krzysztof.</span> {`I'm `}
      <span className="bold">frontend developer</span> with{" "}
      <span className="bold">4 years</span> of experience. I enjoy creating{" "}
      <span className="italic">websites and apps</span> with{" "}
      <span className="underline">React and Next.js</span>.
    </motion.h1>
  );
}
