import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { FAQAccordion } from "@/app/components/ui/FAQAccordion";
import CTASection from "@/app/components/about/CTASection";
import { FAQ_CATEGORIES } from "@/app/lib/content/faqs";
import { IMAGES } from "@/app/lib/images";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Dhalwal Investments & Finances",
  description:
    "Answers to common questions about loans, insurance, fees, timelines, and how Dhalwal Investments & Finances works with clients in Ajmer, Rajasthan.",
};

export default function FAQPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-b from-surface via-white to-white">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <SectionHeading
              eyebrow="Support"
              title="Frequently asked questions"
              subtitle="Straight answers about how we work, what things cost, and what to expect at every stage — loans, insurance, and everything in between."
            />
          </div>
          <div className="relative h-[200px] w-full overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20 sm:h-[280px]">
            <Image
              src={IMAGES.supportHeadset}
              alt="Customer support headset and laptop on a desk"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative bg-white px-6 pb-20">
        <div className="mx-auto max-w-4xl space-y-14">
          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h2 className="mb-5 text-lg font-semibold text-navy-900">{cat.category}</h2>
              <FAQAccordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
