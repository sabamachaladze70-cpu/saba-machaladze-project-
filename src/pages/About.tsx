import React, { useEffect } from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'ჩვენ შესახებ | GeoTours';
  }, []);

  return (
    <Section title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3">
          <img 
            src="https://via.placeholder.com/400x500?text=My+Photo" 
            alt="My Portrait" 
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-4 text-lg text-gray-700">
          <p>
            მოგესალმებით GeoTours-ში! ჩვენ ვართ მოგზაურობაზე შეყვარებული გუნდი, რომლის მთავარი მიზანია
            აღმოგაჩენინოთ საქართველოს დაფარული და ცნობილი სილამაზეები.
          </p>
          <p>
            წლების განმავლობაში ვთავაზობთ მაღალი ხარისხის, კომფორტულ და დაუვიწყარ ტურებს საქართველოს 
            ყველა კუთხეში. ჩვენი პროფესიონალი გიდები და კომფორტული ტრანსპორტი უზრუნველყოფს თქვენს 
            საუკეთესო გამოცდილებას.
          </p>
          <p>
            შემოგვიერთდით და ერთად შევქმნათ მოგონებები, რომლებიც მთელი ცხოვრება გაგყვებათ!
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
