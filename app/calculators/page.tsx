"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SectionHeading } from "../components/ui/SectionHeading";
import { DonutChart } from "../components/ui/DonutChart";
import { AnimatedNumber } from "../components/ui/AnimatedNumber";
import { fadeUp } from "@/app/lib/motion";

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-navy-900">{label}</label>
        <span className="rounded-lg bg-surface px-3 py-1 text-sm font-semibold text-navy-900">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="mt-3 w-full accent-[#C9A227]"
      />
      <div className="mt-1 flex justify-between text-xs text-ink-muted">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

export default function CalculatorsPage() {
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

  const inr = (v: number) => `₹${Math.round(v).toLocaleString("en-IN")}`;

  return (
    <div className="bg-white">
      <section className="relative bg-linear-to-b from-surface via-white to-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Plan ahead"
            title="EMI Calculator"
            subtitle="Move the sliders to see your monthly EMI and interest breakdown update instantly."
            align="center"
          />

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Inputs */}
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
                  format={(v) =>
                    v % 12 === 0 ? `${v / 12} yr${v > 12 ? "s" : ""}` : `${v} mo`
                  }
                />
              </div>
            </motion.div>

            {/* Result */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center rounded-2xl bg-navy-950 p-7 text-center shadow-lg lg:col-span-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Monthly EMI
              </p>
              <AnimatedNumber
                value={emi}
                format={inr}
                className="mt-1 text-4xl font-bold tracking-tight text-white"
              />

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
                  <span className="text-[10px] uppercase tracking-wider text-white/50">
                    Interest
                  </span>
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
                  <AnimatedNumber
                    value={totalInterest}
                    format={inr}
                    className="font-medium text-white"
                  />
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-2 text-white/90">
                  <span className="font-medium">Total Payment</span>
                  <AnimatedNumber
                    value={totalPayment}
                    format={inr}
                    className="font-semibold text-white"
                  />
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
        </div>
      </section>
    </div>
  );
}
