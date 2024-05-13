"use client";

import SectionHeading from "@/components/section-heading";
import { skillsData } from "@/lib/data";
import Skill from "@/components/skills/skill";
import { useInViewActiveSection } from "@/hooks/hooks";

export default function Skills() {
  const { ref } = useInViewActiveSection("Skills");
  return (
    <section className="section-skills" id="skills" ref={ref}>
      <SectionHeading title="My skills" />
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <Skill name={skill} key={skill} index={index} />
        ))}
      </ul>
    </section>
  );
}
