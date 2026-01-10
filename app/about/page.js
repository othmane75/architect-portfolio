'use client';

import { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { getDictionary } from '../i18n';

export default function AboutPage() {
  const [lang, setLang] = useState('en');
  const t = getDictionary(lang);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    if (stored) setLang(stored);
  }, []);

  const changeLang = (lng) => {
    setLang(lng);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lng);
    }
  };

  return (
    <div className="bg-[#F4F5F0] text-black min-h-screen">
      <NavBar t={t} lang={lang} onLangChange={changeLang} visible />
      
      <div className="pt-32 pb-20 max-w-5xl mx-auto px-6">
        {/* Hero Introduction */}
        <section className="mb-20">
          <div className="border-l-2 border-black pl-8 mb-8">
            <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
              {t.about.pageTitle}
            </h1>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-800 max-w-4xl text-justify">
            {t.about.intro}
          </p>
        </section>

        {/* Architectural Philosophy */}
        <section className="mb-20">
          <div className="grid md:grid-cols-12 gap-8 mb-8">
            <div className="md:col-span-4">
              <h2 className="text-3xl font-light sticky top-32">
                {t.about.philosophyTitle}
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-lg leading-relaxed text-gray-800 text-justify">
                {t.about.philosophy1}
              </p>
              <p className="text-lg leading-relaxed text-gray-800 text-justify">
                {t.about.philosophy2}
              </p>
              <p className="text-lg leading-relaxed text-gray-800 text-justify">
                {t.about.philosophy3}
              </p>
            </div>
          </div>
        </section>

        {/* Tools & Skills */}
        <section className="mb-20">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="text-3xl font-light sticky top-32">
                {t.about.toolsTitle}
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg leading-relaxed text-gray-800 mb-8 text-justify">
                {t.about.toolsIntro}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/40 p-4 rounded-sm border border-gray-300">
                  <div className="font-medium mb-1">AutoCAD</div>
                  <div className="text-sm text-gray-600">{t.about.autocad}</div>
                </div>
                <div className="bg-white/40 p-4 rounded-sm border border-gray-300">
                  <div className="font-medium mb-1">Adobe Photoshop</div>
                  <div className="text-sm text-gray-600">{t.about.photoshop}</div>
                </div>
                <div className="bg-white/40 p-4 rounded-sm border border-gray-300">
                  <div className="font-medium mb-1">Adobe InDesign</div>
                  <div className="text-sm text-gray-600">{t.about.indesign}</div>
                </div>
                <div className="bg-white/40 p-4 rounded-sm border border-gray-300">
                  <div className="font-medium mb-1">Revit</div>
                  <div className="text-sm text-gray-600">{t.about.revit}</div>
                </div>
                <div className="bg-white/40 p-4 rounded-sm border border-gray-300">
                  <div className="font-medium mb-1">D5 Render</div>
                  <div className="text-sm text-gray-600">{t.about.d5render}</div>
                </div>
              </div>

              <div className="bg-black/5 p-6 rounded-sm border-l-2 border-black">
                <p className="text-lg leading-relaxed text-gray-800 text-justify">
                  {t.about.personalProject}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="border-t-2 border-black pt-12 mt-20">
          <div className="flex justify-center gap-8">
            <a 
              href="https://www.linkedin.com/in/iness-clar-518285340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <svg className="w-10 h-10 fill-current hover:opacity-70 transition-opacity" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/fen_inessss?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <svg className="w-10 h-10 fill-current hover:opacity-70 transition-opacity" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}