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
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
    >
      <SectionHeading title="About Me" />
      <p className="mb-3">
        <span className="font-bold">Hey there, I&apos;m Aditya</span>, a
        passionate <span className="font-bold">Front-End developer</span> with a
        flair for crafting immersive digital experiences. My journey into the
        world of web <span>development</span> began with a fascination for
        blending <span className="underline">creativity with technology</span>.
        Proficient in{" "}
        <span className="font-medium">React, Next.js, and TypeScript </span>,
        <span className="font-medium">I love</span> transforming design visions
        into{" "}
        <span className="underline">interactive and responsive websites</span>.
      </p>
      <p>
        Beyond coding, I&apos;m an avid user of{" "}
        <span className="font-bold">Figma</span>, translating ideas into
        captivating visual layouts. With a keen eye for detail and a commitment
        to staying at the forefront of technology, I&apos;m on a mission to
        bring innovation and{" "}
        <span className="underline">seamless functionality</span> to the digital
        landscape.{" "}
        <span className="font-medium">
          Let&apos;s build something extraordinary together!
        </span>
      </p>
    </motion.section>
  );
};

export default About;
