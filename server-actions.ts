"use server";
import { Resend } from "resend";
import { validateString } from "./lib/utils";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("SenderMessage");
  const senderEmail = formData.get("SenderEmail");
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "adityagupta1291@gmail.com",
      subject: "Mail From Portfolio Contact Section",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error) {
    console.log(error);
  }
};
