"use client";
import HeroSection from "./HeroSection";
import ValuesSection from "./ValuesSection";
import ServicesSection from "./ServicesSection";
import StorySection from "./StorySection";
import CTASection from "./CTASection";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ValuesSection />
      <ServicesSection />
      <StorySection />
      <CTASection />
    </main>
  );
}
