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
        block relative overflow-hidden rounded-xl border p-5 mb-4 transition-all duration-300
        ${day.isValentine ? 'border-valentine-red shadow-[0_0_15px_rgba(139,0,0,0.3)]' : 'border-[#333]'}
        ${
          unlocked
            ? 'bg-gradient-to-br from-[#1a1a1a] to-[#252525] border-valentine-gold cursor-pointer active:scale-[0.98]'
            : 'bg-[#1a1a1a] opacity-50 grayscale cursor-not-allowed'
        }
      `}
    >
      <div className="relative z-10 text-center sm:text-left">
        <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1 font-poppins">
          {day.displayDate}
        </span>
        <h2 className="font-playfair text-2xl text-white my-1">
          {day.title}
        </h2>
        <div className="text-sm mt-2 text-valentine-gold font-poppins">
          {unlocked
            ? day.statusText.unlocked
            : `Opens in ${daysLeft} day(s) ${day.statusText.locked}`}
        </div>
      </div>
    </Link>
  );
};

export default DayCard;