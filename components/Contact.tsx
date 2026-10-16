"use client";

import { motion } from "framer-motion";
import { companies } from "@/lib/companies";

export default function Contact() {
  return (
    <section id="contact" className="bg-colab-paper py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-4 text-sm font-medium text-colab-purple">Get in touch</p>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Come and see us.</h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="map-container rounded-3xl ring-1 ring-black/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5!2d28.1069!3d-26.1768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e8b8b8b8b8b%3A0x0!2s5+Zulberg+Close%2C+Bruma%2C+Johannesburg%2C+2198!5e0!3m2!1sen!2sza!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="COLAB House location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-between gap-10"
          >
            <div>
              <h3 className="text-sm font-medium text-black/45">COLAB House</h3>
              <p className="mt-3 text-2xl font-medium leading-snug tracking-tight">
                5 Zulberg Close
                <br />
                Bruma, Johannesburg
                <br />
                2198
              </p>
              <a
                href="https://www.google.com/maps/search/5+Zulberg+Close+Bruma+Johannesburg+2198"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-colab-black px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Get directions
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-black/45">Talk to a partner directly</h3>
              <ul className="mt-3 divide-y divide-black/10 border-y border-black/10">
                {companies.map((c) => (
                  <li key={c.name}>
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between py-3 font-medium transition-colors hover:text-black"
                      >
                        <span className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                          {c.name}
                        </span>
                        <span className="text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">&rarr;</span>
                      </a>
                    ) : (
                      <span className="flex items-center gap-3 py-3 font-medium">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                        {c.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
