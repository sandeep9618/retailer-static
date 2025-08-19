"use client";
import { useState, useEffect } from "react";

export default function TextCarousel() {
  const texts = [
    <p
      key="1"
      className="text-[#FF8A00] font-[700] text-[clamp(20px,2vw,42px)]"
    >
      LOCAL RETAILER - <span className="text-white">One Platform</span>
    </p>,
    <p key="2" className="text-[clamp(20px,2vw,42px)]">
      Empowering <b>Local Pharmacies</b> to
    </p>,
    <p key="3" className="text-[clamp(20px,2vw,42px)]">
      Compete, Connect & Thrive
    </p>,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="h-10 overflow-hidden relative w-full">
      <div
        className="absolute w-full transition-transform duration-500"
        style={{
          transform: `translateY(-${index * 2.5}rem)`, // match line height
        }}
      >
        {texts.map((line, i) => (
          <div key={i} className="h-10 flex items-center justify-start">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
