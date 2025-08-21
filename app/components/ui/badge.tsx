import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary";
}

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  const base = "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium";
  const variants = {
    default: "bg-indigo-600 text-white",
    secondary: "bg-gray-100 text-gray-800"
  };
  return <div className={`${base} ${variants[variant]} ${className || ""}`} {...props} />;
}
