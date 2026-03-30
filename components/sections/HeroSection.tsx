"use client";

import dynamic from "next/dynamic";
import Script from "next/script";
import { motion } from "framer-motion";

/* Load PixelBlast client-only (WebGL) */
const PixelBlast = dynamic(() => import("@/components/PixelBlast"), { ssr: false });

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function HeroSection() {
  return (
    <>
      {/* ── HERO ── Black bg + PixelBlast ───────────────────────────── */}
      <section className="relative bg-white pt-[68px] overflow-hidden">
        {/* PixelBlast fills the entire section */}
        <div className="absolute inset-0 z-0">
          <PixelBlast
            color="#32DC32"
            variant="square"
            pixelSize={3}
            patternScale={2}
            patternDensity={1}
            speed={0.4}
            edgeFade={0.35}
            transparent={true}
            rippleSpeed={0.25}
            rippleIntensityScale={0.8}
            rippleThickness={0.08}
          />
        </div>

        {/* Content grid */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 py-20 md:py-28 grid grid-cols-1 gap-12 lg:gap-16 items-start">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-7">
            {/* Live badge */}
            <motion.div {...fadeUp(0.05)}>
              <span className="inline-flex items-center gap-2 bg-[#32DC32]/10 border border-[#32DC32]/30 text-black text-[10px] font-semibold tracking-[.1em] uppercase px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#32DC32] pulse-dot" />
                Analyse en cours
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1 {...fadeUp(0.12)} className="font-heading font-black text-black leading-[1.06] tracking-[-0.03em]" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
              Vous perdez des clients<br />
              tous les jours{" "}
              <span className="text-[#32DC32]">sans le savoir.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p {...fadeUp(0.2)} className="text-black/80 text-[15px] leading-[1.75] max-w-[480px]">
              Nos experts analysent votre visibilité Google, vos avis et votre site
              pour identifier exactement ce qui freine vos clients.{" "}
              <span className="text-black/50 font-medium">Appel de 20 min — 100% gratuit, sans engagement.</span>
            </motion.p>

            {/* Pills */}
            <motion.div {...fadeUp(0.27)} className="flex flex-wrap gap-2.5">
              {[
                { icon: "⏱", label: "20 minutes" },
                { icon: "🎯", label: "100% gratuit" },
                { icon: "📊", label: "Audit personnalisé" },
                { icon: "🔒", label: "Sans engagement" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-black/80 text-[12px] px-3 py-1.5 rounded-full">
                  {icon} {label}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.33)} className="flex gap-8 pt-6 border-t border-white/10">
              {[
                { val: "+200", sub: "entreprises" },
                { val: "98%",  sub: "satisfaction" },
                { val: "×3",   sub: "plus de clients" },
              ].map(({ val, sub }) => (
                <div key={val}>
                  <p className="font-heading font-black text-[28px] text-[#32DC32] leading-none">{val}</p>
                  <p className="text-black/50 text-[11px] mt-1">{sub}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp(0.38)}>
              <a
                href="#calendrier"
                className="inline-flex items-center gap-2.5 bg-[#32DC32] text-black font-heading font-black text-[13px] uppercase tracking-[.08em] px-7 py-3.5 rounded-sm hover:bg-[#28c028] transition-colors duration-150"
              >
                Réserver mon audit gratuit →
              </a>
              <p className="text-black/50 text-[11px] mt-2">Aucun engagement — audit 100% offert</p>
            </motion.div>
          </div>

          {/* ── RIGHT — Calendar card ── */}
        </div>
      </section>  </>
  );
}
