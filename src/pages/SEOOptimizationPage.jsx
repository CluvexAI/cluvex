import SEOHero from '../components/seo-optimization/SEOHero';
import SEOIntro from '../components/seo-optimization/SEOIntro';
import SEOServices from '../components/seo-optimization/SEOServices';
import AISEOHighlight from '../components/seo-optimization/AISEOHighlight';
import TechnicalSEO from '../components/seo-optimization/TechnicalSEO';
import SEOProcess from '../components/seo-optimization/SEOProcess';
import WhyChooseSEO from '../components/seo-optimization/WhyChooseSEO';
import ContentStrategy from '../components/seo-optimization/ContentStrategy';
import SEOCTA from '../components/seo-optimization/SEOCTA';

export default function SEOOptimizationPage() {
  return (
    <>
      <SEOHero />
      <SEOIntro />
      <SEOServices />
      <AISEOHighlight />
      <TechnicalSEO />
      <SEOProcess />
      <WhyChooseSEO />
      <ContentStrategy />
      <SEOCTA />
    </>
  );
}
