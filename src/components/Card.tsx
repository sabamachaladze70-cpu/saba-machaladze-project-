import React from 'react';

export interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default Card;
