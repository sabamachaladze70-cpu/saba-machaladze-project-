import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import BookingModal from '../components/BookingModal';
import { tours } from '../data';
import type { Tour } from '../types';
import { useAppDispatch } from '../store/hooks';
import { addItem } from '../store/cartSlice';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Tours: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favorites, setFavorites] = useLocalStorage<number[]>('geotours-favorites', []);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.title = 'ტურები | GeoTours - დაგეგმე შენი თავგადასავალი';
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

  const filteredTours = tours.filter(tour => {
    const matchesFilter = filter === 'all' || tour.duration.includes(filter);
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tour.destination.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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

      <Section 
        title="ჩვენი ტურები" 
        description="აღმოაჩინეთ საქართველოს ულამაზესი კუთხეები ჩვენს საუკეთესო ტურებთან ერთად."
      >
        <BookingModal 
          isOpen={!!selectedTour}
          onClose={() => setSelectedTour(null)}
          onConfirm={handleBookingConfirm}
          tour={selectedTour}
        />

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mt-8 mb-12">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="მოძებნე ტური (მაგ. სვანეთი)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="ტურის ძებნა"
              className="w-full pl-14 pr-6 py-5 rounded-full border-2 border-[#E8DCCF] focus:outline-none focus:border-accent shadow-sm text-xl transition-all bg-white group-hover:shadow-md"
            />
            <svg className="w-8 h-8 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center" role="group" aria-label="ტურების ფილტრი">
          <button 
            onClick={() => setFilter('all')}
            aria-pressed={filter === 'all'}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${filter === 'all' ? 'bg-accent text-white shadow-lg' : 'bg-white text-[#4A3B31] border-2 border-[#E8DCCF] hover:border-accent'}`}
          >
            ყველა
          </button>
          <button 
            onClick={() => setFilter('1 დღე')}
            aria-pressed={filter === '1 დღე'}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${filter === '1 დღე' ? 'bg-accent text-white shadow-lg' : 'bg-white text-[#4A3B31] border-2 border-[#E8DCCF] hover:border-accent'}`}
          >
            1 დღიანი
          </button>
          <button 
            onClick={() => setFilter('2 დღე')}
            aria-pressed={filter === '2 დღე'}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${filter === '2 დღე' ? 'bg-accent text-white shadow-lg' : 'bg-white text-[#4A3B31] border-2 border-[#E8DCCF] hover:border-accent'}`}
          >
            2-3+ დღიანი
          </button>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <div key={tour.id} className="flex flex-col h-full group">
                <Card 
                  id={tour.id}
                  title={tour.title}
                  image={tour.imageUrl}
                  description={tour.description}
                  isFavorite={favorites.includes(tour.id)}
                  onToggleFavorite={toggleFavorite}
                />
                <div className="mt-6 flex flex-wrap gap-3 px-1 pb-4">
                  <Badge label={tour.destination} />
                  <Badge label={tour.duration} />
                  <Badge label={`${tour.price} ₾`} />
                </div>
                <div className="mt-auto px-1">
                  <Button 
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedTour(tour);
                    }}
                    className="w-full bg-accent hover:bg-primary py-4 text-xl shadow-md group-hover:shadow-xl transition-all"
                  >
                    დაჯავშნა
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-[#FDF2E9] rounded-[3rem] border-2 border-dashed border-[#E8DCCF]">
              <h3 className="text-3xl font-serif text-[#4A3B31] font-bold">ტურები ვერ მოიძებნა</h3>
              <p className="text-gray-500 mt-4 text-lg">სცადეთ სხვა საძიებო სიტყვა ან ფილტრი</p>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Tours;
