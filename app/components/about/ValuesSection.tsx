"use client";

import { motion } from "framer-motion";
import { Shield, UserRoundCheck, Building2, FileCheck2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { MeshBackdrop } from "../ui/MeshBackdrop";
import { staggerContainer, fadeUp, viewportOnce } from "@/app/lib/motion";

const values = [
  {
    icon: Shield,
    title: "Client-First Advice",
    desc: "Recommendations based on eligibility, risk, and goals — not on single-lender bias.",
  },
  {
    icon: UserRoundCheck,
    title: "End-to-End Help",
    desc: "From pre-assessment and documentation to sanction, disbursal, and post-disbursal support.",
  },
  {
    icon: Building2,
    title: "Lender Network",
    desc: "Access to multiple banks and NBFCs so you get competitive rates and flexible terms.",
  },
  {
    icon: FileCheck2,
    title: "Clean Documentation",
    desc: "Clear checklists, accurate paperwork, and compliant processing for a smoother journey.",
  },
];

export default function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 px-6">
      <MeshBackdrop />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why us" title="Our values" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-navy-900/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900/5 transition-colors duration-300 group-hover:bg-gold-500/15">
                <Icon className="h-5 w-5 text-navy-900 transition-colors duration-300 group-hover:text-gold-500" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
