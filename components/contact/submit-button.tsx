import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { IoMdSend } from "react-icons/io";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="contact-form-send-button transition"
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
