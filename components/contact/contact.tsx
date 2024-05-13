"use client";

import SectionHeading from "@/components/section-heading";
import { useInViewActiveSection } from "@/hooks/hooks";
import ContactForm from "@/components/contact/contact-form";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useInViewActiveSection("Contact");
  return (
    <motion.section
      id="contact"
      className="section-contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.25,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading title="Contact me" />
      <p className="contact-information">
        Please contact me directly at{" "}
        <a href="mailto:kgasik@gmail.com" className="contact-information-link">
          kgasik@gmail.com
        </a>{" "}
        or use below form.
      </p>

      <ContactForm />
    </motion.section>
  );
}
