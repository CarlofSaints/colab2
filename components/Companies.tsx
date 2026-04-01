"use client";

import { motion } from "framer-motion";

interface Company {
  name: string;
  tagline: string;
  description: string;
  color: string;
  url: string;
  year: string;
}

const companies: Company[] = [
  {
    name: "Atomic Marketing",
    tagline: "Sales & Activations Agency",
    description:
      "The original spark. Since 2005, Atomic Marketing has been the boots on the ground — delivering in-store activations, merchandising, and field marketing that puts brands directly in front of shoppers.",
    color: "#ED1C24",
    url: "https://atomicmarketing.co.za",
    year: "2005",
  },
  {
    name: "iRam",
    tagline: "Innovative Retail Account Management",
    description:
      "Where retail meets detail. iRam brings precision account management to supplier-retailer relationships, ensuring brands have the right presence on the right shelves at the right time.",
    color: "#8DC63F",
    url: "https://iram.co.za",
    year: "2011",
  },
  {
    name: "OuterJoin",
    tagline: "Visualise Efficiency",
    description:
      "Connecting the dots. OuterJoin turns raw retail data into actionable intelligence — with custom dashboards, reporting tools, and technology solutions that help brands make smarter decisions.",
    color: "#F15A29",
    url: "https://outerjoin.co.za",
    year: "2017",
  },
  {
    name: "Atomic Digital",
    tagline: "Communication & Sales Agency",
    description:
      "The digital arm. Atomic Digital takes brands online with strategic digital marketing, social media management, e-commerce support, and content that converts browsers into buyers.",
    color: "#29ABE2",
    url: "https://atomicdigital.co.za",
    year: "2020",
  },
  {
    name: "Catalyst Sell-Out",
    tagline: "Energy. Change. Acceleration.",
    description:
      "Turning spark into surge. Catalyst brings it all together — driving sell-out performance by combining the strengths of every COLAB company into focused, results-driven campaigns.",
    color: "#7B2D8E",
    url: "#",
    year: "2022",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Companies() {
  return (
    <section id="companies" className="py-24 sm:py-32 bg-colab-gray">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-colab-blue mb-4">
            The Collective
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-colab-black">
            Five Companies. One Mission.
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-colab-red via-colab-green to-colab-blue" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {companies.map((company, i) => (
            <motion.a
              key={company.name}
              custom={i}
              variants={cardVariants}
              href={company.url}
              target={company.url !== "#" ? "_blank" : undefined}
              rel={company.url !== "#" ? "noopener noreferrer" : undefined}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Color accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-2"
                style={{ backgroundColor: company.color }}
              />

              {/* Year badge */}
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
                style={{ backgroundColor: company.color }}
              >
                Est. {company.year}
              </div>

              {/* Company name */}
              <h3 className="text-xl font-bold text-colab-black group-hover:translate-x-1 transition-transform duration-300">
                {company.name}
              </h3>

              {/* Tagline */}
              <p
                className="text-sm font-semibold mt-1 uppercase tracking-wider"
                style={{ color: company.color }}
              >
                {company.tagline}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                {company.description}
              </p>

              {/* Visit link */}
              {company.url !== "#" && (
                <div className="mt-6 flex items-center gap-2 text-sm font-medium" style={{ color: company.color }}>
                  <span>Visit website</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
