import React, { type ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { navLinks } from '../data';
import { useScrollTop } from '../hooks/useScrollTop';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useScrollTop();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header links={navLinks} />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
