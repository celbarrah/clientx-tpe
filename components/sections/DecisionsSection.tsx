"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { val: "+200", label: "entreprises accompagnées" },
  { val: "98%",  label: "satisfaction client" },
  { val: "×3",   label: "plus de clients en moy." },
];

const CERTS = [
  { src: "https://clientx.uk/wp-content/uploads/2025/07/iso.png",          alt: "ISO 9001" },
  { src: "https://clientx.uk/wp-content/uploads/2025/07/google-partner-2.png", alt: "Google Partner" },
  { src: "https://clientx.uk/wp-content/uploads/2025/07/meta-primary.png", alt: "Meta Partner" },
];

export default function DecisionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#32DC32] text-[10px] font-semibold uppercase tracking-[.14em] mb-5">Notre approche</p>
            <h2 className="font-heading font-black text-[#0a0a0a] leading-[1.08] tracking-[-0.025em] mb-0"
              style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }}>
              Des décisions basées<br />
              sur des{" "}
              <span className="text-[#32DC32]">données</span>,<br />
              pas sur du hasard.
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-10">
              De nombreuses entreprises nous font confiance pour analyser leur
              acquisition et identifier les leviers de croissance. Notre approche
              est simple :{" "}
              <strong className="text-[#0a0a0a] font-semibold">comprendre ce qui bloque…</strong>
              {" "}et activer ce qui génère des clients.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {STATS.map(({ val, label }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  <p className="font-heading font-black text-[32px] text-[#0a0a0a] leading-none">{val}</p>
                  <p className="text-gray-400 text-[11px] mt-1 leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Cert logos */}
            <div className="flex items-center gap-5 flex-wrap pt-6 border-t border-gray-100">
              <span className="text-gray-300 text-[10px] uppercase tracking-widest font-semibold">Certifiés</span>
              {CERTS.map(({ src, alt }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={alt} src={src} alt={alt} className="h-7 w-auto object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
