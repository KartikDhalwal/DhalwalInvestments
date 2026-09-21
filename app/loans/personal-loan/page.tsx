import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LoanDetailTemplate } from "@/app/components/loans/LoanDetailTemplate";
import { LOANS, getLoanBySlug } from "@/app/lib/content/loans";

export const metadata: Metadata = {
  title: "Personal Loans — Fast, Unsecured Funding | Dhalwal Investments & Finances",
  description:
    "Unsecured personal loans from 10.50% p.a.* for medical, wedding, education, or debt consolidation needs. Free eligibility check across our partner lenders in Ajmer, Rajasthan.",
};

export default function PersonalLoanPage() {
  const loan = getLoanBySlug("personal-loan");
  if (!loan) return notFound();
  return <LoanDetailTemplate loan={loan} allLoans={LOANS} />;
}
