import pollenAlertImg from "@/public/pollen-alert.png";
import shareWithOthersImg from "@/public/share-with-others.jpg";
import tshopImg from "@/public/t-shop.jpg";
import tvPulsImg from "@/public/tvpuls.jpg";
import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiJavascriptFill } from "react-icons/ri";

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
      "After 9 months of intensive course at Coders Lab I completed it as React Developer",
    icon: React.createElement(LuGraduationCap),
    date: "June 2019",
  },
  {
    title: "Junior Developer",
    location: "Warsaw",
    description: "I worked as a Junior Developer for 18 months for TV Puls.",
    icon: React.createElement(RiJavascriptFill),
    date: "March 2020 - December 2021",
  },
  {
    title: 'Frontend Developer',
    location: 'Wroclaw',
    description: 'I worked as Frontend Developer for Nokia Mobile Networks.',
    icon: React.createElement(FaReact),
    date: 'January 2022 - June 2024',
  },
  {
    title: "Frontend Developer",
    location: "Wroclaw",
    description:
      "I worked as Frontend Developer as external contractor in DK&A for Nokia Mobile Networks.",
    icon: React.createElement(FaReact),
    date: "August 2024 - May 2025",
  },
  {
    title: "Frontend Developer",
    location: "Cracow",
    description:
      "I worked as Frontend Developer for Grenton. My stack includes React, Next.js, TypeScript. Currently, I am open to full-time work, in full-time/hybrid mode in Warsaw or remotely.",
    icon: React.createElement(FaReact),
    date: "June 2025 - present",
  },
];

export const projectsData = [
  {
    title: "T-shop",
    description: "E-commerce shop with cool metal t-shirts",
    tags: ["Next.js", "TypeScript", "React", "MongoDB", "Prisma"],
    projectUrl: "https://t-shop-ecommerce.vercel.app/",
    imageUrl: tshopImg,
  },
  {
    title: "Share with others",
    description:
      "New version of project Oddam Rzeczy. Rebuild from class to hooks, from scss to css modules, from local storage to firebase + redux toolkit.",
    tags: ["React", "JavaScript", "Redux", "Firebase"],
    projectUrl: "https://share-with-others.web.app/",
    imageUrl: shareWithOthersImg,
  },
  {
    title: "Pollen Alert",
    description:
      "New version of project. Implement with React Router and TypeScript with css modules and framer motion for animation.",
    tags: [
      "React",
      "TypeScript",
      "React Router",
      "CSS Modules",
      "Framer Motion",
    ],
    projectUrl: "https://pollen-alert.vercel.app/",
    imageUrl: pollenAlertImg,
  },
  {
    title: "New version of TV Puls website",
    description:
      "New version of website, custom theme using lazy loading, owl carousel, css grid and flexbox.",
    tags: ["JavaScript", "CSS"],
    projectUrl: "https://tvpuls.pl",
    imageUrl: tvPulsImg,
  },
];

export const skillsData = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Redux",
  "Zustand",
  "Tanstack Query",
  "RTK Query",
  "HTML",
  "CSS",
  "Git",
  "Node.js",
  "React Testing Library",
  "Cypress",
  "Framer Motion",
  "Jira",
  "Robot Framework",
];
