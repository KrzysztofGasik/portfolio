"use client";

import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Project, { IProject } from "./project";
import { Fragment } from "react";
import { useInViewActiveSection } from "@/hooks/hooks";

export default function Projects() {
  const { ref } = useInViewActiveSection("Projects", 0.5);

  return (
    <section className="section-projects" id="projects" ref={ref}>
      <SectionHeading title="My Projects" />
      {projectsData.map((project: IProject) => (
        <Fragment key={project.title}>
          <Project data={project} />
        </Fragment>
      ))}
    </section>
  );
}
