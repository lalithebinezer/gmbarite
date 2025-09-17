import React from 'react';
import type { Page } from '../../types';

interface HeroSectionProps {
    setCurrentPage: (page: Page) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentPage }) => {
  const textShadowStyle = { textShadow: '0 2px 4px rgba(0,0,0,0.5)' };
  return (
    <div className="relative h-screen bg-primary text-white flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <picture className="absolute inset-0">
        <source srcSet="https://i.ibb.co/SwJwDkpR/IMG-20180924-162057.jpg" type="image/webp" />
        <img
          src="https://picsum.photos/seed/mining/1920/1080"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover animate-kenburns"
        />
      </picture>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary opacity-60"></div>
      
      {/* Text Content */}
      <div className="relative z-10 text-center p-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4" style={textShadowStyle}>
          GM Barite
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 font-sans" style={textShadowStyle}>
          Global Leaders in High-Grade Barite Supply
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-200 mb-8" style={textShadowStyle}>
          Backed by APMDC
        </p>
        <button 
          onClick={() => {
            setCurrentPage('contact');
            window.scrollTo(0, 0);
          }}
          className="bg-accent text-white font-serif font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 hover:bg-accent-dark hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Request a Quote
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
