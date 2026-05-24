import SocialHero from '../components/social-media-marketing/SocialHero';
import SocialIntro from '../components/social-media-marketing/SocialIntro';
import AdServices from '../components/social-media-marketing/AdServices';
import WhySocialWorks from '../components/social-media-marketing/WhySocialWorks';
import AdPerformance from '../components/social-media-marketing/AdPerformance';
import MarketingProcess from '../components/social-media-marketing/MarketingProcess';
import WhyChooseSocial from '../components/social-media-marketing/WhyChooseSocial';
import SocialCTA from '../components/social-media-marketing/SocialCTA';

export default function SocialMediaMarketingPage() {
  return (
    <>
      <SocialHero />
      <SocialIntro />
      <AdServices />
      <WhySocialWorks />
      <AdPerformance />
      <MarketingProcess />
      <WhyChooseSocial />
      <SocialCTA />
    </>
  );
}
