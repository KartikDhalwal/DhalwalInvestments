"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FloatingBlob } from "../ui/floatingBlob";

export default function StorySection() {
  return (
    <section className="relative bg-blue-50 py-20 px-6 overflow-hidden">
      <FloatingBlob color="#FFD700" top="25%" left="80%" />
      <FloatingBlob color="#004C97" top="65%" left="10%" />
            <div className="grid items-start gap-10 lg:grid-cols-12">
        {/* Story Text */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold tracking-tight text-blue-900 md:text-2xl">
            Our Story
          </h3>
          <p className="mt-3 text-gray-700">
            Dhalwal Investments & Finances was founded in <b>1995</b> on a simple belief: financial
            decisions should be made with clarity, not confusion. Over the years, we’ve
            guided hundreds of families and businesses to secure loans and property
            investments with transparency, trust, and tailored solutions.
          </p>
          <motion.img
            src="/story.jpg"
            alt="Our journey"
            className="mt-6 rounded-2xl shadow-md w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl border border-blue-100">
            <CardHeader>
              <CardTitle className="text-base text-blue-900">
                Why clients choose us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <ul className="list-inside list-disc space-y-2">
                <li>Multiple lender access</li>
                <li>Clear documentation</li>
                <li>Transparent guidance</li>
                <li>Dedicated support</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
