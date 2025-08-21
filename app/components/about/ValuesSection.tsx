"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Shield, UserRoundCheck, Building2, FileCheck2 } from "lucide-react";
import { FloatingBlob } from "../ui/floatingBlob";

const values = [
  {
    icon: Shield,
    title: "Client-First Advice",
    desc: "Recommendations based on eligibility, risk, and goals—not on single-lender bias.",
  },
  {
    icon: UserRoundCheck,
    title: "End-to-End Help",
    desc: "From pre-assessment and documentation to sanction, disbursal, and post-disbursal support.",
  },
  {
    icon: Building2,
    title: "Lender Network",
    desc: "Access to multiple banks and NBFCs so you get competitive rates and flexible terms.",
  },
  {
    icon: FileCheck2,
    title: "Clean Documentation",
    desc: "Clear checklists, accurate paperwork, and compliant processing for a smoother journey.",
  },
];

export default function ValuesSection() {
  return (
    <section className="relative bg-blue-50 py-10 px-10 overflow-hidden -mb-10">
      <FloatingBlob color="#FFD700" top="30%" left="10%" />
      <FloatingBlob color="#004C97" top="70%" left="85%" />{" "}
      <h2 className="inline-block bg-blue-50 text-blue-700 text-3xl font-semibold w-full px-6 py-4 rounded-lg mb-8 border-l-4 border-blue-500">
        Our Values
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="rounded-2xl border p-2 bg-yellow-50">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-base md:text-lg text-blue-900">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-gray-700">
                {desc}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
