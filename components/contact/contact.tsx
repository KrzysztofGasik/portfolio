"use client";

import SectionHeading from "@/components/section-heading";
import { useInViewActiveSection } from "@/hooks/hooks";
import ContactForm from "@/components/contact/contact-form";
import { motion } from "framer-motion";
import { useTheme } from "@/context/dark-mode-context";
import classes from "./contact.module.css";

export default function Contact() {
  const { ref } = useInViewActiveSection("Contact");
  const { theme } = useTheme();
  return (
    <motion.section
      id="contact"
      className={classes.contact}
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.25,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading title="Contact me" />
      <p
        className={`${theme === "dark" ? classes.contactInformationDark : classes.contactInformation}`}
      >
        Please contact me directly at{" "}
        <a
          href="mailto:kgasik@gmail.com"
          className={classes.contactInformationLink}
        >
          kgasik@gmail.com
        </a>{" "}
        or use below form.
      </p>

      <ContactForm />
    </motion.section>
  );
}
