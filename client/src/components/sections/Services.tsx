import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Layers, Code, Server, Bot, ShoppingCart, LayoutDashboard, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'fullstack',
    icon: Layers,
    color: '#7C3AED',
    title: 'Full Stack Development',
    description: 'End-to-end MERN stack applications — from database architecture to polished UI. I handle everything.',
    features: ['React.js + Next.js frontend', 'Node.js + Express backend', 'MongoDB + Mongoose database', 'JWT + Firebase authentication', 'Cloud deployment (Vercel + Render)'],
    popular: true,
  },
  {
    id: 'frontend',
    icon: Code,
    color: '#06B6D4',
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive, and animated web interfaces that users love to interact with.',
    features: ['React.js & Next.js apps', 'Tailwind CSS + custom design systems', 'Framer Motion animations', 'TypeScript for type safety', 'Performance optimization (95+ Lighthouse)'],
    popular: false,
  },
  {
    id: 'backend',
    icon: Server,
    color: '#10B981',
    title: 'Backend Development',
    description: 'Scalable, secure, and well-documented REST APIs built with Node.js and best practices.',
    features: ['RESTful API design', 'Database modeling & optimization', 'Authentication & authorization', 'Rate limiting & security', 'API documentation (Swagger)'],
    popular: false,
  },
  {
    id: 'ai',
    icon: Bot,
    color: '#EC4899',
    title: 'AI Integration',
    description: 'Add intelligent AI features to your applications using Gemini or OpenAI APIs.',
    features: ['AI chatbot development', 'Gemini & OpenAI integration', 'Streaming responses', 'RAG systems', 'Context-aware conversations'],
    popular: false,
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    color: '#F59E0B',
    title: 'E-Commerce Development',
    description: 'Complete online store solutions with modern UX, secure payments, and powerful admin tools.',
    features: ['Product management', 'Stripe payment integration', 'Shopping cart & checkout', 'Order tracking system', 'Admin dashboard'],
    popular: false,
  },
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    color: '#8B5CF6',
    title: 'Admin Dashboard',
    description: 'Beautiful, data-rich admin panels with role-based access control and real-time analytics.',
    features: ['Role-based access control', 'Real-time data management', 'Recharts analytics', 'CRUD interfaces', 'Dark/light mode'],
    popular: false,
  },
];

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 w-80 h-80 orb orb-emerald opacity-08" aria-hidden="true" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-badge mx-auto w-fit mb-3">
            <span>💼</span> Services
          </div>
          <h2 className="section-heading">What I Offer</h2>
          <p className="section-subheading mx-auto text-center">
            Premium web development services tailored to your needs.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -6 }}
                className="card p-6 relative group"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full text-white"
                      style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}>
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                  <Icon size={20} style={{ color: service.color }} />
                </div>

                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2">{service.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">{service.description}</p>

                {/* Features list */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-[11px] text-[var(--color-text-secondary)]">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-xs font-semibold transition-colors"
                  style={{ color: service.color }}
                  id={`service-cta-${service.id}`}
                >
                  Get Started
                  <ArrowRight size={13} />
                </motion.button>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ border: `1px solid ${service.color}30` }} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-xs text-[var(--color-text-secondary)] mb-4">
            Not sure which service fits your needs?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
            id="services-contact-cta"
          >
            Let's Discuss Your Project
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
