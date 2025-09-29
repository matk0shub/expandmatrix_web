import Hero from '@/components/Hero';
import AccuracySection from '@/components/AccuracySection';
import ClientsSection from '@/components/ClientsSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import ReferencesSection from '@/components/ReferencesSection';
import TeamSection from '@/components/TeamSection';
import FAQSection from '@/components/FAQSection';
import CookieConsent from '@/components/CookieConsent';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AccuracySection />
      <ClientsSection />
      <ServicesSection />
      <ProcessSection />
      <ReferencesSection />
      <TeamSection />
      <FAQSection />
      <CookieConsent />
    </main>
  );
}
