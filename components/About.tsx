"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const manifesto =
  "COLAB is not a co-working space. It is a small group of partner businesses that chose one roof because we work the same way: disciplined, straight-talking and serious about results. Each business sticks to its core competency. Together, we give brands one strong proposition, from the shelf to the spreadsheet.";

const principles = [
  {
    n: "01",
    title: "A shared ethos",
    desc: "We picked our partners for how they work, not just what they do. Same standards, same culture, same work ethic.",
    color: "#ED1C24",
  },
  {
    n: "02",
    title: "Core competency only",
    desc: "Every business does one thing and does it properly. No generalists, no overlap, no stepping on toes.",
    color: "#8DC63F",
  },
  {
    n: "03",
    title: "One proposition",
    desc: "Activations, account management, data, digital, sell-out and field tracking. Pick one partner or bring in the whole table.",
    color: "#29ABE2",
  },
];

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {word}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = manifesto.split(" ");

  return (
    <section id="about" className="bg-colab-paper pt-28 pb-32 sm:pt-40 sm:pb-44">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-8 text-sm font-medium text-colab-orange">Who we are</p>
        <p ref={ref} className="text-3xl font-medium leading-[1.25] tracking-tight text-colab-black sm:text-5xl">
          {words.map((w, i) => (
            <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
          ))}
        </p>

        <div className="mt-24 grid gap-px overflow-hidden rounded-3xl bg-black/10 md:grid-cols-[1.3fr_1fr_1fr]">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group bg-colab-paper p-8 transition-colors duration-300 hover:bg-white sm:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-150" style={{ backgroundColor: p.color }} />
                <span className="font-mono text-xs text-black/40">{p.n}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-black/55">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
