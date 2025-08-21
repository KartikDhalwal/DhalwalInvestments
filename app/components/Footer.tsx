"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { GoMoveToTop } from "react-icons/go";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-blue-100 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ===== Column 1 ===== */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-blue-900">
              Dhalwal Investments & Finances
            </h3>
            <p className="text-gray-600 hover:text-black">
              
            </p>
          </div>

          {/* ===== Quick Links ===== */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-blue-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-black transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/consultation"
                  className="text-gray-600 hover:text-black transition"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators"
                  className="text-gray-600 hover:text-black transition"
                >
                  EMI Calculator
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-black transition"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>

          {/* ===== Services ===== */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-blue-900">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-black transition"
                >
                  Home Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-black transition"
                >
                  Mortgage loans
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-black transition"
                >
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-black transition"
                >
                  Property Dealing
                </Link>
              </li>
             
            </ul>
          </div>

          {/* ===== Connect ===== */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-blue-900">
              Connect
            </h4>
            <div className="flex space-x-4 mb-4">
              <Link
                href=""
                className="text-gray-600 hover:text-black transition"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href=""
                className="text-gray-600 hover:text-black transition"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href=""
                className="text-gray-600 hover:text-black transition"
              >
                <Linkedin size={20} />
              </Link>
            </div>
            <p className="text-gray-600 hover:text-black">
              sureshlic98@gmail.com
            </p>
            <p className="text-gray-600 hover:text-black">+91 9828049021</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-600 hover:text-black">
          <p>© 1995 Dhalwal Investments & Finances. All rights reserved.</p>
          <p className="text-sm mt-1">
            Developed and maintained by{" "}
            <span className="font-semibold text-blue-600 hover:underline">
              Kartik Dhalwal (+ 91 - 9828719021)
            </span>
          </p>
        </div>
      </div>

      {/* ===== Go To Top Button ===== */}
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          <GoMoveToTop/>
        </button>
      )}
    </footer>
  );
}
