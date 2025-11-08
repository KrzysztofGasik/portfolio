'use client';

import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';
import { useInViewActiveSection } from '@/hooks/hooks';
import classes from './about.module.css';

export default function About() {
  const { ref } = useInViewActiveSection('About');

  return (
    <motion.section
      className={classes.about}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      id="about"
      ref={ref}
    >
      <SectionHeading title="About" />
      <p className={classes.paragraph}>
        I’m a Frontend Engineer{' '}
        <span className="bold">with 5+ years of experience</span>, delivering
        React/TypeScript applications for telco and IoT. I specialize in
        building scalable apps with MUI design systems, real-time features
        (WebSockets), and monorepos (Turborepo). My workflow emphasizes strong
        testing (Jest, React Testing Library, Cypress) and CI/CD (Jenkins,
        Gerrit), with a focus on performance, reliability, and developer
        velocity
      </p>
      <p>
        My current stack includes{' '}
        <span className="underline">React with TypeScript</span> or{' '}
        <span className="underline">Next.js</span>, Redux, Zustand, RTK Query or
        React Query, and modern tooling like Vite and Turborepo.
      </p>
    </motion.section>
  );
}
