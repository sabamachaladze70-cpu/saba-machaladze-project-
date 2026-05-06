import React, { memo } from 'react';
import { Link } from 'react-router-dom';

export interface CardProps {
  id?: number;
  title: string;
  image: string;
  description: string;
  isFavorite?: boolean;
  onToggleFavorite?: (id: number) => void;
}

const Card: React.FC<CardProps> = memo(({ id, title, image, description, isFavorite = false, onToggleFavorite }) => {
  const content = (
    <>
      <div className="relative aspect-video overflow-hidden bg-gray-200">
        <img 
          src={image} 
          alt={title} 
          loading="lazy" 
          decoding="async"
          width="400"
          height="225"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>
      <div className="p-8 flex flex-col flex-grow bg-[#FEF9F3]">
        <h3 className="text-3xl font-serif font-bold mb-4 text-[#2C1E16] group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-[#4A3B31] leading-relaxed line-clamp-3 mb-6 text-lg">{description}</p>
        <div className="mt-auto flex items-center text-accent font-bold text-lg group-hover:translate-x-2 transition-transform">
          დეტალების ნახვა
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </>
  );

  return (
    <div className="group rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative border border-[#E8DCCF]">
      {/* Favorite Button */}
      {id && onToggleFavorite && (
        <button 
          onClick={(e) => { e.preventDefault(); onToggleFavorite(id); }}
          aria-label={isFavorite ? "ფავორიტებიდან წაშლა" : "ფავორიტებში დამატება"}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:bg-white transition-all duration-300"
        >
          <svg className={`w-7 h-7 ${isFavorite ? 'text-[#C0392B] fill-[#C0392B]' : 'text-gray-400 fill-none'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      )}

      {id ? (
        <Link to={`/tours/${id}`} className="flex flex-col h-full">
          {content}
        </Link>
      ) : (
        <div className="flex flex-col h-full">
          {content}
        </div>
      )}
    </div>
  );
});

export default Card;
