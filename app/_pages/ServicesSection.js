"use client";
import { services } from "../_data/servicesData";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

function ServicesSection() {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6" id="services">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="from-primary via-primary bg-linear-to-r to-gray-900 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            Our Services
          </h1>
          <div className="bg-primary mx-auto mt-4 h-1.5 w-20 rounded-full" />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            From elite athletes to senior care, we provide evidence-based
            treatments tailored to your specific recovery goals.
          </p>
        </div>

        <div className="group relative" data-aos="zoom-in">
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
            className="rounded-4xl border border-gray-200 shadow-2xl"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="flex flex-col items-center bg-white md:flex-row">
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-4xl md:aspect-square md:w-2/5 md:rounded-l-4xl md:rounded-tr-none">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col items-center justify-center p-10 text-center md:items-start md:p-16 md:text-left">
                    <span className="text-primary mb-2 text-xs font-bold tracking-[0.3em] uppercase">
                      Physio Peak
                    </span>
                    <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                      {service.title}
                    </h3>
                    <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="text-primary mt-10 inline-flex cursor-pointer items-center gap-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-6"
                    >
                      contact us to book <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="prev-test-btn hover:text-primary absolute top-1/2 left-0 z-10 hidden -translate-x-6 -translate-y-1/2 rounded-full border border-gray-100 bg-white p-4 text-gray-400 shadow-lg transition-all md:block">
            <ChevronLeft size={24} />
          </button>

          <button className="next-test-btn hover:text-primary absolute top-1/2 right-0 z-10 hidden translate-x-6 -translate-y-1/2 rounded-full border border-gray-100 bg-white p-4 text-gray-400 shadow-lg transition-all md:block">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* <div className="mt-16 grid grid-cols-2 gap-4 border-t border-gray-100 pt-12 md:grid-cols-3 lg:grid-cols-6">
          {funding.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center gap-2 transition-transform hover:scale-105"
            >
              <CheckCircle2 className="text-primary h-6 w-6" />
              <span className="text-[10px] font-bold tracking-tighter text-gray-500 uppercase md:text-xs">
                {item}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default ServicesSection;
