export function MeshBackdrop({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl ${
          variant === "dark" ? "bg-navy-700/40" : "bg-navy-900/[0.04]"
        }`}
      />
      <div
        className={`absolute -bottom-24 right-0 h-72 w-72 translate-x-1/4 rounded-full blur-3xl ${
          variant === "dark" ? "bg-gold-500/10" : "bg-gold-500/[0.08]"
        }`}
      />
    </div>
  );
}
