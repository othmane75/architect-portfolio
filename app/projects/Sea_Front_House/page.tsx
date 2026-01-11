"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { GalleryImage } from "../../components/ImageGallery";
import { getDictionary } from "../../i18n";

const translations = {
  en: {
    title: "SEA FRONT HOUSE",
    subtitle: "Inhabiting nature through prefabrication",
    description1:
      "The Sea Front Towers are a response to a living and working space based on the concept of industrialization on a plot of 160m x 20m. The proposal is placed in Santa Cruz de Tenerife's coastline. The clients are an agronomist and an architect with a child. The proposal first solves the plot through a 1x1 grid of parallels that permit the creation of the garden on different levels with different typologies of vegetation. From there, the house and office flourish into the garden. The Seafront Towers solves the visibility to the ocean through the different levels and the spaces that are generated.",
    description2: "As per the industrialised nature of the project, the interior layout follows a modular and clear system. The different areas are divided through a sequence of 4x4 modules, with different levels of intimacy depending on the floor and placement in the plot without compromising the views to the garden or the sea. The house is composed of three different levels with the circulation on the north and south façade. The play of the stair cases is a guide through the house going from the common areas to the most private ones. Due to the sunny condition of Santa Cruz de Tenerife, an extensive solar protection protects the south façades. To keep the industrialized feel of the project, the shadings are perforated steel panels, movable on the balconies and fixed on the stairs.",
    description3: "The constructive system is based on HEB pillars and beams that connects through an intermediate piece with plates on the end of the structural pieces. The whole is bolted together, and to ensure greater stability each module is tensed with cables on the vertical and horizontal planes. The structure permits for a very open and clear interior distribution. The slabs are mixed concrete with a CLT finish, the enclosure is either glass or opaque panels made of steel and insulation.",
  },
  es: {
    title: "SEA FRONT HOUSE",
    subtitle: " Habitar la naturaleza a través del prefabricado",
    description1:
      "Las Torres Frente al Mar son una respuesta a un espacio de vida y trabajo basado en el concepto de industrialización en una parcela de 160 m x 20 m. La propuesta se ubica en el litoral de Santa Cruz de Tenerife. Los clientes son un agrónomo y un arquitecto con un hijo. La propuesta resuelve en primer lugar la parcela mediante una cuadrícula de 1x1 de paralelas que permiten la creación del jardín en diferentes niveles con diferentes tipologías de vegetación. A partir de ahí, la casa y la oficina florecen en el jardín. Las Torres Frente al Mar resuelven la visibilidad al océano a través de los diferentes niveles y los espacios que se generan.",
    description2: "Dada la naturaleza industrial del proyecto, la distribución interior sigue un sistema modular y claro. Las diferentes zonas se dividen mediante una secuencia de módulos de 4x4, con diferentes niveles de intimidad en función de la planta y la ubicación en la parcela, sin comprometer las vistas al jardín o al mar. La casa se compone de tres niveles diferentes con la circulación en las fachadas norte y sur. El juego de las escaleras es una guía a través de la casa que va desde las zonas comunes a las más privadas. Debido a las condiciones soleadas de Santa Cruz de Tenerife, una amplia protección solar protege las fachadas sur. Para mantener el aspecto industrializado del proyecto, las persianas son paneles de acero perforado, móviles en los balcones y fijos en las escaleras.",
    description3: "El sistema constructivo se basa en pilares y vigas HEB que se conectan mediante una pieza intermedia con placas en el extremo de las piezas estructurales. Todo está atornillado, y para garantizar una mayor estabilidad, cada módulo se tensa con cables en los planos vertical y horizontal. La estructura permite una distribución interior muy abierta y clara. Losas son de hormigón mixto con un acabado de CLT, el cerramiento es de vidrio o paneles opacos de acero e aislamiento.",
  },
  fr: {
    title: "SEA FRONT HOUSE",
    subtitle: "Habiter la nature à travers la prefabrication",
    description1:
      "Les Seafront Towers sont une réponse à un espace de vie et de travail basé sur le concept d'industrialisation sur un terrain de 160 m x 20 m. Le projet est situé sur le littoral de Santa Cruz de Tenerife. Les clients sont un agronome et un architecte avec un enfant. La proposition résout d'abord le terrain grâce à une grille de parallèles 1x1 qui permet la création d'un jardin sur différents niveaux avec différentes typologies de végétation. À partir de là, la maison et le bureau s'épanouissent dans le jardin. Les Seafront Towers résolvent la question de la visibilité sur l'océan grâce aux différents niveaux et aux espaces qui sont générés.",
    description2: "Conformément à la nature industrialisée du projet, l'aménagement intérieur suit un système modulaire et clair. Les différentes zones sont divisées par une séquence de modules 4x4, avec différents niveaux d'intimité selon l'étage et l'emplacement sur le terrain, sans compromettre la vue sur le jardin ou la mer. La maison se compose de trois niveaux différents, avec une circulation sur les façades nord et sud. Le jeu des escaliers guide à travers la maison, des espaces communs aux espaces les plus privés. En raison de l'ensoleillement de Santa Cruz de Tenerife, une protection solaire étendue protège les façades sud. Afin de conserver l'aspect industriel du projet, les stores sont des panneaux en acier perforé, mobiles sur les balcons et fixes sur les escaliers.",
    description3: "Le système constructif est basé sur des piliers et des poutres HEB qui se connectent par une pièce intermédiaire avec des plaques à l'extrémité des pièces structurelles. L'ensemble est boulonné, et pour assurer une plus grande stabilité, chaque module est tendu avec des câbles sur les plans vertical et horizontal. La structure permet une distribution intérieure très ouverte et claire. Les dalles sont en béton mixte avec une finition CLT, l'enveloppe est en verre ou en panneaux opaques en acier et isolation.",
},
};

