"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useActiveSection } from "@/lib/hooks";
import { useActiveContext } from "@/context/active-section-context";
const Intro = () => {
  const ref = useActiveSection("Home", 0.5);
  const { setActiveSection, setLastTimeClicked } = useActiveContext();
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-m-28"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            // animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            variants={{
              visible: { opacity: 1, scale: 1, y: 0 },
              hidden: { opacity: 0, scale: 0.5, y: 100 },
            }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
          >
            <Image
              src="/Photo.jpeg"
              width="192"
              height="192"
              quality="95"
              alt="Image"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial="hidden"
            whileInView="visible"
            // initial={{ opacity: 0, scale: 0 }}
            // animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            variants={{
              visible: { opacity: 1, scale: 1, y: 0 },
              hidden: { opacity: 0, scale: 0, y: 100 },
            }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        // initial={{ opacity: 0, y: 100 }}
        viewport={{ once: false }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
        }}
      >
        <span className="font-bold">Hello, I&apos;m Aditya,</span> a
        <span className="font-bold"> Front-End </span>enthusiast in React,
        Next.Js, TypeScript & Figma, I Design{" "}
        <span className="font-bold">captivating layouts</span> and{" "}
        <span> bring them to life</span>{" "}
        <span className="underline">with Code</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 text-lg font-medium"
        // initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        viewport={{ once: false }}
        transition={{
          delay: 0.2,
          duration: 0.3,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105 transition cursor-pointer"
          onClick={() => {
            setActiveSection("Contact");
            setLastTimeClicked(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-4 transition" />{" "}
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-x-4 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-raj-gupta-089393215/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition  borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/ImAdityaa12"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
