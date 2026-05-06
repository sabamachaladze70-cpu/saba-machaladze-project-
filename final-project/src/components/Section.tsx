import React, { type ReactNode } from 'react';

export interface SectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  bgColor?: string;
  titleColor?: string;
  descColor?: string;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  description, 
  children, 
  bgColor = "bg-transparent",
  titleColor = "text-[#2C1E16]",
  descColor = "text-[#4A3B31]"
}) => {
  return (
    <section className={`py-16 ${bgColor} rounded-[3rem] mb-12 px-4 sm:px-8 lg:px-12`}>
      {(title || description) && (
        <div className="mb-12 text-center sm:text-left">
          {title && <h2 className={`text-4xl font-serif font-bold ${titleColor} mb-4`}>{title}</h2>}
          {description && <p className={`text-xl ${descColor} max-w-3xl leading-relaxed`}>{description}</p>}
        </div>
      )}
      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;
