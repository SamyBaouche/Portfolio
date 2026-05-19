import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks } from '../data/portfolioData';
import { useTheme } from '../utils/useTheme';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const { theme, toggle } = useTheme();

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Reposition the sliding pill whenever activeSection changes
  useEffect(() => {
    const activeLink = linkRefs.current[activeSection];
    const nav = navRef.current;
    if (!activeLink || !nav) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    setPillStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  }, [activeSection]);

  return (
    <>
      <header className="navbar-wrap">
        <nav className="navbar" ref={navRef}>
          {/* Animated sliding background pill */}
          <motion.span
            className="nav-pill"
            animate={{ left: pillStyle.left, width: pillStyle.width, opacity: pillStyle.opacity }}
            transition={{ type: 'spring', stiffness: 380, damping: 36, mass: 0.8 }}
            aria-hidden="true"
          />

          {/* Desktop nav */}
          <ul className="nav-links desktop-nav">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={activeSection === id ? 'active' : ''}
                    ref={(el) => { linkRefs.current[id] = el; }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            className="menu-btn"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Theme toggle */}
          <button
            className="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggle}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile brand */}
          <span className="brand">SB</span>
        </nav>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className="mobile-nav"
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={activeSection === id ? 'active' : ''}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
