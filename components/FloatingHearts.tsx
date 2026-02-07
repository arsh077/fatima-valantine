import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
    const [hearts, setHearts] = useState<{ id: number; left: number; animationDuration: number; delay: number }[]>([]);

    useEffect(() => {
        const newHearts = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // Random horizontal position
            animationDuration: 6 + Math.random() * 10, // Random speed (6-16s)
            delay: Math.random() * 5, // Random delay
        }));
        setHearts(newHearts);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="absolute bottom-[-50px] text-red-400 opacity-60 animate-float"
                    style={{
                        left: `${heart.left}%`,
                        fontSize: `${Math.random() * 20 + 20}px`,
                        animation: `floatUp ${heart.animationDuration}s linear infinite`,
                        animationDelay: `${heart.delay}s`,
                    }}
                >
                    ❤️
                </div>
            ))}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_100%)] opacity-50" />
            <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
          100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
        </div>
    );
};

export default FloatingHearts;
