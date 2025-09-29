'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

export default function TeamSection() {
  const t = useTranslations('sections.team');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Placeholder team members
  const team = [
    {
      name: "Jan Novák",
      position: "CEO & AI Strategist",
      bio: "Více než 10 let zkušeností s AI a business strategií. Specializuje se na implementaci AI řešení do podnikových procesů.",
      image: "JN",
      linkedin: "#",
      email: "jan@expandmatrix.cz"
    },
    {
      name: "Marie Svobodová",
      position: "Lead Developer",
      bio: "Expert na moderní webové technologie a AI implementace. Vede tým vývojářů a zajišťuje kvalitu kódu.",
      image: "MS",
      linkedin: "#",
      email: "marie@expandmatrix.cz"
    },
    {
      name: "Petr Dvořák",
      position: "AI Engineer",
      bio: "Specialista na machine learning a AI algoritmy. Vytváří inteligentní řešení pro naše klienty.",
      image: "PD",
      linkedin: "#",
      email: "petr@expandmatrix.cz"
    },
    {
      name: "Anna Kratochvílová",
      position: "UX/UI Designer",
      bio: "Kreativní designérka s vášní pro uživatelsky přívětivé rozhraní. Zajišťuje, že naše řešení vypadají skvěle.",
      image: "AK",
      linkedin: "#",
      email: "anna@expandmatrix.cz"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target.querySelectorAll('.team-item'),
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
      className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      
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

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-item group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative p-6 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center">
                {/* Liquid glass effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                    
                    {/* Liquid glass overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Name & Position */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {member.name}
                  </h3>
                  
                  <div className="text-purple-600 font-medium mb-4">
                    {member.position}
                  </div>
                  
                  {/* Bio */}
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Social links */}
                  <div className="flex justify-center gap-3">
                    <a 
                      href={member.linkedin}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
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
