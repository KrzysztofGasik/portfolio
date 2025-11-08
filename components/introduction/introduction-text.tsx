import { motion } from 'framer-motion';
import React from 'react';
import classes from './introduction-text.module.css';
import '../../app/globals.css';

export default function IntroductionText() {
  return (
    <motion.h1
      className={classes.introductionText}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="bold">
        Hi, {`I'm`} Krzysztof, {` `}
      </span>
      <span className="bold">Frontend Engineer</span> with{' '}
      <span className="bold">5+ years</span> of experience building React and
      TypeScript applications{' '}
      <span className="italic">
        specializing in modern, high-performance web solutions.
      </span>
    </motion.h1>
  );
}
