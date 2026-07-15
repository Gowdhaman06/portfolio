import { motion } from 'motion/react';
import { Code, Palette, Zap, Users, BookOpen, Target } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { personalInfo, stats } from '../../data/personal';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../../animations/variants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const highlights = [
  { icon: <Palette size={20} />, title: 'Clean UI', desc: 'Passion for pixel-perfect, modern interfaces' },
  { icon: <Code size={20} />, title: 'Responsive Dev', desc: 'Mobile-first, responsive across all devices' },
  { icon: <Zap size={20} />, title: 'Modern Tech', desc: 'React, TypeScript, Tailwind & cutting-edge tools' },
  { icon: <Target size={20} />, title: 'Problem Solver', desc: 'Analytical approach to complex challenges' },
  { icon: <BookOpen size={20} />, title: 'Always Learning', desc: 'Continuously expanding my skill set' },
  { icon: <Users size={20} />, title: 'Client Focused', desc: 'Building solutions that meet real business needs' },
];

export function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="section">
      <div className="section-container">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left: Text Content */}
          <motion.div variants={slideInLeft}>
            <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] mb-6 text-[var(--text-primary)]">
              Crafting <span className="gradient-text">Premium</span> Digital Experiences
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              With a strong foundation in both frontend and backend development, I deliver end-to-end solutions
              that are not just visually stunning but also performant, accessible, and scalable. Every project
              I undertake is treated as a craft, with meticulous attention to detail.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs md:text-sm text-[var(--text-secondary)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlight Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={slideInRight}
          >
            {highlights.map((item, i) => (
              <GlassCard key={item.title} className="p-5" tilt>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1 font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </motion.div>
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
