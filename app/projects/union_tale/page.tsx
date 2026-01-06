"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { getDictionary } from "../../i18n";

const translations = {
  en: {
    title: "UNION TALE",
    subtitle: "A Case Study 21 Extension",
    description1:
      "This project inscribes itself in the third semester of the Architectural Design unit. The exercise is the creation an extension of Pierre Koenig ’s Bailey house answering the need of an at home office for the psychologist Walter Bailey and his wife Mary Bailey. The placement of the addition is key to respect the original house and create a coherent and cohesive design.",
    description2: "The strategy for the extension was the addition of a floor. Using the same principles as the original house, only adding a light stair case on the west facade to guide the patience to the office without disturbing the privacy of the house. The position of the extension on the higher floor lets for the necessary amount of privacy and proximity. The office does not touch directly the roof but rather floating on top of it. As an addition, we have a unique tile cover creates the union between original house and addition.",
    description3: "The extension is a consultation room for the patients and Walter Bailey’s office. The layout keeps the balance of openness from the original house without compromising the privacy of the patients. The strategy used to allow for the modularity are the sliding door, that permit a more or less divided distribution. The placement of the openings and the role of light is also key to recreate the sensation of openness and connection to the exterior found in Koenig’s work.",
    description4: "The façades are composed of prefabricated steel panels and the ceramic cover is also prefabricated. It works hanging on a steel structure that acts as a frame with a U-shape hooks that allow permit the hanging of the panels. The tile cover is laying over the roof with metal pieces that allow a space between the two elements."
},
  es: {
    title: "UNION TALE",
    subtitle: "A Case Study 21 Extension",
    description1:
      "Este proyecto se inscribe en el tercer semestre de la unidad de Diseño Arquitectónico. El ejercicio consiste en la creación de una ampliación de la casa Bailey de Pierre Koenig, respondiendo a la necesidad de una oficina en casa para el psicólogo Walter Bailey y su esposa Mary Bailey. La ubicación de la ampliación es clave para respetar la casa original y crear un diseño coherente y cohesionado.",
    description2: "La estrategia para la ampliación fue la adición de un piso. Utilizando los mismos principios que la casa original, solo se añadió una ligera escalera en la fachada oeste para guiar al paciente a la oficina sin perturbar la privacidad de la casa. La posición de la ampliación en el piso superior permite la cantidad necesaria de privacidad y proximidad. La oficina no toca directamente el techo, sino que flota sobre él. Como adición, tenemos una cubierta de azulejos única que crea la unión entre la casa original y la adición.",
    description3: "La ampliación consiste en una sala de consultas para los pacientes y el despacho de Walter Bailey. La distribución mantiene el equilibrio de apertura de la casa original sin comprometer la privacidad de los pacientes. La estrategia utilizada para permitir la modularidad son las puertas correderas, que permiten una distribución más o menos dividida. La ubicación de las aberturas y el papel de la luz también son fundamentales para recrear la sensación de apertura y conexión con el exterior que se encuentra en la obra de Koenig.",
    description4: "Las fachadas están compuestas por paneles de acero prefabricados y la cubierta cerámica también es prefabricada. Funciona colgando de una estructura de acero que actúa como un marco con ganchos en forma de U que permiten colgar los paneles. La cubierta de azulejos se apoya sobre el techo con piezas metálicas que permiten un espacio entre los dos elementos."
},
  fr: {
    title: "30 VPO à Av. Vallcarca et C. Bolívar",
    subtitle: "Habiter la ville à travers la perméabilité",
    description1:
      "Ce projet s'inscrit dans le cadre du troisième semestre du module de conception architecturale. L'exercice consiste à créer une extension de la maison Bailey de Pierre Koenig afin de répondre au besoin d'un bureau à domicile pour le psychologue Walter Bailey et son épouse Mary Bailey. L'emplacement de l'extension est essentiel pour respecter la maison d'origine et créer un design cohérent et harmonieux.",
    description2:" La stratégie pour l'extension a été l'ajout d'un étage. En utilisant les mêmes principes que la maison originale, seule une légère cage d'escalier a été ajoutée sur la façade ouest pour guider le patient vers le bureau sans perturber l'intimité de la maison. La position de l'extension à l'étage supérieur permet d'assurer la quantité nécessaire d'intimité et de proximité. Le bureau ne touche pas directement le toit, mais flotte au-dessus. En guise d'ajout, nous avons une couverture en tuiles unique qui crée l'union entre la maison originale et l'extension.",
    description3: "L'extension comprend une salle de consultation pour les patients et le bureau de Walter Bailey. L'agencement préserve l'ouverture de la maison d'origine sans compromettre l'intimité des patients. La modularité est assurée par des portes coulissantes qui permettent une distribution plus ou moins divisée. L'emplacement des ouvertures et le rôle de la lumière sont également essentiels pour recréer la sensation d'ouverture et de connexion avec l'extérieur que l'on retrouve dans l'œuvre de Koenig.",
    description4: "Les façades sont composées de panneaux préfabriqués en acier et le revêtement en céramique est également préfabriqué. Il est suspendu à une structure en acier qui sert de cadre, avec des crochets en forme de U qui permettent d'accrocher les panneaux. Le revêtement en tuiles est posé sur le toit à l'aide de pièces métalliques qui laissent un espace entre les deux éléments."
},
};

