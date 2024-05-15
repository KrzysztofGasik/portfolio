"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useInViewActiveSection(
  sectionName: string,
  thresholdValue = 0.75,
) {
  const { ref, inView } = useInView({
    threshold: thresholdValue,
  });
  const { setActiveSection, timeOfLastClick, setTimeOfLastClick } =
    useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return { ref, inView };
}
