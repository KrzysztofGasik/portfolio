"use client";

import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useInViewActiveSection } from "@/hooks/hooks";
import classes from "./about.module.css";

export default function About() {
  const { ref } = useInViewActiveSection("About");

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
        Skilled software development professional with{" "}
        <span className="bold">5 years in web development</span>. What are my
        current activities? Building next-gen applications using React and TypeScript.
        Unit and Integration tests done with{" "}
        <span className="italic">
          Jest and React Testing Library, E2E in cypress
        </span>
        . Collaborating with team members to produce better and cleaner code.
        Meetings with Software Architects and Designers.
      </p>
      <p>
        My current stack is{" "}
        <span className="underline">React with TypeScript</span> or <span className="underline">Next.js</span>, combined with
        GIT, Jenkins, Gerrit. Redux/Zustand for state management and RTK Query/Tanstack Query for api
        calls.
      </p>
    </motion.section>
  );
}
