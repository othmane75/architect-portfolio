'use client';

import Link from "next/link";
import { languages } from "../i18n";

export function NavBar({ t, lang, onLangChange, visible }){
  return (
    <nav
      className={`fixed w-full top-0 z-40 bg-[#F9F8F5] backdrop-blur-md border-b border-gray-200 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-light tracking-widest">
          {t.logo}
        </Link>

        <div className="flex items-center space-x-10 text-sm tracking-wide">
          
          <Link href="/about" className="hover:text-gray-600 transition-colors duration-300">
            {t.nav.about}
          </Link>
          <div className="flex items-center space-x-2">
            {languages.map((lng) => (
              <button
                key={lng}
                onClick={() => onLangChange(lng)}
                className={`px-2 py-1 rounded-full text-xs border transition ${
                  lng === lang
                    ? "border-black bg-black text-white"
                    : "border-gray-300 hover:border-black"
                }`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}




