import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { tours } from '../data';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  // Using the first 3 tours for the featured section
  const featuredTours = tours.slice(0, 3);

  return (
    <div>
      <Hero 
        title="იმოგზაურე ჩვენთან ერთად" 
        slogan="აღმოაჩინე საქართველოს ულამაზესი კუთხეები, ისტორიული ძეგლები და დაუვიწყარი თავგადასავლები."
        ctaText="ნახეთ ტურები"
        onCtaClick={() => navigate('/tours')}
      />

      <Section 
        title="პოპულარული ტურები" 
        description="აირჩიეთ თქვენთვის სასურველი მიმართულება და შექმენით დაუვიწყარი მოგონებები."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <div key={tour.id} className="flex flex-col h-full">
              <Card 
                title={tour.title}
                image={tour.imageUrl}
                description={tour.description}
              />
              <div className="mt-4 flex flex-wrap gap-2 px-1 pb-4">
                <Badge label={tour.destination} />
                <Badge label={`${tour.price} ₾`} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="რას ამბობენ ჩვენზე" 
        bgColor="bg-indigo-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
            <p className="text-gray-600 italic mb-4">"საუკეთესო ორგანიზებული ტური ყაზბეგში! მეგზური იყო ძალიან ყურადღებიანი."</p>
            <div className="font-semibold text-gray-900">- მარიამ გ.</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
            <p className="text-gray-600 italic mb-4">"სვანეთის ტურმა მოლოდინს გადააჭარბა. აუცილებლად ვიმოგზაურებთ თქვენთან ერთად კვლავ!"</p>
            <div className="font-semibold text-gray-900">- გიორგი დ.</div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
