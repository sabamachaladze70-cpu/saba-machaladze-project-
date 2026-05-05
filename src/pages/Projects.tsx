import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { projects } from '../data';

const Projects: React.FC = () => {
  return (
    <Section 
      title="My Portfolio" 
      description="A collection of my recent work and personal projects."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col">
            <Card 
              title={project.title}
              image={project.imageUrl}
              description={project.description}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <Badge key={tech} label={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
