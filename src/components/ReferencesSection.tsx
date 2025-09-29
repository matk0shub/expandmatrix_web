'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export default function ReferencesSection() {
  const t = useTranslations('sections.references');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Placeholder references
  const references = [
    {
      client: "TechCorp",
      project: "AI Chatbot Implementation",
      testimonial: "ExpandMatrix nám pomohl automatizovat zákaznickou podporu. Úspora času je neuvěřitelná!",
      rating: 5,
      results: ["50% úspora času", "90% spokojenost zákazníků"]
    },
    {
      client: "InnovateLab",
      project: "Website Redesign",
      testimonial: "Profesionální přístup a skvělé výsledky. Web je nyní rychlejší a modernější.",
      rating: 5,
      results: ["3x rychlejší načítání", "40% více konverzí"]
    },
    {
      client: "FutureSoft",
      project: "AI Process Automation",
      testimonial: "Implementace AI řešení proběhla hladce. Naše procesy jsou nyní efektivnější.",
      rating: 5,
      results: ["60% úspora nákladů", "24/7 automatizace"]
    },
    {
      client: "DataFlow",
      project: "E-commerce Platform",
      testimonial: "Skvělá spolupráce a vynikající výsledky. Obchod funguje bez problémů.",
      rating: 5,
      results: ["200% růst prodejů", "99.9% dostupnost"]
    },
    {
      client: "CloudTech",
      project: "AI Analytics Dashboard",
      testimonial: "Dashboard nám poskytuje cenné insights. Rozhodování je nyní založené na datech.",
      rating: 5,
      results: ["Real-time analýza", "30% lepší rozhodování"]
    },
    {
      client: "SmartBiz",
      project: "Complete Digital Transformation",
      testimonial: "Komplexní transformace našeho podnikání. Všechno funguje jako hodinky.",
      rating: 5,
      results: ["100% digitalizace", "50% růst produktivity"]
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target.querySelectorAll('.reference-item'),
              { opacity: 0, y: 50 },
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.1,
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
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
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

        {/* References Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((reference, index) => (
            <motion.div
              key={index}
              className="reference-item group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-purple-300 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 h-full">
                {/* Liquid glass effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                    <Quote className="w-6 h-6" />
                  </div>
                  
                  {/* Testimonial */}
                  <blockquote className="text-gray-700 mb-6 flex-grow italic">
                    &ldquo;{reference.testimonial}&rdquo;
                  </blockquote>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(reference.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Client info */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900">{reference.client}</div>
                    <div className="text-sm text-gray-600">{reference.project}</div>
                  </div>
                  
                  {/* Results */}
                  <div className="mt-4 space-y-1">
                    {reference.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-xs text-purple-600 font-medium">
                        ✓ {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
