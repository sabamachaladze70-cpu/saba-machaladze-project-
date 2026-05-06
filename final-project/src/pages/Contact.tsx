import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import type { ContactForm } from '../types';
import { contactInfo } from '../data';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'კონტაქტი | GeoTours - დაგვიკავშირდით ნებისმიერ დროს';
  }, []);

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <Section 
      title="დაგვიკავშირდით" 
      description="გაქვთ კითხვები ან გსურთ ჩვენთან ერთად მოგზაურობა? მოგვწერეთ ან დაგვიკავშირდით პირდაპირ!"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
        <div className="bg-[#FEF9F3] p-10 sm:p-14 rounded-[3rem] shadow-sm border border-[#E8DCCF]">
          <h3 className="text-3xl font-serif font-bold text-primary mb-8">საკონტაქტო ინფორმაცია</h3>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-1">ტელეფონი</p>
                <p className="text-2xl font-bold text-[#2C1E16]">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-1">ელ. ფოსტა</p>
                <p className="text-xl sm:text-2xl font-bold text-[#2C1E16] break-all">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-1">მისამართი</p>
                <p className="text-2xl font-bold text-[#2C1E16]">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-xl border border-[#E8DCCF]">
          {isSuccess && (
            <div className="mb-8 bg-green-50 border border-green-200 text-green-800 px-6 py-5 rounded-2xl flex items-center gap-4 animate-in fade-in duration-500">
              <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <div>
                <h4 className="font-bold text-lg">წარმატებით გაიგზავნა!</h4>
                <p className="mt-1">თქვენი შეტყობინება მიღებულია. მალე დაგიკავშირდებით.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-600 mb-2 ml-2">სახელი</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border-2 border-[#E8DCCF] rounded-2xl focus:border-accent transition-all outline-none bg-[#FEF9F3]"
                placeholder="თქვენი სახელი"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-600 mb-2 ml-2">ელ. ფოსტა</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border-2 border-[#E8DCCF] rounded-2xl focus:border-accent transition-all outline-none bg-[#FEF9F3]"
                placeholder="თქვენი ელ. ფოსტა"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-600 mb-2 ml-2">შეტყობინება</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-6 py-4 border-2 border-[#E8DCCF] rounded-2xl focus:border-accent transition-all outline-none bg-[#FEF9F3]"
                placeholder="რით შეგვიძლია დაგეხმაროთ?"
              ></textarea>
            </div>
            <Button type="submit" className="w-full py-5 text-xl mt-4 bg-accent hover:bg-primary shadow-lg shadow-accent/20">
              გაგზავნა
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
