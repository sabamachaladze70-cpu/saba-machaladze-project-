import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { tours } from '../data';

const Tours: React.FC = () => {
  return (
    <Section 
      title="ჩვენი ტურები" 
      description="აღმოაჩინეთ საქართველოს ულამაზესი კუთხეები ჩვენს საუკეთესო ტურებთან ერთად."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {tours.map((tour) => (
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
