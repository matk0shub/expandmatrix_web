'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart, Star, Zap } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { useForm } from 'react-hook-form';
import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function Home() {
  const t = useTranslations('common');
  
  // React Hook Form placeholder
  const { register, handleSubmit } = useForm();
  
  // GSAP placeholder
  useEffect(() => {
    gsap.fromTo('.animate-element', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <motion.h1 
          className="text-4xl font-bold animate-element"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t('welcome')}
        </motion.h1>
        <p className="text-lg">{t('hello')}</p>
        
        {/* Package verification placeholders */}
        <div className="flex gap-4 items-center">
          <Heart className="w-6 h-6 text-red-500" />
          <Star className="w-6 h-6 text-yellow-500" />
          <Zap className="w-6 h-6 text-blue-500" />
        </div>
        
        <Slot className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Radix UI Button
        </Slot>
        
        <form onSubmit={handleSubmit(() => {})} className="flex flex-col gap-2">
          <input 
            {...register('test')} 
            placeholder="React Hook Form input"
            className="px-3 py-2 border rounded"
          />
        </form>
      </main>
    </div>
  );
}
