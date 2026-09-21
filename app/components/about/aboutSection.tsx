"use client";
import HeroSection from "./HeroSection";
import ValuesSection from "./ValuesSection";
import ServicesSection from "./ServicesSection";
import StorySection from "./StorySection";
import CTASection from "./CTASection";
import PartnersSection from "./partners";
import { SectionHeading } from "../ui/SectionHeading";
import { ProcessSteps } from "../ui/ProcessSteps";
import { Testimonials } from "../ui/Testimonials";

const HOW_IT_WORKS = [
  {
    title: "Free consultation",
    desc: "A no-obligation call to understand your goals, timeline, and what you're likely eligible for.",
  },
  {
    title: "Compare across partners",
    desc: "We shortlist the banks, NBFCs, or insurers whose policy genuinely fits your profile.",
  },
  {
    title: "Documentation support",
    desc: "Clear checklists and review before submission, so lenders come back with fewer queries.",
  },
  {
    title: "Approval & disbursal",
    desc: "We track your file through sanction, offer review, and final disbursal or policy issuance.",
  },
  {
    title: "After-care",
    desc: "We stay your point of contact for servicing questions long after the paperwork is done.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ValuesSection />
      <PartnersSection/>
      <ServicesSection />

      <section className="relative bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How it works"
            title="A clear, five-step process"
            subtitle="No jargon, no guesswork — here's exactly what happens after you reach out."
            align="center"
          />
          <ProcessSteps steps={HOW_IT_WORKS} />
        </div>
      </section>

      <StorySection />
      <Testimonials light />
      <CTASection />
    </main>
  );
}
