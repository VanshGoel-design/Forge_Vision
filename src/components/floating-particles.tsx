"use client";

import React, { useEffect, useState } from 'react';

const FloatingParticles = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const particleCount = 20;
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const size = Math.random() * 5 + 2;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * -20;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const colors = ['hsl(var(--primary))', 'hsl(var(--accent))'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const style: React.CSSProperties = {
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}%`,
      top: `${top}%`,
      backgroundColor: color,
      boxShadow: `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`,
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    };

    return <div key={i} className="absolute rounded-full" style={style} />;
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0); }
            25% { transform: translate(${Math.random() * 40 - 20}vw, ${Math.random() * 40 - 20}vh); }
            50% { transform: translate(0, ${Math.random() * 40 - 20}vh); opacity: 0.8; }
            75% { transform: translate(${Math.random() * 40 - 20}vw, 0); }
            100% { transform: translate(0, 0); opacity: 1; }
          }
        `}
      </style>
      {particles}
    </div>
  );
};

export default FloatingParticles;
