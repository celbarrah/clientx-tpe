"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TestimonialSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-gray-50 border-y border-gray-100 py-20 px-6">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-10"
        >
          <p className="text-[#32DC32] text-[10px] font-semibold uppercase tracking-[.14em] mb-3">
            Témoignage client
          </p>
          <h2 className="font-heading font-black text-[#0a0a0a] leading-tight tracking-tight"
            style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}>
            Des résultats concrets pour des entreprises comme la vôtre
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 relative overflow-hidden shadow-sm"
        >
          {/* Giant quote mark */}
          <span className="absolute top-4 left-6 font-heading font-black text-[#32DC32] select-none pointer-events-none leading-none"
            style={{ fontSize: 100, opacity: 0.06 }} aria-hidden>
            "
          </span>

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 18 18" fill="#32DC32">
                <path d="M9 1l2.2 4.5 5 .7-3.6 3.5.8 5L9 12.4l-4.4 2.3.8-5L1.8 6.2l5-.7z" />
              </svg>
            ))}
          </div>

          <blockquote className="text-gray-700 text-[17px] md:text-[19px] leading-[1.75] italic mb-8 relative z-10">
            &ldquo;Avant, je ne comprenais pas pourquoi je n&apos;avais pas assez de clients.
            En quelques minutes, j&apos;ai vu exactement ce qui n&apos;allait pas.
            Résultat : plus d&apos;appels, plus de demandes, et surtout une vraie stratégie.&rdquo;
          </blockquote>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#32DC32] flex items-center justify-center font-heading font-black text-black text-sm shrink-0">
              JD
            </div>
            <div>
              <p className="font-semibold text-[#0a0a0a] text-sm">Jean Dupont</p>
              <p className="text-gray-400 text-xs">Artisan — Lyon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
