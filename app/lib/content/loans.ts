import { Home, Landmark, HandCoins, type LucideIcon } from "lucide-react";
import { IMAGES } from "@/app/lib/images";

// Kept separate from LOANS (below) because LOANS gets passed as a prop into
// client components (LoanDetailTemplate) — component/function values like
// LucideIcon can't cross the server → client boundary as serialized props.
export const LOAN_ICONS: Record<string, LucideIcon> = {
  "home-loan": Home,
  "personal-loan": HandCoins,
  "mortgage-loan": Landmark,
};

export type LoanContent = {
  slug: string;
  shortTitle: string;
  title: string;
  eyebrow: string;
  heroImage: string;
  heroImageAlt: string;
  summary: string;
  intro: string[];
  highlights: { label: string; value: string }[];
  features: { title: string; desc: string }[];
  eligibility: string[];
  documents: { category: string; items: string[] }[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  calculatorPreset: { amount: number; rate: number; tenureMonths: number };
};

const process = [
  {
    title: "Free eligibility assessment",
    desc: "Share your income, obligations, and requirement — we tell you realistically what you qualify for before you apply anywhere.",
  },
  {
    title: "Lender matching & rate comparison",
    desc: "We shortlist 2–3 lenders from our partner network whose policy fits your profile best, and compare rates, fees, and turnaround time.",
  },
  {
    title: "Documentation & application",
    desc: "We help you assemble a clean, complete file and submit the application, reducing back-and-forth queries from the lender.",
  },
  {
    title: "Sanction & offer review",
    desc: "Once sanctioned, we walk you through the offer letter line by line — interest rate, tenure, charges — before you accept.",
  },
  {
    title: "Disbursal & after-care",
    desc: "We coordinate with the lender through disbursal and remain your point of contact for any servicing questions afterward.",
  },
];

export const LOANS: LoanContent[] = [
  {
    slug: "home-loan",
    shortTitle: "Home Loan",
    title: "Home Loans",
    eyebrow: "Own your home",
    heroImage: IMAGES.homeExterior,
    heroImageAlt: "Modern house exterior lit up in the evening",
    summary:
      "Finance the purchase, construction, or balance transfer of your home with competitive rates sourced across our lending partner network.",
    intro: [
      "Buying a home is likely the largest financial decision most families make, and the lender you choose affects your budget for the next 15–30 years. Instead of walking into a single bank and accepting whatever rate you're offered, we run your profile across our network of banks and housing finance companies to find terms that actually fit your income and goals.",
      "We assist with new purchase loans, under-construction property finance, home improvement loans, balance transfer with top-up, and NRI home loans — guiding you from the first eligibility check through to the final disbursal cheque.",
    ],
    highlights: [
      { label: "Interest rate", value: "8.40% p.a. onwards*" },
      { label: "Loan amount", value: "Up to ₹5 Crore" },
      { label: "Tenure", value: "Up to 30 years" },
      { label: "Processing fee", value: "0.25%–1% of loan amount*" },
    ],
    features: [
      {
        title: "New purchase & construction",
        desc: "Ready, under-construction, or self-construction — we match the loan structure to your property type.",
      },
      {
        title: "Balance transfer & top-up",
        desc: "Already have a home loan at a higher rate? We evaluate whether switching lenders saves you money after transfer costs.",
      },
      {
        title: "Step-up & flexible EMI plans",
        desc: "For salaried applicants early in their career, we explore step-up EMI structures aligned to expected income growth.",
      },
      {
        title: "Co-applicant & joint loan structuring",
        desc: "We help structure joint applications with family members to boost eligibility and optimize tax benefits.",
      },
    ],
    eligibility: [
      "Salaried applicants: typically 21–60 years of age with a minimum 2–3 years of work experience",
      "Self-employed applicants: typically 25–65 years of age with 3+ years of business continuity and ITR filings",
      "Stable, documented income sufficient to service the proposed EMI alongside existing obligations",
      "Reasonable credit history — we help you understand your credit report before you apply",
      "Clear property title, especially for resale and under-construction purchases",
    ],
    documents: [
      {
        category: "Identity & address proof",
        items: ["PAN card", "Aadhaar card", "Passport-size photographs"],
      },
      {
        category: "Income proof (salaried)",
        items: ["Last 3 months' salary slips", "Form 16 / last 2 years' ITR", "6 months' bank statements"],
      },
      {
        category: "Income proof (self-employed)",
        items: ["Last 2–3 years' ITR with computation", "Business proof / GST returns", "1 year's current account statements"],
      },
      {
        category: "Property documents",
        items: ["Sale agreement / allotment letter", "Title deed chain", "Approved building plan & NOC (as applicable)"],
      },
    ],
    process,
    faqs: [
      {
        q: "How much home loan am I eligible for?",
        a: "Eligibility depends on your income, existing EMIs, age, and the lender's policy — as a rough guide, most lenders keep total EMI obligations (including the new loan) under 50–60% of net monthly income. Use our EMI calculator for an estimate, then get a precise number from a free eligibility check.",
      },
      {
        q: "What is the difference between a fixed and floating interest rate?",
        a: "A fixed rate stays the same for a set period regardless of market movement, while a floating rate moves with the lender's benchmark rate (like repo-linked rates). Most home loans in India today are floating, which historically works out cheaper over a full tenure, though it carries rate-fluctuation risk.",
      },
      {
        q: "Can I get a home loan for a resale property?",
        a: "Yes. Resale home loans are common — the main additional step is a clean title verification and chain-of-ownership check, which we help coordinate with the lender's legal team.",
      },
      {
        q: "Is there a tax benefit on home loans?",
        a: "Home loan principal repayment and interest paid may qualify for deductions under the Income Tax Act (subject to prevailing limits and your tax regime). We recommend confirming the exact figures with your chartered accountant for your specific situation.",
      },
    ],
    calculatorPreset: { amount: 3500000, rate: 8.4, tenureMonths: 240 },
  },
  {
    slug: "personal-loan",
    shortTitle: "Personal Loan",
    title: "Personal Loans",
    eyebrow: "Funds without collateral",
    heroImage: IMAGES.celebration,
    heroImageAlt: "Colleagues celebrating with a high-five in an office",
    summary:
      "Unsecured funding for medical needs, weddings, education, debt consolidation, or any personal requirement — sanctioned fast, with minimal paperwork.",
    intro: [
      "Personal loans are unsecured, meaning you don't pledge any asset — which makes them fast to process but also more sensitive to your credit profile and income stability. We help you present your application in the best possible light and pick a lender whose policy suits your profile, rather than applying blind and collecting rejections that hurt your credit score.",
      "Whether it's a medical emergency, a wedding, higher education, home renovation, or consolidating multiple high-interest debts into a single EMI, we scope the right loan amount and tenure so the EMI stays comfortable.",
    ],
    highlights: [
      { label: "Interest rate", value: "10.50% p.a. onwards*" },
      { label: "Loan amount", value: "₹50,000 – ₹40 Lakh" },
      { label: "Tenure", value: "12–60 months" },
      { label: "Processing fee", value: "Up to 2.5% of loan amount*" },
    ],
    features: [
      {
        title: "Debt consolidation",
        desc: "Combine multiple credit card and loan EMIs into one predictable monthly payment, often at a lower blended rate.",
      },
      {
        title: "Medical & emergency funding",
        desc: "Fast-tracked processing with lenders who prioritize urgent, documented medical requirements.",
      },
      {
        title: "Wedding & travel loans",
        desc: "Right-sized loan amounts with a repayment plan that doesn't strain your monthly budget for years afterward.",
      },
      {
        title: "Pre-approved offers check",
        desc: "We check which of our partner lenders already have a pre-approved offer for your profile, which usually means faster disbursal.",
      },
    ],
    eligibility: [
      "Salaried applicants: typically 21–58 years of age with a minimum 1–2 years of work experience",
      "Self-employed applicants: typically 25–65 years of age with stable, documented business income",
      "Minimum net monthly income threshold varies by lender, generally starting around ₹20,000–₹25,000 in urban centers",
      "Reasonable credit score — most lenders prefer 700+, though options exist for thinner credit files",
      "No collateral required, but existing loan obligations are factored into eligibility",
    ],
    documents: [
      {
        category: "Identity & address proof",
        items: ["PAN card", "Aadhaar card", "Passport-size photographs"],
      },
      {
        category: "Income proof (salaried)",
        items: ["Last 3 months' salary slips", "Last 6 months' bank statements", "Employment ID / offer letter"],
      },
      {
        category: "Income proof (self-employed)",
        items: ["Last 2 years' ITR", "Business continuity proof", "6–12 months' bank statements"],
      },
    ],
    process,
    faqs: [
      {
        q: "How fast can a personal loan be disbursed?",
        a: "With a complete document set and a straightforward profile, some lenders in our network disburse within 24–72 hours of sanction. Timelines vary by lender and how quickly verification is completed.",
      },
      {
        q: "Does applying through multiple banks hurt my credit score?",
        a: "Yes — each hard credit inquiry can shave a few points off your score, and multiple inquiries in a short window look risky to lenders. That's exactly why we pre-screen your eligibility before submitting to a lender, so you apply once, to the right one.",
      },
      {
        q: "Can I prepay or foreclose my personal loan early?",
        a: "Most lenders allow part-prepayment or full foreclosure after a lock-in period (commonly 6–12 months), sometimes with a small charge. We flag these terms clearly before you sign, so there are no surprises later.",
      },
      {
        q: "What can hurt my personal loan approval chances?",
        a: "Common issues include a high existing EMI-to-income ratio, recent loan defaults or credit card overdue payments, frequent job changes, or too many recent loan inquiries. We review your profile upfront and tell you honestly if it needs strengthening before applying.",
      },
    ],
    calculatorPreset: { amount: 500000, rate: 11.5, tenureMonths: 48 },
  },
  {
    slug: "mortgage-loan",
    shortTitle: "Mortgage / LAP",
    title: "Mortgage Loans (Loan Against Property)",
    eyebrow: "Unlock property value",
    heroImage: IMAGES.commercialTower,
    heroImageAlt: "Commercial towers viewed from street level",
    summary:
      "Leverage your residential or commercial property to raise large-ticket funds for business expansion, education, or debt consolidation, at rates well below unsecured credit.",
    intro: [
      "A Loan Against Property (LAP) lets you borrow against a residential, commercial, or industrial property you already own, without selling it. Because the loan is secured, interest rates are typically much lower than personal loans and the amounts sanctioned are significantly higher — making it a popular route for business owners and professionals who need large-ticket funding.",
      "We help you understand how much your property can realistically unlock (lenders typically fund 50–65% of the assessed market value), coordinate the property valuation and legal due diligence, and negotiate tenure and rate across our partner banks and NBFCs.",
    ],
    highlights: [
      { label: "Interest rate", value: "9.00% p.a. onwards*" },
      { label: "Loan amount", value: "Up to ₹10 Crore" },
      { label: "Loan-to-value", value: "Up to 65% of property value*" },
      { label: "Tenure", value: "Up to 15–20 years" },
    ],
    features: [
      {
        title: "Business expansion funding",
        desc: "Large-ticket, lower-cost capital for working capital, equipment purchase, or expansion, secured against owned property.",
      },
      {
        title: "Residential & commercial property",
        desc: "We work with both self-occupied residential property and commercial/industrial premises, each assessed under the right lender policy.",
      },
      {
        title: "Debt consolidation at lower cost",
        desc: "Replace expensive unsecured debt with a single, lower-interest, longer-tenure loan secured against property.",
      },
      {
        title: "Overdraft-linked LAP options",
        desc: "Select lenders offer a running overdraft facility against property, so you pay interest only on the amount actually drawn.",
      },
    ],
    eligibility: [
      "Applicant must be the clear, undisputed owner (or co-owner) of the property being mortgaged",
      "Salaried applicants: typically up to 60–65 years of age at loan maturity",
      "Self-employed applicants/businesses: stable income history, typically 3+ years of continuity",
      "Property should be free of legal disputes with a clean, traceable title chain",
      "Existing loans on the property (if any) are factored into the eligible loan-to-value calculation",
    ],
    documents: [
      {
        category: "Identity & income proof",
        items: ["PAN & Aadhaar", "Last 2–3 years' ITR", "Bank statements (6–12 months)"],
      },
      {
        category: "Property documents",
        items: ["Original title deed", "Property tax receipts", "Encumbrance certificate", "Approved building plan"],
      },
      {
        category: "Business documents (if self-employed)",
        items: ["GST returns", "Business registration proof", "Audited financials (where applicable)"],
      },
    ],
    process,
    faqs: [
      {
        q: "What's the difference between a home loan and a loan against property?",
        a: "A home loan is specifically for buying or constructing a home and typically carries the lowest rates. A loan against property (LAP) is secured by a property you already own, but the funds can be used for any purpose — business, education, medical, or consolidation — usually at a slightly higher rate than a home loan.",
      },
      {
        q: "How is the loan-to-value (LTV) on my property decided?",
        a: "An empaneled valuer assesses the property's current market value, and the lender sanctions a percentage of that (commonly 50–65% for LAP, varying by property type and lender policy). We coordinate the valuation visit and share the report with you.",
      },
      {
        q: "Can I get a loan against a commercial or rented-out property?",
        a: "Yes, most of our partner lenders finance against commercial property and rented residential property, though the LTV and rate may differ from a self-occupied home. We'll confirm the exact terms for your specific property.",
      },
      {
        q: "What happens if I default on a loan against property?",
        a: "As with any secured loan, sustained default puts the mortgaged property at risk of recovery action under applicable law (such as the SARFAESI Act for regulated lenders). We strongly recommend borrowing an amount whose EMI is comfortably serviceable, and we factor this into every recommendation we make.",
      },
    ],
    calculatorPreset: { amount: 7500000, rate: 9.25, tenureMonths: 180 },
  },
];

export function getLoanBySlug(slug: string) {
  return LOANS.find((l) => l.slug === slug);
}
