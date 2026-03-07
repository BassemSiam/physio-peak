"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";

import { testimonials } from "@/app/_data/servicesData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Testimonials() {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6" id="testimonials">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="from-primary via-primary bg-linear-to-r to-gray-900 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            Testimonials
          </h1>
          <div className="bg-primary mx-auto mt-4 h-1.5 w-20 rounded-full" />
        </div>

        <div data-aos="zoom-in" className="group relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              prevEl: ".prev-test-btn",
              nextEl: ".next-test-btn",
            }}
            className="rounded-4xl border border-gray-100 bg-gray-50 shadow-2xl shadow-gray-200/50"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center p-8 md:flex-row md:p-16 lg:gap-16">
                  <div className="relative mb-8 flex shrink-0 items-center justify-center md:mb-0 md:w-1/3">
                    {/* Decorative Background Circles */}
                    <div className="bg-primary/5 absolute h-48 w-48 animate-pulse rounded-full" />
                    <div className="border-primary/10 absolute h-40 w-40 rounded-full border" />

                    {/* The Main Circle Image */}
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-xl md:h-56 md:w-56">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Right Side: Content */}
                  <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
                    <div className="mt-2 mb-4">
                      <h4 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-primary text-sm font-bold tracking-widest uppercase">
                        {item.role}
                      </p>
                    </div>
                    <div className="mb-4 flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-xl leading-relaxed font-medium text-gray-700 italic md:text-2xl">
                      &quot;{item.content}&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav Buttons */}
          <button className="prev-test-btn hover:text-primary absolute top-1/2 left-0 z-10 hidden -translate-x-6 -translate-y-1/2 rounded-full border border-gray-100 bg-white p-4 text-gray-400 shadow-lg transition-all md:block">
            <ChevronLeft size={24} />
          </button>
          <button className="next-test-btn hover:text-primary absolute top-1/2 right-0 z-10 hidden translate-x-6 -translate-y-1/2 rounded-full border border-gray-100 bg-white p-4 text-gray-400 shadow-lg transition-all md:block">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
