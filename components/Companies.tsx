"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { companies } from "@/lib/companies";

export default function Companies() {
  return (
    <section id="companies" className="relative overflow-hidden bg-colab-black py-28 text-white sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-medium text-colab-blue">The partners</p>
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Six businesses. Each one a specialist.
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-white/50">
            Use one of us, or bring the whole table in. Either way you deal with people who know their lane.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((c, i) => {
            const Tag = c.url ? motion.a : motion.div;
            return (
              <Tag
                key={c.name}
                {...(c.url ? { href: c.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                onPointerMove={(e: React.PointerEvent<HTMLElement>) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
                }}
                style={{ "--accent": c.color } as React.CSSProperties}
                className="spotlight group flex min-h-[320px] flex-col overflow-hidden rounded-3xl bg-white/[0.04] p-8 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-white"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ backgroundColor: c.color }}
                />
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-white/40">Est. {c.year}</span>
                  {c.logo ? (
                    <span className={`${c.flag ? "bob " : ""}flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1.5`}>
                      <Image src={c.logo} alt="" width={96} height={96} className="h-full w-full object-contain" />
                    </span>
                  ) : (
                    <span className="h-3 w-3 rounded-full transition-transform duration-300 group-hover:scale-150" style={{ backgroundColor: c.color }} />
                  )}
                </div>

                <h3 className="mt-8 text-3xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm font-medium" style={{ color: c.color }}>
                  {c.tagline}
                </p>
                {c.flag && (
                  <span className="mt-4 w-fit rounded-md border px-2 py-0.5 text-xs font-medium" style={{ borderColor: c.color, color: c.color }}>
                    {c.flag}
                  </span>
                )}
                <p className="mt-5 text-[15px] leading-relaxed text-white/55">{c.description}</p>

                {c.url && (
                  <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-white/80 group-hover:text-white">
                    Visit website
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                )}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
