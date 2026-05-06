import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tours } from '../data';
import type { Tour } from '../types';
import Section from '../components/Section';
import Badge from '../components/Badge';
import Button from '../components/Button';
import BookingModal from '../components/BookingModal';
import { useAppDispatch } from '../store/hooks';
import { addItem } from '../store/cartSlice';

const TourDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [tour, setTour] = useState<Tour | null>(null);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      const foundTour = tours.find(t => t.id === parseInt(id));
      if (foundTour) {
        setTour(foundTour);
        document.title = `${foundTour.title} | GeoTours`;
      } else {
        navigate('/404');
      }
    }
  }, [id, navigate]);

  const handleBookingConfirm = () => {
    if (tour) {
      dispatch(addItem(tour));
      setSelectedTour(null);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/');
        window.scrollTo(0, 0);
      }, 3000);
    }
  };

  if (!tour) return null;

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
        tour={tour}
      />

      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={tour.imageUrl} 
          alt={tour.title}
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] to-transparent"></div>
        <div className="absolute bottom-12 left-0 right-0 px-4 sm:px-8 lg:px-12">
          <Badge label={tour.destination} />
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mt-4 mb-2">{tour.title}</h1>
          <div className="flex gap-4 text-white/80 text-xl">
            <span>{tour.duration}</span>
            <span>•</span>
            <span className="font-bold text-secondary">{tour.price} ₾</span>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">ტურის აღწერა</h2>
            <p className="text-xl leading-relaxed text-[#4A3B31] mb-12">{tour.description}</p>
            
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">ფოტოგალერეა</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tour.gallery?.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-2xl aspect-video shadow-md hover:shadow-xl transition-all duration-500 cursor-zoom-in">
                  <img 
                    src={img} 
                    alt={`${tour.title} - გალერეა ${idx + 1}`} 
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-8 rounded-3xl shadow-xl border border-[#E8DCCF]">
              <h3 className="text-2xl font-serif font-bold mb-6 text-primary text-center">დაჯავშნა</h3>
              <div className="space-y-4 mb-8 text-lg">
                <div className="flex justify-between border-b border-[#E8DCCF] pb-4">
                  <span className="text-gray-500">ერთი ადამიანის ფასი:</span>
                  <span className="font-bold">{tour.price} ₾</span>
                </div>
                <div className="flex justify-between border-b border-[#E8DCCF] pb-4">
                  <span className="text-gray-500">ხანგრძლივობა:</span>
                  <span className="font-bold">{tour.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">გზა ქუთაისიდან:</span>
                  <span className="font-bold">{tour.distanceFromKutaisi}</span>
                </div>
              </div>
              <Button 
                onClick={() => setSelectedTour(tour)}
                className="w-full bg-accent hover:bg-primary py-5 text-xl shadow-lg shadow-accent/20"
              >
                ახლავე დაჯავშნა
              </Button>
              <p className="text-center text-sm text-gray-400 mt-4 italic">ჯავშნის დადასტურება ხდება ოპერატორის მიერ</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TourDetail;
