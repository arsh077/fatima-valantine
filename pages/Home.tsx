import React from 'react';
import DayCard from '../components/DayCard';
import { DAYS_DATA } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-5 py-10 max-w-2xl min-h-screen">
      <header className="text-center mb-10 animate-fade-in">
        <h1 className="font-playfair text-valentine-gold text-4xl md:text-5xl mb-3">
          My Dearest Fatima
        </h1>
        <p className="font-poppins text-gray-400 text-lg">
          A journey of love, one day at a time.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {DAYS_DATA.map((day) => (
          <DayCard key={day.id} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Home;