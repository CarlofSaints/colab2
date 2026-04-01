"use client";

import { motion } from "framer-motion";

const dots = [
  { color: "#ED1C24", delay: 0.8 },  // C - red
  { color: "#FFFFFF", delay: 1.0, dash: true }, // O - dash (white on dark bg)
  { color: "#8DC63F", delay: 1.2 },  // L - green
  { color: "#F15A29", delay: 1.4 },  // A - orange
  { color: "#29ABE2", delay: 1.6 },  // B - blue
];

const letters = ["C", "O", "L", "A", "B"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-colab-black overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* COLAB Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Letters */}
        <div className="flex items-end gap-3 sm:gap-6 md:gap-10">
          {letters.map((letter, i) => (
            <motion.div
              key={letter}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-widest">
                {letter}
              </span>
              {/* Dot or dash below */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: dots[i].delay, duration: 0.4, type: "spring" }}
                className="mt-2 sm:mt-4"
              >
                {dots[i].dash ? (
                  <div
                    className="w-6 sm:w-8 md:w-10 h-1.5 sm:h-2"
                    style={{ backgroundColor: dots[i].color }}
                  />
                ) : (
                  <div
                    className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full"
                    style={{ backgroundColor: dots[i].color }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-10 sm:mt-14 text-lg sm:text-xl md:text-2xl text-white/70 font-light tracking-[0.2em] uppercase text-center px-4"
        >
          Where Retail Meets Results
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-4 text-sm sm:text-base text-white/40 font-light text-center max-w-md px-4"
        >
          Five specialist companies. One roof. Complete retail solutions.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-xs text-white/30 uppercase tracking-widest group-hover:text-white/50 transition-colors">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-white/30 animate-bounce-slow group-hover:text-white/50 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
