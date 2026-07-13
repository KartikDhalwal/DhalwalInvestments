"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { fadeUp } from "@/app/lib/motion";

type FormState = { name: string; email: string; phone: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function GetConsultationPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address";
    if (form.phone.trim().length < 10) next.phone = "Enter a valid phone number";
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="bg-white">
      <section className="relative bg-linear-to-b from-surface via-white to-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Get in touch"
            title="Book a free consultation"
            subtitle="Connect with our loan & insurance specialists for a personalized, no-obligation discussion about your needs."
            align="center"
          />

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Form */}
            <motion.div initial="hidden" animate="show" variants={fadeUp} className="lg:col-span-7">
              <div className="rounded-2xl border border-navy-900/8 bg-white p-7 shadow-sm">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center py-10 text-center"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10">
                        <CheckCircle2 className="h-7 w-7 text-gold-500" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-navy-900">
                        Thanks, {form.name.split(" ")[0]}!
                      </h3>
                      <p className="mt-2 max-w-sm text-sm text-ink-muted">
                        We&apos;ve received your request. Our team will call you at {form.phone}{" "}
                        shortly to plan your next step.
                      </p>
                      <button
                        onClick={resetForm}
                        className="mt-6 rounded-full border border-navy-900/15 px-6 py-2.5 text-sm font-semibold text-navy-900 transition hover:border-navy-900/30"
                      >
                        Send another request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-4"
                    >
                      <h3 className="text-base font-semibold text-navy-900">Fill in your details</h3>

                      <div>
                        <Input
                          placeholder="Full Name"
                          value={form.name}
                          onChange={handleChange("name")}
                          className="border-navy-900/10 focus-visible:ring-gold-500/50"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                      </div>

                      <div>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          value={form.email}
                          onChange={handleChange("email")}
                          className="border-navy-900/10 focus-visible:ring-gold-500/50"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                      </div>

                      <div>
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={form.phone}
                          onChange={handleChange("phone")}
                          className="border-navy-900/10 focus-visible:ring-gold-500/50"
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                      </div>

                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange("message")}
                        className="border-navy-900/10 focus-visible:ring-gold-500/50"
                      />

                      <Button
                        type="submit"
                        className="w-full rounded-xl bg-navy-900 py-6 text-white hover:bg-navy-800"
                      >
                        Submit Request
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-navy-900/8 bg-navy-950 p-7 text-white">
                <h3 className="text-base font-semibold">Contact Information</h3>
                <div className="mt-5 space-y-4 text-sm text-white/70">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-gold-400" />
                    <span>+91-9828049021</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-gold-400" />
                    <span>sureshlic98@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-gold-400" />
                    <span>Ajmer (Raj.), India</span>
                  </div>
                </div>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/60">
                  Available Monday to Saturday, 10:00 AM – 6:00 PM. Prefer to talk now? Give us a
                  call directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
