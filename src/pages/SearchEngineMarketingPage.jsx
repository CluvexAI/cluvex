import SEMHero from '../components/search-engine-marketing/SEMHero';
import SEMIntro from '../components/search-engine-marketing/SEMIntro';
import SEMServices from '../components/search-engine-marketing/SEMServices';
import WhySEMWorks from '../components/search-engine-marketing/WhySEMWorks';
import CampaignPerformance from '../components/search-engine-marketing/CampaignPerformance';
import SEMProcess from '../components/search-engine-marketing/SEMProcess';
import WhyChooseSEM from '../components/search-engine-marketing/WhyChooseSEM';
import SEMCTA from '../components/search-engine-marketing/SEMCTA';

export default function SearchEngineMarketingPage() {
  return (
    <>
      <SEMHero />
      <SEMIntro />
      <SEMServices />
      <WhySEMWorks />
      <CampaignPerformance />
      <SEMProcess />
      <WhyChooseSEM />
      <SEMCTA />
    </>
  );
}
