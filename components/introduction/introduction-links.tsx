import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "@/context/dark-mode-context";

export default function IntroductionLinks() {
  const { theme } = useTheme();
  return (
    <motion.div
      className="links-wrapper"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
      }}
    >
      <Link href="#contact" className="contact-button transition">
        Contact me <BsArrowRight className="arrow-right-icon" />
      </Link>
      <a
        className={`${theme === "dark" ? "dark-download-cv-button" : "download-cv-button"} transition`}
        href="/cv.pdf"
        download
      >
        Download CV{" "}
        <HiDownload
          className={`${theme === "dark" ? "dark-download-cv-icon" : "download-cv-icon"}`}
        />
      </a>
      <a
        className={`${theme === "dark" ? "dark-linkedin-button" : "linkedin-button"} transition`}
        href="https://www.linkedin.com/in/krzysztof-gasik"
        target="_blank"
      >
        <BsLinkedin className="linkedin-icon" />
      </a>
      <a
        className={`${theme === "dark" ? "dark-github-button" : "github-button"} transition`}
        href="https://github.com/KrzysztofGasik/"
        target="_blank"
      >
        <FaGithubSquare className="github-icon" />
      </a>
    </motion.div>
  );
}
