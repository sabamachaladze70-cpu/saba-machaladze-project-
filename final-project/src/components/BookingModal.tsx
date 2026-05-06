import React from 'react';
import type { Tour } from '../types';
import Button from './Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  tour: Tour | null;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onConfirm, tour }) => {
  if (!isOpen || !tour) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div 
        className="absolute inset-0 bg-primary/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative z-10 transform transition-all animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          aria-label="დახურვა"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="text-center mb-8 mt-2">
          <h2 id="modal-title" className="text-2xl font-serif font-bold text-primary mb-2">დაჯავშნის დეტალები</h2>
          <p className="text-gray-500">{tour.title}</p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-gray-500">ფასი</span>
            <span className="font-bold text-lg">{tour.price} ₾</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-gray-500">ხანგრძლივობა</span>
            <span className="font-medium">{tour.duration}</span>
          </div>
          <div className="bg-teal-50 border border-accent/20 rounded-xl p-4 mt-4">
            <div className="flex items-center gap-3 text-primary mb-1">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-bold text-sm">გზის დრო ქუთაისიდან</span>
            </div>
            <p className="text-primary/80 font-medium pl-8">{tour.distanceFromKutaisi || 'დაზუსტების პროცესშია'}</p>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="flex-1 py-3 text-gray-600 border-gray-200 hover:bg-gray-50"
          >
            გაუქმება
          </Button>
          <Button 
            variant="primary" 
            onClick={onConfirm}
            className="flex-1 py-3 bg-accent text-white hover:bg-teal-500 border-none shadow-md shadow-accent/20"
          >
            დადასტურება
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
