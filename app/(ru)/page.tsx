import dynamic from 'next/dynamic';
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
import Process from '@/components/sections/Process';
import Deposit from '@/components/sections/Deposit';
import Contact from '@/components/sections/Contact';
import Instagram from '@/components/sections/Instagram';
import Footer from '@/components/sections/Footer';

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const Upcoming = dynamic(() => import('@/components/sections/Upcoming'));
const FAQ = dynamic(() => import('@/components/sections/FAQ'));

export default function HomeRu() {
  return (
    <>
      <Header lang="ru" />
      <main>
        <Hero lang="ru" />
        <About lang="ru" />
        <WhyMe lang="ru" />
        <Cruises lang="ru" />
        <Individual lang="ru" />
        <Family lang="ru" />
        <Gallery lang="ru" />
        <Testimonials lang="ru" />
        <Upcoming lang="ru" />
        <Process lang="ru" />
        <Deposit lang="ru" />
        <FAQ lang="ru" />
        <Contact lang="ru" />
        <Instagram lang="ru" />
      </main>
      <Footer lang="ru" />
      <StickyPanel lang="ru" />
      <FloatingPhone lang="ru" />
      <CookieBanner lang="ru" />
    </>
  );
}
