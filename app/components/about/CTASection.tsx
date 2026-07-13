"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { fadeUp, viewportOnce } from "@/app/lib/motion";

export default function CTASection() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 px-6">
      <motion.div
        className="absolute -top-1/2 left-1/2 h-160 w-160 -translate-x-1/2 rounded-full bg-navy-700/40 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-full bg-gold-500/10 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md md:flex-row md:justify-between md:text-left"
      >
        <div>
          <h4 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Let&apos;s plan your next step
          </h4>
          <p className="mt-2 text-white/60">Speak to a loan &amp; insurance specialist for a free assessment.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70 md:justify-start">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-400" /> +91-9828049021
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-400" /> Ajmer (Raj.), India
            </span>
          </div>
        </div>

        <button
          onClick={() => router.push("/consultation")}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-all hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl"
        >
          Book a free consultation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>
    </section>
  );
}
