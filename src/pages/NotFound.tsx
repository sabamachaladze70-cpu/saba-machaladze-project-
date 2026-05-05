import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'გვერდი არ მოიძებნა | GeoTours';
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-extrabold text-indigo-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">გვერდი არ მოიძებნა</h2>
      <p className="text-xl text-gray-600 mb-8 max-w-md">
        სამწუხაროდ, გვერდი რომელსაც ეძებთ არ არსებობს ან წაშლილია.
      </p>
      <Link to="/">
        <Button variant="primary">
          მთავარ გვერდზე დაბრუნება
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
