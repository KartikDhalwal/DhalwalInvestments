import { motion } from "framer-motion";

export function FloatingBlob({
  color,
  top,
  left,
}: {
  color: string;
  top: string;
  left: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full opacity-30 blur-2xl"
      style={{ backgroundColor: color, width: 150, height: 150, top, left }}
      animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 6 }}
    />
  );
}
