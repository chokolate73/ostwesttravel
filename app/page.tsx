import Header from '@/components/layout/Header';
import StickyPanel from '@/components/layout/StickyPanel';
import FloatingPhone from '@/components/ui/FloatingPhone';
import CookieBanner from '@/components/ui/CookieBanner';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhyMe from '@/components/sections/WhyMe';
import Cruises from '@/components/sections/Cruises';
import Individual from '@/components/sections/Individual';
import Family from '@/components/sections/Family';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Upcoming from '@/components/sections/Upcoming';
import Process from '@/components/sections/Process';
import Deposit from '@/components/sections/Deposit';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Instagram from '@/components/sections/Instagram';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. About */}
        <About />
        {/* 3. Why Me */}
        <WhyMe />
        {/* 4. Cruises (Flagship) */}
        <Cruises />
        {/* 5. Individual */}
        <Individual />
        {/* 6. Family */}
        <Family />
        {/* 7. Gallery */}
        <Gallery />
        {/* 8. Testimonials */}
        <Testimonials />
        {/* 9. Upcoming Tours */}
        <Upcoming />
        {/* 10. Process */}
        <Process />
        {/* 11. Deposit */}
        <Deposit />
        {/* 12. FAQ */}
        <FAQ />
        {/* 13. Contact Form */}
        <Contact />
        {/* 14. Instagram */}
        <Instagram />
      </main>
      {/* 15. Footer */}
      <Footer />
      {/* Sticky CTA Panel */}
      <StickyPanel />
      {/* Floating phone button */}
      <FloatingPhone />
      {/* Cookie consent banner */}
      <CookieBanner />
    </>
  );
}
