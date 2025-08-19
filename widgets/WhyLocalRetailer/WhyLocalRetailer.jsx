import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Image from "next/image";
import React from "react";

const WhyLocalRetailer = () => {
  return (
    <section className="flex flex-col items-center">
      <SectionHeader title="Why Local Retailer ?" className="mb-8" />
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-[50px]">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h3
            className="font-semibold text-[#111F61] mb-4"
            style={{ fontSize: "clamp(18px,_2vw,_28px)" }}
          >
            Grow Locally, Compete Globally
          </h3>

          <p
            className="text-[#333D4C] leading-relaxed"
            style={{ fontSize: "clamp(14px,_1.5vw,_20px)" }}
          >
            In a crowded market, suppliers may offer stock and credit — but real
            support goes further. At Local Retailer, we empower your pharmacy
            with the tools, tech, and visibility you need to grow. Unlike
            others, we don’t overshadow your brand. Instead, we highlight it —
            driving customers straight to your store.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/WhyLR/Why LR img.png"
            alt="Why Local Retailer"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-xl w-full shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyLocalRetailer;
