import React, { type ReactNode } from 'react';

export interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({ title, description, children, bgColor = "bg-transparent" }) => {
  return (
    <section className={`py-12 ${bgColor} rounded-xl mb-8 px-4 sm:px-8`}>
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        {description && <p className="text-lg text-gray-600 max-w-2xl">{description}</p>}
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;
