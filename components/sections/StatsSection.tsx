"use client";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

const STATS = [
  {
    val: 97,
    suffix: " %",
    desc: "des consommateurs utilisent internet pour trouver un prestataire ou un commerce",
  },
  {
    val: 78,
    suffix: " %",
    desc: "des entreprises perdent des clients faute d'une présence digitale optimisée",
  },
  {
    val: 3,
    suffix: "×",
    desc: "plus de leads générés avec une stratégie digitale bien structurée et pilotée",
  },
];

const easeOutQuart = (t: number, b: number, c: number, d: number) =>
  c * (1 - Math.pow(1 - t / d, 4)) + b;

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-6 px-6">
      <div className="max-w-6xl mx-auto">

        <div ref={sectionRef} className="bg-[#f0f0ee] rounded-2xl px-8 py-12 mb-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111] leading-snug">
              Assurer sa visibilité
            </h2>
            <p className="text-2xl md:text-3xl font-normal text-[#111] leading-snug">
              c'est s'assurer de nouveaux clients&nbsp;!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.val}>
                <p className="text-5xl font-extrabold text-[#32DC32] mb-3 tabular-nums">
                  {started ? (
                    <CountUp
                      end={stat.val}
                      duration={2}
                      suffix={stat.suffix}
                      useEasing
                      easingFn={easeOutQuart}
                    />
                  ) : (
                    <>0{stat.suffix}</>
                  )}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed max-w-[220px] mx-auto">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <a
            href="#audit"
            className="inline-block bg-[#32DC32] text-black font-semibold text-base w-[300px] py-4 rounded-full hover:bg-[#27b527] transition-colors"
          >
            Lancer mon audit gratuit
          </a>
        </div>

      </div>
    </section>
  );
}