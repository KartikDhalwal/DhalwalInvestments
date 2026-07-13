"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck } from "lucide-react";
import AboutPage from "./components/about/aboutSection";
import { StatCounter } from "./components/ui/StatCounter";
import { fadeUp } from "./lib/motion";

const HERO_STATS = [
  { value: 30, suffix: "+", label: "Years of trusted service" },
  { value: 8, suffix: "+", label: "Partner banks & NBFCs" },
  { value: 100, suffix: "%", label: "Transparent & compliant" },
];

export default function Home() {
  const router = useRouter();

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-surface via-white to-white">
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-navy-900/5 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-10 lg:flex-row lg:gap-12 lg:py-24">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-900">
              <ShieldCheck className="h-3.5 w-3.5 text-gold-500" />
              Since 1995 &middot; Ajmer, Rajasthan
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
              All your financial needs,{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">solved under one roof</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-gold-400/40" />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
              Loans, mortgages, and insurance guided by advisors who put your interests first —
              not a single lender&apos;s. Clear advice, competitive rates, and support from
              application to disbursal.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => router.push("/consultation")}
                className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-xl"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => router.push("/calculators")}
                className="rounded-full border border-navy-900/15 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:border-navy-900/30 hover:bg-navy-900/3"
              >
                Calculate your EMI
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-navy-900/10 pt-8">
              {HERO_STATS.map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative w-full flex-1"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20">
              <img
                src="/landing1.jpg"
                alt="Financial consultation"
                className="h-[220px] w-full object-cover sm:h-[380px] lg:h-[480px]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/50 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-navy-900/5 bg-white p-4 shadow-xl sm:block"
            >
              <p className="text-xs font-medium text-ink-muted">Loans facilitated across</p>
              <p className="text-lg font-semibold text-navy-900">8 major banks &amp; NBFCs</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <AboutPage />
    </>
  );
}
