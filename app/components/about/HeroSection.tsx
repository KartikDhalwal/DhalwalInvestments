"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/app/lib/motion";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <SectionHeading eyebrow="About us" title="A client-first financial services firm" />
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            We help individuals and businesses access the right credit solutions — from{" "}
            <span className="font-medium text-navy-900">Home Loans</span> and{" "}
            <span className="font-medium text-navy-900">Mortgage Loans</span> to{" "}
            <span className="font-medium text-navy-900">Personal Loans</span>,{" "}
            <span className="font-medium text-navy-900">Loans Against Property</span>, and{" "}
            <span className="font-medium text-navy-900">Insurance</span>.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {["Trusted Guidance", "Multiple Lending Partners", "Transparent & Compliant"].map(
              (txt) => (
                <Badge
                  key={txt}
                  variant="secondary"
                  className="rounded-full border border-navy-900/10 bg-surface px-3 py-1 text-navy-900 transition hover:border-gold-500/40 hover:bg-gold-500/5"
                >
                  {txt}
                </Badge>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
