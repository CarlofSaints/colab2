"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-colab-orange mb-4"
          >
            Who We Are
          </motion.p>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-colab-black"
          >
            Collaboration by Design
          </motion.h2>

          <motion.div
            custom={2}
            variants={fadeUp}
            className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-colab-red via-colab-green to-colab-blue"
          />

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            <strong className="text-colab-black">COLAB</strong> is a collective
            of five specialist companies united under one roof at{" "}
            <strong className="text-colab-black">COLAB House</strong> in
            Johannesburg. Each company brings deep expertise in a distinct
            discipline — together, we cover the entire retail value chain.
          </motion.p>

          <motion.p
            custom={4}
            variants={fadeUp}
            className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            From boots-on-the-ground activations and retail account management,
            to data analytics, digital marketing, and sell-out acceleration —
            our clients get one seamless partnership instead of five separate
            agencies.
          </motion.p>
        </motion.div>

        {/* Value props */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {[
            {
              title: "One Roof",
              desc: "Five companies sharing space, ideas, and a unified vision for retail excellence.",
              color: "text-colab-red",
              bg: "bg-colab-red/10",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              ),
            },
            {
              title: "Full Value Chain",
              desc: "Physical activations, account management, analytics, digital marketing, and sell-out — all covered.",
              color: "text-colab-green",
              bg: "bg-colab-green/10",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              ),
            },
            {
              title: "Core Competencies",
              desc: "Each company sticks to what it does best. No compromises, no generalists.",
              color: "text-colab-blue",
              bg: "bg-colab-blue/10",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i + 5}
              variants={fadeUp}
              className="text-center p-8 rounded-2xl bg-colab-gray"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-colab-black">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
