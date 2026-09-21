import type { Metadata } from "next";
import { InsuranceClient } from "@/app/components/insurance/InsuranceClient";

export const metadata: Metadata = {
  title: "Life, Term & Health Insurance | Dhalwal Investments & Finances",
  description:
    "Licensed insurance agent in Ajmer, Rajasthan helping you choose life, term, and health cover sized to your income and family — not the highest commission plan.",
};

export default function InsurancePage() {
  return <InsuranceClient />;
}
