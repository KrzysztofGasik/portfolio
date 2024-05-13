"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

type ActiveSection = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSection>({
  activeSection: "",
  setActiveSection: () => {},
  timeOfLastClick: 0,
  setTimeOfLastClick: () => {},
});

const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  const value = {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  };
  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider",
    );
  }
  return context;
}

export default ActiveSectionProvider;
