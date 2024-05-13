import { VerticalTimelineElement } from "react-vertical-timeline-component";
import React from "react";
import { ExperienceItemType } from "@/components/experience/experience"; // import { motion } from "framer-motion";

export default function ExperienceItem({
  data,
  index,
}: {
  data: ExperienceItemType;
  index: number;
}) {
  const { title, location, description, date, icon } = data;
  const color = ["#000", "#efd81d", "#66dbfb"];
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#f3f4f6",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid #9ca3af",
      }}
      date={date}
      icon={icon}
      iconStyle={{
        background: "#fff",
        fontSize: "1.5rem",
        color: color[index],
      }}
    >
      <h3 className="experience-item-title">{title}</h3>
      <p className="experience-item-location">{location}</p>
      <p className="experience-item-description">{description}</p>
    </VerticalTimelineElement>
  );
}
