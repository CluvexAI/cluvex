import VideoHero from '../components/video-editing/VideoHero';
import VideoIntro from '../components/video-editing/VideoIntro';
import VideoServices from '../components/video-editing/VideoServices';
import AIProduction from '../components/video-editing/AIProduction';
import VideoShowcase from '../components/video-editing/VideoShowcase';
import VideoProcess from '../components/video-editing/VideoProcess';
import WhyChooseVideo from '../components/video-editing/WhyChooseVideo';
import VideoCTA from '../components/video-editing/VideoCTA';

export default function VideoEditingPage() {
  return (
    <>
      <VideoHero />
      <VideoIntro />
      <VideoServices />
      <AIProduction />
      <VideoShowcase />
      <VideoProcess />
      <WhyChooseVideo />
      <VideoCTA />
    </>
  );
}
