"use client";

export default function PartnersSection() {
     const logos = [
    "/bob.svg",
    "/sbi.svg",
    "/pnb.svg",
    "/icici.svg",
    "/hdfc.svg",
    "/bom.svg",
    "/boi.svg",
  ];
  return (
    <div className="relative overflow-hidden px-10 mt-8 bg-blue-50">
      <div
        className="flex animate-marquee"
        style={{
          display: "flex",
          width: "350%",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 xl:w-40 xl:h-40 h-16 w-16 md:h-24 md:w-24 lg:h-36 lg:w-36 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="object-contain w-full h-full "
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 63s linear infinite;
        }
      `}</style>
    </div>
  );
}
