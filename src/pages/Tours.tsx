import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { tours } from '../data';

const Tours: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    document.title = 'ტურები | GeoTours';
  }, []);

  const filteredTours = filter === 'all' 
    ? tours 
    : tours.filter(tour => tour.duration.includes(filter));

  return (
    <Section 
      title="ჩვენი ტურები" 
      description="აღმოაჩინეთ საქართველოს ულამაზესი კუთხეები ჩვენს საუკეთესო ტურებთან ერთად."
    >
      <div className="flex gap-4 mt-6">
        <button 
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} hover:bg-opacity-90 transition-colors`}
        >
          ყველა
        </button>
        <button 
          onClick={() => setFilter('1 დღე')}
          className={`px-4 py-2 rounded-md ${filter === '1 დღე' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} hover:bg-opacity-90 transition-colors`}
        >
          1 დღიანი
        </button>
        <button 
          onClick={() => setFilter('2 დღე')}
          className={`px-4 py-2 rounded-md ${filter === '2 დღე' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} hover:bg-opacity-90 transition-colors`}
        >
          2 დღიანი
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredTours.map((tour) => (
          <div key={tour.id} className="flex flex-col h-full">
            <Card 
              title={tour.title}
              image={tour.imageUrl}
              description={tour.description}
            />
            <div className="mt-4 flex flex-wrap gap-2 px-1 pb-4">
              <Badge label={tour.destination} />
              <Badge label={tour.duration} />
              <Badge label={`${tour.price} ₾`} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Tours;

