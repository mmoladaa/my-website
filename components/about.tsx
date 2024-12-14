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
        A full-stack developer with a unique foundation in UI/UX design, I
        create web applications that seamlessly blend attractive interfaces with
        robust functionality. While my design background gives me an edge in
        frontend development, I'm passionate about expanding my backend skills
        to build high-performance solutions. I'm recognized for my ability to
        learn quickly, manage time effectively, and lead teams towards
        successful project completion. I thrive in collaborative environments
        where I can both contribute and grow alongside talented peers.
      </p>
    </motion.section>
  );
}
