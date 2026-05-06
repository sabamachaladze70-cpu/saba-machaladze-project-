import React, { useState, useEffect } from 'react';
import Button from './Button';
import heroImg from '../assets/svaneti_high.png';
import heroThumb from '../assets/svaneti.webp';

export interface HeroProps {
  title: string;
  slogan: string;
  ctaText: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ title, slogan, ctaText, onCtaClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden shadow-2xl border-b border-[#E8DCCF]">
      <img 
        src={heroThumb} 
        alt=""
        className="absolute inset-0 z-0 w-full h-full object-cover scale-110 blur-xl"
        aria-hidden="true"
      />
      <img 
        src={heroImg} 
        alt="საქართველოს ულამაზესი პეიზაჟი - GeoTours"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 z-0 w-full h-full object-cover scale-110 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="eager"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#2C1E16] via-[#D35400]/40 to-transparent" aria-hidden="true"></div>
      <div className="relative z-20 text-center px-4 sm:px-12 max-w-5xl mx-auto mt-24">
        <span className="inline-block py-2 px-6 rounded-full bg-accent text-white font-bold text-base tracking-[0.2em] mb-8 shadow-xl animate-bounce-slow">
          აღმოაჩინე საქართველო
        </span>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 text-[#FEF9F3] drop-shadow-2xl leading-[1.1] font-serif">
          {title}
        </h1>
        <p className="text-2xl sm:text-3xl text-[#FDF2E9] mb-12 max-w-3xl mx-auto font-medium drop-shadow-lg leading-relaxed italic opacity-90">
          {slogan}
        </p>
        <div className="flex justify-center gap-6">
          <Button 
            onClick={onCtaClick} 
            className="bg-accent text-white hover:bg-[#FEF9F3] hover:text-accent font-black px-12 py-5 text-xl rounded-full shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-none"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
