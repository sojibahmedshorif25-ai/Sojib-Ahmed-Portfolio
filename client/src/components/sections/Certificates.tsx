import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Download, CheckCircle2 } from 'lucide-react';
import { certificates } from '../../data/certificates';

export default function Certificates() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const featuredCert = certificates.find(c => c.featured) || certificates[0];

  return (
    <section id="certificates" className="section-padding relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 orb orb-violet opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="section-badge mx-auto w-fit mb-3">
            <span>🏆</span> Verified Credentials
          </div>
          <h2 className="section-heading">Certifications & Achievements</h2>
          <p className="section-subheading mx-auto text-center max-w-xl">
            Officially verified credentials and full-stack engineering specializations.
          </p>
        </motion.div>

        {/* Featured Certificate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ y: -3 }}
            className="card p-6 sm:p-8 relative overflow-hidden bg-[var(--color-surface)]/80 backdrop-blur-md border border-[rgba(124,58,237,0.3)] shadow-[0_10px_30px_rgba(124,58,237,0.1)] rounded-3xl"
          >
            {/* Featured top gradient line */}
            <div 
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, transparent, #7C3AED, #06B6D4, transparent)' }} 
            />
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-center">
              {/* Certificate visual */}
              <div className="md:col-span-1">
                <a
                  href={featuredCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block aspect-[4/3] rounded-2xl relative overflow-hidden border border-[rgba(124,58,237,0.25)] shadow-md hover:border-primary transition-all duration-300 bg-gradient-to-br from-[#111827] to-[#0b1120]"
                >
                  <img 
                    src="/certificates/certificate.png" 
                    alt="Certificate of Completion" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      // Fallback if image not found
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-semibold backdrop-blur-sm flex items-center gap-1.5 border border-white/20">
                      <ExternalLink size={13} /> View Certificate
                    </span>
                  </div>
                </a>
              </div>

              {/* Details */}
              <div className="md:col-span-2">
                <div className="flex items-start gap-3.5 mb-4">
                  <div 
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner"
                    style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}
                  >
                    <Award size={22} className="text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[var(--color-text-primary)]">
                      {featuredCert.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#06B6D4] mt-0.5">
                      {featuredCert.issuer}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-5 text-sm">
                  <div className="p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                    <span className="text-xs text-[var(--color-text-secondary)] block mb-0.5">Period</span>
                    <span className="text-[var(--color-text-primary)] font-semibold text-xs sm:text-sm">{featuredCert.date}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                    <span className="text-xs text-[var(--color-text-secondary)] block mb-0.5">Duration</span>
                    <span className="text-[var(--color-text-primary)] font-semibold text-xs sm:text-sm">{featuredCert.duration}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] col-span-2 sm:col-span-1">
                    <span className="text-xs text-[var(--color-text-secondary)] block mb-0.5">Credential ID</span>
                    <span className="text-[#8B5CF6] font-mono text-xs font-bold">{featuredCert.credentialId}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featuredCert.skills.map(skill => (
                    <span key={skill} className="tech-badge text-[11px] font-medium py-1 px-2.5 bg-[#7C3AED]/10 border-[#7C3AED]/30 text-[#D8B4FE]">
                      <CheckCircle2 size={11} className="text-[#10B981]" />
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={featuredCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                    id="cert-verify-button"
                  >
                    <ExternalLink size={16} />
                    Verify Certificate
                  </motion.a>
                  <motion.a
                    href={featuredCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-secondary flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
                    id="cert-download-button"
                  >
                    <Download size={16} />
                    View / Download PDF
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
