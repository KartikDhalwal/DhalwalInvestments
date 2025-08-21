import * as React from "react";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function Separator({ orientation = "horizontal", className, ...props }: SeparatorProps) {
  return orientation === "horizontal" ? (
    <div
      role="separator"
      className={`h-px w-full bg-gray-200 ${className || ""}`}
      {...props}
    />
  ) : (
    <div
      role="separator"
      className={`w-px h-full bg-gray-200 ${className || ""}`}
      {...props}
    />
  );
}
