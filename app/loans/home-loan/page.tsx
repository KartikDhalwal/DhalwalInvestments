import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LoanDetailTemplate } from "@/app/components/loans/LoanDetailTemplate";
import { LOANS, getLoanBySlug } from "@/app/lib/content/loans";

export const metadata: Metadata = {
  title: "Home Loans — Compare Rates Across Banks | Dhalwal Investments & Finances",
  description:
    "Home loans for purchase, construction, and balance transfer from 8.40% p.a.* Compare offers across our partner banks and NBFCs with free eligibility guidance in Ajmer, Rajasthan.",
};

export default function HomeLoanPage() {
  const loan = getLoanBySlug("home-loan");
  if (!loan) return notFound();
  return <LoanDetailTemplate loan={loan} allLoans={LOANS} />;
}
