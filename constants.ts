import { DayConfig } from './types';

// SET THIS TO TRUE TO TEST ALL PAGES WITHOUT WAITING FOR DATES
export const DEBUG_UNLOCK_ALL = false;

// Define the timeline data
export const DAYS_DATA: DayConfig[] = [
  {
    id: 'day1',
    date: '2026-02-07',
    displayDate: 'Feb 7',
    title: 'Rose Day 🌹',
    statusText: {
      locked: 'Locked 🔒',
      unlocked: 'Tap to Open ✨'
    },
    messageHeader: 'Happy Rose Day 🌹',
    messageBody: '"Fatima, just like a rose unfolds its petals to embrace the sun, my heart opens up every time you smile. You are the most beautiful flower in my garden of life. I love you."',
    frameCount: 96, // Matches the uploaded 96 frames
    useLocalImages: true,
    imagePath: '/day1',
    imagePrefix: 'ezgif-frame-',
    startIndex: 1
  },
  {
    id: 'day2',
    date: '2026-02-08',
    displayDate: 'Feb 8',
    title: 'Propose Day 💍',
    statusText: {
      locked: 'Locked 🔒',
      unlocked: 'Tap to Open ✨'
    },
    messageHeader: 'Happy Propose Day 💍',
    messageBody: '"On this special day, I want to express my feelings. Will you be mine forever? You complete my world in ways I never imagined."',
    frameCount: 80,
    useLocalImages: true,
    imagePath: '/day2',
    imagePrefix: 'A_seamless_cinematic_1080p_202602071433_',
    startIndex: 0
  },
  {
    id: 'day3',
    date: '2026-02-09',
    displayDate: 'Feb 9',
    title: 'Chocolate Day 🍫',
    statusText: {
      locked: 'Locked 🔒',
      unlocked: 'Tap to Open ✨'
    },
    messageHeader: 'Happy Chocolate Day 🍫',
    messageBody: '"Life is like a chocolate box, and you are my favorite flavor. Sweet, delightful, and addictive. Sending you all my love!"',
    frameCount: 80,
    useLocalImages: true,
    imagePath: '/day3',
    imagePrefix: 'A_dramatic_slowmotion_1080p_202602071433_',
    startIndex: 0
  },
  {
    id: 'day4',
    date: '2026-02-10',
    displayDate: 'Feb 10',
    title: 'Teddy Day 🧸',
    statusText: {
      locked: 'Locked 🔒',
      unlocked: 'Tap to Open ✨'
    },
    messageHeader: 'Happy Teddy Day 🧸',
    messageBody: '"Sending you a big fluffy hug! Even though I am not a teddy bear, I promise to be your soft place to fall and your warmest hug."',
    frameCount: 80,
    useLocalImages: true,
    imagePath: '/day4',
    imagePrefix: 'A_magical_disneystyle_1080p_202602071510_',
    startIndex: 0
  },
  {
    id: 'day5',
    date: '2026-02-11',
    displayDate: 'Feb 11',
    title: 'Promise Day 🤝',
    statusText: {
      locked: 'Locked 🔒',
      unlocked: 'Tap to Open ✨'
    },
    messageHeader: 'Happy Promise Day 🤝',
    messageBody: '"I promise to stand by you, through thick and thin. I promise to love you more with every passing day."',
    frameCount: 10,
    useLocalImages: true,
    imagePath: '/day5'
  },
  {
    id: 'day6',
    date: '2026-02-12',
    displayDate: 'Feb 12',
    title: 'Hug Day 🤗',
    statusText: {
      locked: 'Locked 🔒',
      unlocked: 'Tap to Open ✨'
    },
    messageHeader: 'Happy Hug Day 🤗',
    messageBody: '"Sometimes words are not enough, but a hug says it all. Here is a tight squeeze to let you know how much you mean to me."',
    frameCount: 10,
    useLocalImages: true,
    imagePath: '/day6'
  },
  {
    id: 'day7',
    date: '2026-02-13',
    displayDate: 'Feb 13',
    title: 'Kiss Day 💋',
    statusText: {
      locked: 'Locked 🔒',
      unlocked: 'Tap to Open ✨'
    },
    messageHeader: 'Happy Kiss Day 💋',
    messageBody: '"A kiss is a secret told to the mouth instead of the ear; kisses are the messengers of love and tenderness."',
    frameCount: 10,
    useLocalImages: true,
    imagePath: '/day7'
  },
  {
    id: 'day8',
    date: '2026-02-14',
    displayDate: 'Feb 14',
    title: 'The Big Surprise ❤️',
    statusText: {
      locked: 'Wait for it...',
      unlocked: 'Tap for Surprise ❤️'
    },
    messageHeader: 'Happy Valentine\'s Day ❤️',
    messageBody: '"You are my Valentine, today and forever. Thank you for being the most amazing person in my life. I love you endlessly, Fatima."',
    frameCount: 10,
    useLocalImages: true,
    imagePath: '/day8',
    isValentine: true
  }
];