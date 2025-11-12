'use client';

import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';
import { useTheme } from '@/context/dark-mode-context';
import classes from './introduction-links.module.css';

export default function IntroductionLinks() {
  const { theme } = useTheme();
  return (
    <motion.div
      className={classes.linksWrapper}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
      }}
    >
      <Link
        href="/contact"
        className={`${classes.contactButton} transition-150`}
      >
        Contact me <BsArrowRight className={classes.arrowRightIcon} />
      </Link>
      <a
        className={`${theme === 'dark' ? classes.downloadCvButtonDark : classes.downloadCvButton} transition-150`}
        href="/cv.pdf"
        download
      >
        Download CV <HiDownload className={classes.downloadCvIcon} />
      </a>
      <a
        className={`${theme === 'dark' ? classes.linkedinButtonDark : classes.linkedinButton} transition-150`}
        href="https://www.linkedin.com/in/krzysztof-gasik"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin className={classes.linkedinIcon} />
      </a>
      <a
        className={`${theme === 'dark' ? classes.githubButtonDark : classes.githubButton} transition-150`}
        href="https://github.com/KrzysztofGasik/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare className={classes.githubIcon} />
      </a>
    </motion.div>
  );
}
