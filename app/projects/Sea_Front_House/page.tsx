"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { getDictionary } from "../../i18n";

const translations = {
  en: {
    title: "SEA FRONT HOUSE",
    subtitle: "Inhabiting nature through prefabrication",
    description1:
      "The Seafront Towers are a response to a living and working space based on the concept of industrialization on a plot of 160 m x 20 m. The proposal is placed in Santa Cruz de Tenerife's coastline. The clients are an agronomist and an architect with a child. The proposal first solves the plot through a 1x1 grid of parallels that permit the creation of the garden on different levels with different typologies of vegetation. From there, the house and office flourish into the garden. The Seafront Towers solves the visibility to the ocean through the different levels and the spaces that are generated.",
    description2: "As per the industrialised nature of the project, the interior layout follows a modular and clear system. The different areas are divided through a sequence of 4x4 modules, with different levels of intimacy depending on the floor and placement in the plot without compromising the views to the garden or the sea. The house is composed of three different levels with the circulation on the north and south façade. The play of the stair cases is a guide through the house going from the common areas to the most private ones. Due to the sunny condition of Santa Cruz de Tenerife, an extensive solar protection protects the south façades. To keep the industrialized feel of the project, the shadings are perforated steel panels, movable on the balconies and fixed on the stairs.",
},
  es: {
    title: "SEA FRONT HOUSE",
    subtitle: "Habitar la ciudad a través de la permeabilidad",
    description1:
      "Las Torres Seafront son una respuesta a un espacio de vida y trabajo basado en el concepto de industrialización en una parcela de 160 m x 20 m. La propuesta se ubica en el litoral de Santa Cruz de Tenerife. Los clientes son un agrónomo y un arquitecto con un hijo. La propuesta resuelve en primer lugar la parcela mediante una cuadrícula de 1x1 de paralelas que permiten la creación del jardín en diferentes niveles con diferentes tipologías de vegetación. A partir de ahí, la casa y la oficina florecen en el jardín. Las Torres Frente al Mar resuelven la visibilidad al océano a través de los diferentes niveles y los espacios que se generan.",
    description2: "Dada la naturaleza industrial del proyecto, la distribución interior sigue un sistema modular y claro. Las diferentes zonas se dividen mediante una secuencia de módulos de 4x4, con diferentes niveles de intimidad en función de la planta y la ubicación en la parcela, sin comprometer las vistas al jardín o al mar. La casa se compone de tres niveles diferentes con la circulación en las fachadas norte y sur. El juego de las escaleras es una guía a través de la casa que va desde las zonas comunes a las más privadas. Debido a las condiciones soleadas de Santa Cruz de Tenerife, una amplia protección solar protege las fachadas sur. Para mantener el aspecto industrializado del proyecto, las persianas son paneles de acero perforado, móviles en los balcones y fijos en las escaleras.",
},
  fr: {
    title: "SEA FRONT HOUSE",
    subtitle: "Habiter la ville à travers la perméabilité",
    description1:
      "Les Seafront Towers sont une réponse à un espace de vie et de travail basé sur le concept d'industrialisation sur un terrain de 160 m x 20 m. Le projet est situé sur le littoral de Santa Cruz de Tenerife. Les clients sont un agronome et un architecte avec un enfant. La proposition résout d'abord le terrain grâce à une grille de parallèles 1x1 qui permet la création d'un jardin sur différents niveaux avec différentes typologies de végétation. À partir de là, la maison et le bureau s'épanouissent dans le jardin. Les Seafront Towers résolvent la question de la visibilité sur l'océan grâce aux différents niveaux et aux espaces qui sont générés.",
    description2: "Conformément à la nature industrialisée du projet, l'aménagement intérieur suit un système modulaire et clair. Les différentes zones sont divisées par une séquence de modules 4x4, avec différents niveaux d'intimité selon l'étage et l'emplacement sur le terrain, sans compromettre la vue sur le jardin ou la mer. La maison se compose de trois niveaux différents, avec une circulation sur les façades nord et sud. Le jeu des escaliers guide à travers la maison, des espaces communs aux espaces les plus privés. En raison de l'ensoleillement de Santa Cruz de Tenerife, une protection solaire étendue protège les façades sud. Afin de conserver l'aspect industriel du projet, les stores sont des panneaux en acier perforé, mobiles sur les balcons et fixes sur les escaliers.",

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
             src="/images/sea_front_house/COLLAGE_HOUSEANDOFFICE.png"
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

      <div className=" text-black text-sm leading-relaxed text-justify pt-10">
        {translations[lang].description1}
      </div>

      <Image
        src="/images/sea_front_house/p_DESPATCHO_OFFICINA.png"
        alt="Geometry schemes"
        width={700}
        height={500}
        className="w-full h-auto"
      />

      <Image
        src="/images/sea_front_house/STRUCTURE_EXPLOTED-01.png"
        alt="Geometry schemes"
        width={700}
        height={500}
        className="w-full h-auto"
      />

      <Image
        src="/images/sea_front_house/ALZADO_FACHADANORTE.png"
        alt="Geometry schemes"
        width={700}
        height={500}
        className="w-full h-auto"
      />

      <Image
        src="/images/sea_front_house/JOINT_2.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
       />    

      

    </div>

    

    {/* Column 2 */}
    <div className="flex flex-col gap-6">
      <Image
        src="/images/sea_front_house/REJILLA_JARDIN.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
       />

      <Image
        src="/images/sea_front_house/JOINT_1.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
       />

      <Image
        src="/images/sea_front_house/p_PRIMERA.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
       />

    
    </div>

    {/* Column 3 — text + image */}
    <div className="flex flex-col gap-6">
      

      <Image
        src="/images/sea_front_house/PLANOCONTEXTUAL.png"
        alt="Typology housing"
        width={700}
        height={500}
        className="w-full h-auto"
      />

      <Image
        src="/images/sea_front_house/p_BAJA.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
       />

      <Image
        src="/images/sea_front_house/SECCION_TRANSVERSAL-01.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
       />

      <div className=" text-black text-sm leading-relaxed text-justify">
        {translations[lang].description1}
      </div>  
      
      <Image
        src="/images/sea_front_house/SECCION_LONGITUDINAL.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
       />

      <Image
        src="/images/sea_front_house/p_TERCERA.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
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
