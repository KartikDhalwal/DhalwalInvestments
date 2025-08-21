"use client";
import { motion } from "framer-motion";
import ServiceCard from "./components/ServiceCard";
import AboutPage from "./components/about/aboutSection";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
       <section
      className="relative h-screen 
                 bg-[url('/homesm.png')] sm:bg-[url('/homesm.png')] lg:bg-[url('/home.png')] 
                 bg-cover bg-center text-white"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 " />

      {/* Company Name at the top */}
      <motion.h1
        className="absolute top-36 text-blue-500  w-full text-center text-2xl sm:text-4xl lg:text-5xl font-stretch-expanded z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Dhalwal Investments &amp; Finances
      </motion.h1>

      {/* Button at the bottom */}
      <motion.div
        className="absolute bottom-28 w-full flex justify-center z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <button
        onClick={() => router.push("/consultation")}
          className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg 
                     bg-transparent hover:bg-white/20 transition"
        >
          Get Consultation
        </button>
      </motion.div>
    </section>
      <AboutPage />
      {/* <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard title="Home Loan" desc="Lowest interest & easy processing" />
          <ServiceCard title="Personal Loan" desc="No security required" />
          <ServiceCard title="Mortgage Loan" desc="Unlock the value of your property" />
        </div>
      </section> */}
    </>
  );
}
