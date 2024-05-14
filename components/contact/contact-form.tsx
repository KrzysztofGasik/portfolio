import React from "react";
import { sendMessage } from "@/server-actions/actions";
import SubmitButton from "@/components/contact/submit-button";
import toast from "react-hot-toast";
import { useTheme } from "@/context/dark-mode-context";
import classes from "./contact-form.module.css";

export default function ContactForm() {
  const { theme } = useTheme();
  return (
    <form
      className={`${theme === "dark" ? classes.contactFormDark : classes.contactForm}`}
      action={async (formData) => {
        const { responseData, error } = await sendMessage(formData);
        if (error) {
          toast.error(error);
          return;
        }
        toast.success("Email sent successfully");
      }}
    >
      <input
        type="email"
        className={`${theme === "dark" ? classes.contactFormEmailDark : classes.contactFormEmail} transition-150`}
        placeholder="Your email"
        required
        maxLength={100}
        name="email"
      />
      <textarea
        className={`${theme === "dark" ? classes.contactFormMessageDark : classes.contactFormMessage} transition-150`}
        placeholder="Your message"
        required
        maxLength={600}
        name="message"
      />
      <SubmitButton />
    </form>
  );
}
