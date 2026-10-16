"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { companies } from "@/lib/companies";

const milestones = [
  ...companies.map((c) => ({ year: c.year, title: c.name, subtitle: c.milestone, color: c.color, logo: c.logo })),
  { year: "2025", title: "COLAB House opens", subtitle: "One roof in Bruma. The serious office upgrade.", color: "#111113", logo: "/logos/colab-logo.png" },
].sort((a, b) => a.year.localeCompare(b.year));

// Nodes sit on a gentle wave across a 1000x100 box: even ones low, odd ones high.
const pts = milestones.map((_, i) => ({ x: 90 + (i * 820) / (milestones.length - 1), y: i % 2 ? 40 : 60 }));
const wave =
  `M0,50 C30,50 30,${pts[0].y} ${pts[0].x},${pts[0].y} ` +
  pts
    .slice(1)
    .map((p, i) => {
      const a = pts[i];
      const mid = (a.x + p.x) / 2;
      return `C${mid},${a.y} ${mid},${p.y} ${p.x},${p.y}`;
    })
    .join(" ") +
  ` C970,${pts[pts.length - 1].y} 970,50 1000,50`;

const STEP = 0.45; // seconds between nodes as the line draws itself
const DRAW = 0.4 + STEP * milestones.length;

function Badge({ logo, title, color, size = "lg" }: { logo?: string; title: string; color: string; size?: "lg" | "sm" }) {
  const box = size === "lg" ? "h-16 min-w-16" : "h-12 min-w-12";
  if (!logo) {
    const initials = title.split(" ").map((w) => w[0]).join("").slice(0, 2);
    return (
      <span className={`${box} flex items-center justify-center rounded-2xl text-lg font-semibold text-white shadow-lg`} style={{ backgroundColor: color, boxShadow: `0 10px 30px -10px ${color}` }}>
        {initials}
      </span>
    );
  }
  return (
    <span className={`${box} flex items-center justify-center rounded-2xl bg-white px-2.5 shadow-lg ring-1 ring-black/5`} style={{ boxShadow: `0 10px 30px -12px ${color}` }}>
      <Image src={logo} alt={`${title} logo`} width={240} height={120} className={`${size === "lg" ? "h-11" : "h-8"} w-auto max-w-[110px] object-contain`} />
    </span>
  );
}

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section id="timeline" className="flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-colab-paper py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <p className="mb-4 text-sm font-medium text-colab-green">Our journey</p>
        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Twenty-one years in the making.</h2>
      </div>

      {/* Desktop: the whole story on one screen, drawn automatically */}
      <div ref={ref} className="relative mx-auto mt-6 hidden h-[480px] w-full max-w-7xl lg:block">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="wave" x1="0" x2="1">
              {milestones.map((m, i) => (
                <stop key={m.title} offset={i / (milestones.length - 1)} stopColor={m.color === "#111113" ? "#888" : m.color} />
              ))}
            </linearGradient>
          </defs>
          <path d={wave} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth={2} vectorEffect="non-scaling-stroke" />
          <motion.path
            d={wave}
            fill="none"
            stroke="url(#wave)"
            strokeWidth={3}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: DRAW, ease: "linear" }}
          />
          {/* once drawn, a soft pulse keeps running along the line */}
          <motion.path
            d={wave}
            fill="none"
            stroke="white"
            strokeOpacity={0.9}
            strokeWidth={3}
            strokeDasharray="0.04 0.96"
            pathLength={1}
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0, strokeDashoffset: 0 }}
            animate={inView ? { opacity: 1, strokeDashoffset: -1 } : {}}
            transition={{ opacity: { delay: DRAW }, strokeDashoffset: { delay: DRAW, duration: 5, repeat: Infinity, ease: "linear" } }}
          />
        </svg>

        {milestones.map((m, i) => {
          const up = i % 2 === 1;
          const p = pts[i];
          const delay = 0.4 + i * STEP;
          return (
            <div key={m.title} className="absolute" style={{ left: `${p.x / 10}%`, top: `${p.y}%` }}>
              <motion.span
                className="absolute -left-2.5 -top-2.5 block h-5 w-5 rounded-full border-4 border-colab-paper"
                style={{ backgroundColor: m.color }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay, type: "spring", stiffness: 400, damping: 15 }}
              />
              <motion.div
                className={`absolute left-0 flex w-44 -translate-x-1/2 flex-col items-center text-center ${up ? "bottom-6 flex-col-reverse" : "top-6"}`}
                initial={{ opacity: 0, y: up ? 20 : -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: delay + 0.05, type: "spring", stiffness: 160, damping: 16 }}
              >
                <motion.div
                  animate={inView ? { y: [0, -5, 0] } : {}}
                  transition={{ delay: DRAW + i * 0.3, duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className={up ? "mt-3" : "mb-3"}
                >
                  <Badge logo={m.logo} title={m.title} color={m.color} />
                </motion.div>
                <div>
                  <p className="text-3xl font-semibold tracking-tighter" style={{ color: m.color }}>
                    {m.year}
                  </p>
                  <h3 className="text-sm font-semibold">{m.title}</h3>
                  <p className="mt-1 text-xs leading-snug text-black/50">{m.subtitle}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Phone and tablet: vertical list that animates in on its own */}
      <ol className="mx-5 mt-12 space-y-8 border-l border-black/10 pl-8 sm:mx-8 lg:hidden">
        {milestones.map((m, i) => (
          <motion.li
            key={m.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
            className="relative flex items-start gap-4"
          >
            <span className="absolute -left-[39px] top-4 h-3.5 w-3.5 rounded-full" style={{ backgroundColor: m.color }} />
            <Badge logo={m.logo} title={m.title} color={m.color} size="sm" />
            <div>
              <p className="text-2xl font-semibold tracking-tighter" style={{ color: m.color }}>
                {m.year}
              </p>
              <h3 className="font-semibold">{m.title}</h3>
              <p className="mt-0.5 text-sm text-black/55">{m.subtitle}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
