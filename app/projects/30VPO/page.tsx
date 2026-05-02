"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { GalleryImage } from "../../components/ImageGallery";
import { getDictionary } from "../../i18n";

const translations = {
  en: {
    title: "30 VPO in Av. Vallcarca and C. Bolivar",
    subtitle: "Inhabiting the city through permeability",
    description1: "The project is an answer to the public protection rental housing and equipment in Av. Vallcarca/C. Bolivar in the district of Gracia. The project includes thirty public rental housing, a co-working area, and a multitude of communal areas to the neighbourhood. The play ground area and garden on one of the higher floors as well as the public facilities like multi-use rooms and laundry area are implemented in the building. The ground floor also features a garden that makes the transition between the varying levels from the main avenue to the smaller street.",
    description2: "Through the development, the study of the shape was fundamental. To form the volume, a system of circles and tangents is created. Two circles never touch and the geometry connects different radius of circles together via a line. In this way, we have a very organic shape yet very systematic as it relies on a clear structure to be drawn. These rules helped during the creation of the different housing units but also in the design of alternative spaces we find in the building.",
    description3: "There are two types of appartment : 50 m2 and 70 m2. The disposition is very flexible the only rigid element is the core that contains the bathroom and the kitchen. As it is a free floorplan it can adapt to the users and uses. The interaction of the different apartement is made through a corridor that connects all the units together. The corridor is also a space in its own it can be transitited and occupied. For this reason, it was important to make it a qualitative space, with vegetation that refresh the space and have a positive impact on people perception.",
    description4: "The building features five different floor typologies with spaces for the community. In ground floor, the structure of the housing is kept as the walls are structural, but all the units are open and occupy different purposes (bicycle parking, storage, sitting area). Then, the first floor is dedicated to a coworking. On the higher floors, the fifth and sixth are double height on one part of the floor. We can find areas such as a laundry room, and multiuse spaces. Finally, on the three heighest floors the creation of a playgroundand garden break the growing to have a smaller floor on the two higher levels. With highly vegetated area and sitting points, the top of the building is like a view point to the inhabit- ant that can enjoy a viewpoint of the neighborhood.",
    description5: "The shape of the units heavily conditionned the materiality. For the pilars and structural walls, the use of prefabricated concrete elements was implemented. The concrete walls bring thermal confort through mass and to comply with thermal insulation there is an added insulating material and a plaster finish in the inside. As the slabs are also made in concrete we have a mono-material building. The vegetation in the common spaces are implemented through burried pots in the floor itself. The rectilinear walls are either glass or panels, and to deal with sun protection and privacy a system of timber shutters is introduced. The core of the units is a non structural element, therefore the use of plaster and lightweight system is priviliged. For the ground floor, as we have different levels to connect the two streets the delimitation of those walls was made through corten stell that serve as a retention element and a safety measure as each platform is quite high.",
  },
  es: {
    title: "30 VPO en Av. Vallcarca y C. Bolívar",
    subtitle: "Habitar la ciudad a través de la permeabilidad",
    description1:" El proyecto es una respuesta a la vivienda de protección oficial en alquiler y al equipamiento en Av. Vallcarca/C. Bolívar en el distrito de Gracia. El proyecto incluye treinta viviendas de protección oficial en alquiler, un espacio de coworking y multitud de zonas comunes para el barrio. El área de juegos y el jardín en una de las plantas superiores, así como los equipamientos públicos como salas polivalentes y zona de lavandería, están implementados en el edificio. La planta baja también cuenta con un jardín que realiza la transición entre los diferentes niveles desde la avenida principal hasta la calle más pequeña.",
    description2:"A través del desarrollo, el estudio de la forma fue fundamental. Para formar el volumen, se crea un sistema de círculos y tangentes. Dos círculos nunca se tocan y la geometría conecta diferentes radios de círculos mediante una línea. De esta manera, tenemos una forma muy orgánica pero muy sistemática, ya que se basa en una estructura clara para ser dibujada. Estas reglas ayudaron durante la creación de las diferentes unidades de vivienda, pero también en el diseño de los espacios alternativos que encontramos en el edificio.",
    description3: "Hay dos tipos de apartamentos: 50 m² y 70 m². La disposición es muy flexible, el único elemento rígido es el núcleo que contiene el baño y la cocina. Al ser una planta libre, puede adaptarse a los usuarios y a los usos. La interacción de los diferentes apartamentos se realiza a través de un pasillo que conecta todas las unidades entre sí. El pasillo es también un espacio en sí mismo que puede ser transitado y ocupado. Por esta razón, era importante convertirlo en un espacio cualitativo, con vegetación que refresca el espacio y tiene un impacto positivo en la percepción de las personas.",
    description4: "El edificio cuenta con cinco tipologías de planta diferentes con espacios para la comunidad. En la planta baja, se mantiene la estructura de la vivienda ya que los muros son estructurales, pero todas las unidades están abiertas y ocupan diferentes propósitos (aparcamiento de bicicletas, trastero, zona de estar). A continuación, la primera planta está dedicada a un espacio de coworking. En las plantas superiores, la quinta y sexta son de doble altura en una parte de la planta. Podemos encontrar áreas como una lavandería y espacios polivalentes. Finalmente, en las tres plantas más altas, la creación de un área de juegos y un jardín rompe el crecimiento para tener una planta más pequeña en los dos niveles superiores. Con una zona muy vegetada y puntos de descanso, la cima del edificio es como un mirador para el habitante que puede disfrutar de unas vistas del barrio.",
    description5:"La forma de las unidades condicionó en gran medida la materialidad. Para los pilares y muros estructurales, se implementó el uso de elementos prefabricados de hormigón. Los muros de hormigón aportan confort térmico a través de la masa y para cumplir con el aislamiento térmico se añade un material aislante y un acabado de yeso en el interior. Al ser las losas también de hormigón, tenemos un edificio monomaterial. La vegetación en los espacios comunes se implementa mediante macetas enterradas en el propio suelo. Los muros rectilíneos son de vidrio o paneles, y para lidiar con la protección solar y la privacidad se introduce un sistema de persianas de madera. El núcleo de las unidades es un elemento no estructural, por lo que se privilegia el uso de yeso y sistemas ligeros. Para la planta baja, al tener diferentes niveles para conectar las dos calles, la delimitación de esos muros se realizó mediante acero corten que sirve como elemento de retención y medida de seguridad ya que cada plataforma es bastante alta."
  },
  fr: {
    title: "30 VPO à Av. Vallcarca et C. Bolívar",
    subtitle: "Habiter la ville à travers la perméabilité",
    description1: "Le projet est une réponse au logement locatif à protection publique et à l'équipement d'Av. Vallcarca/C. Bolívar dans le district de Gracia. Le projet comprend trente logements locatifs à protection publique, un espace de coworking et une multitude d'espaces communs pour le quartier. L'aire de jeux et le jardin situés à l'un des étages supérieurs, ainsi que les équipements publics tels que les salles polyvalentes et la zone de blanchisserie, sont intégrés dans le bâtiment. Le rez-de-chaussée comprend également un jardin qui assure la transition entre les différents niveaux de l'avenue principale à la rue plus petite.",
    description2:"Grâce au développement, l'étude de la forme a été fondamentale. Pour former le volume, un système de cercles et de tangentes est créé. Deux cercles ne se touchent jamais et la géométrie relie différents rayons de cercles par une ligne. De cette façon, nous avons une forme très organique mais très systématique, car elle repose sur une structure claire pour être dessinée. Ces règles ont aidé lors de la création des différentes unités de logement, mais aussi dans la conception des espaces alternatifs que l'on trouve dans le bâtiment.",
    description3:"Il existe deux types d'appartements : 50 m² et 70 m². La disposition est très flexible, le seul élément rigide est le noyau qui contient la salle de bain et la cuisine. En tant que plan libre, il peut s'adapter aux utilisateurs et aux usages. L'interaction des différents appartements se fait par un couloir qui relie toutes les unités entre elles. Le couloir est aussi un espace en soi qui peut être transité et occupé. Pour cette raison, il était important d'en faire un espace qualitatif, avec de la végétation qui rafraîchit l'espace et a un impact positif sur la perception des personnes.",
    description4: "Le bâtiment comprend cinq typologies d'étages différentes avec des espaces pour la communauté. Au rez-de-chaussée, la structure du logement est conservée car les murs sont structurels, mais toutes les unités sont ouvertes et occupent différentes fonctions (parking à vélos, stockage, coin salon). Ensuite, le premier étage est dédié à un espace de coworking. Aux étages supérieurs, le cinquième et le sixième sont à double hauteur sur une partie de l'étage. On y trouve des espaces tels qu'une buanderie et des espaces polyvalents. Enfin, aux trois étages les plus élevés, la création d'une aire de jeux et d'un jardin rompt la croissance pour avoir un étage plus petit aux deux niveaux supérieurs. Avec une zone très végétalisée et des points de repos, le sommet du bâtiment est comme un point de vue pour l'habitant qui peut profiter d'une vue sur le quartier.",
    description5: "La forme des unités a fortement conditionné la matérialité. Pour les piliers et les murs porteurs, l'utilisation d'éléments en béton préfabriqué a été mise en œuvre. Les murs en béton apportent un confort thermique grâce à la masse et, pour respecter l'isolation thermique, un matériau isolant et une finition en plâtre sont ajoutés à l'intérieur. Comme les dalles sont également en béton, nous avons un bâtiment monomatériau. La végétation dans les espaces communs est mise en œuvre par des pots enterrés dans le sol lui-même. Les murs rectilignes sont en verre ou en panneaux, et pour faire face à la protection solaire et à la vie privée, un système de volets en bois est introduit. Le noyau des unités n'est pas un élément structurel, c'est pourquoi l'utilisation de plâtre et de systèmes légers est privilégiée. Pour le rez-de-chaussée, comme nous avons différents niveaux pour connecter les deux rues, la délimitation de ces murs a été réalisée en acier corten qui sert d'élément de retenue et de mesure de sécurité car chaque plateforme est assez haute."
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
    { src: "/images/30VPO/BUILDING-AXO-PS.png", alt: "Building axonometric" },
    { src: "/images/30VPO/SITE PLAN PRJ.png", alt: "Site plan" },
    { src: "/images/30VPO/collage.png", alt: "Project collage" },
    { src: "/images/30VPO/F0.png", alt: "Floor 0" },
    { src: "/images/30VPO/SQUEMES_GEOMETRY.png", alt: "Geometry schemes" },
    { src: "/images/30VPO/elevation bolivar.png", alt: "Bolivar elevation" },
    { src: "/images/30VPO/AXO CONSTRUCTIF GENERAL PS .png", alt: "General constructive axonometric" },
    { src: "/images/30VPO/TYPOHOUSING.png", alt: "Housing typology" },
    { src: "/images/30VPO/F1.png", alt: "Housing typology 2" },
    { src: "/images/30VPO/section bolivar to vallcarca.png", alt: "Bolivar to Vallcarca section" },
    { src: "/images/30VPO/SECTION Point de fuite .png", alt: "Section point de fuite" },
    { src: "/images/30VPO/50M2_TYPO_0.png", alt: "50m2 typology" },
    { src: "/images/30VPO/70M2_TYPO_0.png", alt: "70m2 typology" },
    { src: "/images/30VPO/AXO SECTION DETAIL TYPO.png", alt: "Axonometric section detail" },
    { src: "/images/30VPO/F6.png", alt: "Floor 6" },
    { src: "/images/30VPO/F9.png", alt: "Floor 9" },
    { src: "/images/30VPO/section transversal.png", alt: "Transversal section" },
    { src: "/images/30VPO/F11.png", alt: "Floor 11" },
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
            src="/images/30VPO/BUILDING-AXO-PS.png"
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
        src="/images/30VPO/SITE PLAN PRJ.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={1}
      />

      <GalleryImage
        src="/images/30VPO/SQUEMES_GEOMETRY.png"
        alt="Geometry schemes"
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
        src="/images/30VPO/F1.png"
        alt="FOUR HOUSING PER FLOOR"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={7}
      />  

     <GalleryImage
        src="/images/30VPO/SECTION Point de fuite .png"
        alt="Point de fuite"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={10}
      />   

      <div className="text-black text-sm leading-relaxed text-justify">
        {translations[lang].description4}
      </div>

      <GalleryImage
        src="/images/30VPO/AXO SECTION DETAIL TYPO.png"
        alt="Point de fuite"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={13}
      /> 
    </div>

    {/* Column 2 */}
    <div className="flex flex-col gap-20">
      <GalleryImage
        src="/images/30VPO/collage.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={2}
      />

      <GalleryImage
        src="/images/30VPO/elevation bolivar.png"
        alt="Elevation Bolivar"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={5}
      />

      <GalleryImage
        src="/images/30VPO/TYPOHOUSING.png"
        alt="FOUR HOUSING PER FLOOR"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={8}
      />    

      <GalleryImage
        src="/images/30VPO/50M2_TYPO_0.png"
        alt="50M2 TYPO"
        width={700}
        height={600}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={11}
      />   

      <GalleryImage
        src="/images/30VPO/F6.png"
        alt="TWO HOUSING OF 70m2 AND COMMUNAL SPACE WITH DOUBLE HEIGHT"
        width={700}
        height={600}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={14}
      /> 

     <GalleryImage
        src="/images/30VPO/section transversal.png"
        alt="TWO HOUSING OF 70m2 AND COMMUNAL SPACE WITH DOUBLE HEIGHT"
        width={700}
        height={600}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={16}
      /> 

     <GalleryImage
        src="/images/30VPO/F11.png"
        alt="Point de fuite"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={17}
      /> 
    </div>

    {/* Column 3 */}
    <div className="flex flex-col gap-20">
      <div className="text-black text-sm leading-relaxed text-justify pt-6">
        {translations[lang].description1}
      </div>

      <GalleryImage
        src="/images/30VPO/F0.png"
        alt="Typology housing"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={3}
      />

      <GalleryImage
        src="/images/30VPO/AXO CONSTRUCTIF GENERAL PS .png"
        alt="AXO CONSTRUCTIF GENERAL"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={6}
      />

      <GalleryImage
        src="/images/30VPO/section bolivar to vallcarca.png"
        alt="AXO CONSTRUCTIF GENERAL"
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
        src="/images/30VPO/70M2_TYPO_0.png"
        alt="70M2 TYPO"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={12}
      />

      <GalleryImage
        src="/images/30VPO/F9.png"
        alt="70M2 TYPO"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={15}
      />

      <div className="text-black text-sm leading-relaxed text-justify">
        {translations[lang].description5}
      </div>
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

              {/* Project 2 */}
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
{/* Project 3 */}
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
{/* Project 4 */}
<a 
  href="/projects/thecabin" 
  className="group relative overflow-hidden"
>
  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
    <Image
      src="/images/thecabin/48B630DA-AFD2-4FC9-AEA1-EB3481E63913 2.jpg"
      alt="The Cabin"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      priority
    />
  </div>

  <div className="mt-4 space-y-1">
    <h3 className="text-lg font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">
      The Cabin
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
