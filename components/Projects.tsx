"use client";

import React, { useEffect } from "react";
import SectionHeading from "./Section-Heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useInView } from "react-intersection-observer";
import { useActiveContext } from "@/context/active-section-context";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);
  return (
    <section id="projects" className="scroll-m-28" ref={ref}>
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

// type ProjectProps = (typeof projectsData)[number];
// function Project({ title, description, tags, imageUrl, url }: ProjectProps) {
//     const ref = useRef(null)
//   useScroll({
//     target: ref,
//     offset: ["0 1", "1.33 1"],
//   });
//   return (
//     <section className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 sm:even:pl-8 hover:bg-gray-200 transition">
//       <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
//         <Link href={url}>
//           <h3 className="text-2xl font-semibold cursor-pointer">{title}</h3>{" "}
//         </Link>
//         <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
//         <ul className="flex flex-wrap mt-2 gap-2 sm:mt-auto">
//           {tags.map((tag, index) => (
//             <li
//               className="bg-black/[0.7] px-2 py-1 uppercase text-white rounded-full text-[12px]"
//               key={index}
//             >
//               {tag}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Link href={url}>
//         <Image
//           src={imageUrl}
//           alt="Project I worked on"
//           quality={95}
//           className="absolute hidden sm:block top-[64px] -right-[194px] w-[32rem] rounded-lg shadow-2xl sm:group-even:right-[initial] sm:group-even:-left-48 sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2

//           sm:group-even:-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2

//           sm:group-hover:scale-[1.05] transition cursor-pointer"
//         />
//       </Link>
//     </section>
//   );
// }
