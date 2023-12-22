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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
