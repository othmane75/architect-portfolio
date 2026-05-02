'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavBar } from './components/NavBar';
import { getDictionary } from './i18n';

export default function Home() {
  const [animationStage, setAnimationStage] = useState(0);
  const [lang, setLang] = useState('en');
  const t = getDictionary(lang);

  // Intro: scatter -> assemble -> reveal (more fluid)
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 220);
    const timer2 = setTimeout(() => setAnimationStage(2), 1100);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Persist language
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem('lang');
      if (stored) setLang(stored);
    } catch (e) {
      // Android WebView safe fallback
    }
  }, []);

  const changeLang = (lng) => {
    setLang(lng);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('lang', lng);
      } catch (e) {
        // Fallback: do nothing
      }
    }
  };

  const letters = t.logo.split('');
  const startPositions = [
    { x: -220, y: -160, rotate: -35, scale: 0.55 },
    { x: 260, y: -140, rotate: 28, scale: 0.6 },
    { x: -200, y: 200, rotate: -22, scale: 0.6 },
    { x: 280, y: 180, rotate: 32, scale: 0.58 },
  ];

  return (
    <div className="bg-[#FAF9F6] text-black min-h-screen overflow-hidden">
      {/* Animated Letters Intro */}
      {animationStage < 2 && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#FAF9F6] z-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.05),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(0,0,0,0.05),transparent_35%)] blur-3xl opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-70" />
          <div className="relative flex space-x-4 md:space-x-6">
            {letters.map((letter, index) => (
              <div
                key={letter + index}
                className="text-6xl font-light tracking-widest transition-all duration-1000 ease-[cubic-bezier(0.23,0.72,0.28,1)]"
                style={{
                  transform: animationStage === 0
                    ? `translate(${startPositions[index]?.x || 0}px, ${startPositions[index]?.y || 0}px) rotate(${startPositions[index]?.rotate || 0}deg) scale(${startPositions[index]?.scale || 0.6})`
                    : 'translate(0, 0) rotate(0deg) scale(1.04)',
                  opacity: animationStage === 0 ? 0 : 1,
                  transitionDelay: `${index * 70}ms`,
                  filter: animationStage === 0 ? 'blur(3px)' : 'blur(0)',
                  letterSpacing: animationStage === 0 ? '0.15em' : '0.3em',
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <NavBar t={t} lang={lang} onLangChange={changeLang} visible={animationStage === 2} />

      {/* Content Area */}
      <div
        className={`pt-24 min-h-screen transition-all duration-900 ${
          animationStage === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
       <header className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
  <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-gray-500 mb-3 sm:mb-4">
    {t.intro.hero}
  </p>
  <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light leading-tight mb-2 italic text-gray-800">
    {t.intro.subtitle}
  </h1>
  <p className="text-base md:text-lg font-light text-gray-600 italic">
    {t.intro.author}
  </p>
  <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
    <a href="/about" className="px-4 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-full hover:border-black transition text-sm">
      {t.intro.ctaAbout}
    </a>
  </div>
</header>

        {/* Interactive Image with Clickable Areas */}
        <div className=" py-12 relative mx-auto">
          <div className="relative w-full">
            <Image
              src="/images/mainpage/page_de_garde0.png"
              alt="Projects overview"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
            
            {/* Clickable Areas */}
            {/* Project 1: Union Tale */}
            <Link 
              href="/projects/union_tale"
              className="absolute group cursor-pointer transition-all duration-300"
              style={{
                left: '7%',
                top: '5%',
                width: '80%',
                height: '14%'
                
              }}
              title="Union Tale"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 bg-white transition-opacity duration-300 rounded"></div>
            </Link>

            {/* Project 2: Sea Front House */}
            <Link 
              href="/projects/Sea_Front_House"
              className="absolute group cursor-pointer transition-all duration-300"
              style={{
                left: '14%',
                top: '25%',
                width: '75%',
                height: '9%',
              }}
              title="Sea Front House"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 bg-white transition-opacity duration-300"></div>
            </Link>

            {/* Project 3: 30VPO */}
            <Link 
              href="/projects/30VPO"
              className="absolute group cursor-pointer transition-all duration-300"
              style={{
                left: '16%',
                top: '38%',
                width: '69%',
                height: '15%',
              }}
              title="30 VPO"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 bg-white transition-opacity duration-300 rounded"></div>
            </Link>

            {/* Project 4: CONTINUUM */}
            <Link 
              href="/projects/CONTINUUM"
              className="absolute group cursor-pointer transition-all duration-300"
              style={{
                left: '18%',
                top: '57%',
                width: '75%',
                height: '19%',
              }}
              title="CONTINUUM"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 bg-white transition-opacity duration-300"></div>
            </Link>

            {/* Project 5: The Cabin */}
            <Link 
              href="/projects/thecabin"
              className="absolute group cursor-pointer transition-all duration-300"
              style={{
                left: '17%',
                top: '81%',
                width: '75%',
                height: '15%',
              }}
              title="The Cabin"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 bg-white transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}