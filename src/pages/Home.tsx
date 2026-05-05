import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { projects } from '../data';

const Home: React.FC = () => {
  // Using the first 3 projects for the featured section
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <Hero 
        title="Welcome to My Portfolio" 
        slogan="Building modern web applications with React, Tailwind, and TypeScript."
        ctaText="View My Work"
      />

      <Section 
        title="Featured Projects" 
        description="Here are some of my recent works that showcase my skills and passion for web development."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card 
              key={project.id}
              title={project.title}
              image={project.imageUrl}
              description={project.description}
            />
          ))}
        </div>
      </Section>

      <Section 
        title="Testimonials" 
        bgColor="bg-indigo-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mock Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
            <p className="text-gray-600 italic mb-4">"Outstanding work! The project was delivered on time and exceeded our expectations."</p>
            <div className="font-semibold text-gray-900">- Jane Doe, CEO</div>
          </div>
          {/* Mock Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
            <p className="text-gray-600 italic mb-4">"A highly skilled developer with great communication skills. Would love to work together again."</p>
            <div className="font-semibold text-gray-900">- John Smith, Product Manager</div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
