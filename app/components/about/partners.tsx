"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/app/lib/motion";

const logos = [
  "/bob.svg",
  "/sbi.svg",
  "/pnb.svg",
  "/icici.svg",
  "/lichfl.png",
  "/hdfc.svg",
  "/bom.svg",
  "/boi.svg",
];

export default function PartnersSection() {
  return (
    <section className="relative bg-white py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Our network" title="Partner banks & NBFCs" align="center" />

        {/* Web: all logos at once in a grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
          className="hidden md:grid md:grid-cols-4 md:gap-6"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group flex h-36 items-center justify-center rounded-2xl border border-navy-900/8 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-navy-900/10"
            >
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="h-full w-full object-contain grayscale transition duration-300 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile: scrolling marquee */}
      <div className="relative mx-auto max-w-7xl overflow-hidden md:hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-6 flex h-16 w-24 shrink-0 items-center justify-center grayscale transition duration-300 hover:grayscale-0"
            >
              <img src={logo} alt={`Partner logo ${index + 1}`} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
