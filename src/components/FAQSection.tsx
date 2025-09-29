'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const t = useTranslations('sections.faq');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Placeholder FAQ items
  const faqItems = [
    {
      question: "Jak dlouho trvá implementace AI řešení?",
      answer: "Doba implementace závisí na složitosti projektu. Jednoduché chatboty můžeme nasadit během 2-4 týdnů, komplexní AI systémy mohou trvat 2-6 měsíců. Vždy vám poskytneme přesný časový plán před začátkem projektu."
    },
    {
      question: "Jaké jsou náklady na AI implementaci?",
      answer: "Náklady se pohybují od 50 000 Kč za jednoduché řešení až po 500 000+ Kč za komplexní systémy. Cena závisí na rozsahu projektu, požadovaných funkcích a integraci se stávajícími systémy. Poskytujeme transparentní cenovou kalkulaci."
    },
    {
      question: "Poskytujete podporu po implementaci?",
      answer: "Ano, poskytujeme kompletní podporu po implementaci včetně školení vašeho týmu, technické podpory a pravidelných aktualizací. Nabízíme různé balíčky podpory podle vašich potřeb."
    },
    {
      question: "Jak zajišťujete bezpečnost dat?",
      answer: "Bezpečnost je naší prioritou. Používáme šifrování dat, bezpečné API, pravidelné bezpečnostní audity a dodržujeme GDPR. Všechna data jsou uložena v certifikovaných datových centrech."
    },
    {
      question: "Můžete integrovat AI do stávajících systémů?",
      answer: "Ano, specializujeme se na integraci AI řešení do stávajících podnikových systémů. Podporujeme většinu populárních platforem a můžeme vytvořit custom integrace podle vašich potřeb."
    },
    {
      question: "Jaké jsou výhody AI pro můj business?",
      answer: "AI může automatizovat rutinní úkoly, zlepšit zákaznickou podporu, optimalizovat procesy, poskytovat data-driven insights a zvýšit efektivitu. Konkrétní výhody závisí na vašem oboru a potřebách."
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target.querySelectorAll('.faq-item'),
              { opacity: 0, y: 30 },
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.6, 
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
      <div className="max-w-4xl mx-auto">
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

        {/* FAQ Accordion */}
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Accordion.Item 
                value={`item-${index}`}
                className="group rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-200 hover:border-purple-300 transition-all duration-300 overflow-hidden"
              >
                <Accordion.Trigger className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/50 transition-colors">
                  <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-purple-600 transition-all duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
