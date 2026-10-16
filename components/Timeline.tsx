"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { companies } from "@/lib/companies";

const milestones = [
  ...companies.map((c) => ({ year: c.year, title: c.name, subtitle: c.milestone, color: c.color })),
  { year: "2025", title: "COLAB House opens", subtitle: "One roof in Bruma. The serious office upgrade.", color: "#111113" },
].sort((a, b) => a.year.localeCompare(b.year));

export default function Timeline() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useLayoutEffect(() => {
    const measure = () => track.current && setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section id="timeline" ref={section} className="relative bg-colab-paper md:h-[320vh]">
      <div className="md:sticky md:top-0 md:flex md:h-[100dvh] md:flex-col md:justify-center md:overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-5 pt-28 sm:px-8 md:pt-0">
          <p className="mb-4 text-sm font-medium text-colab-green">Our journey</p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Twenty-one years in the making.</h2>
        </div>

        {/* Desktop: scroll drives the row sideways */}
        <div className="relative mt-16 hidden md:block">
          <div className="absolute left-0 right-0 top-[11px] h-px bg-black/10" />
          <motion.div
            className="absolute left-0 top-[11px] h-px"
            style={{ width: line, background: "linear-gradient(90deg,#ED1C24,#8DC63F,#F15A29,#29ABE2,#7B2D8E,#F05A2B)" }}
          />
          <motion.div ref={track} style={{ x }} className="flex w-max gap-6 pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pr-[20vw]">
            {milestones.map((m) => (
              <div key={m.title} className="w-[340px] shrink-0">
                <span className="block h-[22px] w-[22px] rounded-full border-4 border-colab-paper" style={{ backgroundColor: m.color }} />
                <p className="mt-8 text-7xl font-semibold tracking-tighter" style={{ color: m.color }}>
                  {m.year}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-black/55">{m.subtitle}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Phone: plain vertical list */}
        <ol className="mx-5 mt-12 space-y-10 border-l border-black/10 pb-28 pl-8 md:hidden">
          {milestones.map((m) => (
            <motion.li
              key={m.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <span className="absolute -left-[39px] top-2 h-3.5 w-3.5 rounded-full" style={{ backgroundColor: m.color }} />
              <p className="text-4xl font-semibold tracking-tighter" style={{ color: m.color }}>
                {m.year}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{m.title}</h3>
              <p className="mt-1 text-black/55">{m.subtitle}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
