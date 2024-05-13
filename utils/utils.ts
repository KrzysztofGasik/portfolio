export const getErrorMessage = (error: unknown): string => {
  let messageText = "";
  if (error instanceof Error) {
    messageText = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    messageText = String(error.message);
  } else if (typeof error === "string") {
    messageText = error;
  } else {
    messageText = "Something went wrong! Unknown error";
  }
  return messageText;
};
