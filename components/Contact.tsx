"use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import { useActiveSection } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/server-actions";

const Contact = () => {
  const ref = useActiveSection("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading title="Contact Me" />
      <p className="text-gray-700 text-center -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:adityagupta1291@gmail.com">
          adityagupta1291@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          type="email"
          name="SenderEmail"
          placeholder="Your Email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack px-4 py-2 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          placeholder="Your Message"
          name="SenderMessage"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] borderBlack flex items-center justify-center gap-2 text-white bg-gray-900 outline-none rounded-full transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10"
        >
          Submit{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70 transition-all" />{" "}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
