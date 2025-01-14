"use client";

import { useRef } from "react";
import { activitiesData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ActivityProps = (typeof activitiesData)[number];

export default function Activity({
  title,
  description,
  imageUrl,
  date,
}: ActivityProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group p-4 sm:p-8 w-full sm:w-[400px] h-full"
    >
      <section className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 h-full flex flex-col">
        {/* Frame effect with border */}
        <div className="p-3 bg-gray-100 dark:bg-gray-700 h-full flex flex-col">
          {/* Image container with fixed aspect ratio */}
          <div className="relative w-full pt-[75%] flex-shrink-0">
            <Image
              src={imageUrl}
              alt={`Activity - ${title}`}
              fill
              className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
              quality={95}
            />
          </div>

          {/* Content section - will expand to fill available space */}
          <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-md flex-grow flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {date}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm flex-grow">
              {description}
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
