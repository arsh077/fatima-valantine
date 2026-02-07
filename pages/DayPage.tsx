import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ScrollImageSequence from '../components/ScrollImageSequence';
import { DAYS_DATA } from '../constants';
import { isDateUnlocked } from '../utils/dateUtils';

const DayPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const day = DAYS_DATA.find(d => d.id === id);

  useEffect(() => {
    if (!day) {
      navigate('/');
      return;
    }

    const { unlocked } = isDateUnlocked(day.date);
    if (!unlocked) {
      alert("Cheating allowed nahi hai! 😜 Wait for the date.");
      navigate('/');
    }
  }, [day, navigate]);

  if (!day) return null;

  return <ScrollImageSequence day={day} />;
};

export default DayPage;