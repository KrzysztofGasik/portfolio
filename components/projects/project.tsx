"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { TbWorldWww } from "react-icons/tb";
import { useTheme } from "@/context/dark-mode-context";

export interface IProject {
  title: string;
  description: string;
  tags: string[];
  projectUrl: string;
  imageUrl: StaticImageData;
}

export default function Project({ data }: { data: IProject }) {
  const { title, description, projectUrl, tags, imageUrl } = data;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const { theme } = useTheme();
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="project-wrapper"
    >
      <section
        className={`${theme === "dark" ? "dark-project" : "project"} transition`}
      >
        <div className="project-left-side">
          <h3 className="project-title">{title}</h3>
          <p
            className={`${theme === "dark" ? "dark-project-description" : "project-description"}`}
          >
            {description}
          </p>
          <div className="project-details transition">
            <a href={projectUrl} className="project-link" target="_blank">
              Link to {title.toLowerCase()}
            </a>
            <TbWorldWww className="project-www-icon transition" />
          </div>
          <ul className="project-tags">
            {tags.map((tag) => (
              <li key={tag} className="project-tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="project-image transition"
        />
      </section>
    </motion.div>
  );
}
