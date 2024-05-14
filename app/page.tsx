import React from "react";
import Introduction from "@/components/introduction/introduction";
import SectionDivider from "@/components/section-divider/section-divider";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import Experience from "@/components/experience/experience";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <main>
      <Introduction />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
