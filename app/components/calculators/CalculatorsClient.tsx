"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { DonutChart } from "@/app/components/ui/DonutChart";
import { AnimatedNumber } from "@/app/components/ui/AnimatedNumber";
import { SliderField } from "@/app/components/ui/SliderField";
import { FAQAccordion } from "@/app/components/ui/FAQAccordion";
import { fadeUp } from "@/app/lib/motion";

const inr = (v: number) => `₹${Math.round(v).toLocaleString("en-IN")}`;

const CALC_FAQS = [
  {
    q: "How accurate is this EMI calculator?",
    a: "It uses the standard reducing-balance EMI formula that lenders use, so the number is mathematically accurate for the inputs given. Your actual offer may differ slightly based on the lender's exact rate, processing fee, and any insurance bundled into the loan.",
  },
  {
    q: "What is FOIR and why does it affect my eligibility?",
    a: "FOIR (Fixed Obligation to Income Ratio) is the percentage of your monthly income that goes toward EMIs and other fixed obligations. Most lenders cap this around 50–60% of net income — the eligibility calculator uses a conservative 50% to estimate what you can comfortably borrow.",
  },
  {
    q: "Why does a longer tenure lower my EMI but increase total interest?",
    a: "Spreading the same loan amount over more months reduces each individual payment, but you're paying interest for longer overall — so total interest paid over the loan's life goes up even though the monthly burden goes down.",
  },
];

function EMICalculator() {
  const router = useRouter();
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(180);

  const monthlyRate = rate / 1200;
  const emi =
    monthlyRate === 0
      ? amount / tenure
      : (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -tenure));
  const totalPayment = emi * tenure;
  const totalInterest = Math.max(totalPayment - amount, 0);

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="rounded-2xl border border-navy-900/8 bg-white p-7 shadow-sm lg:col-span-7"
      >
        <div className="space-y-8">
          <SliderField
            label="Loan Amount"
            value={amount}
            onChange={setAmount}
            min={100000}
            max={20000000}
            step={50000}
            format={inr}
          />
          <SliderField
            label="Interest Rate (p.a.)"
            value={rate}
            onChange={setRate}
            min={5}
            max={20}
            step={0.05}
            format={(v) => `${v.toFixed(2)}%`}
          />
          <SliderField
            label="Tenure"
            value={tenure}
            onChange={setTenure}
            min={6}
            max={360}
            step={1}
            format={(v) => (v % 12 === 0 ? `${v / 12} yr${v > 12 ? "s" : ""}` : `${v} mo`)}
          />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center rounded-2xl bg-navy-950 p-7 text-center shadow-lg lg:col-span-5"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Monthly EMI</p>
        <AnimatedNumber value={emi} format={inr} className="mt-1 text-4xl font-bold tracking-tight text-white" />

        <div className="relative mt-6 flex items-center justify-center">
          <DonutChart
            size={180}
            strokeWidth={20}
            segments={[
              { value: amount, color: "#e0be4e", label: "Principal" },
              { value: totalInterest, color: "#16305e", label: "Interest" },
            ]}
          />
          <div className="absolute flex flex-col items-center">
            <span className="text-lg font-semibold text-white">
              {Math.round((totalInterest / (totalPayment || 1)) * 100)}%
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/50">Interest</span>
          </div>
        </div>

        <div className="mt-6 w-full space-y-2 border-t border-white/10 pt-5 text-sm">
          <div className="flex items-center justify-between text-white/70">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold-400" /> Principal
            </span>
            <AnimatedNumber value={amount} format={inr} className="font-medium text-white" />
          </div>
          <div className="flex items-center justify-between text-white/70">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-navy-700" /> Total Interest
            </span>
            <AnimatedNumber value={totalInterest} format={inr} className="font-medium text-white" />
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-2 text-white/90">
            <span className="font-medium">Total Payment</span>
            <AnimatedNumber value={totalPayment} format={inr} className="font-semibold text-white" />
          </div>
        </div>

        <button
          onClick={() => router.push("/consultation")}
          className="mt-6 w-full rounded-full bg-gold-500 py-3 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400"
        >
          Get this loan
        </button>
      </motion.div>
    </div>
  );
}

