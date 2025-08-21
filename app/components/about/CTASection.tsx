"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { FloatingBlob } from "../ui/floatingBlob";

export default function CTASection() {
  const router = useRouter();

  return (
    <section className="relative bg-blue-900 text-white py-20 px-6 overflow-hidden">
      <FloatingBlob color="#FFD700" top="10%" left="20%" />
      <FloatingBlob color="#004C97" top="60%" left="75%" />{" "}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100" />
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-8 rounded-2xl border border-blue-100 bg-white/70 p-8 backdrop-blur-md md:grid-cols-2 shadow-lg"
        >
          {/* Left Side */}
          <div>
            <h4 className="text-xl font-semibold tracking-tight text-blue-900">
              Let’s plan your next step
            </h4>
            <p className="mt-2 text-gray-700">
              Speak to a loan specialist for a free assessment.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-blue-700">
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91-9828049021
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Ajmer(Raj.), India
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-start md:justify-end">
            <Button
              onClick={() => router.push("/consultation")}
              className="rounded-2xl px-6 py-6 text-base bg-blue-600 hover:bg-blue-700 text-white shadow"
            >
              Book a free consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
