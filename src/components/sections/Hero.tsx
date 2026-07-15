import { motion } from 'motion/react';
import { ArrowDown, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/personal';
import { ParticleBackground } from '../three/ParticleBackground';
import { fadeInUp, staggerContainer, fadeIn } from '../../animations/variants';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[var(--accent-primary)] rounded-full opacity-10 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[var(--accent-secondary)] rounded-full opacity-10 blur-[100px] animate-float" style={{ animationDelay: '3s' }} />

      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] text-sm text-[var(--text-secondary)]">
            <span className="status-dot" />
            <span>Available for new projects</span>
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] mb-6 leading-tight"
        >
          <span className="text-[var(--text-primary)]">Hi, I'm </span>
          <span className="gradient-text-accent">Gowdhaman</span>
        </motion.h1>

        {/* Title */}
        <motion.div variants={fadeInUp} className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--accent-primary)]" />
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-[var(--text-secondary)] font-[family-name:var(--font-heading)]">
            {personalInfo.title}
          </p>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--accent-secondary)]" />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline} I transform ideas into polished digital products with clean code,
          excellent UX, and scalable architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button
            variant="primary"
            size="lg"
            icon={<Sparkles size={18} />}
            href="#projects"
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            icon={<ExternalLink size={18} />}
            href="#contact"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeIn}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
