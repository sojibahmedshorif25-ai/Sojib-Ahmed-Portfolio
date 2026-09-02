import { motion } from 'framer-motion';
import { GitBranch as GitHubIcon, Link2 as LinkedInIcon, Mail, MapPin, Phone, Code2, Heart } from 'lucide-react';

const footerLinks = {
  Navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ],
  Services: [
    { label: 'Full Stack Dev', href: '#services' },
    { label: 'Frontend Dev', href: '#services' },
    { label: 'Backend Dev', href: '#services' },
    { label: 'AI Integration', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
  ],
  Contact: [
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
    { label: 'Admin', href: '/admin' },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative mt-0 border-t"
      style={{
        background: '#050508',
        borderColor: 'rgba(124,58,237,0.15)',
      }}
    >
      {/* Gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(6,182,212,0.3), transparent)' }}
      />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}>
                SA
              </div>
              <div>
                <div className="font-bold text-[var(--color-text-primary)]">Sojib Ahmed</div>
                <div className="text-xs text-[var(--color-text-secondary)]">MERN Stack Developer</div>
              </div>
            </div>

            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs mb-6">
              Building modern digital experiences with code, creativity, and purpose. Open to full-time, freelance, and remote opportunities.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: GitHubIcon, href: 'https://github.com/sojibahmedshorif25-ai', label: 'GitHub' },
                { icon: LinkedInIcon, href: 'https://linkedin.com/in/sojibahmedshorif25-ai', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:sojibahmedshorif25@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-icon"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              {[
                { icon: MapPin, text: 'Rangpur, Bangladesh' },
                { icon: Mail, text: 'sojibahmedshorif25@gmail.com' },
                { icon: Phone, text: '+880 1942791004' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                  <Icon size={13} className="text-[#7C3AED] flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[#8B5CF6] transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(124,58,237,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-secondary)]">
            © 2026 Sojib Ahmed. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
            <Code2 size={13} className="text-[#7C3AED]" />
            Built with React + TypeScript +
            <Heart size={11} className="text-[#EC4899] fill-[#EC4899]" />
            by Sojib Ahmed
          </div>
        </div>
      </div>
    </footer>
  );
}
