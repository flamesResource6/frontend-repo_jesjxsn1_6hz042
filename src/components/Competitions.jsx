import React from 'react';

const competitions = [
  {
    title: 'Badminton Tournament (Internal)',
    description: 'Ajang sportivitas dan filosofi teamwork di antara civitas akademika.',
    icon: '🏸',
    link: 'https://forms.gle/XN2TGdjpwNDjodDY7',
  },
  {
    title: 'Futsal Competition (Internal)',
    description: 'Membangun nilai kerja sama dan strategi dalam semangat kebersamaan.',
    icon: '⚽',
    link: 'https://forms.gle/ZdLzDJm7duTGqEjd8',
  },
  {
    title: 'Mobile Legends (External)',
    description: 'Pertarungan digital untuk menyalakan semangat kompetitif dan kebersamaan lintas kampus.',
    icon: '🎮',
    link: 'https://forms.gle/Nmn79jQqKnQ1VxaYA',
  },
  {
    title: 'Scientific Writing Competition (External)',
    description: 'Lomba karya tulis ilmiah bertema filsafat digital, rasionalitas, dan kemanusiaan masa kini.',
    icon: '🧠',
    link: 'https://forms.gle/6JK4dATf8PwjT93M7',
  },
];

export default function Competitions() {
  return (
    <section id="competitions" className="relative py-24 bg-[#000A1F]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.12),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest uppercase text-white">Competitions</h2>
          <p className="mt-3 text-gray-300">Unleash Your Spirit of Wisdom</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-slate-900/40 to-slate-900/70 p-6 hover:border-cyan-400/40 transition">
              <div className="absolute -top-24 -right-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl group-hover:bg-cyan-400/20 transition" />
              <div className="relative">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-gray-300 text-sm leading-relaxed">{c.description}</p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-300 hover:text-black font-medium transition shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
