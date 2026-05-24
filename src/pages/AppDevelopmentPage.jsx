import AppHero from '../components/app-development/AppHero';
import AppIntro from '../components/app-development/AppIntro';
import AppServices from '../components/app-development/AppServices';
import AIHighlight from '../components/app-development/AIHighlight';
import AppShowcase from '../components/app-development/AppShowcase';
import DevelopmentProcess from '../components/app-development/DevelopmentProcess';
import WhyChooseApps from '../components/app-development/WhyChooseApps';
import AppCTA from '../components/app-development/AppCTA';

export default function AppDevelopmentPage() {
  return (
    <>
      <AppHero />
      <AppIntro />
      <AppServices />
      <AIHighlight />
      <AppShowcase />
      <DevelopmentProcess />
      <WhyChooseApps />
      <AppCTA />
    </>
  );
}
