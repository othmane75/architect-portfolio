"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { GalleryImage } from "../../components/ImageGallery";
import { getDictionary } from "../../i18n";

const translations = {
  en: {
    title: "UNION TILE",
    subtitle: "A Case Study 21 Extension",
    description1: "This project inscribes itself in the third semester of the Architectural Design unit. The aim of the exercise is to create an extension of Pierre Koenig’s Bailey house answering the need of an at home office for the psychologist Walter Bailey and his wife Mary Bailey. The placement of the addition is key to respect the original house and create a coherent and cohesive design.",
    description2: "The strategy for the extension was the addition of a floor. Using the same principles as the original house, only adding a light stair case on the west facade to guide the patients to the office without disturbing the privacy of the house. The position of the extension on the higher floor permits the necessary amount of privacy and proximity. The office does not touch directly the roof but rather floating on top of it. As an addition, we have a unique tile cover that creates the union between original house and addition.",
    description3: "The extension is Walter Bailey’s office and consultation room. The layout keeps the balance of openness from the original house without compromising the privacy of the patients. The strategy used to allow for the modularity are the sliding door, that allow for a more or less divided distribution. The placement of the openings and the role of light is also key to recreate the sensation of openness and connection to the exterior found in Koenig’s work.",
    description4: "The facades are composed of prefabricated steel panels and the ceramic cover is also prefabricated. It works hanging on a steel structure that acts as a frame with U-shaped hooks that allow us to hang the panels. The tile cover is laying over the roof with metal pieces that allow a space between the two elements."
},
  es: {
    title: "UNION TILE",
    subtitle: "A Case Study 21 Extension",
    description1: "Este proyecto se inscribe en el tercer semestre de la asignatura de Diseño Arquitectónico. El objetivo del ejercicio es crear una ampliación de la casa Bailey de Pierre Koenig que responda a la necesidad de una oficina en casa para el psicólogo Walter Bailey y su esposa Mary Bailey. La ubicación de la ampliación es clave para respetar la casa original y crear un diseño coherente y cohesivo.",
    description2: "La estrategia para la ampliación fue la adición de una planta. Utilizando los mismos principios que la casa original, solo se añadió una ligera escalera en la fachada oeste para guiar a los pacientes hacia la oficina sin perturbar la privacidad de la casa. La posición de la ampliación en la planta superior permite la cantidad necesaria de privacidad y proximidad. La oficina no toca directamente el tejado, sino que flota sobre él. Como añadido, tenemos una cubierta de tejas única que crea la unión entre la casa original y la ampliación.",
    description3: "La ampliación es la oficina y sala de consultas de Walter Bailey. La distribución mantiene el equilibrio de apertura de la casa original sin comprometer la privacidad de los pacientes. La estrategia utilizada para permitir la modularidad son las puertas correderas, que permiten una distribución más o menos dividida. La ubicación de las aberturas y el papel de la luz también son clave para recrear la sensación de apertura y conexión con el exterior que se encuentra en la obra de Koenig.",
    description4: "Las fachadas están compuestas por paneles de acero prefabricados y la cubierta cerámica también es prefabricada. Funciona colgando de una estructura de acero que actúa como un marco con ganchos en forma de U que permiten colgar los paneles. La cubierta de azulejos se apoya sobre el techo con piezas metálicas que permiten un espacio entre los dos elementos."
},
  fr: {
    title: "UNION TILE",
    subtitle: "A Case Study 21 Extension",
    description1: "Ce projet s'inscrit dans le troisième semestre de l'unité de conception architecturale. Le but de l'exercice est de créer une extension de la maison Bailey de Pierre Koenig répondant au besoin d'un bureau à domicile pour le psychologue Walter Bailey et sa femme Mary Bailey. L'emplacement de l'addition est essentiel pour respecter la maison originale et créer un design cohérent et cohésif.",
    description2:"La stratégie pour l'extension a été l'ajout d'un étage. En utilisant les mêmes principes que la maison originale, en n'ajoutant qu'un léger escalier sur la façade ouest pour guider les patients vers le bureau sans perturber l'intimité de la maison. La position de l'extension à l'étage supérieur permet la quantité nécessaire d'intimité et de proximité. Le bureau ne touche pas directement le toit, mais flotte plutôt au-dessus. En tant qu'ajout, nous avons une couverture de tuiles unique qui crée l'union entre la maison originale et l'addition.",
    description3: "L'extension est le bureau et la salle de consultation de Walter Bailey. La disposition maintient l'équilibre de l'ouverture de la maison originale sans compromettre l'intimité des patients. La stratégie utilisée pour permettre la modularité sont les portes coulissantes, qui permettent une distribution plus ou moins divisée. Le placement des ouvertures et le rôle de la lumière sont également essentiels pour recréer la sensation d'ouverture et de connexion avec l'extérieur que l'on trouve dans le travail de Koenig.",
    description4: "Les façades sont composées de panneaux préfabriqués en acier et le revêtement en céramique est également préfabriqué. Il est suspendu à une structure en acier qui sert de cadre, avec des crochets en forme de U qui permettent d'accrocher les panneaux. Le revêtement en tuiles est posé sur le toit à l'aide de pièces métalliques qui laissent un espace entre les deux éléments."
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
        // Fallback: do nothing, default to "en"
      }

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
    { src: "/images/union_tale/COLLAGE AXO.png", alt: "Project axonometric view" },
    { src: "/images/union_tale/SITEPLAN_CASESTUDY21.png", alt: "Site plan" },
    { src: "/images/union_tale/AXO_CASESTUDY21_SOUTHEAST.png", alt: "Southeast axonometric" },
    { src: "/images/union_tale/ELEVATION_CASESTUDY21_SOUTH_100.png", alt: "South elevation" },
    { src: "/images/union_tale/AXO_CASESTUDY21_NORTHEAST.png", alt: "Northeast axonometric" },
    { src: "/images/union_tale/FP_CASESTUDY21_1F_100.png", alt: "First floor plan" },
    { src: "/images/union_tale/IMG_PETITMAQUETTE_1.png", alt: "Small model" },
    { src: "/images/union_tale/ELEVATION_CASESTUDY21_EAST_100.png", alt: "East elevation" },
    { src: "/images/union_tale/SECTION_CASESTUDY21_TRANSVERSAL_100.png", alt: "Transversal section" },
    { src: "/images/union_tale/FP_CASESTUDY21_2F_100.png", alt: "Second floor plan" },
    { src: "/images/union_tale/DRAWING_Ceramic_Tiles.png", alt: "Ceramic tiles drawing" },
    { src: "/images/union_tale/FP_CASESTUDY21_EXTENSION_50.png", alt: "Extension floor plan" },
    { src: "/images/union_tale/DRAWING_prefab_Steel_Panels.png", alt: "Steel panels drawing" },
    { src: "/images/union_tale/IMG_GRANDEMAQUETTE_2.png", alt: "Large model" },
    { src: "/images/union_tale/SECTION_CASESTUDY21_LONGITUDINAL_100.png", alt: "Longitudinal section" },
    { src: "/images/union_tale/IMG_GRANDEMAQUETTE_1.png", alt: "Large model 1" },
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
            src="/images/union_tale/COLLAGE AXO.png"
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
      <GalleryImage
        src="/images/union_tale/SITEPLAN_CASESTUDY21.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={1}
      />

      <GalleryImage
        src="/images/union_tale/AXO_CASESTUDY21_NORTHEAST.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={4}
      /> 

      <div className="text-black text-sm leading-relaxed text-justify">
        {translations[lang].description2}
      </div>

      <GalleryImage
        src="/images/union_tale/ELEVATION_CASESTUDY21_EAST_100.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={7}
      />

      <GalleryImage
        src="/images/union_tale/DRAWING_Ceramic_Tiles.png"
        alt="Site plan"
        width={200}
        height={100}
        className="w-2/3 h-auto mx-auto"
        galleryImages={galleryImages}
        galleryIndex={10}
      /> 

      <div className="text-black text-sm leading-relaxed text-justify">
        {translations[lang].description4}
      </div>

      <GalleryImage
        src="/images/union_tale/IMG_GRANDEMAQUETTE_2.png"
        alt="Site plan"
        width={300}
        height={200}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={13}
      />
    </div>

    {/* Column 2 */}
    <div className="flex flex-col gap-20">
      <GalleryImage
        src="/images/union_tale/AXO_CASESTUDY21_SOUTHEAST.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={2}
      />

       <GalleryImage
        src="/images/union_tale/FP_CASESTUDY21_1F_100.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={5}
      />

     <GalleryImage
        src="/images/union_tale/SECTION_CASESTUDY21_TRANSVERSAL_100.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={8}
      />

      <GalleryImage
        src="/images/union_tale/FP_CASESTUDY21_EXTENSION_50.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={11}
      />

      <GalleryImage
        src="/images/union_tale/SECTION_CASESTUDY21_LONGITUDINAL_100.png"
        alt="Site plan"
        width={300}
        height={200}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={14}
      /> 

      <GalleryImage
        src="/images/union_tale/IMG_GRANDEMAQUETTE_1.png"
        alt="Site plan"
        width={300}
        height={200}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={15}
      />
    </div>

    {/* Column 3 */}
    <div className="flex flex-col gap-20">
      <div className="text-black text-sm leading-relaxed text-justify pt-6">
        {translations[lang].description1}
      </div>

      <GalleryImage
        src="/images/union_tale/ELEVATION_CASESTUDY21_SOUTH_100.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={3}
      />

     <GalleryImage
        src="/images/union_tale/IMG_PETITMAQUETTE_1.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={6}
      />

      <GalleryImage
        src="/images/union_tale/FP_CASESTUDY21_2F_100.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={9}
      />

     <div className="text-black text-sm leading-relaxed text-justify">
        {translations[lang].description3}
      </div>

      <GalleryImage
        src="/images/union_tale/DRAWING_prefab_Steel_Panels.png"
        alt="Collage"
        width={300}
        height={200}
        className="w-2/3 h-auto mx-auto"
        galleryImages={galleryImages}
        galleryIndex={12}
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

              {/* Project 2 */}
<a 
  href="/projects/Sea_Front_House" 
  className="group relative overflow-hidden"
>
  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
    <Image
      src="/images/sea_front_house/COLLAGE_HOUSEANDOFFICE.png"
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
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}