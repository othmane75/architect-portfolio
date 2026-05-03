"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { GalleryImage } from "../../components/ImageGallery";
import { getDictionary } from "../../i18n";

const translations = {
  en: {
    title: "The Cabin",
    subtitle: "Creating a climatic shelter and community",
    description1: "The aim of this proposal is to design and build a small shelter that is structurally clear, environmentally aware, and practical for real use beyond the course. Instead of being only a conceptual project, it focuses on creating a realistic and inhabitable space that values comfort, efficiency, and simple construction. The project proposes a compact wooden shelter based on a clear and logical structural system.",
},
  es: {
    title: "The Cabin",
    subtitle: "Crear un refugio acogedor y una comunidad",
    description1: "El objetivo de esta propuesta es diseñar y construir un pequeño refugio que sea estructuralmente sencillo, respetuoso con el medio ambiente y práctico para su uso real más allá del curso. En lugar de limitarse a ser un proyecto conceptual, se centra en crear un espacio realista y habitable que prima la comodidad, la eficiencia y la sencillez constructiva. El proyecto propone un refugio compacto de madera basado en un sistema estructural claro y lógico.",
},
  fr: {
    title: "The Cabin",
    subtitle: "Créer un refuge climatique et une communauté",
    description1: "L'objectif de cette proposition est de concevoir et de construire un petit abri doté d'une structure claire, respectueux de l'environnement et adapté à une utilisation concrète au-delà du cadre du cours. Loin d'être un simple projet conceptuel, il vise à créer un espace réaliste et habitable qui privilégie le confort, l'efficacité et la simplicité de construction. Le projet propose un abri compact en bois reposant sur un système structurel clair et logique.",
},
};

