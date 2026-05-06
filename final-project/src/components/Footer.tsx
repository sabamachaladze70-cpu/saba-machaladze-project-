import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C1E16] text-[#D6CCC2] py-12 mt-auto" aria-label="Footer">
      <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif font-bold mb-4 text-[#FDF2E9]">კონტაქტი</h3>
          <a href="mailto:sabamachaladze123@gmail.com" className="block hover:text-accent transition-colors mb-1" aria-label="მოგვწერეთ ელ-ფოსტაზე">sabamachaladze123@gmail.com</a>
          <a href="tel:597394042" className="block hover:text-accent transition-colors" aria-label="დაგვირეკეთ ტელეფონზე">597394042</a>
        </div>

        {/* Social Links Removed */}
        <div className="flex space-x-8">
        </div>

        {/* Copyright */}
        <div className="text-[#D6CCC2]/60 text-sm text-center md:text-right">
          <p>&copy; {currentYear} GeoTours. ყველა უფლება დაცულია.</p>
          <p className="mt-1">დამზადებულია სიყვარულით საქართველოში</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
