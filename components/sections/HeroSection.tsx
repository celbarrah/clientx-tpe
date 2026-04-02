"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const LeadConnectorWidget = dynamic(
  () => import("@/components/sections/LeadConnectorWidget"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="bg-[#f0f0ee]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 relative top-26">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* ── LEFT CONTENT ── */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left lg:sticky lg:top-[88px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111] leading-tight">
              Analysez votre visibilité{" "}
              <span className="text-[#32DC32]">digitale en 1 min !</span>
            </h1>

            <div className="relative flex justify-center lg:justify-start">
              <Image
                src="/Audit.webp"
                alt="Audit Digital ClientX"
                width={520}
                height={320}
                className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto rounded-2xl object-cover"
                unoptimized
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-[#111]">
                <span className="font-extrabold text-[#32DC32]">+100 000 </span>
                Clients nous font confiance
              </p>
              <p className="text-base sm:text-lg text-[#111]">
                <span className="font-extrabold text-[#32DC32]">
                  Une agence certifiée ISO 9001
                </span>
              </p>
            </div>
          </div>

          {/* ── RIGHT CONTENT (The Widget Card) ── */}
          <div className="w-full" id="audit">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-visible">
              <div className="px-5 sm:px-8 py-5 sm:py-6 text-center border-b border-gray-50">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111]">
                  Obtenez votre audit visibilité gratuit
                </h2>
              </div>
              <div className="p-2 sm:p-3">
                <LeadConnectorWidget />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}