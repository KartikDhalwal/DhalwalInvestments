"use client";
import HeroSection from "./HeroSection";
import ValuesSection from "./ValuesSection";
import ServicesSection from "./ServicesSection";
import StorySection from "./StorySection";
import CTASection from "./CTASection";
import PartnersSection from "./partners";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ValuesSection />
      <PartnersSection/>
      <ServicesSection />
      <StorySection />
      <CTASection />
    </main>
  );
}
