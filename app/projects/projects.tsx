'use client';

import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import Project, { IProject } from './project';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import classes from './projects.module.css';

export default function Projects() {
  return (
    <>
      <SectionHeading title="My Projects" />
      <motion.section
        className={classes.Projects}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        {projectsData.map((project: IProject) => (
          <Fragment key={project.title}>
            <Project data={project} />
          </Fragment>
        ))}
      </motion.section>
    </>
  );
}
