import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Contact Info */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="text-gray-400 text-sm">hello@example.com</p>
          <p className="text-gray-400 text-sm">+123 456 7890</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Facebook</span>
            FB
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Twitter</span>
            TW
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            IN
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-right">
          <p>&copy; {currentYear} GeoTours. ყველა უფლება დაცულია.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
