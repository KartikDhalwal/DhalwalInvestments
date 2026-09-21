import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LoanDetailTemplate } from "@/app/components/loans/LoanDetailTemplate";
import { LOANS, getLoanBySlug } from "@/app/lib/content/loans";

export const metadata: Metadata = {
  title: "Loan Against Property (Mortgage Loan) | Dhalwal Investments & Finances",
  description:
    "Unlock funds against residential or commercial property from 9.00% p.a.* for business or personal needs, up to ₹10 Crore. Free eligibility guidance in Ajmer, Rajasthan.",
};

export default function MortgageLoanPage() {
  const loan = getLoanBySlug("mortgage-loan");
  if (!loan) return notFound();
  return <LoanDetailTemplate loan={loan} allLoans={LOANS} />;
}
