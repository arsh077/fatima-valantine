import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DayConfig } from '../types';

interface ScrollImageSequenceProps {
  day: DayConfig;
}

const ScrollImageSequence: React.FC<ScrollImageSequenceProps> = ({ day }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Ref to store loaded images to avoid re-fetching
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Configuration
  const frameCount = day.frameCount;

  // Helper to get image URL. 
  // NOTE: In a real scenario, this would point to local assets like `../assets/day1/frame_0001.jpg`
  // We use picsum with a seed to simulate different frames for the demo.
  const getFrameUrl = (index: number) => {
    if (day.useLocalImages && day.imagePath) {
      const prefix = day.imagePrefix || '';
      const extension = day.imageExtension || '.jpg';
      const startIdx = day.startIndex !== undefined ? day.startIndex : 1;

      // Calculate actual file index based on loop index (which is always 1..frameCount)
      // If loop is 1..N and startIdx is 0, we need 0..N-1. So (index - 1) + startIdx
      // If loop is 1..N and startIdx is 1, we need 1..N. So (index - 1) + startIdx -> 0 + 1 = 1
      const fileIndex = (index - 1) + startIdx;

      const paddedIndex = fileIndex.toString().padStart(3, '0');
      return `${day.imagePath}/${prefix}${paddedIndex}${extension}`;
    }
    // To simulate a video sequence, ideally we need real sequential frames. 
    // For this demo, we use a placeholder that changes slightly or just one image if we can't generate sequences.
    // Using a static ID for consistent "frames" across re-renders
    const seed = `${day.id}_frame_${index}`;
    // Using 1920x1080 for standard HD aspect ratio
    return `https://picsum.photos/seed/${seed}/1080/1920`;
  };

  useEffect(() => {
    const loadImages = async () => {
      const promises = [];
      const loadedImages: HTMLImageElement[] = [];

      // Preload images
      for (let i = 1; i <= frameCount; i++) {
        const promise = new Promise<void>((resolve) => {
          const img = new Image();
          img.src = getFrameUrl(i);
          img.onload = () => resolve();
          img.onerror = () => {
            console.error(`Failed to load image: ${getFrameUrl(i)}`);
            resolve();
          } // Resolve anyway to avoid blocking
          loadedImages[i] = img; // Store at index 1-based
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      imagesRef.current = loadedImages;
      setImagesLoaded(true);
    };

    loadImages();
  }, [frameCount, day.id, day.useLocalImages, day.imagePath]);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    // Initial render
    canvas.width = 1080;
    canvas.height = 1920;

    const render = (frameIndex: number) => {
      const img = imagesRef.current[frameIndex];
      if (img) {
        // Draw image to cover the canvas (like object-fit: cover)
        // Calculate scaling
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);

        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }
    };

    // Initial draw
    render(1);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;

      const frameIndex = Math.min(
        frameCount,
        Math.max(1, Math.ceil(scrollFraction * frameCount))
      );

      requestAnimationFrame(() => render(frameIndex));

      // Show content at the end
      if (scrollFraction > 0.85) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [imagesLoaded, frameCount]);

  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-valentine-bg text-valentine-gold font-playfair text-xl">
        Loading Memories...
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative bg-black" style={{ height: '400vh' }}>
      <canvas
        ref={canvasRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full max-w-full max-h-full object-cover z-[1]"
      />

      <div
        className={`fixed bottom-5 w-full text-center text-white/50 z-[5] animate-bounce-slow transition-opacity duration-500 ${showContent ? 'opacity-0' : 'opacity-100'}`}
      >
        Scroll Slowly to Reveal ❤️
      </div>

      <div
        className={`
          fixed left-1/2 bottom-[50px] transform -translate-x-1/2 
          w-[85%] max-w-[500px] text-center bg-black/70 p-8 rounded-2xl 
          border border-[rgba(255,215,0,0.3)] backdrop-blur-sm z-10 
          transition-all duration-1000 ease-in-out
          ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px] pointer-events-none'}
        `}
      >
        <h1 className="text-valentine-gold mb-4 text-3xl font-playfair font-bold">
          {day.messageHeader}
        </h1>
        <p className="text-lg leading-relaxed text-valentine-white font-poppins">
          {day.messageBody}
        </p>

        {!day.isValentine && (
          <div className="mt-4 text-sm text-valentine-gold/80 italic animate-pulse">
            Come back tomorrow for the next surprise! 🔒
          </div>
        )}

        <div className="mt-6">
          <Link to="/" className="inline-block text-gray-400 text-sm border-b border-gray-400 hover:text-white hover:border-white transition-colors">
            Go back to Timeline
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScrollImageSequence;