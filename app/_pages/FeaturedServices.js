import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services, funding } from "../_data/servicesData";

function FeaturedServices() {
  const featuredServices = services.slice(0, 2);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header with "See All" Link */}
        <div className="mb-12 flex flex-col items-center justify-between">
          <div className="mb-16 text-center">
            <h1 className="from-primary via-primary bg-linear-to-r to-gray-900 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
              Our Services
            </h1>
            <div className="bg-primary mx-auto mt-4 h-1.5 w-20 rounded-full" />
          </div>

          <Link
            href="/about#services"
            className="group text-primary flex items-center gap-2 font-bold transition-colors hover:text-gray-900"
          >
            Explore all services
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Two-Card Grid */}
        <div data-aos="zoom-in" className="grid gap-8 lg:grid-cols-2">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-xl transition-all hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-6 text-xs font-bold tracking-widest text-white uppercase">
                  Physio Peak
                </span>
              </div>

              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                  {service.title}
                </h3>
                <p className="mb-6 line-clamp-3 text-gray-600">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="text-primary inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-all hover:gap-4"
                >
                  Book Session <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Funding/Partners Footer */}
        {/* <div className="mt-16 border-t border-gray-100 pt-12">
          <p className="mb-8 text-center text-xs font-bold tracking-widest text-gray-400 uppercase">
            Supported Funding & Partners
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {funding.map((item) => (
              <div
                key={item}
                className="flex flex-col items-center gap-2 transition-transform hover:scale-105"
              >
                <CheckCircle2 className="text-primary h-5 w-5 opacity-70" />
                <span className="text-[10px] font-bold tracking-tighter text-gray-500 uppercase md:text-xs">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default FeaturedServices;
