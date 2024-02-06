"use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import { skillsData } from "@/lib/data";
import { useActiveSection } from "@/lib/hooks";
import { animate, motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
const Skills = () => {
  const ref = useActiveSection("Skills");
  return (
    <section
      id="skills"
      className="scroll-m-28 mb-28 max-w-[53rem] text-center sm:mb-40"
      ref={ref}
    >
      <SectionHeading title="My Skills" />
      <ul className="flex flex-wrap justify-center gap-2">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            // variants={fadeInAnimationVariants}
            variants={{
              visible: { scale: 1, y: 0 },
              hidden: { scale: 0, y: "200px" },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            // initial="inital"
            // animate="animate"
            // whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
