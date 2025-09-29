'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const t = useTranslations('sections.process');
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    { key: 'meeting', icon: '👋' },
    { key: 'contract', icon: '📋' },
    { key: 'access', icon: '🔑' },
    { key: 'implementation', icon: '🚀' },
    { key: 'optimization', icon: '⚡' }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target.querySelectorAll('.step-item'),
              { opacity: 0, x: -50 },
              { 
                opacity: 1, 
                x: 0, 
                duration: 0.8, 
                stagger: 0.2,
                ease: "power3.out"
              }
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('description')}
          </p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>{t('cta')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                className="step-item group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative text-center">
                  {/* Step number */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-purple-200 text-purple-600 font-bold text-lg mb-4 group-hover:border-purple-400 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-2xl">{step.icon}</span>
                    
                    {/* Liquid glass effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Step title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {t(`steps.${step.key}`)}
                  </h3>
                  
                  {/* Step description */}
                  <p className="text-sm text-gray-600">
                    {index === 0 && "Seznámíme se s vašimi potřebami a cíli"}
                    {index === 1 && "Domluvíme podmínky a podepíšeme smlouvu"}
                    {index === 2 && "Získáme přístupy k vašim systémům"}
                    {index === 3 && "Začneme s implementací řešení"}
                    {index === 4 && "Optimalizujeme a vylepšujeme výkon"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
