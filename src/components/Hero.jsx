import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-widest uppercase text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.35)]">
            Philosophy: The Digital Torch of Wisdom
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            World Philosophy Day 2025
          </p>
          <div className="mt-8">
            <a
              href="#competitions"
              className="inline-block px-6 py-3 rounded-full border border-cyan-400 text-cyan-300 hover:text-black hover:bg-cyan-300/90 font-semibold shadow-[0_0_20px_rgba(34,211,238,0.35)] transition"
            >
              Explore Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
