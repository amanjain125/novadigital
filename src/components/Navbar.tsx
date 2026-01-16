import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-900/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter text-white">
          NOVA<span className="text-neon-blue">DIGITAL</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              className={`transition-colors ${
                activeSection === link.href.substring(1) ? 'text-white font-semibold' : 'hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 transition-all">
          Contact Us
        </a>
      </div>
    </nav>
  );
};
