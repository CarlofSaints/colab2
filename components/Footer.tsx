"use client";

const dots = [
  { color: "#ED1C24" },
  { color: "#FFFFFF", dash: true },
  { color: "#8DC63F" },
  { color: "#F15A29" },
  { color: "#29ABE2" },
];

export default function Footer() {
  return (
    <footer className="bg-colab-black py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Logo dots */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {dots.map((dot, i) => (
            <div key={i}>
              {dot.dash ? (
                <div
                  className="w-6 h-1.5"
                  style={{ backgroundColor: dot.color }}
                />
              ) : (
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: dot.color }}
                />
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white/30">
          &copy; {new Date().getFullYear()} COLAB House. All rights reserved.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-white/20">
          <a href="https://atomicmarketing.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">Atomic Marketing</a>
          <span>&middot;</span>
          <a href="https://iram.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">iRam</a>
          <span>&middot;</span>
          <a href="https://outerjoin.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">OuterJoin</a>
          <span>&middot;</span>
          <a href="https://atomicdigital.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">Atomic Digital</a>
        </div>

        <p className="mt-6 text-center text-xs text-white/10">
          5 Zulberg Close, Bruma, Johannesburg, 2198
        </p>
      </div>
    </footer>
  );
}
