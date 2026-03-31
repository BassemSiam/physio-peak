import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { informationData } from "../_data/servicesData";
import SocialMedia from "./SocialMedia";

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
          <h3 className="mb-4 text-lg font-semibold tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
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
                className="hover:text-primary transition"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Locations & General Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold tracking-wide text-white">
            Our Locations
          </h3>
          <div className="space-y-6">
            {informationData.map((clinic, index) => (
              <div
                key={index}
                className="flex flex-col space-y-2 border-l border-gray-700 pl-4"
              >
                <h4 className="font-medium text-gray-200">{clinic.place}</h4>
                <div className="flex flex-col space-y-1 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-primary shrink-0" />
                    <a
                      href={`tel:${clinic.number1.replace(/\s+/g, "")}`}
                      className="hover:text-primary transition"
                    >
                      {clinic.number1}
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-primary mt-1 shrink-0" />
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${clinic.lat},${clinic.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary text-xs leading-tight transition"
                    >
                      {clinic.address}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Single Email at the end */}
          <div className="mt-8 border-t border-gray-800 pt-6">
            <div className="group flex items-center gap-3">
              <div className="group-hover:bg-primary rounded-full bg-gray-800 p-2 transition-colors">
                <Mail size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                  Email Us
                </span>
                <a
                  href="mailto:info@physiopeak.com.au"
                  className="hover:text-primary font-medium text-gray-200 transition"
                >
                  info@physiopeak.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between pt-6 text-sm text-gray-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Physio{" "}
          <span className="text-primary font-semibold">Peak</span>{" "}
          Physiotherapy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
