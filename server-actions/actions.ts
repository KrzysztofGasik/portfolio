"use server";

import { Resend } from "resend";
import { getErrorMessage } from "@/utils/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendMessage = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const senderMessage = formData.get("message");

  if (!senderEmail || typeof senderEmail !== "string") {
    return {
      error: "Invalid sender email",
    };
  }

  if (!senderMessage || typeof senderMessage !== "string") {
    return {
      error: "Invalid sender message",
    };
  }

  let responseData;

  try {
    responseData = await resend.emails.send({
      from: "Contact from portfolio <onboarding@resend.dev>",
      to: "kgasik@gmail.com",
      subject: "message from portfolio contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: senderMessage as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (err) {
    getErrorMessage(err);
  }
  return { responseData };
};
