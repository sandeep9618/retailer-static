import { Navbar } from "@/components";
import TextCarousel from "@/components/TextCarousel/TextCarousel";
import Image from "next/image";
import "./page.css";
import React from "react";

const data = [
  {
    title: "2L+ SKU’s",
    description:
      "Access over 2 lakh+ products including branded, generic, wellness, and essential items — all under one roof. Our centralized inventory system ensures you find what you need, when you need it, with complete visibility and confidence.",
  },
  {
    title: "45K+ Users",
    description:
      "Join a growing network of 45,000+ users — a vibrant community of retailers, suppliers, and customers who rely on our platform daily to power their healthcare needs and grow their businesses.",
  },
  {
    title: "B2B2C Model",
    description:
      "Our unique B2B2C model bridges the gap between suppliers and customers by empowering local retailers. We provide the tech, tools, and support to help retailers sell smarter, faster, and directly to end-users with full brand visibility.",
  },
];

function StatsSection() {
  return (
    <section className="stats-container">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div className="stats-card">
            <div className="stats-content">
              <div>
                {/* <Image alt="m-icon" src="/public/logos/mockup_icon.png" /> */}
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
          {index !== data.length - 1 && <div className="divider" />}
        </React.Fragment>
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-[#0A2A66]">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="text-white px-10 py-16 flex flex-col md:flex-row items-stretch">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-evenly gap-[20px]">
          <p className="text-[clamp(16px,2vw,26px)]">
            Pharmacies today are facing intense competition from online
            platforms and large pharmacy chains.
          </p>

          <TextCarousel />

          <button className="bg-white text-black px-10 py-3 rounded-full font-500 shadow-md hover:shadow-lg self-start">
            Register Now
          </button>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 relative min-h-[300px]">
          <Image
            src="/logos/mockup_one.png"
            alt="Dashboard"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
    </div>
  );
}
