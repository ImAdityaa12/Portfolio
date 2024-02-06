"use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useActiveSection } from "@/lib/hooks";
import { useThemeContext } from "@/context/themeContext";
import { animate, motion } from "framer-motion";

const Experience = () => {
  const ref = useActiveSection("Experience", 0.4);
  const { theme } = useThemeContext();
  return (
    <motion.section
      id="experience"
      className="scroll-m-28 mb-28 sm:mb-40"
      ref={ref}
      variants={{
        visible: { scale: 1, y: 0, opacity: 1 },
        hidden: { scale: 0.8, y: "200px", opacity: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <SectionHeading title="My Experience" />
      <VerticalTimeline lineColor="" animate={true}>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              icon={experience.icon}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              date={experience.date}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
};

export default Experience;
