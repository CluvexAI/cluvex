import WebHero from '../components/web-design/WebHero';
import WebIntro from '../components/web-design/WebIntro';
import WebServices from '../components/web-design/WebServices';
import WhyChooseWeb from '../components/web-design/WhyChooseWeb';
import LandingPageSection from '../components/web-design/LandingPageSection';
import DevelopmentProcess from '../components/web-design/DevelopmentProcess';
import PerformanceSection from '../components/web-design/PerformanceSection';
import WebCTA from '../components/web-design/WebCTA';

export default function WebDesignPage() {
  return (
    <>
      <WebHero />
      <WebIntro />
      <WebServices />
      <WhyChooseWeb />
      <LandingPageSection />
      <DevelopmentProcess />
      <PerformanceSection />
      <WebCTA />
    </>
  );
}
