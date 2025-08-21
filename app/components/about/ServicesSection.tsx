"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Home, Landmark, HandCoins, FileCheck2, Building2 } from "lucide-react";
import { FloatingBlob } from "../ui/floatingBlob";

const services = [
  {
    icon: Home,
    title: "Home Loans",
    points: [
      "New purchase, balance transfer & top-up",
      "Pre-assessment to improve approval odds",
      "Rate comparison across lenders",
    ],
    img: "/services/home-loan.jpg",
  },
  {
    icon: Landmark,
    title: "Mortgage Loans",
    points: [
      "Loan against residential/commercial property",
      "Flexible tenure with competitive interest",
      "Cash-flow aligned EMI planning",
    ],
    img: "/services/mortgage.jpg",
  },
  {
    icon: HandCoins,
    title: "Personal Loans",
    points: [
      "Unsecured funding for personal needs",
      "Quick screening and documentation",
      "Minimal disruption to your routine",
    ],
    img: "/services/personal-loan.jpg",
  },
  {
    icon: FileCheck2,
    title: "Loans Against Property",
    points: [
      "Structured against owned property value",
      "End-to-end support till disbursal",
      "Options for salaried & self-employed",
    ],
    img: "/services/loan-against.jpg",
  },
  {
    icon: Building2,
    title: "Property Dealing",
    points: [
      "Buy, sell, or invest with due diligence",
      "Title and documentation guidance",
      "Home loan tie-ins for faster closure",
    ],
    img: "/services/property.jpg",
  },
];

export default function ServicesSection() {
  return (
 <section className="relative bg-blue-50 py-20 px-6 overflow-hidden">
      <FloatingBlob color="#004C97" top="20%" left="75%" />
      <FloatingBlob color="#FFD700" top="60%" left="15%" />
            <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex items-end justify-between"
      >
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-blue-900 md:text-3xl">
            What we do
          </h2>
          <p className="mt-2 max-w-3xl text-gray-700">
            Tailored credit solutions and property advisory under one roof.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, points, img }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="rounded-2xl border border-yellow-100 hover:shadow-md transition overflow-hidden">
              <img src={img} alt={title} className="h-40 w-full object-cover" />
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="rounded-2xl border p-2 bg-blue-50">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-base md:text-lg text-blue-900">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                  {points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
