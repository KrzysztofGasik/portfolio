import React from "react";
import { sendMessage } from "@/server-actions/actions";

import SubmitButton from "@/components/contact/submit-button";
import toast from "react-hot-toast";
import {useTheme} from "@/context/dark-mode-context";

export default function ContactForm() {
    const {theme }= useTheme()
  return (
    <form
      className={`${theme === "dark" ? "dark-contact-form" : "contact-form"}`}
      action={async (formData) => {
        const {  error } = await sendMessage(formData);
        if (error) {
          toast.error(error);
          return;
        }
        toast.success("Email sent successfully");
      }}
    >
      <input
        type="email"
        className={`${theme === "dark" ? "dark-contact-form-email" : "contact-form-email"} transition`}
        placeholder="Your email"
        required
        maxLength={100}
        name="email"
      />
      <textarea
        className={`${theme === "dark" ? "dark-contact-form-message" : "contact-form-message"} transition`}
        placeholder="Your message"
        required
        maxLength={600}
        name="message"
      />
      <SubmitButton />
    </form>
  );
}
