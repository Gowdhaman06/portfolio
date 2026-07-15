import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { services } from '../../data/services';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

type LucideIconName = keyof typeof Icons;

function getIcon(name: string, size = 24) {
  const Icon = Icons[name as LucideIconName] as React.ComponentType<{ size?: number }> | undefined;
  return Icon ? <Icon size={size} /> : null;
}

export function Services() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="services" className="section bg-[var(--bg-secondary)]">
      <div className="section-container">
        <SectionHeading title="Services I Offer" subtitle="What I Do" />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, i) => (
            <motion.div key={service.title} variants={fadeInUp} custom={i}>
              <GlassCard className="p-6 h-full group" tilt>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {getIcon(service.icon, 22)}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--glass-border)]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
