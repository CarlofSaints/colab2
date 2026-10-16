"use client";

import { motion } from "framer-motion";

const photos = [
  { src: "/images/Reception3.jpeg", label: "Reception", note: "One space. Infinite ideas.", tall: true },
  { src: "/images/Reception2.jpeg", label: "The lounge" },
  { src: "/images/PlayArea.jpeg", label: "Play area", note: "Feed your creativity.", tall: true },
  { src: "/images/Reception1.jpeg", label: "Entrance" },
  { src: "/images/The_%20LAB_Room.jpeg", label: "The LAB room", tall: true },
  { src: "/images/Reception4.jpeg", label: "Ground floor" },
  { src: "/images/ChowArea.jpeg", label: "Chow area" },
  { src: "/images/LittleDrinkyPoo.jpeg", label: "The bar" },
];

const words = ["Activations", "Account management", "Data", "Digital", "Sell-out", "Field tracking"];

export default function ColabHouse() {
  return (
    <section id="colab-house" className="overflow-hidden bg-colab-dark py-28 text-white sm:py-36">
      {/* marquee of what happens in the building */}
      <div aria-hidden className="mb-20 flex whitespace-nowrap border-y border-white/10 py-5">
        <div className="marquee flex shrink-0 gap-12 pr-12 text-3xl font-medium tracking-tight text-white/25 sm:text-5xl">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center gap-12">
              {w}
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: ["#ED1C24", "#8DC63F", "#F15A29", "#29ABE2"][i % 4] }} />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-sm font-medium text-colab-red">Our space</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Welcome to COLAB House.</h2>
          </div>
          <p className="max-w-md leading-relaxed text-white/55 md:justify-self-end">
            Our home in Bruma, Johannesburg. Built for the way we work: open where ideas need room, quiet where the work needs focus, and a bar for when the week is done.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl ${p.tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={`COLAB House ${p.label.toLowerCase()}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16">
                <p className="font-semibold">{p.label}</p>
                {p.note && (
                  <p className="max-h-0 overflow-hidden text-sm text-white/70 transition-all duration-500 group-hover:max-h-10">{p.note}</p>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
