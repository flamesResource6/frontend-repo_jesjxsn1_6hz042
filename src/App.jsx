import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Competitions from './components/Competitions';
import SeminarSponsors from './components/SeminarSponsors';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-gray-300">
      {/* Background stars / cosmic feel */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.06),transparent_60%)] pointer-events-none" />

      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Competitions />
        <SeminarSponsors />
      </main>
    </div>
  );
}

export default App;
