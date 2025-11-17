import pollenAlertImg from '@/public/pollen-alert.png';
import shareWithOthersImg from '@/public/share-with-others.jpg';
import tshopImg from '@/public/t-shop.jpg';
import tvPulsImg from '@/public/tvpuls.jpg';
import chatRoomImg from '@/public/chat_room.png';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { RiJavascriptFill } from 'react-icons/ri';

export const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Skills',
    path: '/skills',
  },
  {
    name: 'Experience',
    path: '/experience',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Frontend Developer',
    location: 'Cracow (remotely)',
    description:
      'I worked as Frontend Developer for Grenton. Developing and maintaining React 18 + TypeScript apps in a Turborepo monorepo, building a shared MUI design system and real-time features for IoT device management.',
    icon: React.createElement(FaReact),
    date: 'June 2025 - October 2025',
  },
  {
    title: 'Frontend Developer',
    location: 'Wroclaw (remotely)',
    description:
      'I worked as Frontend Developer as external contractor in DK&A for Nokia Mobile Networks. Delivered new React features and optimized performance in a large-scale codebase, collaborating with UX and improving API reliability for responsive, accessible interfaces.',
    icon: React.createElement(FaReact),
    date: 'August 2024 - May 2025',
  },
  {
    title: 'Frontend Developer',
    location: 'Wroclaw (remotely)',
    description:
      'I worked as Frontend Developer for Nokia Mobile Networks. Refactored legacy components to React + TypeScript, expanded automated testing, and streamlined CI/CD pipelines to boost release confidence and developer efficiency.',
    icon: React.createElement(FaReact),
    date: 'January 2022 - June 2024',
  },
  {
    title: 'Junior Developer',
    location: 'Warsaw (hybrid)',
    description:
      'I worked as a Junior Developer for 18 months for TV Puls. Implemented responsive, mobile-first pages and standardized frontend components, supporting marketing teams and improving content update workflows.',
    icon: React.createElement(RiJavascriptFill),
    date: 'March 2020 - December 2021',
  },
  {
    title: 'Coders Lab',
    location: 'Warsaw',
    description:
      'After 9 months of intensive course at Coders Lab I completed it as React Developer',
    icon: React.createElement(LuGraduationCap),
    date: 'June 2019',
  },
];

export const projectsData = [
  {
    title: 'Chat Room',
    description:
      'Real-time chat application with room-based messaging, user authentication, and live presence indicators. Features include typing indicators, online status, responsive design for mobile and desktop, and secure JWT authentication.',
    tags: [
      'React',
      'TypeScript',
      'Nest.js',
      'Prisma',
      'PostgresSql',
      'Socket.io',
      'MUI',
      'React Query',
    ],
    projectUrl: 'https://dcjsltdj06ol7.cloudfront.net',
    repoUrl: 'https://github.com/KrzysztofGasik/chat-room',
    imageUrl: chatRoomImg,
  },
  {
    title: 'T-shop',
    description: 'E-commerce shop with cool metal t-shirts',
    tags: ['Next.js', 'TypeScript', 'React', 'MongoDB', 'Prisma'],
    projectUrl: 'https://t-shop-ecommerce.vercel.app',
    repoUrl: 'https://github.com/KrzysztofGasik/t-shop',
    imageUrl: tshopImg,
  },
  {
    title: 'Share with others',
    description:
      'New version of project Oddam Rzeczy. Rebuild from class to hooks, from scss to css modules, from local storage to firebase + redux toolkit.',
    tags: ['React', 'JavaScript', 'Redux', 'Firebase'],
    projectUrl: 'https://share-with-others.web.app',
    repoUrl: 'https://github.com/KrzysztofGasik/share-with-others',
    imageUrl: shareWithOthersImg,
  },
  {
    title: 'Pollen Alert',
    description:
      'New version of project. Implement with React Router and TypeScript with css modules and framer motion for animation.',
    tags: [
      'React',
      'TypeScript',
      'React Router',
      'CSS Modules',
      'Framer Motion',
    ],
    projectUrl: 'https://pollen-alert.vercel.app',
    repoUrl: 'https://github.com/KrzysztofGasik/pollen-alert',
    imageUrl: pollenAlertImg,
  },
  {
    title: 'New version of TV Puls website',
    description:
      'New version of website, custom theme using lazy loading, owl carousel, css grid and flexbox.',
    tags: ['JavaScript', 'CSS'],
    projectUrl: 'https://tvpuls.pl',
    imageUrl: tvPulsImg,
  },
];

export const skillsData = [
  { name: 'React', type: 'library' },
  { name: 'TypeScript', type: 'language' },
  { name: 'JavaScript', type: 'language' },
  { name: 'Next.js', type: 'library' },
  { name: 'Nest.js', type: 'library' },
  { name: 'Redux', type: 'library' },
  { name: 'Zustand', type: 'library' },
  { name: 'React Query', type: 'library' },
  { name: 'RTK Query', type: 'library' },
  { name: 'MUI', type: 'library' },
  { name: 'Node.js', type: 'library' },
  { name: 'React Testing Library', type: 'testing' },
  { name: 'Cypress', type: 'testing' },
  { name: 'Framer Motion', type: 'library' },
  { name: 'Robot Framework', type: 'testing' },
  { name: 'Turborepo', type: 'tooling' },
  { name: 'Vite', type: 'tooling' },
  { name: 'ESLint', type: 'tooling' },
  { name: 'Git', type: 'tooling' },
  { name: 'Jenkins', type: 'tooling' },
  { name: 'Gerrit', type: 'tooling' },
  { name: 'Responsive Web Design (RWD)', type: 'z_other' },
  { name: 'Linux', type: 'z_other' },
  { name: 'Jira', type: 'z_other' },
  { name: 'Confluence', type: 'z_other' },
];
