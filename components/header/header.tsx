'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

import { useTheme } from '@/context/dark-mode-context';

import classes from './header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const routePath = usePathname();
  const routeName = routePath.replace('/', '');
  const route = routeName === '' ? 'home' : routeName.toLowerCase();

  const { theme } = useTheme();

  const linkClasses = (name: string) => {
    const isActive = route === name.toLowerCase();
    if (isActive) {
      return `${theme === 'dark' ? classes.navigationLinkDark : classes.navigationLink} ${classes.navigationLinkActive} ${classes.transition}`;
    }
    return `${theme === 'dark' ? classes.navigationLinkDark : classes.navigationLink} ${classes.transition}`;
  };

  useEffect(() => {
    scrollTo({ top: 0, behavior: 'smooth' });
  }, [routePath]);

  return (
    <header className={classes.header}>
      <motion.div
        className={`${theme === 'dark' ? classes.navigationBarDark : classes.navigationBar} transition-150`}
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 0.87,
        }}
      >
        <nav className={classes.nav}>
          <ul className={classes.navigationList}>
            {links.map(({ path, name }) => (
              <motion.li
                key={path}
                className={classes.navigationItem}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link href={path} className={linkClasses(name)}>
                  <span
                    className={
                      route === name.toLowerCase()
                        ? `${theme === 'dark' ? `${classes.navigationLinkLabelActiveDark} transition-250` : `${classes.navigationLinkLabelActive} ${classes.navigationLinkLabel} transition-250`} `
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
