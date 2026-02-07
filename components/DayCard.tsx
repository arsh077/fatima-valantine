import React from 'react';
import { Link } from 'react-router-dom';
import { DayConfig } from '../types';
import { isDateUnlocked } from '../utils/dateUtils';

interface DayCardProps {
  day: DayConfig;
}

const DayCard: React.FC<DayCardProps> = ({ day }) => {
  const { unlocked, daysLeft } = isDateUnlocked(day.date);

  const handleClick = (e: React.MouseEvent) => {
    if (!unlocked) {
      e.preventDefault();
      alert(`Sabar karo meri jaan! Yeh page ${day.date} ko khulega. ❤️\n(Opens in ${daysLeft} days)`);
    }
  };

  return (
    <Link
      to={unlocked ? `/day/${day.id}` : '#'}
      onClick={handleClick}
      className={`
        relative block p-6 rounded-2xl transition-all duration-300 transform
        ${unlocked
          ? 'bg-white/60 hover:bg-white/80 hover:scale-105 hover:shadow-xl cursor-pointer border-2 border-transparent hover:border-valentine-gold'
          : 'bg-white/30 opacity-80 cursor-not-allowed grayscale-[0.3]'}
        backdrop-blur-md shadow-lg border border-white/40
        group
      `}
    >
      <div className="flex justify-between items-center relative z-10">
        <div>
          <span className="block text-valentine-red text-xs font-bold tracking-widest uppercase mb-1">
            {day.displayDate}
          </span>
          <h2 className={`text-2xl md:text-3xl font-playfair font-bold mb-2 ${unlocked ? 'text-valentine-white' : 'text-gray-600'}`}>
            {day.title}
          </h2>
          <p className={`text-sm font-poppins ${unlocked ? 'text-rose-700' : 'text-gray-500'} flex items-center gap-2`}>
            {unlocked ? day.statusText.unlocked : (
              <>
                {day.statusText.locked}
                <span className="text-xs bg-gray-200/50 px-2 py-0.5 rounded-full">
                  Opens in {daysLeft} day(s)
                </span>
              </>
            )}
          </p>
        </div>

        <div className={`
          text-3xl transform transition-transform duration-500 
          ${unlocked ? 'group-hover:rotate-12 group-hover:scale-125' : ''}
        `}>
          {unlocked ? '💌' : '🔒'}
        </div>
      </div>

      {/* Decorative background element */}
      {unlocked && (
        <div className="absolute -right-4 -bottom-4 opacity-10 text-6xl transform rotate-12 pointer-events-none text-rose-500">
          ❤️
        </div>
      )}
    </Link>
  );
};

export default DayCard;