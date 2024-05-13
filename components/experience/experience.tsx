"use client";

import SectionHeading from "@/components/section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import React, { FunctionComponentElement } from "react";
import { IconBaseProps } from "react-icons";
import ExperienceItem from "@/components/experience/experience-item";
import { useInViewActiveSection } from "@/hooks/hooks";

export type ExperienceItemType = {
  title: string;
  location: string;
  description: string;
  icon: FunctionComponentElement<IconBaseProps>;
  date: string;
};

export default function Experience() {
  const { ref } = useInViewActiveSection("Experience");
  return (
    <section id="experience" className="section-experience" ref={ref}>
      <SectionHeading title="My experience" />
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <ExperienceItem data={item} index={index} key={item.title} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
