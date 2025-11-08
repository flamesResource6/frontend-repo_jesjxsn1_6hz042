import React from 'react';

export default function SeminarSponsors() {
  return (
    <section id="seminar" className="relative py-24 bg-gradient-to-b from-[#000A1F] to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Seminar */}
          <div className="relative rounded-2xl border border-cyan-400/20 bg-slate-900/50 p-6 overflow-hidden">
            <div className="absolute -top-24 -left-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <h3 className="text-2xl font-bold uppercase tracking-wider text-white">National Seminar</h3>
              <p className="mt-2 text-gray-300">
                Seminar nasional bersama Special Guest Star yang akan membagikan perspektif mendalam mengenai dunia filsafat dan realitas digital masa kini.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-cyan-400/20 ring-2 ring-cyan-400/50 flex items-center justify-center text-cyan-300 font-bold">
                  R
                </div>
                <div>
                  <p className="text-white font-semibold">Rocky Gerung</p>
                  <p className="text-gray-400 text-sm">Special Guest Star</p>
                </div>
              </div>
              <a
                href="https://forms.gle/txLBjV6GukPeecua8"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-300 hover:text-black font-medium transition"
              >
                Register for Seminar
              </a>
            </div>
          </div>

          {/* Sponsors & Media Partners */}
          <div id="sponsors" className="relative rounded-2xl border border-cyan-400/20 bg-slate-900/50 p-6 overflow-hidden">
            <div className="absolute -bottom-24 -right-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <h3 className="text-2xl font-bold uppercase tracking-wider text-white">Open Sponsor & Media Partner</h3>
              <p className="mt-2 text-gray-300">
                Kami membuka kesempatan bagi sponsor dan media partner untuk berkolaborasi dalam acara World Philosophy Day 2025. Mari bersama menyalakan obor kebijaksanaan digital!
              </p>
              <div className="mt-4 space-y-1 text-sm">
                <p className="text-gray-300">Email: <a className="text-cyan-300 hover:underline" href="mailto:himafilsenja@gmail.com">himafilsenja@gmail.com</a></p>
                <p className="text-gray-300">Instagram: <a className="text-cyan-300 hover:underline" href="https://instagram.com/wpd2025_" target="_blank" rel="noreferrer">@wpd2025_</a></p>
              </div>
              <a
                href="mailto:himafilsenja@gmail.com"
                className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-300 hover:text-black font-medium transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div id="contact" className="mt-16 text-center">
          <p className="text-gray-400 text-sm">© 2025 HIMAFILSENJA | All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}
