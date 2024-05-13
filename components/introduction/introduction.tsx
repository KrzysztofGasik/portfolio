"use client";

import React from "react";
import IntroductionLinks from "@/components/introduction/introduction-links";
import IntroductionAvatar from "@/components/introduction/introduction-avatar";
import IntroductionText from "@/components/introduction/introduction-text";
import { useInViewActiveSection } from "@/hooks/hooks";

export default function Introduction() {
  const { ref } = useInViewActiveSection("Home", 0.5);
  return (
    <section className="section-introduction" id="home" ref={ref}>
      <IntroductionAvatar />
      <IntroductionText />
      <IntroductionLinks />
    </section>
  );
}
