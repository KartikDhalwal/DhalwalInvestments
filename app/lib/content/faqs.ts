export type FAQCategory = {
  category: string;
  items: { q: string; a: string }[];
};

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    category: "About Dhalwal Investments & Finances",
    items: [
      {
        q: "What does Dhalwal Investments & Finances actually do?",
        a: "We are a Direct Selling Agent (DSA) for loans and a licensed insurance agent based in Ajmer, Rajasthan, operating since 1995. In plain terms: we're an independent advisory that helps you access home loans, personal loans, loans against property, and life/health insurance across a network of partner banks, NBFCs, and insurers — instead of you having to visit each lender separately.",
      },
      {
        q: "Do you charge me for helping arrange a loan or insurance policy?",
        a: "Our facilitation is typically compensated by the lender or insurer, not by an upfront fee to you, though this can vary by product — we always disclose clearly before you proceed if any charge applies. What we never do is recommend a product purely because it pays us more; recommendations are based on what fits your eligibility and needs.",
      },
      {
        q: "Are you tied to one bank, or can you compare multiple lenders?",
        a: "We work with multiple partner banks and NBFCs (including names like SBI, HDFC, ICICI, PNB, Bank of Baroda, Bank of India, Bank of Maharashtra, and LIC Housing Finance), which lets us compare rates and eligibility criteria across lenders rather than pushing a single institution's product.",
      },
      {
        q: "Is my information kept confidential?",
        a: "Yes. Documents and financial details you share with us are used strictly to process your loan or insurance application with the relevant lender/insurer, and are not shared beyond what's needed for that purpose.",
      },
    ],
  },
  {
    category: "Loans",
    items: [
      {
        q: "Which types of loans do you help with?",
        a: "Home loans (purchase, construction, balance transfer), loans against property / mortgage loans, and personal loans. Visit our dedicated pages for Home Loans, Personal Loans, and Mortgage Loans for eligibility, documents, and process detail on each.",
      },
      {
        q: "How long does loan approval typically take?",
        a: "It depends on the loan type and how complete your documentation is. Personal loans can be sanctioned in a few days; home loans and loans against property usually take longer due to property valuation and legal verification — typically 1–3 weeks from a complete application. We keep you updated at each stage.",
      },
      {
        q: "Will checking my eligibility affect my credit score?",
        a: "Our initial eligibility assessment is based on the information and documents you share with us directly — it doesn't involve a credit bureau pull. A credit inquiry only happens once you formally apply to a specific lender, and we help make sure that happens with a lender likely to approve you, to avoid unnecessary inquiries.",
      },
      {
        q: "Can I switch my existing loan to a lender with a better rate?",
        a: "Yes, this is called a balance transfer. We evaluate whether the interest savings from switching outweigh the transfer and processing costs before recommending it — sometimes staying put and negotiating your current lender is the better option, and we'll tell you that too.",
      },
    ],
  },
  {
    category: "Insurance",
    items: [
      {
        q: "What kinds of insurance do you help with?",
        a: "Life insurance, term insurance, and health insurance, sourced from established insurers. We size the cover to your income, dependents, and existing liabilities rather than defaulting to a one-size-fits-all policy.",
      },
      {
        q: "How do I know how much life cover I actually need?",
        a: "A common starting point is 10–15 times your annual income, adjusted for outstanding loans (like a home loan) and the number of years your dependents will need support. We walk through this calculation with you during a consultation rather than guessing.",
      },
      {
        q: "Will you help if I need to file a claim later?",
        a: "Yes — support doesn't end at policy issuance. If you need guidance on the claims process with your insurer, reach out and we'll help you navigate the documentation and follow-up.",
      },
      {
        q: "What's the difference between term insurance and life insurance?",
        a: "Term insurance provides pure life cover for a fixed period at a lower premium, with no maturity payout if you outlive the term. Life insurance (whole-life/endowment) combines cover with a savings or maturity component, at a higher premium. Which fits you depends on whether you're optimizing for maximum protection or protection plus savings.",
      },
    ],
  },
  {
    category: "Working with us",
    items: [
      {
        q: "How do I get started?",
        a: "Book a free, no-obligation consultation through our Get Consultation page, or call us directly. We'll ask a few questions about your requirement, give you an honest read on what you're likely eligible for, and outline next steps.",
      },
      {
        q: "Do I need to visit your office in person?",
        a: "Much of the initial discussion and document collection can happen over phone and digitally, though certain steps (like original document verification or signatures) may require an in-person or lender-branch visit depending on the product and lender.",
      },
      {
        q: "What are your working hours?",
        a: "We're available Monday to Saturday, 10:00 AM – 6:00 PM. For urgent queries outside these hours, leave a message and we'll get back to you as soon as possible.",
      },
      {
        q: "I was rejected by a bank directly — can you still help?",
        a: "Often, yes. A rejection at one lender doesn't mean rejection everywhere — different lenders have different policies and risk appetites. Share your situation with us and we'll give you a candid assessment of whether a different lender in our network is a realistic fit.",
      },
    ],
  },
];
