"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { brandDots } from "@/lib/companies";

const letters = ["C", "O", "L", "A", "B"];
const orbs = [
  { color: "#ED1C24", className: "left-[8%] top-[18%] h-[38vw] w-[38vw]", delay: "0s" },
  { color: "#8DC63F", className: "right-[6%] top-[10%] h-[30vw] w-[30vw]", delay: "-6s" },
  { color: "#F15A29", className: "left-[30%] bottom-[-10%] h-[34vw] w-[34vw]", delay: "-12s" },
  { color: "#29ABE2", className: "right-[20%] bottom-[5%] h-[26vw] w-[26vw]", delay: "-18s" },
];

export default function Hero() {
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(600px circle at ${sx}% ${sy}%, rgba(255,255,255,0.09), transparent 60%)`;

  return (
    <section
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 100);
        my.set(((e.clientY - r.top) / r.height) * 100);
      }}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-colab-black text-white"
    >
      {orbs.map((o) => (
        <div
          key={o.color}
          aria-hidden
          className={`orb ${o.className}`}
          style={{ backgroundColor: o.color, animationDelay: o.delay }}
        />
      ))}
      <motion.div aria-hidden className="absolute inset-0" style={{ background: glow }} />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-5">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-10 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-white/70 uppercase backdrop-blur"
        >
          COLAB House · Bruma, Johannesburg
        </motion.p>

        <h1 className="sr-only">COLAB: six specialist retail businesses under one roof in Bruma, Johannesburg</h1>
        <div aria-hidden className="relative flex items-end gap-4 sm:gap-8 md:gap-12">
          {letters.map((letter, i) => (
            <motion.div
              key={letter}
              initial={{ opacity: 0, y: 60, rotateX: -60 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.25 + i * 0.09, type: "spring", stiffness: 120, damping: 14 }}
              whileHover={{ y: -10 }}
              className="flex cursor-default flex-col items-center"
            >
              <span className="text-6xl font-semibold leading-none sm:text-8xl md:text-[10rem]">{letter}</span>
              <motion.div
                initial={{ scale: 0, y: -40 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.12, type: "spring", stiffness: 300, damping: 12 }}
                className="mt-4 sm:mt-6"
              >
                {brandDots[i].dash ? (
                  <div className="h-1.5 w-7 bg-white sm:h-2 sm:w-10 md:w-14" />
                ) : (
                  <div
                    className="h-3.5 w-3.5 rounded-full sm:h-5 sm:w-5 md:h-6 md:w-6"
                    style={{ backgroundColor: brandDots[i].color, boxShadow: `0 0 24px ${brandDots[i].color}` }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
          {/* the ² from the logo */}
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.7, type: "spring", stiffness: 200, damping: 12 }}
            className="absolute -right-6 -top-4 flex h-9 w-9 items-center justify-center rounded-full text-base font-bold sm:-right-10 sm:h-12 sm:w-12 sm:text-xl md:-right-14 md:h-16 md:w-16 md:text-3xl"
            style={{ background: "conic-gradient(#ED1C24, #F15A29, #8DC63F, #29ABE2, #ED1C24)" }}
          >
            <span className="flex h-[78%] w-[78%] items-center justify-center rounded-full bg-colab-black">2</span>
          </motion.span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="mt-14 text-center text-2xl font-medium tracking-tight sm:text-4xl"
        >
          Six specialist businesses. One way of working.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="mt-5 max-w-xl text-center text-base leading-relaxed text-white/55 sm:text-lg"
        >
          Not a shared office. A partnership of businesses that share an ethos, a culture and a work ethic, each one sticking to what it does best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="#companies"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-colab-black transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Meet the partners
          </a>
          <a href="#colab-house" className="text-sm font-medium text-white/70 underline-offset-8 transition-colors hover:text-white hover:underline">
            See COLAB House
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 3 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.a>
    </section>
  );
}
