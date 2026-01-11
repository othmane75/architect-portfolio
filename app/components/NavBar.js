'use client';

import Link from "next/link";
import { useState } from "react";
import { languages } from "../i18n";

export function NavBar({ t, lang, onLangChange, visible }){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full top-0 z-40 bg-[#FAF9F6] backdrop-blur-md border-b border-gray-200 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-light tracking-widest">
            {t.logo}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm tracking-wide">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-sm tracking-wide hover:text-gray-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <div className="flex items-center space-x-2">
                {languages.map((lng) => (
                  <button
                    key={lng}
                    onClick={() => {
                      onLangChange(lng);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-full text-xs border transition ${
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
        )}
      </div>
    </nav>
  );
}




