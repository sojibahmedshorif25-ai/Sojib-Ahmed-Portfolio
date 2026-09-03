import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles, Download } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-[rgba(124,58,237,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20 md:h-28" aria-label="Main navigation">
            {/* Logo */}
            <motion.a
              id="nav-logo"
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="relative flex items-center gap-4 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Sojib Ahmed - Home"
            >
              <div className="relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}>
                <span className="text-white font-bold text-xl leading-none">SA</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <div className="text-base font-bold text-[var(--color-text-primary)] leading-tight">Sojib Ahmed</div>
                <div className="text-sm text-[var(--color-text-secondary)]">MERN Stack Dev</div>
              </div>
            </motion.a>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-8" role="list">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`relative px-2 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'text-[#8B5CF6]'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                          style={{ background: 'linear-gradient(90deg, #7C3AED, #06B6D4)' }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* AI Assistant Badge */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const chatBtn = document.getElementById('chatbot-trigger');
                  chatBtn?.click();
                }}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#8B5CF6] border border-[rgba(124,58,237,0.3)] hover:bg-[rgba(124,58,237,0.08)] transition-all"
                aria-label="Open AI assistant"
              >
                <Sparkles size={13} />
                AI Chat
              </motion.button>

              {/* Hire Me CTA */}
              <motion.a
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(124,58,237,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}
                aria-label="Hire Sojib Ahmed"
              >
                Hire Me
              </motion.a>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[var(--color-text-secondary)] hover:bg-[rgba(124,58,237,0.08)] transition-all"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[8999] flex flex-col"
            style={{ background: '#050508' }}
          >
            <div className="flex items-center justify-between h-16 md:h-20 px-6 border-b border-[rgba(124,58,237,0.15)]">
              <div className="text-lg font-bold gradient-text">Menu</div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-[rgba(124,58,237,0.1)] text-[var(--color-text-primary)]"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 p-6 flex-1 overflow-y-auto" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center gap-4 p-4 rounded-xl text-left hover:bg-[rgba(124,58,237,0.08)] transition-all group"
                >
                  <span className="text-[var(--color-text-muted)] text-sm font-mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[#8B5CF6] transition-colors">
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </nav>

            <div className="p-6 border-t border-[rgba(124,58,237,0.15)]">
              <a
                href="https://drive.google.com/file/d/1d2XvAZkY2ISC3koXCTLJyHlQ64hGZ5UG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
