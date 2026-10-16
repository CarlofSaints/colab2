"use client";

import { brandDots, companies } from "@/lib/companies";

export default function Footer() {
  return (
    <footer className="bg-colab-black py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-3xl font-semibold tracking-[0.3em]">COLAB</p>
          <div className="mt-3 flex items-center gap-[0.95rem] pl-1">
            {brandDots.map((d, i) =>
              d.dash ? (
                <span key={i} className="h-1 w-4 bg-white" />
              ) : (
                <span key={i} className="h-2 w-2 rounded-full" style={{ backgroundColor: d.color }} />
              ),
            )}
          </div>
          <p className="mt-6 text-sm text-white/40">5 Zulberg Close, Bruma, Johannesburg, 2198</p>
        </div>

        <div className="md:text-right">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55 md:justify-end">
            {companies.map((c) =>
              c.url ? (
                <li key={c.name}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                    {c.name}
                  </a>
                </li>
              ) : (
                <li key={c.name}>{c.name}</li>
              ),
            )}
          </ul>
          <p className="mt-4 text-xs text-white/30">&copy; {new Date().getFullYear()} COLAB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
