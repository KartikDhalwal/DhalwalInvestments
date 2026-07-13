"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy-950 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Dhalwal Investments &amp; Finances
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Authorized DSA for loans and a licensed insurance agent, serving clients from
              Ajmer, Rajasthan since 1995 with transparent, client-first financial guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="transition hover:text-white">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="transition hover:text-white">
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="transition hover:text-white">
                  Get Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Home Loans</li>
              <li>Mortgage Loans</li>
              <li>Personal Loans</li>
              <li>Life &amp; Health Insurance</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Connect
            </h4>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" />
              <span>+91 9828049021</span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" />
              <span>sureshlic98@gmail.com</span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 shrink-0 text-gold-400" />
              <span>Ajmer (Raj.), India</span>
            </div>
            <div className="mt-5 flex gap-4">
              <Link href="" className="transition hover:text-gold-400" aria-label="Facebook">
                <Facebook size={18} />
              </Link>
              <Link href="" className="transition hover:text-gold-400" aria-label="Instagram">
                <Instagram size={18} />
              </Link>
              <Link href="" className="transition hover:text-gold-400" aria-label="LinkedIn">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          <p>&copy; 1995 Dhalwal Investments &amp; Finances. All rights reserved.</p>
          <p className="mt-1">
            Developed and maintained by{" "}
            <span className="font-medium text-gold-400">Kartik Dhalwal (+91-9828719021)</span>
          </p>
        </div>
      </div>

      {showTopBtn && (
        <button
          onClick={goToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 rounded-full bg-gold-500 p-3 text-navy-950 shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-gold-400"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
