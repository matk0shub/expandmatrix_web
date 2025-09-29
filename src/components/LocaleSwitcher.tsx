'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {locale === 'cs' ? 'Čeština' : 'English'}
        </span>
      </button>
      
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        whileHover={{ opacity: 1, y: 0, scale: 1 }}
        className="absolute top-full right-0 mt-2 w-32 bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <button
          onClick={() => switchLocale('cs')}
          className={`w-full px-3 py-2 text-left text-sm hover:bg-white/50 transition-colors ${
            locale === 'cs' ? 'bg-purple-100 text-purple-600' : 'text-gray-700'
          }`}
        >
          🇨🇿 Čeština
        </button>
        <button
          onClick={() => switchLocale('en')}
          className={`w-full px-3 py-2 text-left text-sm hover:bg-white/50 transition-colors ${
            locale === 'en' ? 'bg-purple-100 text-purple-600' : 'text-gray-700'
          }`}
        >
          🇺🇸 English
        </button>
      </motion.div>
    </div>
  );
}
