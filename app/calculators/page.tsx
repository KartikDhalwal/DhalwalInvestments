import type { Metadata } from "next";
import { CalculatorsClient } from "@/app/components/calculators/CalculatorsClient";

export const metadata: Metadata = {
  title: "EMI & Loan Eligibility Calculator | Dhalwal Investments & Finances",
  description:
    "Free EMI calculator and loan eligibility calculator for home, personal, and mortgage loans. See your monthly payment and borrowing capacity instantly.",
};

export default function CalculatorsPage() {
  return <CalculatorsClient />;
}
