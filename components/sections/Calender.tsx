"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay },
});

const Calendar: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // IntersectionObserver for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Inject script INSIDE the widget container div
  useEffect(() => {
    if (!widgetRef.current) return;

    const script = document.createElement("script");
    script.src = "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";
    script.setAttribute("data-widget-id", "69c55f439fb3285a903733e5");
    script.async = true;

    widgetRef.current.appendChild(script);

    return () => {
      if (widgetRef.current?.contains(script)) {
        widgetRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 border-y border-gray-100 py-20 px-6"
    >
      <div className="max-w-[860px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-10"
        >
          <p className="text-[#32DC32] text-[10px] font-semibold uppercase tracking-[.14em] mb-3">
            Témoignage client
          </p>
          <h2
            className="font-heading font-black text-[#0a0a0a] leading-tight tracking-tight"
            style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
          >
            Des résultats concrets pour des entreprises comme la vôtre
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.18)} id="calendrier" className="w-full">
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
            {/* Card header */}
            <div className="px-6 py-5 border-b border-white/10">
              <p className="text-[#32DC32] text-[10px] font-semibold uppercase tracking-[.12em] mb-1">
                📅 Sélection du créneau
              </p>
              <h2 className="font-heading font-bold text-white text-[17px]">
                Réservez votre audit personnalisé
              </h2>
              <p className="text-gray-500 text-[12px] mt-0.5">
                Expert dédié · 20 min offertes · Sans engagement
              </p>
            </div>

            {/* Widget renders here */}
            <div
              ref={widgetRef}
              className="bg-white min-h-[560px]"
            />

            {/* Micro-copy */}
            <div className="px-6 py-3 border-t border-white/10 text-center">
              <p className="text-[11px] text-gray-500">
                Aucun engagement —{" "}
                <span className="text-[#32DC32] font-semibold">
                  audit 100% offert
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calendar;