"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail } from "lucide-react";

export default function GetConsultationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-yellow-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-semibold tracking-tight text-blue-900 sm:text-4xl md:text-5xl">
              Book a Free Consultation
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-gray-700 md:text-lg">
              Connect with our loan specialists for a personalized, no-obligation discussion about your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-10 lg:grid-cols-12 mt-10">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-2xl border border-blue-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-blue-900">Fill in your details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Full Name" className="border-blue-100 focus:border-blue-300" />
                <Input type="email" placeholder="Email Address" className="border-blue-100 focus:border-blue-300" />
                <Input type="tel" placeholder="Phone Number" className="border-blue-100 focus:border-blue-300" />
                <Textarea placeholder="Your Message" className="border-blue-100 focus:border-blue-300" rows={4} />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6">
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-2xl border border-yellow-100 bg-yellow-50 mt-10">
              <CardHeader>
                <CardTitle className="text-blue-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+91-9828049021</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>sureshlic98@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Ajmer (Raj.), India</span>
                </div>
                {/* <p className="mt-4 text-sm">
                  Our team is available Monday to Saturday, 10:00 AM – 6:00 PM. Feel free to drop by or give us a call.
                </p> */}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
