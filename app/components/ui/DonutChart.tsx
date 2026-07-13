"use client";

import { motion } from "framer-motion";

export function DonutChart({
  segments,
  size = 200,
  strokeWidth = 22,
}: {
  segments: { value: number; color: string; label: string }[];
  size?: number;
  strokeWidth?: number;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 1;

  let cumulativeOffset = 0;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--surface)"
        strokeWidth={strokeWidth}
      />
      {segments.map((seg) => {
        const fraction = seg.value / total;
        const dash = fraction * circumference;
        const offset = cumulativeOffset;
        cumulativeOffset += dash;
        return (
          <motion.circle
            key={seg.label}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={-offset}
            initial={false}
            animate={{ strokeDasharray: `${dash} ${circumference - dash}` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        );
      })}
    </svg>
  );
}
