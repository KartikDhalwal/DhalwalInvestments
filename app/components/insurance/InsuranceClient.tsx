"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartPulse, Umbrella, ShieldPlus, Check, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { MeshBackdrop } from "@/app/components/ui/MeshBackdrop";
import { ProcessSteps } from "@/app/components/ui/ProcessSteps";
import { FAQAccordion } from "@/app/components/ui/FAQAccordion";
import { Testimonials } from "@/app/components/ui/Testimonials";
import CTASection from "@/app/components/about/CTASection";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/motion";
import { IMAGES } from "@/app/lib/images";
import { FAQ_CATEGORIES } from "@/app/lib/content/faqs";

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

const WHY_IT_MATTERS = [
  {
    title: "Income replacement",
    desc: "If something happens to the primary earner, life cover replaces years of lost income so the family's plans don't derail.",
  },
  {
    title: "Debt protection",
    desc: "An outstanding home loan or business loan shouldn't become a burden on your family — term cover is sized to clear it.",
  },
  {
    title: "Medical cost inflation",
    desc: "Healthcare costs rise faster than general inflation; a single hospitalization can undo years of savings without health cover.",
  },
  {
    title: "Long-term goals",
    desc: "Life insurance with a savings component can be structured around milestones like children's education or retirement.",
  },
];

const INSURANCE_PROCESS = [
  {
    title: "Needs assessment",
    desc: "We calculate the cover you actually need based on income, dependents, and existing liabilities — not a generic multiple.",
  },
  {
    title: "Insurer comparison",
    desc: "We compare premium, claim settlement track record, and policy terms across trusted insurers.",
  },
  {
    title: "Application & medicals",
    desc: "We guide you through proposal forms and any medical tests required, minimizing back-and-forth.",
  },
  {
    title: "Policy issuance",
    desc: "Once approved, we review the final policy document with you so you understand exactly what's covered.",
  },
  {
    title: "Claims support",
    desc: "If you ever need to file a claim, we help you navigate the documentation and insurer follow-up.",
  },
];

export function InsuranceClient() {
  const router = useRouter();

  return (
    <div className="bg-white">
      {/* Intro */}
      <section className="relative overflow-hidden bg-linear-to-b from-surface via-white to-white">
        <MeshBackdrop />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
          <SectionHeading
            eyebrow="Insurance"
            title="Protection plans for every stage of life"
            subtitle="As a licensed insurance agent, we help you choose cover that actually fits your family, income, and future — not just the highest commission."
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative h-[220px] w-full overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20 sm:h-[320px]"
          >
            <Image
              src={IMAGES.familyDad}
              alt="Father with two children, representing family financial protection"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy-950/40 via-transparent to-transparent" />
          </motion.div>
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

      {/* Why it matters */}
      <section className="relative bg-surface py-20 px-6">
        <MeshBackdrop />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why it matters" title="What insurance is really protecting" />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {WHY_IT_MATTERS.map((w) => (
              <motion.div
                key={w.title}
                variants={fadeUp}
                className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-navy-900">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="How it works" title="From needs assessment to claim support" align="center" />
          <ProcessSteps steps={INSURANCE_PROCESS} />
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-surface py-20 px-6">
        <MeshBackdrop />
        <div className="relative mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Insurance FAQs" align="center" />
          <FAQAccordion items={FAQ_CATEGORIES.find((c) => c.category === "Insurance")?.items ?? []} />
        </div>
      </section>

      <Testimonials />

      {/* Related loans nudge */}
      <section className="relative bg-white px-6 pb-4 pt-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 rounded-2xl border border-navy-900/8 bg-surface/60 p-6">
          <p className="text-sm text-ink-muted">
            Also exploring a loan? We help with home, personal, and mortgage loans too.
          </p>
          <button
            onClick={() => router.push("/loans")}
            className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:border-navy-900 hover:bg-navy-900 hover:text-white"
          >
            Explore loans
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
