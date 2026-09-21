"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/app/lib/motion";

export function ProcessSteps({
  steps,
  light = false,
}: {
  steps: { title: string; desc: string }[];
  light?: boolean;
}) {
  return (
    <motion.ol
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(0.1)}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
    >
      {steps.map((step, i) => (
        <motion.li
          key={step.title}
          variants={fadeUp}
          className={`relative rounded-2xl border p-6 ${
            light ? "border-white/10 bg-white/5" : "border-navy-900/8 bg-white shadow-sm"
          }`}
        >
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
              light ? "bg-gold-400 text-navy-950" : "bg-navy-900 text-white"
            }`}
          >
            {i + 1}
          </span>
          <h3 className={`mt-4 text-sm font-semibold ${light ? "text-white" : "text-navy-900"}`}>
            {step.title}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${light ? "text-white/60" : "text-ink-muted"}`}>
            {step.desc}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