export default function ProjectPage() {
  const [lang, setLang] = useState<"en" | "es" | "fr">("en");

  // sync with global language preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("lang");
    if (stored === "en" || stored === "es" || stored === "fr") {
      setLang(stored);
    }
  }, []);

  const t = getDictionary(lang);

  const changeLang = (lng: string) => {
    if (lng === "en" || lng === "es" || lng === "fr") {
      setLang(lng);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("lang", lng);
      }
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Shared banner / navbar */}
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

        {/* Main Image - almost full width */}
        <div className="mb-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <Image
            src="/images/union_tale/COLLAGE AXO.png"
            alt="Project axonometric view"
            width={1900}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>

       {/* Content in 3 columns — aligned with hero */}
<div className="px-4 sm:px-8 lg:px-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

    {/* Column 1 */}
    <div className="flex flex-col gap-6">
      <Image
        src="/images/union_tale/SITEPLAN_CASESTUDY21.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
      />

      <Image
        src="/images/union_tale/AXO_CASESTUDY21_NORTHEAST.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto pt-20"
      /> 

      <div className="pt-9 text-black text-sm leading-relaxed text-justify">
        {translations[lang].description2}
      </div>

      <Image
        src="/images/union_tale/ELEVATION_CASESTUDY21_EAST_100.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto pt-20"
      />

      <Image
        src="/images/union_tale/DRAWING_Ceramic_Tiles.png"
        alt="Site plan"
        width={300}
        height={200}
        className="w-full h-auto"
      /> 

      <div className=" text-black text-sm leading-relaxed text-justify">
        {translations[lang].description4}
      </div>

      <Image
        src="/images/union_tale/IMG_GRANDEMAQUETTE_2.png"
        alt="Site plan"
        width={300}
        height={200}
        className="w-full h-auto"
      />
      

    </div>

    

    {/* Column 2 */}
    <div className="flex flex-col gap-6">
      <Image
        src="/images/union_tale/AXO_CASESTUDY21_SOUTHEAST.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto"
      />

       <Image
        src="/images/union_tale/FP_CASESTUDY21_1F_100.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto pt-20"
      />

     <Image
        src="/images/union_tale/SECTION_CASESTUDY21_TRANSVERSAL_100.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto pt-20"
      />

      <Image
        src="/images/union_tale/FP_CASESTUDY21_EXTENSION_50.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto "
      />

      <Image
        src="/images/union_tale/SECTION_CASESTUDY21_LONGITUDINAL_100.png"
        alt="Site plan"
        width={300}
        height={200}
        className="w-full h-auto"
      /> 

      <Image
        src="/images/union_tale/IMG_GRANDEMAQUETTE_1.png"
        alt="Site plan"
        width={300}
        height={200}
        className="w-full h-auto pt-20"
      />
      
    
    </div>

    {/* Column 3 — text + image */}
    <div className="flex flex-col gap-6">
      <div className="p-9 text-black text-sm leading-relaxed text-justify">
        {translations[lang].description1}
      </div>

      <Image
        src="/images/union_tale/ELEVATION_CASESTUDY21_SOUTH_100.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto pt-20"
      />

     <Image
        src="/images/union_tale/IMG_PETITMAQUETTE_1.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto"
      />

      <Image
        src="/images/union_tale/FP_CASESTUDY21_2F_100.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto"
      />

     <div className="text-black text-sm leading-relaxed text-justify pt-10">
        {translations[lang].description3}
      </div>

      <Image
        src="/images/union_tale/DRAWING_prefab_Steel_Panels.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-1/3 h-auto mx-auto"
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
                href="/projects/horizonte" 
                className="group relative overflow-hidden"
              >
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 text-sm uppercase tracking-wider">Horizonte</span>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-lg font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                    Horizonte
                  </h3>
                  <p className="text-xs text-gray-500">Lake Como · 2024</p>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </a>

              {/* Project 2 */}
              <a 
                href="/projects/vertice" 
                className="group relative overflow-hidden"
              >
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 text-sm uppercase tracking-wider">Vertice</span>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-lg font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                    Vertice
                  </h3>
                  <p className="text-xs text-gray-500">Tokyo · 2023</p>
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
