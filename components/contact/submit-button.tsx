import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { IoMdSend } from "react-icons/io";
import {useTheme} from "@/context/dark-mode-context";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  const {theme }= useTheme()
  return (
    <button
      type="submit"
      className={`${theme === "dark" ? "dark-contact-form-send-button" : "contact-form-send-button"} transition`}
      disabled={pending}
    >
      {pending ? (
        <div className="spinner" />
      ) : (
        <>
          Submit{" "}
          <IoMdSend className="contact-form-send-button-icon transition" />
        </>
      )}
    </button>
  );
}
