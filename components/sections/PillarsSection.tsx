"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Edit pillar data here ─── */
const PILLARS = [
  {
    num: "01",
    tag: "Conseil & Diagnostic",
    title: "Conseil & Diagnostic d'Acquisition",
    body: "Nous analysons votre visibilité actuelle et votre marché pour identifier le vrai potentiel de génération de clients.",
    bullets: ["Vos positions sur Google", "Votre réputation (avis clients)", "Votre présence en ligne", "Vos opportunités de croissance"],
    goal: "Objectif : identifier pourquoi vous perdez des clients aujourd'hui.",
    scheme: "light" as const,
  },
  {
    num: "02",
    tag: "Stratégie & Conversion",
    title: "Stratégie d'Acquisition & Conversion",
    body: "Nous définissons un plan clair pour transformer votre visibilité en demandes clients concrètes.",
    bullets: ["Les bons canaux d'acquisition", "Les bons messages", "Un tunnel optimisé pour convertir"],
    goal: "Objectif : transformer votre trafic en clients.",
    scheme: "dark" as const,
  },
  {
    num: "03",
    tag: "Pilotage & Croissance",
    title: "Pilotage & Optimisation Continue",
    body: "Nous suivons et optimisons en continu pour maximiser vos résultats sur le long terme.",
    bullets: ["Analyse des performances", "Optimisation continue", "Automatisation des relances"],
    goal: "Objectif : générer des clients de manière régulière.",
    scheme: "green" as const,
  },
];

type Scheme = "light" | "dark" | "green";

const schemes: Record<Scheme, { bg: string; border: string; text: string; sub: string; bullet: string; arrow: string; goalColor: string; ghostColor: string; divider: string }> = {
  light: {
    bg: "bg-white",
    border: "border border-gray-200",
    text: "text-[#0a0a0a]",
    sub: "text-gray-500",
    bullet: "text-gray-600",
    arrow: "text-[#32DC32]",
    goalColor: "text-[#32DC32]",
    ghostColor: "rgba(50,220,50,0.05)",
    divider: "border-gray-100",
  },
  dark: {
    bg: "bg-[#0a0a0a]",
    border: "border border-[#222]",
    text: "text-white",
    sub: "text-gray-400",
    bullet: "text-gray-300",
    arrow: "text-[#32DC32]",
    goalColor: "text-[#32DC32]",
    ghostColor: "rgba(50,220,50,0.06)",
    divider: "border-[#222]",
  },
  green: {
    bg: "bg-[#32DC32]",
    border: "border-0",
    text: "text-black",
    sub: "text-black/70",
    bullet: "text-black/80",
    arrow: "text-black",
    goalColor: "text-black font-bold",
    ghostColor: "rgba(0,0,0,0.05)",
    divider: "border-black/10",
  },
};

function PillarCard({ pillar, index }: { pillar: typeof PILLARS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const s = schemes[pillar.scheme];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`relative rounded-2xl p-8 md:p-10 overflow-hidden ${s.bg} ${s.border} shadow-sm`}
    >
      {/* Ghost number */}
      <span className="absolute top-5 right-7 font-heading font-black text-[72px] leading-none select-none pointer-events-none"
        style={{ color: s.ghostColor }} aria-hidden>
        {pillar.num}
      </span>

      <p className={`text-[10px] font-semibold uppercase tracking-[.12em] mb-3 ${s.arrow}`}>{pillar.tag}</p>
      <h3 className={`font-heading font-bold text-[20px] leading-tight mb-4 ${s.text}`}>{pillar.title}</h3>
      <p className={`text-[14px] leading-relaxed mb-6 ${s.sub}`}>{pillar.body}</p>

      <ul className="space-y-2.5 mb-6">
        {pillar.bullets.map((b) => (
          <li key={b} className={`flex items-start gap-2.5 text-[13px] pb-2.5 border-b ${s.divider} last:border-0 ${s.bullet}`}>
            <span className={`shrink-0 font-bold text-xs mt-0.5 ${s.arrow}`}>→</span> {b}
          </li>
        ))}
      </ul>

      <p className={`text-[13px] font-heading font-semibold pt-4 border-t ${s.divider} ${s.goalColor}`}>
        {pillar.goal}
      </p>
    </motion.div>
  );
}

export default function PillarsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="pillars" className="bg-gray-50 border-t border-gray-100 py-20 md:py-28 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="text-[#32DC32] text-[10px] font-semibold uppercase tracking-[.14em] mb-4">Notre méthode</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2 className="font-heading font-black text-[#0a0a0a] leading-tight tracking-tight max-w-lg"
              style={{ fontSize: "clamp(24px, 2.8vw, 38px)" }}>
              3 piliers pour générer des clients régulièrement
            </h2>
            <a href="#calendrier"
              className="shrink-0 inline-flex items-center gap-2 bg-[#0a0a0a] text-white font-heading font-bold text-[12px] uppercase tracking-[.1em] px-5 py-2.5 rounded-sm hover:bg-[#222] transition-colors">
              Commencer →
            </a>
          </div>
        </motion.div>

        {/* Cards grid — no ScrollStack, no jitter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => <PillarCard key={p.num} pillar={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