export default function ProjectPage() {
  const [lang, setLang] = useState<"en" | "es" | "fr">("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem("lang");
      if (stored === "en" || stored === "es" || stored === "fr") {
        setLang(stored);
      }
    } catch (e) {
      // Fallback: do nothing, default to "en"
    }
  }, []);

  const t = getDictionary(lang);

  const changeLang = (lng: string) => {
    if (lng === "en" || lng === "es" || lng === "fr") {
      setLang(lng);
      if (typeof window !== "undefined") {
          try {
            window.localStorage.setItem("lang", lng);
          } catch (e) {
            // Fallback: do nothing
          }
      }
    }
  };

  // Gallery images array - ordered left to right, top to bottom
  const galleryImages = [
    { src: "/images/thecabin/48B630DA-AFD2-4FC9-AEA1-EB3481E63913 2.jpg", alt: "Project axonometric view" },
    { src: "/images/thecabin/IMG_0767.jpeg", alt: "Site plan" },
    { src: "/images/thecabin/axo.png", alt: "First floor plan" },
    { src: "/images/thecabin/PHOTO-2026-01-15-13-38-40.jpg", alt: "Detail view" },
    { src: "/images/thecabin/CLIMATIC_SECTION_copy.png", alt: "Southeast axonometric" },
    { src: "/images/thecabin/IMG_0322.jpeg", alt: "Small model" },
    { src: "/images/thecabin/elevation north.png", alt: "North elevation" },
    { src: "/images/thecabin/IMG_0666.jpeg", alt: "South elevation" },
    { src: "/images/thecabin/elevation south.png", alt: "East elevation" },
    { src: "/images/thecabin/f49296d2-90f4-40f8-9b0b-2f40e4334246.JPG", alt: "North elevation" },
    { src: "/images/thecabin/STEPBYSTEP1.png", alt: "Northeast axonometric" },
    { src: "/images/thecabin/CLIMATIC_SECTION.png", alt: "Transversal section" },
    { src: "/images/thecabin/dd7d0143-6e33-477e-8819-241bc2bb5c35.JPG", alt: "Second floor plan" },
  ];

  return (
    <div className="bg-[#FAF9F6] text-black min-h-screen">
      <NavBar t={t} lang={lang} onLangChange={changeLang} visible />

      <main className="py-20 pt-28">
        {/* Header */}
        <header className="max-w-5xl mx-auto px-6 mb-12">
          <h1 className="text-2xl font-medium text-center mb-2">
            {translations[lang].title}
          </h1>
          <p className="text-center text-sm text-gray-600">
            {translations[lang].subtitle}
          </p>
        </header>

        {/* Main Image */}
        <div className="mb-12 sm:mb-20 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
          <GalleryImage
            src="/images/thecabin/48B630DA-AFD2-4FC9-AEA1-EB3481E63913 2.jpg"
            alt="Project axonometric view"
            width={1900}
            height={900}
            className="w-full h-auto"
            galleryImages={galleryImages}
            galleryIndex={0}
          />
        </div>

       {/* Content in 3 columns with better spacing */}
<div className="px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-20 items-start">

    {/* Column 1 */}
    <div className="flex flex-col gap-20">
      <div className="text-black text-sm leading-relaxed text-justify pt-6">
        {translations[lang].description1}
      </div>

      <GalleryImage
        src="/images/thecabin/IMG_0767.jpeg"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={1}
      /> 

      <GalleryImage
        src="/images/thecabin/CLIMATIC_SECTION_copy.png"
        alt="Southeast axonometric"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={4}
      />

      <GalleryImage
        src="/images/thecabin/IMG_0666.jpeg"
        alt="South elevation"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={7}
      /> 

      <GalleryImage
        src="/images/thecabin/STEPBYSTEP1.png"
        alt="Northeast axonometric"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={10}
      />
    </div>

    {/* Column 2 */}
    <div className="flex flex-col gap-20">
      <GalleryImage
        src="/images/thecabin/axo.png"
        alt="First floor plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={2}
      />

       <GalleryImage
        src="/images/thecabin/IMG_0322.jpeg"
        alt="Small model"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={5}
      />

     <GalleryImage
        src="/images/thecabin/elevation south.png"
        alt="East elevation"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={8}
      />

      <GalleryImage
        src="/images/thecabin/CLIMATIC_SECTION.png"
        alt="Transversal section"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={11}
      />

      <GalleryImage
        src="/images/thecabin/dd7d0143-6e33-477e-8819-241bc2bb5c35.JPG"
        alt="Second floor plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={12}
      /> 

    </div>

    {/* Column 3 */}
    <div className="flex flex-col gap-20">
      <GalleryImage
        src="/images/thecabin/PHOTO-2026-01-15-13-38-40.jpg"
        alt="Detail view"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={3}
      />

     <GalleryImage
        src="/images/thecabin/elevation north.png"
        alt="North elevation"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={6}
      />

      <GalleryImage
        src="/images/thecabin/f49296d2-90f4-40f8-9b0b-2f40e4334246.JPG"
        alt="North elevation"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={9}
      />

     
    </div>

  </div>
</div>

        {/* See More Projects Section */}
        <div className="mt-32 mb-20 border-t border-gray-200 pt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">
                {t.projects.seeMore}
              </p>
              <div className="h-[1px] w-16 bg-black"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
<a 
  href="/projects/30VPO" 
  className="group relative overflow-hidden"
>
  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
    <Image
      src="/images/30VPO/BUILDING-AXO-PS.png"
      alt="30 VPO"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      priority
    />
  </div>

  <div className="mt-4 space-y-1">
    <h3 className="text-lg font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">
      30 VPO
    </h3>
  </div>

  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
</a>

{/* Project 1 */}
    <a 
        href="/projects/union_tale" 
        className="group relative overflow-hidden"
    >
  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
    <Image
      src="/images/union_tale/COLLAGE AXO.png"
      alt="Union Tale"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      priority
    />
  </div>

  <div className="mt-4 space-y-1">
    <h3 className="text-lg font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">
      Union Tile
    </h3>
  </div>

  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
</a>

              {/* Project 2 */}
<a 
  href="/projects/Sea_Front_House" 
  className="group relative overflow-hidden"
>
  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
    <Image
      src="/images/sea_front_house/COLLAGE_HOUSEANDOFFICE_1.png"
      alt="Sea Front House"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      priority
     />
  </div>

  <div className="mt-4 space-y-1">
    <h3 className="text-lg font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">
      Sea Front House
    </h3>
  </div>

  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
</a>

{/* Project 1 */}
              <a 
               href="/projects/CONTINUUM" 
               className="group relative overflow-hidden"
>
  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
    <Image
      src="/images/CONTINUUM/axo_full_building_base.png"
      alt="CONTINUUM"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      priority
    />
  </div>

  <div className="mt-4 space-y-1">
    <h3 className="text-lg font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">
      CONTINUUM
    </h3>
  </div>

  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
</a>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
