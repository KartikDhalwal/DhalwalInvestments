import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import CTASection from "@/app/components/about/CTASection";
import { LOANS, LOAN_ICONS } from "@/app/lib/content/loans";

export const metadata: Metadata = {
  title: "Home, Personal & Mortgage Loans | Dhalwal Investments & Finances",
  description:
    "Compare home loans, personal loans, and loans against property (mortgage loans) across our partner banks and NBFCs. Free eligibility check, transparent guidance, Ajmer, Rajasthan.",
};

export default function LoansHubPage() {
  return (
    <div className="bg-white">
      <section className="relative bg-linear-to-b from-surface via-white to-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Loans"
            title="Financing built around your goals, not one lender's product list"
            subtitle="We work across multiple banks and NBFCs, so the loan you get is the one that actually fits your income, timeline, and purpose — not just the first offer you receive."
            align="center"
          />
        </div>
      </section>

      <section className="relative px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {LOANS.map((loan) => (
            <Link
              key={loan.slug}
              href={`/loans/${loan.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={loan.heroImage}
                  alt={loan.heroImageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
                <div className="absolute bottom-4 left-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90">
                  {(() => {
                    const Icon = LOAN_ICONS[loan.slug];
                    return <Icon className="h-5 w-5 text-navy-900" />;
                  })()}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-semibold text-navy-900">{loan.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{loan.summary}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-navy-900/8 pt-4 text-xs">
                  {loan.highlights.slice(0, 2).map((h) => (
                    <div key={h.label}>
                      <p className="text-ink-muted">{h.label}</p>
                      <p className="mt-0.5 font-semibold text-navy-900">{h.value}</p>
                    </div>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-900">
                  View details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
