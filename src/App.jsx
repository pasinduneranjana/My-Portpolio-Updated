import Navbar from './components/Navbar';
import NetworkBackground from './components/NetworkBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Facebook, Linkedin, Github } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-emerald-500/35 selection:text-white">
      {/* Dynamic connecting node network canvas */}
      <NetworkBackground />

      {/* Main glass navigation bar */}
      <Navbar />

      {/* Main content sections */}
      <main className="max-w-7xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-800/60 bg-slate-950/50 py-12 relative z-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold bg-gradient-to-r from-emerald-400 to-ocean-500 bg-clip-text text-transparent tracking-tight">
            Pasindu Naranjana
          </h2>

          {/* Social Links */}
          <div className="flex gap-6 items-center justify-center mt-2">
            <a
              href="https://www.facebook.com/share/1AJEBTd2Uq/"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              aria-label="Facebook Link"
            >
              <Facebook className="w-6 h-6" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/pasindu-neranjana?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-ocean-400 hover:border-ocean-500/50 hover:bg-ocean-500/10 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              aria-label="LinkedIn Link"
            >
              <Linkedin className="w-6 h-6" strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/pasinduneranjana"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              aria-label="GitHub Link"
            >
              <Github className="w-6 h-6" strokeWidth={1.5} />
            </a>
          </div>

          <div className="flex flex-col gap-2 text-center mt-4 border-t border-slate-800/50 pt-8 w-full max-w-md">
            <p className="text-sm text-slate-400 font-sans">
              &copy; {new Date().getFullYear()} Pasindu Naranjana. All rights reserved.
            </p>
            {/* <p className="text-xs text-slate-500 font-sans">
              Built with <span className="text-emerald-400/80 font-semibold">React</span>, <span className="text-ocean-400/80 font-semibold">Tailwind CSS</span> &amp; <span className="text-purple-400/80 font-semibold">Framer Motion</span>.
            </p> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
