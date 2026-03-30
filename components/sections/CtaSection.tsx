"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-24 md:py-32 px-6 relative overflow-hidden text-center">
      {/* Radial green glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(50,220,50,0.12) 0%, transparent 70%)" }} aria-hidden />

      <div className="relative z-10 max-w-[640px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <p className="text-[#32DC32] text-[10px] font-semibold uppercase tracking-[.14em] mb-5">
            Passez à l&apos;action
          </p>
          <h2 className="font-heading font-black text-white leading-[1.06] tracking-[-0.025em] mb-5"
            style={{ fontSize: "clamp(28px, 3.8vw, 50px)" }}>
            Vous avez un enjeu<br />business<span className="text-[#32DC32]">?</span>
          </h2>
          <p className="text-gray-400 text-[15px] leading-[1.75] mb-10">
            Ne laissez plus vos concurrents récupérer vos clients.
            Découvrez en 20 minutes ce qui bloque votre acquisition.
          </p>

          <a href="#calendrier"
            className="inline-flex items-center gap-3 bg-[#32DC32] text-black font-heading font-black text-[14px] uppercase tracking-[.08em] px-10 py-4 rounded-sm hover:bg-[#28c028] transition-colors duration-150 group">
            Réserver mon audit gratuit
            <span className="group-hover:translate-x-1 transition-transform duration-150">→</span>
          </a>
          <p className="text-gray-600 text-[11px] mt-4">Aucun engagement — audit offert</p>

          {/* Trust pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {["⏱ 20 minutes", "🔒 100% confidentiel", "🎯 Expert dédié", "✅ Sans engagement"].map((item) => (
              <span key={item} className="text-gray-500 text-[12px]">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
