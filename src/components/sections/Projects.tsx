import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ChevronRight, X } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { projects, type Project } from '../../data/projects';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] p-6 md:p-8"
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <span className="inline-block text-xs font-medium tracking-widest uppercase text-[var(--accent-primary)] mb-2">
          {project.category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-2">
          {project.title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm mb-6">{project.subtitle}</p>

        {/* Project Image Placeholder */}
        <div className="w-full h-48 md:h-56 rounded-xl bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-primary)] border border-[var(--glass-border)] flex items-center justify-center mb-6 overflow-hidden">
          <div className="text-center">
            <div className="text-4xl mb-2">🚀</div>
            <p className="text-sm text-[var(--text-secondary)]">{project.title} Preview</p>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{project.longDescription}</p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 font-[family-name:var(--font-heading)]">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <ChevronRight size={14} className="text-[var(--accent-secondary)] flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Challenge / Solution / Results */}
        <div className="space-y-4 mb-6">
          {[
            { label: 'Challenge', text: project.challenge, color: 'from-red-500/10 to-orange-500/10' },
            { label: 'Solution', text: project.solution, color: 'from-[rgba(108,99,255,0.1)] to-[rgba(0,212,170,0.1)]' },
            { label: 'Results', text: project.results, color: 'from-green-500/10 to-emerald-500/10' },
          ].map((item) => (
            <div key={item.label} className={`p-4 rounded-xl bg-gradient-to-r ${item.color} border border-[var(--glass-border)]`}>
              <h5 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-1">{item.label}</h5>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 font-[family-name:var(--font-heading)]">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="accent">{tech}</Badge>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--glass-border)]">
          <span className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
            <Clock size={14} /> {project.timeline}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <SectionHeading title="Featured Projects" subtitle="My Work" />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, i) => (
            <motion.div key={project.id} variants={fadeInUp} custom={i}>
              <GlassCard
                className="group overflow-hidden cursor-pointer"
                hover
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-primary)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(108,99,255,0.1)] to-[rgba(0,212,170,0.1)] group-hover:opacity-50 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-5xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {i === 0 ? '🍔' : i === 1 ? '📋' : '💻'}
                    </motion.div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="accent">{project.category}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-[var(--glass-border)]">
                    <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                      <Clock size={12} /> {project.timeline}
                    </span>
                    <span className="text-xs text-[var(--accent-primary)] font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      View Details <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
