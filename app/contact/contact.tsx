'use client';

import SectionHeading from '@/components/section-heading';
import ContactForm from './contact-form';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/dark-mode-context';
import classes from './contact.module.css';

export default function Contact() {
  const { theme } = useTheme();
  return (
    <motion.section
      className={classes.contact}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading title="Contact me" />
      <p
        className={`${theme === 'dark' ? classes.contactInformationDark : classes.contactInformation}`}
      >
        Please contact me directly at{' '}
        <a
          href="mailto:kgasik@gmail.com"
          className={classes.contactInformationLink}
        >
          kgasik@gmail.com
        </a>{' '}
        or use below form.
      </p>
      <ContactForm />
    </motion.section>
  );
}
