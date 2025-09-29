'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Bot, Globe, Cpu, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const t = useTranslations('sections.services');
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Bot,
      title: t('aiAgents'),
      description: "Inteligentní AI agenti pro automatizaci procesů a zlepšení efektivity vašeho podnikání.",
      features: ["Chatboti", "Automatizace", "Analýza dat", "24/7 dostupnost"]
    },
    {
      icon: Globe,
      title: t('websites'),
      description: "Moderní, responzivní weby s nejnovějšími technologiemi a optimalizací pro vyhledávače.",
      features: ["Responzivní design", "SEO optimalizace", "Rychlé načítání", "Bezpečnost"]
    },
    {
      icon: Cpu,
      title: t('aiImplementation'),
      description: "Implementace AI řešení do stávajících systémů pro maximalizaci výkonu a úsporu času.",
      features: ["Integrace systémů", "Machine Learning", "Prediktivní analýza", "Optimalizace procesů"]
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target.querySelectorAll('.service-item'),
              { opacity: 0, y: 50 },
              { 
                opacity: 1, 
                y: 0, 
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
      className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
      
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
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 h-full">
                {/* Liquid glass effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <button className="group/btn inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    <span>Zjistit více</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