export default function ProjectPage() {
  const [lang, setLang] = useState<"en" | "es" | "fr">("en");

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

  // Gallery images array - ordered left to right, top to bottom
  const galleryImages = [
    { src: "/images/sea_front_house/COLLAGE_HOUSEANDOFFICE.png", alt: "House and office collage" },
    { src: "/images/sea_front_house/p_DESPATCHO_OFFICINA_1.png", alt: "Office plan" },
    { src: "/images/sea_front_house/REJILLA_JARDIN_1.png", alt: "Garden grid" },
    { src: "/images/sea_front_house/PLANOCONTEXTUAL_1.png", alt: "Contextual plan" },
    { src: "/images/sea_front_house/STRUCTURE.png", alt: "Structure" },
    { src: "/images/sea_front_house/JOINT_1_1.png", alt: "Joint detail 1" },
    { src: "/images/sea_front_house/p_BAJA_1.png", alt: "Ground floor plan" },
    { src: "/images/sea_front_house/ALZADO_FACHADANORTE_1.png", alt: "North elevation" },
    { src: "/images/sea_front_house/p_PRIMERA_1.png", alt: "First floor plan" },
    { src: "/images/sea_front_house/SECCION_TRANSVERSAL_1.png", alt: "Transversal section" },
    { src: "/images/sea_front_house/JOINT_2_1.png", alt: "Joint detail 2" },
    { src: "/images/sea_front_house/ALZADO_FACHADASUR_1.png", alt: "South elevation" },
    { src: "/images/sea_front_house/SECCION_LONGITUDINAL_1.png", alt: "Longitudinal section" },
    { src: "/images/sea_front_house/p_SECUNDA_1.png", alt: "Second floor plan" },
    { src: "/images/sea_front_house/STRUCTURE_TOWER.png", alt: "Tower structure" },
    { src: "/images/sea_front_house/p_TERCERA_1.png", alt: "Third floor plan" },
    { src: "/images/sea_front_house/STRUCTURE_TOWERSEXPLOTED_1.png", alt: "Exploded structure" },
    { src: "/images/sea_front_house/image2.jpeg", alt: "Image 2" },
    { src: "/images/sea_front_house/image3.jpeg", alt: "Image 3" },
    { src: "/images/sea_front_house/image1.jpeg", alt: "Image 1" },
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
            src="/images/sea_front_house/COLLAGE_HOUSEANDOFFICE_1.png"
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
        src="/images/sea_front_house/p_DESPATCHO_OFFICINA_1.png"
        alt="Office plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={1}
      />

      <GalleryImage
        src="/images/sea_front_house/STRUCTURE.png"
        alt="Structure"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={4}
      />

      <GalleryImage
        src="/images/sea_front_house/ALZADO_FACHADANORTE_0.png"
        alt="North elevation"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={7}
      />

      <GalleryImage
        src="/images/sea_front_house/JOINT_2_1.png"
        alt="Joint detail 2"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={10}
      />

      <GalleryImage
        src="/images/sea_front_house/p_SECUNDA_1.png"
        alt="Second floor plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={13}
      />

      <GalleryImage
        src="/images/sea_front_house/STRUCTURE_TOWERSEXPLOTED_1.png"
        alt="Exploded structure"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={16}
      />

      <div className="text-black text-sm leading-relaxed text-justify pt-6">
        {translations[lang].description3}
      </div>

      <GalleryImage
        src="/images/sea_front_house/image1.jpeg"
        alt="Image 1"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={19}
      />

    </div>

    {/* Column 2 */}
    <div className="flex flex-col gap-20">
      <GalleryImage
        src="/images/sea_front_house/REJILLA_JARDIN_1.png"
        alt="Garden grid"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={2}
      />

      <GalleryImage
        src="/images/sea_front_house/JOINT_1_1.png"
        alt="Joint detail 1"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={5}
      />

      <GalleryImage
        src="/images/sea_front_house/p_PRIMERA_1.png"
        alt="First floor plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={8}
      />

      <GalleryImage
        src="/images/sea_front_house/ALZADO_FACHADASUR2_0.png"
        alt="South elevation"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={11}
      />

      <GalleryImage
        src="/images/sea_front_house/STRUCTURE_TOWER.png"
        alt="Tower structure"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={14}
      />

      <GalleryImage
        src="/images/sea_front_house/image2.jpeg"
        alt="Image 2"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={17}
      />
    </div>

    {/* Column 3 */}
    <div className="flex flex-col gap-20">
      <GalleryImage
        src="/images/sea_front_house/PLANOCONTEXTUAL_1.png"
        alt="Contextual plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={3}
      />

      <GalleryImage
        src="/images/sea_front_house/p_BAJA_1.png"
        alt="Ground floor plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={6}
      />

      <GalleryImage
        src="/images/sea_front_house/SECCION_TRANSVERSAL_1.png"
        alt="Transversal section"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={9}
      />

      <div className="text-black text-sm leading-relaxed text-justify">
        {translations[lang].description2}
      </div>  
      
      <GalleryImage
        src="/images/sea_front_house/SECCION_LONGITUDINAL_0.png"
        alt="Longitudinal section"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={12}
      />

      <GalleryImage
        src="/images/sea_front_house/p_TERCERA_1.png"
        alt="Third floor plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={15}
      />

      <GalleryImage
        src="/images/sea_front_house/image3.jpeg"
        alt="Image 3"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={18}
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
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}