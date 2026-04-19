"use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import { motion } from "framer-motion";
import { useActiveSection } from "@/lib/hooks";
const About = () => {
  const ref = useActiveSection("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-m-28"
      id="about"
      // initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ delay: 0.175, duration: 0.2 }}
      ref={ref}
    >
      <SectionHeading title="About Me" />
      <p className="mb-3">
        <span className="font-bold">Hey there, I&apos;m Aditya</span>, a{" "}
        <span className="font-bold">Full Stack Developer</span> with 2.5+ years
        of experience building production-grade web and mobile applications.
        I&apos;ve architected{" "}
        <span className="underline">multi-tenant SaaS platforms</span>, led
        engineering teams, and integrated AI APIs — working across{" "}
        <span className="font-medium">
          React, Next.js, Vue.js, Node.js, tRPC, and PostgreSQL
        </span>
        .
      </p>
      <p>
        Currently at{" "}
        <span className="font-bold">Edvanta Technologies</span>, I head a
        10-person team delivering shared codebases that power 17 client
        websites. I enjoy the full picture — from{" "}
        <span className="underline">system design and backend services</span> to
        polished, responsive UIs.{" "}
        <span className="font-medium">
          Let&apos;s build something extraordinary together!
        </span>
      </p>
    </motion.section>
  );
};

export default About;