function EligibilityCalculator() {
  const router = useRouter();
  const [income, setIncome] = useState(80000);
  const [existingEmi, setExistingEmi] = useState(5000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(240);

  const FOIR = 0.5;
  const availableEmi = Math.max(income * FOIR - existingEmi, 0);
  const monthlyRate = rate / 1200;
  const eligibleAmount =
    monthlyRate === 0
      ? availableEmi * tenure
      : (availableEmi * (1 - Math.pow(1 + monthlyRate, -tenure))) / monthlyRate;

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="rounded-2xl border border-navy-900/8 bg-white p-7 shadow-sm lg:col-span-7"
      >
        <div className="space-y-8">
          <SliderField
            label="Net Monthly Income"
            value={income}
            onChange={setIncome}
            min={15000}
            max={1000000}
            step={5000}
            format={inr}
          />
          <SliderField
            label="Existing Monthly EMIs"
            value={existingEmi}
            onChange={setExistingEmi}
            min={0}
            max={200000}
            step={1000}
            format={inr}
          />
          <SliderField
            label="Expected Interest Rate (p.a.)"
            value={rate}
            onChange={setRate}
            min={5}
            max={20}
            step={0.05}
            format={(v) => `${v.toFixed(2)}%`}
          />
          <SliderField
            label="Desired Tenure"
            value={tenure}
            onChange={setTenure}
            min={12}
            max={360}
            step={1}
            format={(v) => (v % 12 === 0 ? `${v / 12} yr${v > 12 ? "s" : ""}` : `${v} mo`)}
          />
        </div>
        <p className="mt-6 text-xs text-ink-muted">
          Estimate assumes lenders cap total EMI obligations at 50% of net monthly income (FOIR).
          Actual eligibility varies by lender policy, credit score, and other factors — this is a
          starting estimate, not a sanction.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center rounded-2xl bg-navy-950 p-7 text-center shadow-lg lg:col-span-5"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
          Estimated Eligible Loan Amount
        </p>
        <AnimatedNumber
          value={eligibleAmount}
          format={inr}
          className="mt-1 text-4xl font-bold tracking-tight text-white"
        />

        <div className="mt-8 w-full space-y-2 border-t border-white/10 pt-5 text-sm">
          <div className="flex items-center justify-between text-white/70">
            <span>Available monthly EMI capacity</span>
            <AnimatedNumber value={availableEmi} format={inr} className="font-medium text-white" />
          </div>
          <div className="flex items-center justify-between text-white/70">
            <span>Net monthly income</span>
            <AnimatedNumber value={income} format={inr} className="font-medium text-white" />
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-2 text-white/90">
            <span className="font-medium">Existing EMIs</span>
            <AnimatedNumber value={existingEmi} format={inr} className="font-semibold text-white" />
          </div>
        </div>

        <button
          onClick={() => router.push("/consultation")}
          className="mt-8 w-full rounded-full bg-gold-500 py-3 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400"
        >
          Get a precise eligibility check
        </button>
      </motion.div>
    </div>
  );
}

export function CalculatorsClient() {
  const [tab, setTab] = useState<"emi" | "eligibility">("emi");

  return (
    <div className="bg-white">
      <section className="relative bg-linear-to-b from-surface via-white to-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Plan ahead"
            title="Loan Calculators"
            subtitle="Move the sliders to see your numbers update instantly — no sign-up required."
            align="center"
          />

          <div className="mx-auto mb-8 flex w-fit rounded-full border border-navy-900/10 bg-white p-1 shadow-sm">
            <button
              onClick={() => setTab("emi")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                tab === "emi" ? "bg-navy-900 text-white" : "text-ink-muted hover:text-navy-900"
              }`}
            >
              EMI Calculator
            </button>
            <button
              onClick={() => setTab("eligibility")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                tab === "eligibility" ? "bg-navy-900 text-white" : "text-ink-muted hover:text-navy-900"
              }`}
            >
              Eligibility Calculator
            </button>
          </div>

          {tab === "emi" ? <EMICalculator /> : <EligibilityCalculator />}
        </div>
      </section>

      <section className="relative bg-surface px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Understanding the numbers" title="How EMI is calculated" align="center" />
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-navy-900/8 bg-white p-6 text-sm text-ink-muted shadow-sm">
              <p className="font-semibold text-navy-900">Principal</p>
              <p className="mt-2 leading-relaxed">The amount you actually borrow, before any interest is added.</p>
            </div>
            <div className="rounded-2xl border border-navy-900/8 bg-white p-6 text-sm text-ink-muted shadow-sm">
              <p className="font-semibold text-navy-900">Interest</p>
              <p className="mt-2 leading-relaxed">
                The lender's charge for the loan, calculated on the reducing balance each month.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-900/8 bg-white p-6 text-sm text-ink-muted shadow-sm">
              <p className="font-semibold text-navy-900">Tenure</p>
              <p className="mt-2 leading-relaxed">
                How long you take to repay — longer tenure means lower EMI but more total interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Calculator FAQs" align="center" />
          <FAQAccordion items={CALC_FAQS} />
        </div>
      </section>
    </div>
  );
}
