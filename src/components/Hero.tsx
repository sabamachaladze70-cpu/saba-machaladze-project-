import React from 'react';
import Button from './Button';

export interface HeroProps {
  title: string;
  slogan: string;
  ctaText: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ title, slogan, ctaText, onCtaClick }) => {
  return (
    <div className="bg-indigo-700 text-white rounded-2xl overflow-hidden shadow-xl mb-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-indigo-600 opacity-90"></div>
      <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-24 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-lg">
            {slogan}
          </p>
          <Button variant="primary" onClick={onCtaClick} className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-full shadow-md">
            {ctaText}
          </Button>
        </div>
        <div className="mt-10 sm:mt-0 hidden md:block">
          {/* Optional illustration/placeholder for the Hero */}
          <div className="w-64 h-64 bg-indigo-500 rounded-full opacity-50 flex items-center justify-center animate-pulse">
            <span className="text-indigo-200 font-bold text-2xl">Creative</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
