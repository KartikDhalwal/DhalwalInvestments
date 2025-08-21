"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FloatingBlob } from "../ui/floatingBlob";

export default function HeroSection() {
  return (
    <section className="relative bg-blue-50 py-10 px-6 overflow-hidden -mb-20">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-yellow-50" /> */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <FloatingBlob color="#004C97" top="10%" left="5%" />
          <FloatingBlob color="#FFD700" top="40%" left="80%" />
          {/* <Badge className=" bg-yellow-100 text-blue-700 px-3 py-1 text-lg shadow">
            About Us
          </Badge> */}
          <h2 className="inline-block bg-blue-50 text-blue-700 text-3xl font-semibold w-full px-6 py-4 rounded-lg mb-8 border-l-4 border-blue-500">
        About Us
      </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
            We are a client-first financial services firm helping individuals
            and businesses access the right credit solutions— from{" "}
            <span className="font-medium text-blue-800">Home Loans</span> and{" "}
            <span className="font-medium text-blue-800">Mortgage Loans</span> to{" "}
            <span className="font-medium text-blue-800">Personal Loans</span>,{" "}
            <span className="font-medium text-blue-800">
              Loans Against Property
            </span>
            , and{" "}
            <span className="font-medium text-blue-800">Property Dealing</span>.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {[
              "Trusted Guidance",
              "Multiple Lending Partners",
              "Transparent & Compliant",
            ].map((txt) => (
              <Badge
                key={txt}
                variant="secondary"
                className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition"
              >
                {txt}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/landing1.jpg"
          alt="Financial consultation"
          className="w-full max-w-md rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>
    </section>
  );
}
