"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function AnimatedNumber({
  value,
  format = (v: number) => Math.round(v).toLocaleString("en-IN"),
  className,
}: {
  value: number;
  format?: (v: number) => string;
  className?: string;
}) {
  const motionValue = useMotionValue(value);
  const spring = useSpring(motionValue, { damping: 26, stiffness: 120 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [spring]);

  return <span className={className}>{format(display)}</span>;
}
