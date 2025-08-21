"use client";
import { motion } from "framer-motion";
import ServiceCard from "./components/ServiceCard";
import AboutPage from "./components/about/aboutSection";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      <section
        className="relative h-screen 
                 bg-[url('/homesm1.png')] sm:bg-[url('/homesm1.png')] lg:bg-[url('/home1.png')] 
                 bg-cover bg-center text-white"
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 " />

        {/* Company Name at the top */}
        <motion.h1
          className="absolute top-40 text-black font-extrabold w-full text-center 
             text-2xl font-stretch-expanded z-10 
             lg:hidden"
          // initial={{ opacity: 0, y: -40 }}
          // animate={show ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8, ease: "easeOut" }}
        >
          All Your Financial Need <br /> Solutions under One Roof
        </motion.h1>

        <motion.div
          className="absolute bottom-28 w-full flex justify-center z-10"
          // initial={{ opacity: 0, y: 40 }}
          // animate={show ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <button
            onClick={() => router.push("/consultation")}
            className="px-6 py-2 border-2 border-black font-extrabold text-black rounded-lg 
             bg-transparent transition-all duration-300 
             hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg"
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
