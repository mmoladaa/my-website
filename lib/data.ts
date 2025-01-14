import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "../public/e-commerce.png";
import bankingImg from "../public/banking.png";
import modbikeImg from "../public/modbike.png";
import backendImg from "../public/backend.png";
import cosbaandeawgunImg from "../public/cosbaandeawgun.png";
import avatarImg from "../public/avatar.jpg";
import skooldioImg from "../public/skooldio.png";
import exxonImg from "../public/exxon.png";
import abuImg from "../public/abu.png";
import comcampImg from "../public/comcamp.png";
import inengImg from "../public/ineng.png";
import trueImg from "../public/true.png";
import botnoiImg from "../public/botnoi.png";
import caiImg from "../public/cai.png";
import posnImg from "../public/posn.png";
import mrcImg from "../public/mrc.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Activities",
    hash: "#activities",
  },
  {
    name: "Contact",
    hash: "#contact",
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
  "MongoDB",
  "Express",
  "MySQL",
  "Python",
  "C",
  "C++",
] as const;

export const projectsData = [
  {
    title: "CosBaanDeawGun: Cosplay Community Platform",
    description:
      "Created a cosplay marketplace as the final project in a software engineering course.",
    tags: ["TypeScript", "Next.js", "Ant Design", "TailwindCSS"],
    imageUrl: cosbaandeawgunImg,
    link: "https://github.com/ffaann02/cosplace-frontend",
  },
  {
    title: "E-commerce Clothing Website",
    description:
      "Built a responsive e-commerce site with catalog, cart, and authentication during Skooldio Bootcamp.",
    tags: ["ReactJS", "ViteJS", "TailwindCSS", "Vercel"],
    imageUrl: ecommerceImg,
    link: "https://github.com/PunMung-66/Fashion-Store-E-commerce",
  },
  {
    title: "Online Banking System",
    description:
      "Developed a banking UI with features like account overview and transfers for a database course project.",
    tags: ["ReactJS", "ViteJS", "TailwindCSS", "Vercel"],
    imageUrl: bankingImg,
    link: "https://github.com/kongkcypw/online-banking-frontend/tree/main",
  },
  {
    title: "ModBike: Bicycle Registration System",
    description:
      "Developed KMUTT’s bicycle registration and tracking system with GoogleAPI integration.",
    tags: ["Typescript", "ReactJS", "ChakraUI", "GoogleAPI", "Vercel"],
    imageUrl: modbikeImg,
    link: "https://github.com/mmoladaa/modbike-app",
  },
  {
    title: "Contact Management Backend",
    description:
      "Built a backend with JWT authentication, secure login, and CRUD operations for contacts.",
    tags: ["Express.js", "MongoDB", "Node.js"],
    imageUrl: backendImg,
    link: "https://github.com/mmoladaa/mycontacts-backend",
  },
] as const;

export const activitiesData = [
  {
    title: "Web Development Bootcamp by Skooldio",
    description:
      "Completed intensive front-end development training with hands-on project experience.",
    imageUrl: skooldioImg,
    date: "2024",
  },
  {
    title: "1st Runner-up in ExxonMobil Boothcathon 2024",
    description:
      "Developed a solution application for Mobil lubes' business growth challenge.",
    imageUrl: exxonImg,
    date: "2024",
  },
  {
    title: "Top 16 in Thailand ABU Robocon 2024",
    description:
      "Developing competitive robots for Thailand's representation in the Asia-Pacific Robot Contest.",
    imageUrl: abuImg,
    date: "2024",
  },
  {
    title: "3nd Runner-up in MRC Charity 2024",
    description:
      "Designed and programmed a 1 KG Open Sumo Robot for autonomous competition.",
    imageUrl: mrcImg,
    date: "2024",
  },
  {
    title: "iNENG Camp",
    description:
      "Organized Robotics education program for rural children to develop basic skills and creative thinking.",
    imageUrl: inengImg,
    date: "2021-2024",
  },
  {
    title: "TrueLAB Hackathon x Mordee",
    description:
      "Developed a prototype feature to enhance healthcare accessibility in Thai telemedicine applications.",
    imageUrl: trueImg,
    date: "2023",
  },
  {
    title: "BOTNOI OpenAI HackFest",
    description:
      "AI competition focused on enhancing Thai business competitiveness through technological innovation.",
    imageUrl: botnoiImg,
    date: "2023",
  },
  {
    title: "Comcamp34 Leader",
    description:
      "Led educational initiative guiding high school students about Computer Engineering studies at CPE KMUTT.",
    imageUrl: comcampImg,
    date: "2022",
  },
  {
    title: "CAI Club Hackathon 2022",
    description:
      "Organized Youth-focused AI hackathon competition with support from CP ALL and CAI Club.",
    imageUrl: caiImg,
    date: "2022",
  },

  {
    title: "Thailand Computer Olympiad Camp",
    description:
      "Competitive programming camp focusing on algorithms and data structures using C/C++.",
    imageUrl: posnImg,
    date: "2020-2021",
  },
] as const;
