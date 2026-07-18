import { Mail, ArrowUp, Heart } from 'lucide-react';
import { Linkedin, Instagram, Facebook } from '../ui/Icons';
import { motion } from 'motion/react';
import { socialLinks } from '../../data/personal';
import { Logo } from '../ui/Logo';

const iconMap: Record<string, React.ReactNode> = {
  Linkedin: <Linkedin size={18} />,
  Instagram: <Instagram size={18} />,
  Facebook: <Facebook size={18} />,
  Mail: <Mail size={18} />,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--glass-border)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo size={36} showText={true} showSlogan={true} layout="vertical" className="!items-center md:!items-start" />
            <p className="text-[var(--text-secondary)] text-xs mt-3 max-w-[250px]">
              Crafting premium, high-performance web solutions that drive business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6 text-sm">
            {['About', 'Projects', 'Services', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-end gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                {iconMap[link.icon] || <Mail size={18} />}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-secondary)] flex items-center gap-1">
            © {currentYear} Figvo. Built by Gowdhaman N. with <Heart size={14} className="text-red-500 fill-red-500" /> and React.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
