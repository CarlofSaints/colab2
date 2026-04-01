"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  { src: "/images/Reception3.jpeg", label: "Reception — One Space. Infinite Ideas.", span: true },
  { src: "/images/Reception2.jpeg", label: "The Lounge" },
  { src: "/images/Reception1.jpeg", label: "Entrance" },
  { src: "/images/Reception4.jpeg", label: "Ground Floor" },
  { src: "/images/PlayArea.jpeg", label: "Play Area — Feed Your Creativity" },
  { src: "/images/The_ LAB_Room.jpeg", label: "The LAB Room" },
  { src: "/images/ChowArea.jpeg", label: "Chow Area" },
  { src: "/images/LittleDrinkyPoo.jpeg", label: "The Bar" },
];

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

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl overflow-hidden group ${
                photo.span
                  ? "md:col-span-2 md:row-span-2 aspect-[4/3]"
                  : "aspect-[3/2]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={photo.span ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
              />
              {/* Overlay with label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
                <p className="text-sm sm:text-base font-semibold text-white">
                  {photo.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
