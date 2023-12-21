"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
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
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
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
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Aditya,</span> a
        <span className="font-bold"> Front-End </span>enthusiast in React,
        Next.Js, TypeScript & Figma, I Design{" "}
        <span className="font-bold">captivating layouts</span> and{" "}
        <span> bring them to life</span>{" "}
        <span className="underline">with Code</span>.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105 transition cursor-pointer"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-4 transition" />{" "}
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-x-4 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-raj-gupta-089393215/"
          className="bg-white p-4 text-gray-700 flex items-center rounded-full focus:scale-[115] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/ImAdityaa12"
          className="bg-white p-4 text-gray-700 flex items-center rounded-full focus:scale-[115] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
