"use client";

export default function PartnersSection() {
  const logos = [
    "/bob.svg",
    "/sbi.svg",
    "/pnb.svg",
    "/icici.svg",
    "lichfl.png",
    "/hdfc.svg",
    "/bom.svg",
    "/boi.svg",
  ];

  return (
    <div className="relative overflow-hidden px-10 mt-10 bg-blue-50 ">
      <h2 className="inline-block bg-blue-50 text-blue-700 text-3xl font-semibold w-full px-6 py-4 rounded-lg mb-8 border-l-4 border-blue-500">
        Our Partner's
      </h2>
      <div className="flex w-max animate-marquee">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 xl:w-40 xl:h-40 h-16 w-16 md:h-24 md:w-24 lg:h-36 lg:w-36 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
