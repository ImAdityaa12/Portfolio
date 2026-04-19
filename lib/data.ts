import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import genicraft from "@/public/Genicraft.png";
import CinemaVerse from "@/public/CinemaVerse.png";
import ShopIt from "@/public/ShopIt.png";
import MetaVersus from "@/public/MetaVersus.png";
import BuddyAI from "@/public/buddya-ai.png";
import NotJustAYoutubeClone from "@/public/youtube-project.png";
import Viewz from "@/public/viewz.png";
import { BsCode } from "react-icons/bs";

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
    title: "Edvanta Technologies",
    location: "Noida, India",
    description:
      "Associate Fullstack Developer leading a 10-person team on the Edge Delivery Services (EDS) project — powering 17 client websites including Oxford, Maryville, and Boundless Learning. Engineered a multi-tenant SaaS platform (LXS) with Next.js + tRPC admin panel, Directus CMS, and PostgreSQL. Built the company website on Nuxt.js and developed production apps using Vue.js and Express.js.",
    icon: React.createElement(BsCode),
    date: "September 2024 - Present",
  },
  {
    title: "PrudentBit",
    location: "Noida, India",
    description:
      "Frontend Engineer specializing in translating Figma designs into dynamic and responsive websites using Next.js, TypeScript, and Tailwind CSS. Delivered high-quality, visually appealing web solutions aligned with client objectives and industry standards.",
    icon: React.createElement(FaReact),
    date: "January 2024 - August 2024",
  },
  {
    title: "Sharda University",
    location: "Greater Noida, India",
    description:
      "Graduated with a B.Tech in Computer Science and Engineering (AI and ML) with a 8.1 CGPA. Built a strong foundation in algorithms, data structures, and machine learning while developing full-stack web and mobile applications throughout the program.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Not Just a YouTube Clone",
    description:
      "Full-stack YouTube-like platform with video streaming via Mux, subscriptions, playlists, comments, and AI-powered thumbnail & title generation.",
    tags: ["Next.js", "TypeScript", "tRPC", "Clerk", "Gemini", "Open AI"],
    imageUrl: NotJustAYoutubeClone,
    url: "https://not-just-a-youtube-clone.vercel.app/",
  },
  {
    title: "Buddy AI",
    description:
      "AI meeting platform with video calling, real-time chat via Stream APIs, and OpenAI-powered assistants for live support and meeting summaries.",
    tags: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Open AI", "Better Auth"],
    imageUrl: BuddyAI,
    url: "https://buddy-ai-eight.vercel.app/",
  },
  {
    title: "Viewz",
    description:
      "Mobile app to upload, like, search, and play videos with secure authentication and an intuitive UI.",
    tags: ["React Native", "Expo", "Appwrite", "TypeScript", "Tailwind CSS"],
    imageUrl: Viewz,
    url: "https://github.com/ImAdityaa12",
  },
  {
    title: "GeniCraft",
    description:
      "GeniCraft: AI web app ensures secure logins (Clerk), coding support (OpenAI), and aids creative projects with music and videos (Replicate).",
    tags: ["Next.js", "Tailwind", "Open AI", "Replicate", "Clerk"],
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
  "Vue.js",
  "Nuxt.js",
  "React Native",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "tRPC",
  "JWT",
  "Better Auth",
  "Drizzle ORM",
  "BullMQ",
  "Redis",
  "Appwrite",
  "PostgreSQL",
  "MongoDB",
  "SQL",
  "Prisma",
  "Zustand",
  "Pinia",
  "Redux Toolkit",
  "Git",
  "Vercel",
  "AWS",
  "Clerk",
  "Upstash",
  "Figma",
] as const;
