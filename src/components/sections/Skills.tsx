import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { skills, skillCategories } from '../../data/skills';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

type LucideIconName = keyof typeof Icons;

function getIcon(name: string, size = 24) {
  const Icon = Icons[name as LucideIconName] as React.ComponentType<{ size?: number }> | undefined;
  return Icon ? <Icon size={size} /> : null;
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const { ref, isInView } = useScrollAnimation();
  const filtered = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section bg-[var(--bg-secondary)]">
      <div className="section-container">
        <SectionHeading title="My Skills" subtitle="What I Know" />

        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {/* Category Tabs */}
          <motion.div variants={fadeInUp} className="flex justify-center gap-2 mb-12">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                  ${activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-lg'
                    : 'bg-[var(--glass-bg)] text-[var(--text-secondary)] border border-[var(--glass-border)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]'
                  }
                `}
              >
                {getIcon(cat.icon, 16)}
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard className="p-5 group" tilt>
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(108,99,255,0.15)] to-[rgba(0,212,170,0.15)] flex items-center justify-center text-[var(--accent-primary)] group-hover:text-[var(--accent-secondary)] transition-colors duration-300">
                        {getIcon(skill.icon)}
                      </div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                        {skill.name}
                      </h4>
                      {/* Proficiency Bar */}
                      <div className="w-full h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                      <span className="text-xs text-[var(--text-secondary)]">{skill.proficiency}%</span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
