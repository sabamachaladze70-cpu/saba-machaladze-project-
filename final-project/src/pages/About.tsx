import React, { useEffect } from 'react';
import Section from '../components/Section';
import aboutHeroImg from '../assets/svaneti_high.png';
import missionImg from '../assets/batumi_high.png';
import historyImg from '../assets/kaxeti_high.png';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'ჩვენს შესახებ | GeoTours - ჩვენი ისტორია';
  }, []);

  return (
    <div className="bg-[#FEF9F3] text-[#2C1E16]">
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src={aboutHeroImg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#FEF9F3]"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-6 drop-shadow-2xl">GeoTours</h1>
          <p className="text-xl md:text-3xl text-white/90 font-medium tracking-[0.3em] uppercase">აღმოაჩინე საქართველო</p>
        </div>
      </div>

      <Section>
        <div className="max-w-7xl mx-auto py-24 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="space-y-10 animate-in fade-in slide-in-from-left-10 duration-1000">
              <div className="inline-block px-6 py-2 rounded-full bg-emerald-600 text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-emerald-600/20">ჩვენი მისია</div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1]">
                ჩვენი მიზანია <br /> 
                <span className="text-emerald-600 italic">შთაგონება</span>
              </h2>
              <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-medium">
                <p>
                  GeoTours შეიქმნა იმისთვის, რომ მოგზაურობა საქართველოში ყოფილიყო უფრო მეტი, ვიდრე უბრალოდ დასვენება. ჩვენ გვინდოდა გაგვეზიარებინა ჩვენი ქვეყნის სული.
                </p>
                <p>
                  დღეს ჩვენ ვამაყობთ, რომ ყოველ წელს ათასობით მოგზაურს ვეხმარებით აღმოაჩინონ საქართველოს დაფარული საგანძურები – სვანეთის კოშკებიდან ბათუმის სანაპიროებამდე.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-10 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-all duration-500">
                    <img src={missionImg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-emerald-600 text-white shadow-xl">
                    <div className="text-4xl font-bold mb-2">10+</div>
                    <div className="text-sm uppercase tracking-widest opacity-80">წლის გამოცდილება</div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-8 rounded-[2.5rem] bg-white shadow-xl border border-emerald-500/10">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">50k+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">ბედნიერი ტურისტი</div>
                  </div>
                  <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <img src={historyImg} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative py-24 px-8 md:px-20 rounded-[4rem] bg-[#1A120B] text-white overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                { t: 'ხარისხი', d: 'ჩვენ ვარჩევთ მხოლოდ საუკეთესო სასტუმროებსა და ტრანსპორტს თქვენი კომფორტისთვის.', n: '1' },
                { t: 'ავთენტურობა', d: 'ჩვენი ტურები გაჩვენებთ საქართველოს ნამდვილ სახეს და ტრადიციებს.', n: '2' },
                { t: 'ინოვაცია', d: 'ჩვენ მუდმივად ვქმნით ახალ, განსხვავებულ და საინტერესო მარშრუტებს.', n: '3' }
              ].map((val, idx) => (
                <div key={idx} className="group">
                  <div className="text-emerald-500 font-mono text-5xl mb-8 opacity-40 group-hover:opacity-100 transition-opacity">{val.n}</div>
                  <h3 className="text-3xl font-serif font-bold mb-6">{val.t}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">{val.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-5xl md:text-7xl font-serif font-bold">მზად ხარ ახალი <br /> <span className="text-accent underline decoration-emerald-500/30">თავგადასავლისთვის?</span></h2>
          <p className="text-xl text-gray-500">შემოგვიერთდით და ერთად აღმოვაჩინოთ საქართველო.</p>
          <div className="pt-6">
            <button 
              onClick={() => window.location.href = '/tours'}
              className="px-12 py-5 bg-accent text-white rounded-full text-xl font-bold hover:bg-emerald-600 transition-all shadow-xl hover:shadow-emerald-500/20 transform hover:-translate-y-1"
            >
              დაიწყე მოგზაურობა
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
