import React from 'react';
import FlowerOfLife from '../components/FlowerOfLife';
import HomeHero from '../components/HomeHero';
import ServicePreview from '../components/ServicePreview';
import ChatBot from '../components/ChatBot/ChatBot';
import AboutSection from '../components/AboutSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-green-800 text-white relative overflow-hidden">
      <FlowerOfLife />
      <ChatBot />
      <div className="relative pt-24 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <HomeHero />
          <ServicePreview />
          <AboutSection />
        </div>
      </div>
    </div>
  );
}