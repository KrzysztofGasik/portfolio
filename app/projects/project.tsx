'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { TbWorldWww, TbBrandGithub } from 'react-icons/tb';
import { useTheme } from '@/context/dark-mode-context';
import classes from './project.module.css';

export interface IProject {
  title: string;
  description: string;
  tags: string[];
  projectUrl: string;
  imageUrl: StaticImageData;
  repoUrl?: string;
}

export default function Project({ data }: { data: IProject }) {
  const { title, description, projectUrl, repoUrl, tags, imageUrl } = data;
  const { theme } = useTheme();
  return (
    <div className={classes.projectWrapper}>
      <section
        className={`${theme === 'dark' ? classes.projectDark : classes.project} transition-150`}
      >
        <div className={classes.projectText}>
          <h3 className={classes.projectTitle}>{title}</h3>
          <p
            className={`${theme === 'dark' ? classes.projectDescriptionDark : classes.projectDescription}`}
          >
            {description}
          </p>
          <div className={`${classes.projectDetails} transition-150`}>
            <a
              href={projectUrl}
              className={classes.projectLink}
              target="_blank"
            >
              Link to {title.toLowerCase()}
            </a>
            <p>
              <TbWorldWww className={`${classes.projectWwwIcon} transition`} />
            </p>
          </div>
          <div className={`${classes.projectDetails} transition-150`}>
            <a href={repoUrl} className={classes.repoLink} target="_blank">
              GH repository
            </a>
            <p>
              <TbBrandGithub
                className={`${classes.projectGhIcon} transition`}
              />
            </p>
          </div>
          <ul className={classes.projectTags}>
            {tags.map((tag) => (
              <li
                key={tag}
                className={`${theme === 'dark' ? classes.projectTagDark : classes.projectTag}`}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className={`${classes.projectImage} transition-150`}
        />
      </section>
    </div>
  );
}
