"use client";

import { motion } from "framer-motion";

export default function ColabHouse() {
  return (
    <section id="colab-house" className="py-24 sm:py-32 bg-colab-dark text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-colab-red mb-4">
            Our Space
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Welcome to COLAB House
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-colab-red via-colab-green to-colab-blue" />
          <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Our new home in Bruma, Johannesburg — a purpose-built creative and
            commercial space where all five COLAB companies collaborate daily.
          </p>
        </motion.div>

        {/* Photo Grid — placeholders for now */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {[
            "Reception & Entrance",
            "Open-Plan Workspace",
            "Meeting Room",
            "Creative Studio",
            "Breakout Area",
            "Building Exterior",
          ].map((label, i) => (
            <div
              key={label}
              className={`relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 ${
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3]" : "aspect-[3/2]"
              } flex items-center justify-center group hover:border-white/20 transition-all duration-500`}
            >
              {/* Placeholder — replace with <Image> when photos are available */}
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-white/40 font-medium">{label}</p>
                <p className="text-xs text-white/20 mt-1">Photo coming soon</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
