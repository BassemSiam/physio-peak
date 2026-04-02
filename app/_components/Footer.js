import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Printer } from "lucide-react";
import { informationData } from "../_data/servicesData";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 pt-12 pb-6 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 border-b border-gray-800 pb-10 md:grid-cols-3">
        {/* Column 1: Brand & Bio */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Physio Peak Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold tracking-tight">
              Physio <span className="text-primary font-semibold">Peak</span>
            </span>
          </div>
          <p className="leading-relaxed text-gray-400">
            Helping you reach the peak of your physical health. Expert
            physiotherapy focused on strength, recovery, and your highest
            potential.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="mb-4 text-lg text-xs font-semibold tracking-wide text-white uppercase">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-primary transition">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#testimonials"
                className="hover:text-primary transition"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="https://physio-peak-pty-ltd.au4.cliniko.com/bookings#location"
                target="_blank"
                className="hover:text-primary font-medium transition"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Locations */}
        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-wide text-white uppercase md:text-lg">
            Our Locations
          </h3>
          <div className="space-y-8">
            {informationData.map((clinic, index) => (
              <div
                key={index}
                className="border-primary/30 hover:border-primary flex flex-col space-y-3 border-l-2 pl-4 transition-all"
              >
                <h4 className="font-bold text-gray-100">{clinic.place}</h4>

                <div className="flex flex-col space-y-2 text-sm text-gray-400">
                  {/* Phone 1 */}
                  <a
                    href={`tel:${clinic.dial1}`}
                    className="hover:text-primary flex items-center gap-3 transition-colors"
                  >
                    <Phone size={14} className="text-primary shrink-0" />
                    <span className="tabular-nums">{clinic.number1}</span>
                  </a>

                  {/* Phone 2 (Conditional Check) */}
                  {clinic.number2 && (
                    <a
                      href={`tel:${clinic.dial2}`}
                      className="hover:text-primary flex items-center gap-3 transition-colors"
                    >
                      <Phone size={14} className="text-primary shrink-0" />
                      <span className="tabular-nums">{clinic.number2}</span>
                    </a>
                  )}

                  {/* Fax */}
                  <div className="flex items-center gap-3 text-gray-400">
                    <Printer size={14} className="text-primary shrink-0" />
                    <span>
                      <span className="mr-1 font-semibold text-gray-500">
                        Fax:
                      </span>
                      <span className="tabular-nums">{clinic.fax}</span>
                    </span>
                  </div>

                  {/* Address */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary mt-1 flex items-start gap-3 transition"
                  >
                    <MapPin
                      size={16}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <span className="text-xs leading-relaxed">
                      {clinic.address}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Single Email at the end */}
          <div className="mt-8 border-t border-gray-800 pt-6">
            <a
              href="mailto:info@physiopeak.com.au"
              className="group flex items-center gap-3"
            >
              <div className="group-hover:bg-primary rounded-full bg-gray-800 p-2 transition-colors">
                <Mail size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                  Email Us
                </span>
                <span className="group-hover:text-primary font-medium text-gray-200 transition">
                  info@physiopeak.com.au
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between text-xs text-gray-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Physio{" "}
          <span className="text-primary font-semibold">Peak</span>{" "}
          Physiotherapy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
