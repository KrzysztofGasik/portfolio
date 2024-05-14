import { VerticalTimelineElement } from "react-vertical-timeline-component";
import React from "react";
import { ExperienceItemType } from "@/components/experience/experience";
import {useTheme} from "@/context/dark-mode-context"; // import { motion } from "framer-motion";

export default function ExperienceItem({
  data,
  index,
}: {
  data: ExperienceItemType;
  index: number;
}) {
  const { title, location, description, date, icon } = data;
  const color = ["#000", "#efd81d", "#66dbfb", "rgba(255,255,255, 0.7)"];
  const {theme} = useTheme();
  const firstIconColor = theme === "dark" ? color[color.length-1] : color[0];
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:  `${theme === "dark" ? "rgba(255,255,255, 0.05)": "#f3f4f6"}`,
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight:  `${theme === "dark" ? "0.4em solid rgba(255,255,255, 0.5)": "0.4rem solid #9ca3af"}`,
      }}
      date={date}
      icon={icon}
      iconStyle={{
        background: `${theme === "dark" ? "rgba(255,255,255, 0.15)": "#fff"}`,
        fontSize: "1.5rem",
        color: index === 0 ? firstIconColor: color[index],
      }}
    >
      <h3 className="experience-item-title">{title}</h3>
      <p className="experience-item-location">{location}</p>
      <p className={`${theme === "dark" ? "dark-experience-item-description" : "experience-item-description"}`}>{description}</p>
    </VerticalTimelineElement>
  );
}
