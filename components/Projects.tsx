"use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useActiveSection } from "@/lib/hooks";

const Projects = () => {
  const ref = useActiveSection("Projects", 0.4);
  return (
    <section id="projects" className="scroll-m-28 mb-28" ref={ref}>
      <SectionHeading title="My Projects" />
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
};
export default Projects;
