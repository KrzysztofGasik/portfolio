import React from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shareWithOthersImg from "@/public/share-with-others.jpg";
import tvPulsImg from "@/public/tvpuls.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Coders Lab",
    location: "Warsaw",
    description:
      "I graduated after 9 months of studying at Coders Lab to graduate as React Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2019",
  },
  {
    title: "Junior Developer",
    location: "Warsaw",
    description: "I worked as a junior developer for 18 months for TV Puls.",
    icon: React.createElement(RiJavascriptFill),
    date: "March 2020 - December 2021",
  },
  {
    title: "Frontend Developer",
    location: "Wroclaw",
    description:
      "I'm now a Frontend Developer working for Nokia Mobile Networks. My stack includes React, Next.js, TypeScript. Currently, I am open to full-time work, in full-time/hybrid mode in Warsaw or remotely.",
    icon: React.createElement(FaReact),
    date: "January 2022 - May 2024",
  },
];

export const projectsData = [
  {
    title: "Share with others",
    description:
      "New version of project Oddam Rzeczy. Rebuild from class to hooks, from scss to css modules, from local storage to firebase + redux toolkit.",
    tags: ["React", "Redux", "Firebase"],
    projectUrl: "https://share-with-others.web.app/",
    imageUrl: shareWithOthersImg,
  },
  {
    title: "New version of TV Puls website",
    description:
      "New version of website, custom theme using lazy loading, owl carousel, css grid and flexbox.",
    tags: ["JavaScript", "Css"],
    projectUrl: "https://tvpuls.pl",
    imageUrl: tvPulsImg,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Redux",
  "React Testing Library",
  "Cypress",
  "Framer Motion",
];
