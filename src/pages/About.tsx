import React from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
  return (
    <Section title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3">
          <img 
            src="https://via.placeholder.com/400x500?text=My+Photo" 
            alt="My Portrait" 
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-4 text-lg text-gray-700">
          <p>
            Hello! I'm a passionate web developer focused on creating interactive and user-friendly web experiences. 
            With a strong foundation in modern JavaScript frameworks like React, I love building applications that solve real-world problems.
          </p>
          <p>
            I specialize in front-end development, using tools like React, Vite, TypeScript, and Tailwind CSS to craft 
            beautiful and responsive interfaces. I am always eager to learn new technologies and improve my skills.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, reading, or enjoying a good cup of coffee.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
