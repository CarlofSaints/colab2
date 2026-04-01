"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-colab-gray">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-colab-purple mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-colab-black">
            Find Us
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-colab-red via-colab-green to-colab-blue" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="map-container rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5!2d28.1069!3d-26.1768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e8b8b8b8b8b%3A0x0!2s5+Zulberg+Close%2C+Bruma%2C+Johannesburg%2C+2198!5e0!3m2!1sen!2sza!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="COLAB House Location"
            />
          </motion.div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-colab-red/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-colab-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-colab-black">COLAB House</h3>
                  <p className="text-gray-500 mt-1">
                    5 Zulberg Close<br />
                    Bruma, Johannesburg<br />
                    2198
                  </p>
                  <a
                    href="https://www.google.com/maps/search/5+Zulberg+Close+Bruma+Johannesburg+2198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-colab-blue hover:underline"
                  >
                    Get directions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Companies */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-colab-green/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-colab-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-colab-black">Our Companies</h3>
                  <div className="mt-2 space-y-1">
                    {[
                      { name: "Atomic Marketing", url: "https://atomicmarketing.co.za" },
                      { name: "iRam", url: "https://iram.co.za" },
                      { name: "OuterJoin", url: "https://outerjoin.co.za" },
                      { name: "Atomic Digital", url: "https://atomicdigital.co.za" },
                    ].map((c) => (
                      <a
                        key={c.name}
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gray-500 hover:text-colab-blue transition-colors"
                      >
                        {c.name} &rarr;
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Domain */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-colab-blue/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-colab-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-colab-black">Online</h3>
                  <p className="text-gray-500 mt-1">
                    <a href="https://colab2.co.za" className="text-colab-blue hover:underline">
                      colab2.co.za
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
