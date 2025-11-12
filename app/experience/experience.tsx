'use client';

import SectionHeading from '@/components/section-heading';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import React, { FunctionComponentElement } from 'react';
import { IconBaseProps } from 'react-icons';
import classes from './experience.module.css';
import ExperienceItem from './experience-item';
import { motion } from 'framer-motion';

export type ExperienceItemType = {
  title: string;
  location: string;
  description: string;
  icon: FunctionComponentElement<IconBaseProps>;
  date: string;
};

export default function Experience() {
  return (
    <motion.section
      className={classes.experience}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <SectionHeading title="My experience" />
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <ExperienceItem
            data={item}
            index={index}
            key={`${item.title}_${index}`}
          />
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
