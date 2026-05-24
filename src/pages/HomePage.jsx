import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import SupportBanner from '../components/SupportBanner';
import QuoteSection from '../components/QuoteSection';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <WhyChooseUs />
      <SupportBanner />
      <QuoteSection />
      <FAQ />
    </>
  );
}
