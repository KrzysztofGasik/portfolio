import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { IoMdSend } from "react-icons/io";
import { useTheme } from "@/context/dark-mode-context";
import classes from "./submit-button.module.css";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  const { theme } = useTheme();
  return (
    <button
      type="submit"
      className={`${theme === "dark" ? classes.buttonDark : classes.button} transition-150`}
      disabled={pending}
    >
      {pending ? (
        <div className="spinner" />
      ) : (
        <>
          Submit <IoMdSend className={`${classes.buttonIcon} transition-150`} />
        </>
      )}
    </button>
  );
}
