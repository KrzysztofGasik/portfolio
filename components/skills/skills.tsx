"use client";

import SectionHeading from "@/components/section-heading";
import { skillsData } from "@/lib/data";
import Skill from "@/components/skills/skill";
import { useInViewActiveSection } from "@/hooks/hooks";
import classes from "./skills.module.css";

export default function Skills() {
  const { ref } = useInViewActiveSection("Skills");
  return (
    <section className={classes.skills} id="skills" ref={ref}>
      <SectionHeading title="My skills" />
      <ul className={classes.skillsList}>
        {skillsData.map((skill, index) => (
          <Skill name={skill} key={skill} index={index} />
        ))}
      </ul>
    </section>
  );
}
