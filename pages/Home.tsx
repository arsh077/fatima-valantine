import React from 'react';
import DayCard from '../components/DayCard';
import FloatingHearts from '../components/FloatingHearts';
import { DAYS_DATA } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 container mx-auto px-5 py-10 max-w-2xl">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="font-dancing text-valentine-red text-6xl md:text-7xl mb-4 drop-shadow-sm">
            My Dearest Fatima ❤️
          </h1>
          <p className="font-poppins text-valentine-white text-xl font-light tracking-wide">
            A journey of love, one day at a time.
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {DAYS_DATA.map((day) => (
            <DayCard key={day.id} day={day} />
          ))}
        </div>

        <footer className="text-center mt-12 text-rose-400 text-sm font-poppins">
          Made with all my love 💖
        </footer>
      </div>
    </div>
  );
};

export default Home;