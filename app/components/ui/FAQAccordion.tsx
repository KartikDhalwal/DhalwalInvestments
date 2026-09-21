"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQAccordion({
  items,
  light = false,
}: {
  items: { q: string; a: string }[];
  light?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      className={`divide-y rounded-2xl border ${
        light ? "divide-white/10 border-white/10 bg-white/5" : "divide-navy-900/8 border-navy-900/8 bg-white"
      }`}
    >
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors sm:px-6 sm:py-5 sm:text-base ${
                light ? "text-white" : "text-navy-900"
              }`}
            >
              <span>{item.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                } ${light ? "text-gold-400" : "text-gold-500"}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p
                    className={`px-5 pb-5 text-sm leading-relaxed sm:px-6 ${
                      light ? "text-white/70" : "text-ink-muted"
                    }`}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
