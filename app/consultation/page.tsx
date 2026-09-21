import type { Metadata } from "next";
import { ConsultationClient } from "@/app/components/consultation/ConsultationClient";

export const metadata: Metadata = {
  title: "Book a Free Consultation | Dhalwal Investments & Finances",
  description:
    "Speak with a loan and insurance specialist in Ajmer, Rajasthan for a free, no-obligation consultation. Get a candid eligibility read before you apply anywhere.",
};

export default function GetConsultationPage() {
  return <ConsultationClient />;
}
