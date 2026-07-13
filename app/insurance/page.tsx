"use client";

import { motion } from "framer-motion";
import { HeartPulse, Umbrella, ShieldPlus, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { SectionHeading } from "../components/ui/SectionHeading";
import { MeshBackdrop } from "../components/ui/MeshBackdrop";
import CTASection from "../components/about/CTASection";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/motion";

const plans = [
  {
    icon: Umbrella,
    title: "Life Insurance",
    desc: "Long-term financial security for your family, structured around your income and goals.",
    points: ["Whole-life & endowment options", "Maturity & bonus benefits", "Loan against policy value"],
  },
  {
    icon: ShieldPlus,
    title: "Term Insurance",
    desc: "High life cover at an affordable premium — pure protection for the people who depend on you.",
    points: ["Cover up to 1 Cr+", "Accidental death riders", "Flexible payout options"],
  },
  {
    icon: HeartPulse,
    title: "Health Insurance",
    desc: "Cashless treatment and hospitalization cover for you and your family, from trusted insurers.",
    points: ["Cashless network hospitals", "Family floater plans", "Pre & post hospitalization cover"],
  },
];

export default function InsurancePage() {
  const router = useRouter();

  return (
    <div className="bg-white">
      {/* Intro */}
      <section className="relative overflow-hidden bg-linear-to-b from-surface via-white to-white py-16 px-6 lg:py-20">
        <MeshBackdrop />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Insurance"
            title="Protection plans for every stage of life"
            subtitle="As a licensed insurance agent, we help you choose cover that actually fits your family, income, and future — not just the highest commission."
            align="center"
          />
        </div>
      </section>

      {/* Plans */}
      <section className="relative px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3"
        >
          {plans.map(({ icon: Icon, title, desc, points }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl border border-navy-900/8 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-navy-900/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900/5">
                <Icon className="h-5 w-5 text-navy-900" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p>
              <ul className="mt-5 space-y-2.5 border-t border-navy-900/8 pt-5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {p}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("/consultation")}
                className="mt-6 w-full rounded-full border border-navy-900/15 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:border-navy-900 hover:bg-navy-900 hover:text-white"
              >
                Talk to an advisor
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <CTASection />
    </div>
  );
}
