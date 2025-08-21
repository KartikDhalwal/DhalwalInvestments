'use client';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      className="border p-6 rounded-lg shadow hover:shadow-lg transition bg-white"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}
