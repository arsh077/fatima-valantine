import { DEBUG_UNLOCK_ALL } from '../constants';

export const isDateUnlocked = (targetDateStr: string): { unlocked: boolean; daysLeft: number } => {
  if (DEBUG_UNLOCK_ALL) {
    return { unlocked: true, daysLeft: 0 };
  }

  const today = new Date();
  const targetDate = new Date(targetDateStr);

  // Reset time to midnight for accurate comparison
  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  if (today >= targetDate) {
    return { unlocked: true, daysLeft: 0 };
  } else {
    const timeDiff = targetDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return { unlocked: false, daysLeft };
  }
};