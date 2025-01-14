"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a third-year student with a keen interest in Full-stack development
        and foundational knowledge in UI/UX design gained through classroom
        projects and self-study, I create web applications that combine
        user-friendly interfaces with functionality. While my coursework has
        given me experience in frontend development, I am actively expanding my
        backend skills to build efficient applications. Known for being a quick
        learner, managing time effectively, and collaborating well with others,
        I am seeking an internship opportunity to develop my Full-stack
        development skills in a real-world environment.
      </p>
    </motion.section>
  );
}
