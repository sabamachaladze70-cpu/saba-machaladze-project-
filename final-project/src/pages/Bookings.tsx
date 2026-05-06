import React, { useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { removeItem, clearCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const Bookings: React.FC = () => {
  const bookedTours = useAppSelector(state => state.cart.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'ჩემი ჯავშნები | GeoTours';
  }, []);

  const handleCancelBooking = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleConfirmAll = () => {
    alert('თქვენი ჯავშნები წარმატებით დადასტურდა! ჩვენი ოპერატორი მალე დაგიკავშირდებათ.');
    dispatch(clearCart());
    navigate('/');
  };

  const totalPrice = bookedTours.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <Section 
      title="ჩემი ჯავშნები" 
      description="აქ შეგიძლიათ იხილოთ და მართოთ თქვენს მიერ არჩეული ტურები."
    >
      {bookedTours.length > 0 ? (
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookedTours.map((tour) => (
              <div key={tour.id} className="flex flex-col h-full">
                <Card 
                  id={tour.id}
                  title={tour.title}
                  image={tour.imageUrl}
                  description={tour.description}
                />
                <div className="mt-4 flex flex-wrap gap-2 px-1 pb-4">
                  <Badge label={tour.destination} />
                  <Badge label={tour.duration} />
                  <Badge label={`${tour.price} ₾`} />
                  <Badge label={`რაოდენობა: ${tour.quantity}`} />
                </div>
                <div className="mt-auto px-1">
                  <Button 
                    variant="outline"
                    onClick={() => handleCancelBooking(tour.id)}
                    className="w-full text-red-500 border-red-200 hover:bg-red-50"
                  >
                    გაუქმება
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">ჯამური ღირებულება</h3>
            <div className="text-4xl font-extrabold text-accent mb-8">{totalPrice} ₾</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                onClick={() => navigate('/tours')}
                className="px-8"
              >
                კიდევ დამატება
              </Button>
              <Button 
                variant="primary"
                onClick={handleConfirmAll}
                className="px-8 bg-accent hover:bg-teal-500 shadow-lg shadow-accent/20"
              >
                ჯავშნის დადასტურება
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 mt-8">
          <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <h3 className="text-2xl font-serif text-gray-500">თქვენ ჯერ არ გაქვთ დაჯავშნილი ტურები</h3>
          <p className="text-gray-400 mt-2 mb-8">გადადით ტურების გვერდზე და აირჩიეთ სასურველი მიმართულება</p>
          <Button onClick={() => navigate('/tours')}>
            ტურების ნახვა
          </Button>
        </div>
      )}
    </Section>
  );
};

export default Bookings;
