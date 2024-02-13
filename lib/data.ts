import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import genicraft from "@/public/Genicraft.png";
import CinemaVerse from "@/public/CinemaVerse.png";
import ShopIt from "@/public/ShopIt.png";
import MetaVersus from "@/public/MetaVersus.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "PrudentBit",
    location: "Greater Noida, Greater Noida",
    description:
      "As a Frontend developer at PrudentBit, I specialize in creating intuitive interfaces using Next.js, TypeScript, and Tailwind CSS. My expertise lies in translating Figma designs into dynamic and responsive websites, ensuring high-quality solutions aligned with client objectives and industry standards",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    title: "Bramhaand Inc.",
    location: "Greater Noida, India",
    description:
      "I bring hands-on experience from a 3-month Front-End Developer internship, where I upskilled in TypeScript and React, transforming Figma designs into fully functional websites with precision and creativity.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023",
  },
  {
    title: "Sharda University",
    location: "Greater Noida, India",
    description:
      "I am currently pursuing a B.Tech in Computer Science and Engineering, passionately delving into the realm of Frontend Technologies to complement my academic journey with practical skills and hands-on experience.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "GeniCraft",
    description:
      "GeniCraft: AI web app ensures secure logins (Clerk), coding support (OpenAI), and aids creative projects with music and videos (Replicate).",
    tags: ["Next.js", "Tailwind", "Open AI API", "Replicate API"],
    imageUrl: genicraft,
    url: "https://geni-craft.vercel.app",
  },
  {
    title: "CinemaVerse",
    description:
      "CinemaVerse: React, Redux Toolkit, TMDb API integration for a user-friendly interface, popular listings, detailed pages, reviews, and immersive movie-watching.",
    tags: ["React", "JavaScript", "TMDB API", "SASS", "Redux Toolkit"],
    imageUrl: CinemaVerse,
    url: "https://cinemaverseaditya.netlify.app/",
  },
  {
    title: "Shop It",
    description:
      "Shop It: React and Strapi ecommerce, seamless shopping, diverse products, detailed descriptions, Stripe integration for security, and an intuitive interface for efficiency.",
    tags: ["React", "JavaScript", "Strapi", "SASS"],
    imageUrl: ShopIt,
    url: "https://github.com/ImAdityaa12/Shop-It",
  },
  {
    title: "MetaVersus",
    description:
      "MetaVersus: Next.js 13 with Framer Motion and Tailwind CSS for stylish design, fluid animations, seamless transitions, and interactive elements for an engaging user experience.",
    tags: ["Next.Js", "JavaScript", "Framer Motion", "Tailwind CSS"],
    imageUrl: MetaVersus,
    url: "https://metaversus-aditya.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux Toolkit",
  "SASS",
  "Framer Motion",
  "After Effects",
  "Premiere Pro",
  "Figma",
  "Adobe Photoshop",
] as const;
