"use client";

import { motion } from "framer-motion";
import { Home, Landmark, HandCoins, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/app/lib/motion";

const services = [
  {
    icon: Home,
    title: "Home Loans",
    points: [
      "New purchase, balance transfer & top-up",
      "Pre-assessment to improve approval odds",
      "Rate comparison across lenders",
    ],
    img: "/homeLoan.png",
  },
  {
    icon: Landmark,
    title: "Mortgage Loans",
    points: [
      "Loan against residential/commercial property",
      "Flexible tenure with competitive interest",
      "Cash-flow aligned EMI planning",
    ],
    img: "/mortgageLoans.png",
  },
  {
    icon: HandCoins,
    title: "Personal Loans",
    points: [
      "Unsecured funding for personal needs",
      "Quick screening and documentation",
      "Minimal disruption to your routine",
    ],
    img: "/personalLoans.png",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    points: [
      "Life, term & health cover from trusted insurers",
      "Cover matched to your income & dependents",
      "Support at claim time, not just at sign-up",
    ],
    img: "/landing1.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we do"
          title="Tailored credit & insurance solutions"
          subtitle="Everything under one roof, backed by a network of lending and insurance partners."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map(({ icon: Icon, title, points, img }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-navy-900/10"
            >
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90">
                    <Icon className="h-4 w-4 text-navy-900" />
                  </div>
                  <span className="text-sm font-semibold text-white">{title}</span>
                </div>
              </div>

              <ul className="space-y-1.5 p-5 text-sm text-ink-muted">
                {points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
