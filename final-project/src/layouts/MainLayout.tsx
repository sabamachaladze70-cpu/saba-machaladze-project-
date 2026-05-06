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
    <div className="min-h-screen flex flex-col bg-background">
      <Header links={navLinks} />
      
      <main className="flex-grow w-full px-4 sm:px-8 lg:px-12 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
