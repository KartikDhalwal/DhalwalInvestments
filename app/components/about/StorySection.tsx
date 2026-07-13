"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { MeshBackdrop } from "../ui/MeshBackdrop";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/motion";

const reasons = [
  "Multiple lender access",
  "Clear documentation",
  "Transparent guidance",
  "Dedicated support",
];

export default function StorySection() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 px-6">
      <MeshBackdrop />
      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-12">
        {/* Story Text */}
        <motion.div
          className="lg:col-span-7"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <SectionHeading eyebrow="Our story" title="Three decades of trusted guidance" />

          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                1995
              </span>
              <span className="mt-2 w-px flex-1 bg-navy-900/15" />
            </div>
            <p className="pb-2 text-base leading-relaxed text-ink-muted">
              Dhalwal Investments &amp; Finances was founded on a simple belief: financial
              decisions should be made with clarity, not confusion. Over the years, we&apos;ve
              guided hundreds of families and businesses to secure loans, insurance, and property
              investments with transparency, trust, and tailored solutions.
            </p>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="lg:col-span-5"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-navy-900">Why clients choose us</h3>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer(0.08)}
              className="mt-4 space-y-3"
            >
              {reasons.map((reason) => (
                <motion.li
                  key={reason}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-sm text-ink-muted"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-500" />
                  {reason}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
