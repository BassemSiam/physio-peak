import Image from "next/image";
import Link from "next/link";
import ContactData from "./ContactDataa";

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
              Physio <span className="text-primary">Peak</span>
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
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
          <ContactData px={0} py={0} />
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
