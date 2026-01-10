'use client';

import { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { getDictionary } from '../i18n';

export default function ProjectsPage() {
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

  const projects = [
    { title: '30 VPO' },
    { title: 'Sea Front House'},
    { title: 'Union tale' },
  ];

  return (
    <div className="bg-[#FAF9F6] text-black min-h-screen">
      <NavBar t={t} lang={lang} onLangChange={changeLang} visible />

      <header className="pt-28 max-w-7xl mx-auto px-6 pb-12">
        <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-3">
          {t.projects.title}
        </p>
        <h1 className="text-4xl md:text-5xl font-light mb-3">
          {t.projects.subtitle}
        </h1>
        <p className="text-gray-600 max-w-2xl">
          {t.intro.subtitle}
        </p>
      </header>
    </div>
  );
}

