"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navigation({ onToggle, scrolled }) {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav>
      {/* Desktop Links */}
      <ul className="hidden items-center gap-15 md:flex">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href} className="group relative">
              <Link
                href={link.href}
                className={`text-lg font-semibold tracking-wide transition-colors ${
                  active
                    ? `${scrolled ? "text-black" : "text-white"}`
                    : `${scrolled ? "text-black/50 hover:text-black" : "text-white/80 hover:text-primary"}`
                }`}
              >
                {link.name}
              </Link>
              <span
                className={`bg-primary absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  active ? "w-full" : ""
                }`}
              />
            </li>
          );
        })}
      </ul>
      <button
        onClick={onToggle}
        className="flex items-center justify-center p-2 text-white md:hidden"
      >
        <HiOutlineMenuAlt3
          size={35}
          color={`${scrolled ? "black" : "white"} `}
        />
      </button>
    </nav>
  );
}

export default Navigation;
