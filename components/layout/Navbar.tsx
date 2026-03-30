"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-[68px] flex items-center transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="https://clientx.uk/wp-content/uploads/2026/01/clientx-iso.png"
            alt="ClientX"
            width={140}
            height={56}
            className="h-20 w-auto object-contain"
            priority
            unoptimized
          />
        </Link>

        {/* CTA */}
        <a
          href="#calendrier"
          className="inline-flex items-center gap-2 bg-[#32DC32] text-black font-heading font-bold text-[12px] uppercase tracking-[.1em] px-5 py-2.5 rounded-sm hover:bg-[#28c028] transition-colors duration-150"
        >
          Réserver mon audit gratuit
        </a>
      </div>
    </header>
  );
}
