"use client";

import React from "react";
import { useTheme } from "@/context/dark-mode-context";

export default function Background() {
  const { theme } = useTheme();
  return (
    <>
      <div className={`${theme === "dark" ? "dark-bg-color-1" : "bg-color-1"}`}></div>
      <div className={`${theme === "dark" ? "dark-bg-color-2" : "bg-color-2"}`}></div>
    </>
  );
}
