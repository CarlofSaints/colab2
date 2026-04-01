"use client";

import { motion } from "framer-motion";

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  color: string;
}

const milestones: Milestone[] = [
  {
    year: "2005",
    title: "Atomic Marketing Is Born",
    subtitle: "Where it all exploded — Atomic Spark ignites the journey.",
    color: "#ED1C24",
  },
  {
    year: "2011",
    title: "iRam Enters the Scene",
    subtitle: "Precision meets purpose — where retail meets detail.",
    color: "#8DC63F",
  },
  {
    year: "2017",
    title: "OuterJoin Launches",
    subtitle: "Connecting the dots — ideas and data finally sync.",
    color: "#F15A29",
  },
  {
    year: "2020",
    title: "Digital Takes Over",
    subtitle: "Atomic Digital goes live — creativity meets the cloud.",
    color: "#29ABE2",
  },
  {
    year: "2022",
    title: "Catalyst Ignites",
    subtitle: "Turning spark into surge — energy, change, acceleration.",
    color: "#7B2D8E",
  },
  {
    year: "2025",
    title: "COLAB House Opens",
    subtitle: "One roof, five companies — the serious office upgrade.",
    color: "#111111",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-colab-green mb-4">
            Our Journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-colab-black">
            20 Years in the Making
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-colab-red via-colab-green to-colab-blue" />
        </motion.div>

        {/* Desktop Timeline (horizontal) */}
        <div className="hidden lg:block relative">
          {/* Horizontal line */}
          <div className="absolute top-[60px] left-0 right-0 h-1 timeline-line rounded-full" />

          <div className="grid grid-cols-6 gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Dot on line */}
                <div
                  className="w-5 h-5 rounded-full border-4 border-white shadow-lg z-10 mt-[50px]"
                  style={{ backgroundColor: m.color }}
                />

                {/* Year */}
                <div
                  className="mt-4 text-3xl font-black"
                  style={{ color: m.color }}
                >
                  {m.year}
                </div>

                {/* Title */}
                <h3 className="mt-2 text-sm font-bold text-colab-black uppercase tracking-wide">
                  {m.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-1 text-xs text-gray-400 leading-relaxed">
                  {m.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (vertical) */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-colab-red via-colab-green to-colab-purple" />

          <div className="flex flex-col gap-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div
                  className="absolute left-[17px] top-1 w-4 h-4 rounded-full border-4 border-white shadow-lg"
                  style={{ backgroundColor: m.color }}
                />

                {/* Year */}
                <div
                  className="text-2xl font-black"
                  style={{ color: m.color }}
                >
                  {m.year}
                </div>

                <h3 className="mt-1 text-base font-bold text-colab-black">
                  {m.title}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{m.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
