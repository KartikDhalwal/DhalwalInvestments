"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronRight, CheckCircle2, FileText } from "lucide-react";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { MeshBackdrop } from "@/app/components/ui/MeshBackdrop";
import { ProcessSteps } from "@/app/components/ui/ProcessSteps";
import { FAQAccordion } from "@/app/components/ui/FAQAccordion";
import { Testimonials } from "@/app/components/ui/Testimonials";
import CTASection from "@/app/components/about/CTASection";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/motion";
import type { LoanContent } from "@/app/lib/content/loans";

export function LoanDetailTemplate({ loan, allLoans }: { loan: LoanContent; allLoans: LoanContent[] }) {
  const router = useRouter();
  const otherLoans = allLoans.filter((l) => l.slug !== loan.slug);

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-navy-900/8 bg-surface/60 px-6 py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-1.5 text-xs text-ink-muted">
          <Link href="/" className="transition hover:text-navy-900">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/loans" className="transition hover:text-navy-900">
            Loans
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-navy-900">{loan.shortTitle}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-surface via-white to-white">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-900">
              {loan.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
              {loan.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
              {loan.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => router.push("/consultation")}
                className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-xl"
              >
                Check your eligibility
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => router.push("/calculators")}
                className="rounded-full border border-navy-900/15 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:border-navy-900/30 hover:bg-navy-900/3"
              >
                Estimate EMI
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative h-[240px] w-full overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20 sm:h-[340px] lg:h-[420px]"
          >
            <Image
              src={loan.heroImage}
              alt={loan.heroImageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy-950/50 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Highlights strip */}
        <div className="relative mx-auto max-w-7xl px-6 pb-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.08)}
            className="grid gap-4 rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4"
          >
            {loan.highlights.map((h) => (
              <motion.div key={h.label} variants={fadeUp} className="text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  {h.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-navy-900">{h.value}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-3 text-xs text-ink-muted">
            *Indicative terms — final interest rate, loan-to-value and fees depend on lender policy,
            credit profile, and loan amount at the time of application.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="relative bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-5">
          {loan.intro.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-ink-muted md:text-lg">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative bg-surface py-20 px-6">
        <MeshBackdrop />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading eyebrow="What's covered" title={`How we help with your ${loan.shortTitle.toLowerCase()}`} />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {loan.features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eligibility + Documents */}
      <section className="relative bg-white py-20 px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
            <SectionHeading eyebrow="Eligibility" title="Who typically qualifies" />
            <ul className="space-y-3">
              {loan.eligibility.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-ink-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
            <SectionHeading eyebrow="Paperwork" title="Documents you'll need" />
            <div className="space-y-5">
              {loan.documents.map((group) => (
                <div key={group.category} className="rounded-2xl border border-navy-900/8 bg-surface/60 p-5">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-navy-900" />
                    <h4 className="text-sm font-semibold text-navy-900">{group.category}</h4>
                  </div>
                  <ul className="mt-3 space-y-1.5 pl-6 text-sm text-ink-muted">
                    {group.items.map((item) => (
                      <li key={item} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-surface py-20 px-6">
        <MeshBackdrop />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading eyebrow="How it works" title="From first call to disbursal" align="center" />
          <ProcessSteps steps={loan.process} />
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions" title={`${loan.shortTitle} FAQs`} align="center" />
          <FAQAccordion items={loan.faqs} />
        </div>
      </section>

      <Testimonials />

      {/* Other loan types */}
      {otherLoans.length > 0 && (
        <section className="relative bg-surface py-20 px-6">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Explore more" title="Other financing options" />
            <div className="grid gap-6 sm:grid-cols-2">
              {otherLoans.map((l) => (
                <Link
                  key={l.slug}
                  href={`/loans/${l.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/10"
                >
                  <div>
                    <h3 className="text-base font-semibold text-navy-900">{l.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{l.summary}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-gold-500 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
