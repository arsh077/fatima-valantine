export interface DayConfig {
  id: string;
  date: string; // YYYY-MM-DD
  displayDate: string; // e.g., Feb 7
  title: string;
  statusText: {
    locked: string;
    unlocked: string;
  };
  messageHeader: string;
  messageBody: string;
  frameCount: number; // For the scroll animation
  useLocalImages?: boolean;
  imagePath?: string;
  imagePrefix?: string; // e.g., "ezgif-frame-" or "A_seamless..."
  imageExtension?: string; // default .jpg
  startIndex?: number; // default 1
  isValentine?: boolean;
}