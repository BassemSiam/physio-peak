"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import MenuNavigation from "./MenuNavigation";
import Link from "next/link";

function Header({ buttonDisplay }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle background change on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full transition-all duration-300">
        <header
          className={`mx-auto flex w-full items-center justify-between rounded-b-3xl px-4 transition-all duration-500 ${
            scrolled
              ? "border border-white/10 bg-white/60 shadow-2xl backdrop-blur-xl "
              : "bg-transparent "
          }`}
        >
          {/* Logo Area */}
          <div className="relative -left-6 h-20 w-24 transition-transform hover:scale-105 md:h-20 md:w-30">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                priority
                className="h-full w-full object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center gap-3 md:contents">
            
            {/* The Button */}
            <Link
              href="https://physio-peak-pty-ltd.au4.cliniko.com/bookings#location"
              className="order-1 md:order-3" // Appears first on mobile, last on desktop
              target="_blank"
            >
              <button className="bg-primary hover:text-primary cursor-pointer rounded-full px-3 py-2 text-[11px] font-bold text-white transition-all duration-300 hover:bg-white md:px-5 md:py-3 md:text-sm">
                <span className="md:hidden">BOOK NOW</span>
                <span className="hidden md:inline">BOOK APPOINTMENT</span>
              </button>
            </Link>

            {/* The Navigation / Hamburger */}
            <div className="order-2 md:order-2">
              <Navigation onToggle={() => setIsOpen(true)} scrolled={scrolled} />
            </div>
          </div>
        </header>
      </div>

      {isOpen && <MenuNavigation closeMenu={() => setIsOpen(false)} />}
    </>
  );
}

export default Header;