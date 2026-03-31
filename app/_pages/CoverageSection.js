import React from "react";
import { coverage } from "../_data/servicesData";

export default function CoverageSection() {
  return (
    <section className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-primary/5 flex flex-col items-center justify-between gap-8 rounded-3xl p-8 md:flex-row md:p-12">
          <div className="text-center md:w-1/3 md:text-left">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              We Support Your Coverage
            </h3>
            <p className="text-gray-600">
              We support a wide range of funding schemes and aim to simplify the
              process, so the main focus is on your recovery
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:w-2/3 lg:grid-cols-3">
            {coverage.map((item) => (
              <div
                key={item.name}
                data-aos="zoom-in"
                className="border-primary/10 flex flex-col items-center rounded-xl border bg-white p-4 shadow-sm md:items-start"
              >
                <div className="text-primary mb-2">
                  {/* Icon rendered here */}
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                <p className="mt-1 text-center text-xs text-gray-500 md:text-left">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
