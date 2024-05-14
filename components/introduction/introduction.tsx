"use client";

import React from "react";
import IntroductionLinks from "@/components/introduction/introduction-links";
import IntroductionAvatar from "@/components/introduction/introduction-avatar";
import IntroductionText from "@/components/introduction/introduction-text";
import { useInViewActiveSection } from "@/hooks/hooks";
import classes from "./introduction.module.css";

export default function Introduction() {
  const { ref } = useInViewActiveSection("Home", 0.5);
  return (
    <section className={classes.introduction} id="home" ref={ref}>
      <IntroductionAvatar />
      <IntroductionText />
      <IntroductionLinks />
    </section>
  );
}
