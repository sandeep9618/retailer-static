"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const cardData = [
  {
    id: 1,
    icon: "A",
    title: "Online Storefront Creation",
    description:
      "Launch your digital pharmacy in minutes with a personalized online store — no coding required.",
  },
  {
    id: 2,
    icon: "B",
    title: "Marketplace Integration",
    description:
      "Expand your reach by listing on our Local App and partner marketplaces to attract more customers.",
  },
  {
    id: 3,
    icon: "C",
    title: "Dynamic Pricing Tools",
    description:
      "Adjust prices smartly based on demand, expiry, and competition using our intelligent pricing engine.",
  },
  {
    id: 4,
    icon: "D",
    title: "Real-Time Stock Sync",
    description:
      "Automatically sync your store inventory with sales to avoid overselling or stockouts.",
  },
  {
    id: 5,
    icon: "E",
    title: "Doctor & Clinic Referrals",
    description:
      "Get more walk-ins and orders by connecting with local doctors and clinics through our referral network.",
  },
  {
    id: 6,
    icon: "F",
    title: "Customer Ordering App",
    description:
      "Allow your customers to easily place medicine orders via mobile app and track their delivery status.",
  },
  {
    id: 7,
    icon: "G",
    title: "GST & Prescription Compliance",
    description:
      "Easily manage GST invoices and prescription validations for legal and secure transactions.",
  },
  {
    id: 8,
    icon: "H",
    title: "Promotion & Campaign Tools",
    description:
      "Run discounts, combo offers, and cashback campaigns to boost your local customer base.",
  },
  {
    id: 9,
    icon: "I",
    title: "Sales & Customer Analytics",
    description:
      "Track sales trends, repeat buyers, and top-selling products to grow your business strategically.",
  },
];

export default function WhatWeProvide() {
  return (
    <article>
      <SectionHeader title="What We Provide (Selling)" className="mb-8" />
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={0}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          850: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // continue autoplay after manual swipe
        }}
        speed={800}
        loop={true}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id} className="p-4">
            <div
              className="
            bg-white p-6 rounded-2xl shadow-md
              flex gap-4 items-start hover:shadow-lg
              transition duration-300 h-fit
              card-box-shadow w-full"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#FF8A00] text-white font-bold text-lg">
                {card.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}
