import React from "react";
import Image from "next/image";
import Link from "next/link"; // Assuming you want to link to a full page
import { Star, ArrowRight } from "lucide-react";
import { testimonials } from "@/app/_data/servicesData";

function FeaturedTestimonials() {
  // We only take the first two for this version
  const featuredItems = testimonials.slice(0, 2);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center justify-between">
          <div className="mb-16 text-center">
            <h1 className="from-primary via-primary bg-linear-to-r to-gray-900 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
              Testimonials
            </h1>
            <div className="bg-primary mx-auto mt-4 h-1.5 w-20 rounded-full" />
          </div>

          <Link
            href="/about/#testimonials"
            className="group text-primary flex items-center gap-2 font-bold transition-colors hover:text-gray-900"
          >
            View all testimonials
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Grid Layout for 2 Cards */}
        <div data-aos="zoom-in" className="grid gap-8 md:grid-cols-2">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-primary text-xs font-bold tracking-wider uppercase">
                    {item.role}
                  </p>
                </div>
              </div>

              <div className="mb-4 flex gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                &quot;{item.content}&quot;
              </blockquote>

              {/* Decorative quote icon */}
              <span className="absolute right-8 bottom-4 font-serif text-6xl text-gray-200 select-none">
                &rdquo;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedTestimonials;
