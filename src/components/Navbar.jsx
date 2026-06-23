import { useState, useEffect } from 'react';
import { Menu, X, Cloud, Terminal } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);


  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Background blur switch
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120; // offset for nav height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled ? 'glass-nav py-3' : 'bg-transparent py-5' }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-2.5 font-display font-bold text-xl tracking-tight cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-ocean-500 text-white overflow-hidden shadow-lg shadow-emerald-500/10 group-hover:shadow-emerald-500/30 transition-all">
            <Cloud className="w-5 h-5 absolute group-hover:scale-0 transition-transform duration-300" />
            <Terminal className="w-5 h-5 absolute scale-0 group-hover:scale-100 transition-transform duration-300" />
          </div>
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Pasindu<span className="text-gradient-emerald-blue font-extrabold">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`relative font-sans text-sm font-medium transition-colors hover:text-emerald-400 ${ activeSection === item.id ? 'text-emerald-400 font-semibold' : 'text-slate-400' }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-ocean-500 rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Action Buttons (Theme + Mobile Menu) */}
        <div className="flex items-center gap-4">


          {/* Mobile Nav Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-emerald-500 hover:bg-slate-800/40 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 w-full glass shadow-2xl transition-all duration-300 ease-out origin-top ${ isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none' }`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`py-2 px-3 rounded-lg font-sans text-sm font-medium transition-all ${ activeSection === item.id ? 'bg-gradient-to-r from-emerald-500/10 to-ocean-500/10 border-l-2 border-emerald-500 text-emerald-400 pl-4' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30' }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
