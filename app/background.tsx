'use client';

import React from 'react';
import { useTheme } from '@/context/dark-mode-context';
import classes from './background.module.css';

export default function Background() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`${theme === 'dark' ? classes.bgColorRightDark : classes.bgColorRightDark} transition-250`}
      ></div>
      <div
        className={`${theme === 'dark' ? classes.bgColorLeftDark : classes.bgColorLeft} transition-250`}
      ></div>
    </>
  );
}
