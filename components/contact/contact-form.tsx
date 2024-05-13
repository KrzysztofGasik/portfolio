import React from "react";
import { sendMessage } from "@/server-actions/actions";

import SubmitButton from "@/components/contact/submit-button";
import toast from "react-hot-toast";

export default function ContactForm() {
  return (
    <form
      className="contact-form"
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
        className="contact-form-email"
        placeholder="Your email"
        required
        maxLength={100}
        name="email"
      />
      <textarea
        className="contact-form-message"
        placeholder="Your message"
        required
        maxLength={600}
        name="message"
      />
      <SubmitButton />
    </form>
  );
}
