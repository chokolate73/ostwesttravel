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

export default function Home() {
  return (
    <>
      <Header lang="de" />
      <main>
        <Hero lang="de" />
        <About lang="de" />
        <WhyMe lang="de" />
        <Cruises lang="de" />
        <Individual lang="de" />
        <Family lang="de" />
        <Gallery lang="de" />
        <Testimonials lang="de" />
        <Upcoming lang="de" />
        <Process lang="de" />
        <Deposit lang="de" />
        <FAQ lang="de" />
        <Contact lang="de" />
        <Instagram lang="de" />
      </main>
      <Footer lang="de" />
      <StickyPanel lang="de" />
      <FloatingPhone lang="de" />
      <CookieBanner lang="de" />
    </>
  );
}
