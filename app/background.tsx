"use client";

import React from "react";
import { useDarkMode } from "@/context/dark-mode-context";

export default function Background() {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <div className={`${isDarkMode ? "dark-bg-color-1" : "bg-color-1"}`}></div>
      <div className={`${isDarkMode ? "dark-bg-color-2" : "bg-color-2"}`}></div>
    </>
  );
}
