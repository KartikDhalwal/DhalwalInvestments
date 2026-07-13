"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Insurance", href: "/insurance" },
  { label: "EMI Calculator", href: "/calculators" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navigate = (href: string) => {
    setMobileMenuOpen(false);
    router.push(href);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-[0_1px_0_0_rgba(11,15,25,0.06)] backdrop-blur-md"
            : "bg-white/60 backdrop-blur-sm"
        }`}
      >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/DhalwalInvestmentsLogo.png"
            alt="Dhalwal Investments & Finances"
            width={500}
            height={78}
            className="h-12 w-auto object-contain sm:h-14"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`group relative py-2 text-sm font-medium transition-colors ${
                      active ? "text-navy-900" : "text-ink-muted hover:text-navy-900"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => navigate("/consultation")}
            className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy-800 hover:shadow-md hover:-translate-y-0.5"
          >
            Get Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle text-navy-900 md:hidden"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-navy-950/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm bg-white shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex justify-end p-5">
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                  <X size={24} className="text-navy-900" />
                </button>
              </div>
              <nav className="px-6">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map(({ label, href }) => (
                    <li key={href}>
                      <button
                        onClick={() => navigate(href)}
                        className="block w-full border-b border-surface py-3 text-left text-lg font-medium text-navy-900"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/consultation")}
                  className="mt-6 w-full rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white"
                >
                  Get Consultation
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
