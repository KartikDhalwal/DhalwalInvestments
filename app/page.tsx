import type { Metadata } from "next";
import { HeroClient } from "./components/home/HeroClient";
import AboutPage from "./components/about/aboutSection";

export const metadata: Metadata = {
  title: "Dhalwal Investments & Finances | Loans & Insurance, Ajmer Rajasthan",
  description:
    "Authorized DSA for home, personal & mortgage loans and a licensed insurance agent in Ajmer, Rajasthan since 1995. Compare rates across 8+ partner banks and NBFCs, transparent advice, free consultation.",
};

export default function Home() {
  return (
    <>
      <HeroClient />
      <AboutPage />
    </>
  );
}
