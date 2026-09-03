import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Download, CheckCircle2 } from 'lucide-react';
import { certificates } from '../../data/certificates';

export default function Certificates() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certificates" className="section-padding relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 orb orb-violet opacity-08 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto w-fit mb-3">
            <span>🏆</span> Certifications
          </div>
          <h2 className="section-heading">Certifications & Achievements</h2>
          <p className="section-subheading mx-auto text-center">
            Verified credentials from recognized institutions.
          </p>
        </motion.div>

        {/* Featured Certificate */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {certificates.filter(c => c.featured).map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.01 }}
              className="card p-8 relative overflow-hidden"
              style={{ border: '1px solid rgba(124,58,237,0.3)' }}
            >
              {/* Featured glow */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #7C3AED, #06B6D4, transparent)' }} />
              
              <div className="grid md:grid-cols-3 gap-10 items-center">
                {/* Certificate visual */}
                <div className="md:col-span-1">
                  <div className="aspect-[4/3] rounded-2xl flex items-center justify-center overflow-hidden"
                    style={{ border: '1px solid rgba(124,58,237,0.2)' }}>
                    <img 
                      src="/certificates/certificate.png" 
                      alt="Certificate of Completion" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="md:col-span-2">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(124,58,237,0.15)' }}>
                      <Award size={20} className="text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{cert.title}</h3>
                      <p className="text-sm text-[#8B5CF6]">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-5 text-sm">
                    <div>
                      <span className="text-xs text-[var(--color-text-secondary)] block mb-0.5">Period</span>
                      <span className="text-[var(--color-text-primary)] font-medium">{cert.date}</span>
                    </div>
                    <div>
                      <span className="text-xs text-[var(--color-text-secondary)] block mb-0.5">Duration</span>
                      <span className="text-[var(--color-text-primary)] font-medium">{cert.duration}</span>
                    </div>
                    <div>
                      <span className="text-xs text-[var(--color-text-secondary)] block mb-0.5">Credential ID</span>
                      <span className="text-[var(--color-text-primary)] font-mono text-xs">{cert.credentialId}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map(skill => (
                      <span key={skill} className="tech-badge text-[10px]">
                        <CheckCircle2 size={9} className="text-[#10B981]" />
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <motion.a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary"
                      id={`cert-verify-${cert.id}`}
                    >
                      <ExternalLink size={15} />
                      Verify Certificate
                    </motion.a>
                    <motion.a
                      href="https://drive.google.com/file/d/1d2XvAZkY2ISC3koXCTLJyHlQ64hGZ5UG/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="btn-secondary"
                      id={`cert-download-${cert.id}`}
                    >
                      <Download size={15} />
                      Download PDF
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other certificates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.filter(c => !c.featured).map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="card p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{cert.issuerLogo}</div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)]">{cert.title}</h4>
                  <p className="text-xs text-[var(--color-text-secondary)]">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3 text-xs text-[var(--color-text-secondary)]">
                <span>{cert.date}</span>
                <span>{cert.duration}</span>
              </div>

              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-[#8B5CF6] hover:text-[#7C3AED] transition-colors"
                id={`cert-link-${cert.id}`}
              >
                <ExternalLink size={12} />
                Verify Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
