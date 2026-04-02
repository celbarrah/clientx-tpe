"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Découvrir ClientX", href: "https://clientx.uk" },
  { label: "Calculateur Roi",      href: "https://clientx.uk/calculer-votre-retour-sur-investissement/" },
  { label: "Blog",              href: "https://clientx.uk/blog" },
  { label: "Nous contacter",    href: "https://clientx.uk/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* Logo */}
       <a href="https://clientx.uk">
         <Image
          src="https://clientx.uk/wp-content/uploads/2026/01/clientx-iso.png"
          alt="ClientX"
          width={130}
          height={36}
          className="h-20 w-auto"
          priority
          unoptimized
        /> 
       </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA + mobile burger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:33757933495"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +33 757 93 34 95
          </a>

          <a
            href="#audit"
            className="hidden sm:inline-flex bg-[#32DC32] text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#27b527] transition-colors duration-150"
          >
            Lancer mon audit gratuit
          </a>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger >
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-5 h-5 text-gray-700" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] p-0 bg-white">
              <div className="flex flex-col h-full">

                {/* Sheet header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                  <Image
                    src="https://clientx.uk/wp-content/uploads/2026/01/clientx-iso.png"
                    alt="ClientX"
                    width={100}
                    height={28}
                    className="h-10 w-auto"
                    unoptimized
                  />
                  <button
                    onClick={() => setOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                  {NAV_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Bottom CTAs */}
                <div className="px-4 pb-8 flex flex-col gap-3 border-t border-gray-100 pt-5">
                  <a
                    href="tel:33757933495"
                    className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                  >
                    <Phone className="w-4 h-4" />
                    +33 757 93 34 95
                  </a>
                  <a
                    href="#widget"
                    onClick={() => setOpen(false)}
                    className="bg-[#32DC32] text-black text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#27b527] transition-colors duration-150 text-center"
                  >
                    Lancer mon audit gratuit
                  </a>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}