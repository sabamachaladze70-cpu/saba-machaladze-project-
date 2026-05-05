import { Project, NavLink } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store built with React and Tailwind CSS.',
    imageUrl: 'https://via.placeholder.com/600x400?text=E-commerce',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app to organize tasks and projects.',
    imageUrl: 'https://via.placeholder.com/600x400?text=Task+App',
    techStack: ['React', 'React Router', 'TypeScript', 'CSS'],
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'My personal portfolio showcasing my projects and skills.',
    imageUrl: 'https://via.placeholder.com/600x400?text=Portfolio',
    techStack: ['React', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://example.com',
  }
];
