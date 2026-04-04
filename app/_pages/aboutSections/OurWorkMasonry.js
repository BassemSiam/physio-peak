import { workGallery } from "@/app/_data/servicesData";
import Image from "next/image";

function OurWorkMasonry() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      {/* Header */}
      <div className="mb-12 text-center md:mb-20">
        <h1 className="from-primary via-primary bg-linear-to-r to-gray-900 bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl">
          Our Work
        </h1>
        <div className="bg-primary mx-auto mt-4 h-1.5 w-16 rounded-full md:w-20" />
      </div>

      {/* Masonry Grid: 2 columns mobile, 3 columns desktop */}
      <div className="columns-2 gap-3 space-y-3 md:gap-6 md:space-y-6 lg:columns-3">
        {workGallery.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            /* CRITICAL FIX: 
               1. item.size (the aspect ratio) is applied here.
               2. w-full ensures it takes up the column width.
               3. relative allows the Next.js 'fill' image to stay inside.
            */
            className={`group relative isolate w-full break-inside-avoid overflow-hidden rounded-2xl bg-gray-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] md:rounded-4xl ${item.size}`}
          >
            {/* Image Layer */}
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="z-0 object-cover saturate-[0.7] transition-all duration-1000 ease-out group-hover:scale-110 group-hover:saturate-100"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 md:p-8">
              <div className="translate-y-4 transform transition-transform duration-500 group-hover:translate-y-0">
                {/* Description reveal logic */}
                <div className="grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                  <p className="overflow-hidden text-[10px] leading-tight text-gray-200 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100 md:text-xs md:leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="bg-primary mt-2 h-0.5 w-0 transition-all duration-700 group-hover:w-8 md:mt-4 md:group-hover:w-16" />
              </div>
            </div>

            {/* Glassmorphism Inner Border */}
            <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl border border-white/5 transition-colors group-hover:border-white/20 md:rounded-4xl" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurWorkMasonry;
