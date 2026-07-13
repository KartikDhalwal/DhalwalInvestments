"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  light = false,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  light?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px 200px 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 24, stiffness: 90 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return (
    <div ref={ref}>
      <div
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {prefix}
        {display}
        {suffix}
      </div>
      <div className={`mt-1 text-sm ${light ? "text-white/60" : "text-ink-muted"}`}>{label}</div>
    </div>
  );
}
