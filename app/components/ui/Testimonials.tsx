"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/app/lib/motion";

// NOTE: The quotes below are illustrative placeholder copy (generic first-name +
// initial, no fabricated identifying detail), meant to show the section's design.
// Replace with real, consent-cleared client quotes before this goes live.
const PLACEHOLDER_TESTIMONIALS = [
  {
    name: "Rajesh M.",
    context: "Home Loan, Ajmer",
    quote:
      "They compared rates across three banks for me and explained the paperwork in plain language. What could've taken weeks of running between branches took a few phone calls instead.",
  },
  {
    name: "Priya S.",
    context: "Personal Loan",
    quote:
      "I needed funds quickly for a family medical need. They were upfront about what I'd realistically qualify for, which saved me from wasting time on lenders that would've said no.",
  },
  {
    name: "Vikram & Anita K.",
    context: "Term Insurance",
    quote:
      "We'd been putting off buying life cover for years. They sat with us, worked out how much cover we actually needed, and didn't push the most expensive plan.",
  },
];

export function Testimonials({ light = false }: { light?: boolean }) {
  return (
    <section className={`relative py-20 px-6 ${light ? "bg-navy-950" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client feedback"
          title="What clients say"
          subtitle="A sample of the kind of feedback we aim for on every engagement."
          align="center"
          light={light}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid gap-6 md:grid-cols-3"
        >
          {PLACEHOLDER_TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                light
                  ? "border-white/10 bg-white/5 text-white"
                  : "border-navy-900/8 bg-white text-ink"
              }`}
            >
              <Quote className={`h-6 w-6 ${light ? "text-gold-400" : "text-gold-500"}`} />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <blockquote
                className={`mt-4 flex-1 text-sm leading-relaxed ${
                  light ? "text-white/80" : "text-ink-muted"
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t pt-4 text-sm">
                <span className={`font-semibold ${light ? "text-white" : "text-navy-900"}`}>
                  {t.name}
                </span>
                <span className={light ? "text-white/50" : "text-ink-muted"}> · {t.context}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
