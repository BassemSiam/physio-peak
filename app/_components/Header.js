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

          {/* Desktop Navigation */}
          <Navigation onToggle={() => setIsOpen(true)} scrolled={scrolled} />

          {buttonDisplay ? (
            <div className="hidden md:block">
              <Link href="/contact" className="w-fit">
                <button className="bg-primary hover:text-primary cursor-pointer rounded-full px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white">
                  Contact us
                </button>
              </Link>
            </div>
          ) : (
            <div></div>
          )}
        </header>
      </div>

      {isOpen && <MenuNavigation closeMenu={() => setIsOpen(false)} />}
    </>
  );
}

export default Header;
