'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [animationStage, setAnimationStage] = useState(0);
  // 0 = letters scattered
  // 1 = letters form "CLAR" in center
  // 2 = "CLAR" moves to nav, site appears

  useEffect(() => {
    // Stage 1: Form "CLAR" in center after 0.5s
    const timer1 = setTimeout(() => {
      setAnimationStage(1);
    }, 500);

    // Stage 2: Move to nav after 2s total
    const timer2 = setTimeout(() => {
      setAnimationStage(2);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const letters = ['C', 'L', 'A', 'R'];

  // Random starting positions for each letter
  const startPositions = [
    { x: -200, y: -150, rotate: -45 },
    { x: 250, y: -100, rotate: 90 },
    { x: -180, y: 200, rotate: -90 },
    { x: 300, y: 150, rotate: 45 },
  ];

  return (
    <div className="bg-white text-black min-h-screen overflow-hidden">
      
      {/* Animated Letters Intro */}
      {animationStage < 2 && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="relative flex space-x-4">
            {letters.map((letter, index) => (
              <div
                key={letter}
                className="text-6xl font-light tracking-widest transition-all duration-1000 ease-out"
                style={{
                  transform: animationStage === 0
                    ? `translate(${startPositions[index].x}px, ${startPositions[index].y}px) rotate(${startPositions[index].rotate}deg) scale(0.5)`
                    : 'translate(0, 0) rotate(0deg) scale(1)',
                  opacity: animationStage === 0 ? 0 : 1,
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav
        className={`fixed w-full top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-1000 ${
          animationStage === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          
          {/* Left: Logo */}
          <div className="text-2xl font-light tracking-widest">
            CLAR
          </div>
          
          {/* Right: Links */}
          <div className="flex space-x-12 text-sm tracking-wide">
            <a href="#projects" className="hover:text-gray-600 transition-colors duration-300">
              Projects
            </a>
            <a href="#about" className="hover:text-gray-600 transition-colors duration-300">
              About Me
            </a>
          </div>
          
        </div>
      </nav>

      {/* Content Area */}
      <div
        className={`pt-20 min-h-screen transition-all duration-1000 delay-500 ${
          animationStage === 2 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-4xl p-10">contents</h1>
      </div>

    </div>
  );
}