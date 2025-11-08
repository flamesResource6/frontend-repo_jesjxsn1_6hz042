import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-[#000A1F] overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest uppercase text-white">
          About The Event
        </h2>
        <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-300">
          World Philosophy Day 2025 mengangkat tema 'Philosophy: The Digital Torch of Wisdom' sebagai simbol pencerahan dalam era digital. Acara ini menjadi wadah bagi mahasiswa untuk menghidupkan kembali semangat berpikir kritis, rasional, dan bijaksana di tengah arus informasi modern.
        </p>
      </div>
    </section>
  );
}
