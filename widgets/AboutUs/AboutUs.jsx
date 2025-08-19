import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Easy Stock Ordering",
    description:
      "Save time and avoid errors with our Easy Stock Ordering feature designed to streamline your restocking workflow.",
    image: "/aboutus/easy stock.png",
    bg: "bg-[#111F61] text-white",
  },
  {
    title: "Smart Inventory Management",
    description:
      "Track stock in real-time, reduce expiry losses, and restock smarter — powered by intelligent alerts and analytics.",
    image: "/aboutus/inventory.png",
    bg: "bg-white text-[#333D4C] border border-[#FF8A0099]",
  },
  {
    title: "Profit Tracking Dashboard",
    description:
      "Monitor daily profits, view sales trends, and get insights that help you grow smarter — everything in one place.",
    image: "/aboutus/tracking dahboard.png",
    bg: "bg-[#111F61] text-white",
  },
  {
    title: "GRB & Expiry Alerts",
    description:
      "Get timely notifications on near-expiry and GRB items to minimize losses and ensure safe dispensing.",
    image: "/aboutus/GRB.png",
    bg: "bg-white text-[#333D4C] border border-[#FF8A0099]",
  },
  {
    title: "Product Performance Analytics",
    description:
      "Analyze best-selling products, slow movers, and seasonal trends to make smarter stocking decisions.",
    image: "/aboutus/Product analysis.png",
    bg: "bg-[#111F61] text-white",
  },
  {
    title: "Flexible Delivery Scheduling",
    description:
      "Offer delivery in just 3 hours. Let customers choose their preferred time slots for fast, reliable service.",
    image: "/aboutus/Delivery.png",
    bg: "bg-white text-[#333D4C] border border-[#FF8A0099]",
  },
  {
    title: "Audit",
    description:
      "Ensure transparency with regular stock checks, transaction logs, and detailed reports for complete business control.",
    image: "/aboutus/Audit.png",
    bg: "bg-[#111F61] text-white",
  },
  {
    title: "Top Customers Insight",
    description:
      "Identify your most loyal buyers, track their purchase patterns, and reward them to boost repeat sales.",
    image: "/aboutus/Top customer insight.png",
    bg: "bg-white text-[#333D4C] border border-[#FF8A0099]",
  },
  {
    title: "Network Retailing",
    description:
      "Expand your reach by connecting with nearby stores to share stock, fulfill orders faster, and serve more customers.",
    image: "/aboutus/Network retailing.png",
    bg: "bg-[#111F61] text-white",
  },
];

function FeaturesGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-y-6 md:gap-x-10 md:gap-y-6 lg:gap-x-10 lg:gap-y-6 xl:gap-x-15  p-6 lg:w-3/4">
      {features.map((item, index) => (
        <div
          key={index}
          className={`rounded-2xl shadow-md  p-6 flex flex-col gap-3 transition-all duration-500 ease-in-out hover:bg-[#FF8A00] hover:text-white ${item.bg}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-10 h-10 object-contain"
          />
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </section>
  );
}

const AboutUs = () => {
  return (
    <>
      <article className="flex flex-col xs:flex-col sm:flex-row md:flex-row gap-[30px] md:gap-[50px] lg:gap-[100px] xl:gap-[200px]">
        <div className="flex flex-col gap-2 w-full sm:w-3/4">
          <SectionHeader
            title="About Us"
            className="self-center sm:self-start md:self-end mb-5"
          />
          <p className="text-[#111F61] font-semibold text-[clamp(18px,_2vw,_28px)]">
            Empowering Local Pharmacies in a Growing Industry
          </p>

          <p className="text-[#333D4C] text-[clamp(14px,_1.5vw,_20px)] leading-[30px]">
            India’s pharmaceutical industry is projected to grow from USD 58
            billion in 2024 to USD 120–130 billion by 2030, driven by rising
            health awareness and lifestyle needs. While online and chain
            pharmacies are gaining ground, local medical stores hold unmatched
            trust, personalized care, and community presence. We empower these
            local heroes with technology and tools to compete and thrive in a
            fast-changing world.
          </p>
        </div>
        <div className="gap-2 w-full sm:w-2/4 md:w-1/3 relative p-6 pb-3 pr-3">
          <div className="relative">
            <Image
              src="/logos/doc.png"
              alt="doctor"
              width={200}
              height={100}
              className="w-full h-auto object-contain"
            />

            {/* Top-right curve */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-8 border-r-8 border-[#FF8A00] rounded-tr-2xl"></div>
            {/* Bottom-left curve */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-8 border-l-8 border-[#111F61] rounded-bl-2xl"></div>
          </div>
        </div>
      </article>
      <br />
      <br />
      <br />
      <article className="flex flex-col items-center">
        <SectionHeader
          title="Efficient, Scalable, and Reliable ERP Solutions"
          className="self-center"
        />
        <FeaturesGrid />
      </article>
    </>
  );
};

export default AboutUs;
