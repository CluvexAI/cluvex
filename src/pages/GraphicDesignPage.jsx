import GraphicHero from '../components/graphic-design/GraphicHero';
import DesignIntro from '../components/graphic-design/DesignIntro';
import ServiceCards from '../components/graphic-design/ServiceCards';
import WhyChooseDesign from '../components/graphic-design/WhyChooseDesign';
import BrandingShowcase from '../components/graphic-design/BrandingShowcase';
import DesignProcess from '../components/graphic-design/DesignProcess';
import GraphicCTA from '../components/graphic-design/GraphicCTA';

export default function GraphicDesignPage() {
  return (
    <>
      <GraphicHero />
      <DesignIntro />
      <ServiceCards />
      <WhyChooseDesign />
      <BrandingShowcase />
      <DesignProcess />
      <GraphicCTA />
    </>
  );
}
