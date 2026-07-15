import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { processSteps } from '../../data/process';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

type LucideIconName = keyof typeof Icons;

function getIcon(name: string, size = 22) {
  const Icon = Icons[name as LucideIconName] as React.ComponentType<{ size?: number }> | undefined;
  return Icon ? <Icon size={size} /> : null;
}

export function Process() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="process" className="section">
      <div className="section-container">
        <SectionHeading title="My Process" subtitle="How I Work" />

        <motion.div
          ref={ref}
          className="relative max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-[var(--glass-border)]">
            <motion.div
              className="w-full bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)]"
              initial={{ height: '0%' }}
              animate={isInView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative pl-16 md:pl-20"
                variants={fadeInUp}
                custom={i}
              >
                {/* Step Number Circle */}
                <motion.div
                  className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 200 }}
                >
                  {getIcon(step.icon)}
                </motion.div>

                {/* Card */}
                <div className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl p-5 md:p-6 hover:bg-[var(--glass-hover)] hover:border-[rgba(108,99,255,0.2)] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-[var(--accent-primary)] bg-[rgba(108,99,255,0.1)] px-2.5 py-1 rounded-lg">
                      Step {step.step}
                    </span>
                    <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Activities */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3">
                    {step.activities.map((activity) => (
                      <div key={activity} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <Icons.ChevronRight size={12} className="text-[var(--accent-secondary)] flex-shrink-0" />
                        {activity}
                      </div>
                    ))}
                  </div>

                  {/* Tools */}
                  {step.tools && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[var(--glass-border)]">
                      {step.tools.map((tool) => (
                        <span key={tool} className="text-xs px-2.5 py-1 rounded-lg bg-[var(--bg-tertiary)] text-[var(--accent-primary)] border border-[rgba(108,99,255,0.15)]">
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Deliverables */}
                  {step.deliverables && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[var(--glass-border)]">
                      <span className="text-xs text-[var(--text-secondary)] mr-1">Deliverables:</span>
                      {step.deliverables.map((d) => (
                        <span key={d} className="text-xs px-2 py-0.5 rounded-md bg-[rgba(0,212,170,0.1)] text-[var(--accent-secondary)] border border-[rgba(0,212,170,0.15)]">
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
