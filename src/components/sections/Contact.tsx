import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { personalInfo, socialLinks } from '../../data/personal';
import { sendEmail, type ContactFormData } from '../../services/emailService';
import { saveContactSubmission } from '../../services/firebase';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../../animations/variants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const projectTypes = [
  'Business Website',
  'Landing Page',
  'Portfolio Website',
  'Restaurant Website',
  'Admin Dashboard',
  'Full Stack Web App',
  'UI/UX Development',
  'Website Redesign',
  'Other',
];

const budgetRanges = [
  'Under ₹1,000',
  '₹1,000 - ₹2,500',
  '₹2,500 - ₹5,000',
  '₹5,000 - ₹10,000',
  '₹10,000+',
  'Not Sure Yet',
];

const socialIconMap: Record<string, React.ReactNode> = {
  Github: <Github size={18} />,
  Linkedin: <Linkedin size={18} />,
  Mail: <Mail size={18} />,
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { ref, isInView } = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Save to Firebase Firestore Database
    const dbSuccess = await saveContactSubmission(formData);
    
    // Also trigger EmailJS (optional notification)
    await sendEmail(formData);
    
    setStatus(dbSuccess ? 'success' : 'error');
    if (dbSuccess) {
      setFormData({ name: '', email: '', company: '', projectType: '', budget: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-container">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left: Contact Info */}
          <motion.div className="lg:col-span-2 space-y-6" variants={slideInLeft}>
            <div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-3">
                Let's build something <span className="gradient-text">amazing</span> together.
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Have a project in mind? I'd love to hear about it. Fill out the form and I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <GlassCard className="p-4 flex items-center gap-4" hover={false}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="p-4 flex items-center gap-4" hover={false}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">Location</p>
                  <p className="text-sm text-[var(--text-primary)]">{personalInfo.location}</p>
                </div>
              </GlassCard>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-medium text-[var(--text-primary)] mb-3">Find me online</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    {socialIconMap[link.icon] || <Mail size={18} />}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div className="lg:col-span-3" variants={slideInRight}>
            <GlassCard className="p-6 md:p-8" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all appearance-none"
                    >
                      <option value="">Select a type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all appearance-none"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={status === 'sending'}
                  icon={
                    status === 'sending' ? <Loader2 size={18} className="animate-spin" /> :
                    status === 'success' ? <CheckCircle size={18} /> :
                    status === 'error' ? <AlertCircle size={18} /> :
                    <Send size={18} />
                  }
                >
                  {status === 'sending' ? 'Sending...' :
                   status === 'success' ? 'Message Sent!' :
                   status === 'error' ? 'Failed. Try Again.' :
                   'Send Message'}
                </Button>

                {/* Status Message */}
                {status === 'success' && (
                  <motion.p
                    className="text-sm text-[var(--accent-secondary)] text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thank you! I'll get back to you within 24 hours.
                  </motion.p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
