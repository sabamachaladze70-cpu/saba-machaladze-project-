import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import BookingModal from '../components/BookingModal';
import { tours } from '../data';
import type { Tour } from '../types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { addItem } from '../store/cartSlice';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [favorites, setFavorites] = useLocalStorage<number[]>('geotours-favorites', []);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.title = 'მთავარი | GeoTours - საუკეთესო ტურები საქართველოში';
  }, []);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleBookingConfirm = () => {
    if (selectedTour) {
      dispatch(addItem(selectedTour));
      setSelectedTour(null);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/');
        window.scrollTo(0, 0);
      }, 3000);
    }
  };

  const featuredTours = tours.slice(0, 6);

  return (
    <div className="relative">
      {/* Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#2C1E16]/90 backdrop-blur-md animate-in fade-in duration-500">
          <div className="text-center p-12 rounded-3xl border border-accent/20 bg-[#FEF9F3] shadow-2xl scale-in-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">ჯავშანი მიღებულია!</h2>
            <p className="text-gray-600 text-lg">მადლობა ნდობისთვის. ჩვენი ოპერატორი მალე დაგიკავშირდებათ.</p>
          </div>
        </div>
      )}

      <BookingModal 
        isOpen={!!selectedTour}
        onClose={() => setSelectedTour(null)}
        onConfirm={handleBookingConfirm}
        tour={selectedTour}
      />

      <Hero 
        title="იმოგზაურე ჩვენთან ერთად" 
        slogan="აღმოაჩინე საქართველოს ულამაზესი კუთხეები, ისტორიული ძეგლები და დაუვიწყარი თავგადასავლები. თბილი ფერები და ნამდვილი ქართული სტუმართმოყვარეობა."
        ctaText="ნახეთ ტურები"
        onCtaClick={() => navigate('/tours')}
      />

      <Section 
        title="პოპულარული ტურები" 
        description="აირჩიეთ თქვენთვის სასურველი მიმართულება და შექმენით დაუვიწყარი მოგონებები."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredTours.map((tour) => (
            <div key={tour.id} className="flex flex-col h-full group">
              <div className="relative overflow-hidden rounded-3xl mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <Card 
                  id={tour.id}
                  title={tour.title}
                  image={tour.imageUrl}
                  description={tour.description}
                  isFavorite={favorites.includes(tour.id)}
                  onToggleFavorite={toggleFavorite}
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-2 px-1 pb-4">
                <Badge label={tour.destination} />
                <Badge label={`${tour.price} ₾`} />
              </div>
              <div className="mt-auto px-1">
                <Button 
                  onClick={() => setSelectedTour(tour)}
                  className="w-full bg-accent hover:bg-primary py-4 text-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  დაჯავშნა
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button 
            onClick={() => navigate('/tours')}
            className="px-12 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all text-lg font-bold"
          >
            ყველა ტურის ნახვა
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Home;
