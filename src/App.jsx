import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GraphicDesignPage from './pages/GraphicDesignPage';
import WebDesignPage from './pages/WebDesignPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import VideoEditingPage from './pages/VideoEditingPage';
import SEOOptimizationPage from './pages/SEOOptimizationPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';
import SocialMediaMarketingPage from './pages/SocialMediaMarketingPage';
import SearchEngineMarketingPage from './pages/SearchEngineMarketingPage';
import './App.css';

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [hash]);
  return null;
}

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
        <Route path="/services/web-design" element={<WebDesignPage />} />
        <Route path="/services/app-development" element={<AppDevelopmentPage />} />
        <Route path="/services/video-editing" element={<VideoEditingPage />} />
        <Route path="/services/seo-optimization" element={<SEOOptimizationPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
        <Route path="/services/search-engine-marketing" element={<SearchEngineMarketingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
