"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { getDictionary } from "../../i18n";

const translations = {
  en: {
    title: "30 VPO in Av. Vallcarca and C. Bolivar",
    subtitle: "Inhabiting the city through permeability",
    description1:
      "The project is an answer to the public protection rental housing and equipment in Av. Vallcarca & Bolivar in the district of Gracia. The project includes thirty public rental housing units, a co-working area, and a multitude of communal areas integrated into the neighborhood. The play ground area and garden on one of the higher floors as well as the public facilities like multi-use rooms and laundry area are implemented in the building. The ground floor also features a garden that makes the transition between the varying levels from the main avenue to the smaller street.",
    description2: "Through the development, the study of the shape was fundamental. To form the volume, a system of circles and tangents is created. Two circles never touch and the geometry connects different radius of circles together via a line. In this way, we have a very organic shape yet very systematic as it relies on a clear structure to be drawn. These rules helped during the creation of the different housing units but also in the design of alternative spaces we find in the building.",
    description3: "There are two types of appartment : 50 m2 and 70 m2. The disposition is very flexible the only rigid element is the core that contains the bathroom and the kitchen. As it is a free floorplan it can adapt to the users and uses. The interac- tion of the different apartement is made through a corridor that connects all the units together. The corridor is also a space in its own it can be transitited and occupied. For this reason, it was important to make it a qualitative space, with vegetation that refresh the space and have a positive impact on people perception.",
    description4: "The building features five different floor typologies with spaces for the com- munity. In ground floor, the structure of the housing is kept as the walls are structural, but all the units are open and occupy different purposes (bicycle parking, storage, sitting area). Then, the first floor is dedicated to a coworking. On the higher floors, the fifth and sixth are double height on one part of the floor. We can find areas such as a laundry room, and multiuse spaces. Finally, on the three heighest floors the creation of a playgroundand garden break the growing to have a smaller floor on the two higher levels. With highly vegetated area and sitting points, the top of the building is like a view point to the inhabit- ant that can enjoy a viewpoint of the neighborhood.",
    description5: "The shape of the units heavily conditionned the materiality. For the pilars and structural walls, the use of prefabricated concrete elements was implemented. The concrete walls bring thermal confort through mass and to comply with thermal insulation there is an added insulating material and a plaster finish in the inside. As the slabs are also made in concrete we have a mono-material building. The vegetation in the common spaces are implemented through bur- ried pots in the floor itself. The rectilinear walls are either glass or panels, and to deal with sun protection and privacy a system of timber shutters is intro- duced. The core of the units is a non structural element, therefore the use of plaster and lightweight system is priviliged. For the ground floor, as we have different levels to connect the two streets the delimitation of those walls was made through corten stell that serve as a retention element and a safety measure as each platform is quite high.",
  },
  es: {
    title: "30 VPO en Av. Vallcarca y C. Bolívar",
    subtitle: "Habitar la ciudad a través de la permeabilidad",
    description1:
      " El proyecto es una respuesta a la necesidad de viviendas de protección oficial y equipamientos en la avenida Vallcarca y Bolívar, en el distrito de Gracia. El proyecto incluye treinta viviendas de protección oficial, un espacio de coworking y una gran variedad de zonas comunes integradas en el barrio. El edificio cuenta con una zona de juegos y un jardín en una de las plantas superiores, así como con instalaciones públicas como salas multiusos y una zona de lavandería. La planta baja también cuenta con un jardín que sirve de transición entre los diferentes niveles de la avenida principal y la calle más pequeña",
    description2:" A través del desarrollo, el estudio de la forma fue fundamental. Para formar el volumen, se crea un sistema de círculos y tangentes. Dos círculos nunca se tocan y la geometría conecta diferentes radios de círculos a través de una línea. De esta manera, tenemos una forma muy orgánica pero muy sistemática, ya que se basa en una estructura clara para ser dibujada. Estas reglas ayudaron durante la creación de las diferentes unidades de vivienda, pero también en el diseño de los espacios alternativos que encontramos en el edificio.",
    description3: "Hay dos tipos de apartamentos: de 50 m² y de 70 m². La distribución es muy flexible, el único elemento rígido es el núcleo que contiene el cuarto de baño y la cocina. Al tratarse de una planta libre, se puede adaptar a los usuarios y a los usos. La interacción entre los diferentes apartamentos se realiza a través de un pasillo que conecta todas las unidades. El pasillo es también un espacio en sí mismo, por el que se puede transitar y que se puede ocupar. Por esta razón, era importante convertirlo en un espacio de calidad, con vegetación que refrescara el espacio y tuviera un impacto positivo en la percepción de las personas.",
    description4: "El edificio cuenta con cinco tipologías de plantas diferentes con espacios para la comunidad. En la planta baja, se mantiene la estructura de la vivienda, ya que las paredes son estructurales, pero todas las unidades están abiertas y tienen diferentes usos (aparcamiento para bicicletas, trastero, zona de descanso). A continuación, la primera planta está dedicada al coworking. En las plantas superiores, la quinta y la sexta tienen doble altura en una parte de la planta. Podemos encontrar zonas como una lavandería y espacios multiusos. Por último, en las tres plantas más altas, la creación de un parque infantil y un jardín rompe la creencia de que cuanto más alto, mejor, para tener una planta más pequeña en los dos niveles superiores. Con una zona muy vegetada y puntos de descanso, la parte superior del edificio es como un mirador para los habitantes, que pueden disfrutar de una vista panorámica del barrio.",
    description5:" La forma de las unidades ha condicionado en gran medida la elección de los materiales. Para los pilares y los muros estructurales se han utilizado elementos prefabricados de hormigón. Los muros de hormigón aportan confort térmico gracias a su masa y, para cumplir con las normas de aislamiento térmico, se ha añadido un material aislante y un revestimiento en el interior. Las losas también son de hormigón, por lo que el edificio está construido con un solo material. La vegetación de las zonas comunes se ha colocado en macetas enterradas en el suelo. Las paredes rectilíneas son de cristal o paneles y, para garantizar la protección solar y la intimidad, se ha instalado un sistema de persianas de madera. El núcleo de las unidades es un elemento no estructural, por lo que se ha optado por el uso de yeso y un sistema ligero. En la planta baja, como tenemos diferentes niveles para conectar las dos calles, la delimitación de estas paredes se ha realizado con acero Corten, que sirve como elemento de contención y medida de seguridad, ya que cada plataforma es bastante alta."
  },
  fr: {
    title: "30 VPO à Av. Vallcarca et C. Bolívar",
    subtitle: "Habiter la ville à travers la perméabilité",
    description1:
      "Le projet répond aux besoins en matière de logements sociaux et d'équipements publics dans les avenues Vallcarca et Bolivar, dans le quartier de Gracia. Il comprend trente logements sociaux, un espace de coworking et de nombreux espaces communs intégrés au quartier. Une aire de jeux et un jardin situés à l'un des étages supérieurs, ainsi que des équipements publics tels que des salles polyvalentes et une buanderie, ont été aménagés dans le bâtiment. Le rez-de-chaussée comprend également un jardin qui assure la transition entre les différents niveaux, de l'avenue principale à la petite rue.",
    description2:"Grâce à ce développement, l'étude de la forme a été fondamentale. Pour former le volume, un système de cercles et de tangentes est créé. Deux cercles ne se touchent jamais et la géométrie relie différents rayons de cercles par une ligne. De cette façon, nous obtenons une forme très organique mais aussi très systématique, car elle repose sur une structure claire pour être dessinée. Ces règles ont aidé lors de la création des différentes unités de logement, mais aussi dans la conception des espaces alternatifs que l'on trouve dans le bâtiment.",
    description3:"Il existe deux types d'appartements : 50 m² et 70 m². La disposition est très flexible, le seul élément rigide étant le noyau qui contient la salle de bains et la cuisine. Comme il s'agit d'un plan d'étage libre, il peut s'adapter aux utilisateurs et aux utilisations. L'interaction entre les différents appartements se fait par un couloir qui relie toutes les unités entre elles. Le couloir est également un espace à part entière qui peut être traversé et occupé. C'est pourquoi il était important d'en faire un espace de qualité, avec de la végétation qui rafraîchit l'espace et a un impact positif sur la perception des gens.",
    description4: "Le bâtiment comprend cinq types d'étages différents avec des espaces destinés à la communauté. Au rez-de-chaussée, la structure du logement est conservée, car les murs sont porteurs, mais tous les logements sont ouverts et ont des fonctions différentes (parking à vélos, débarras, coin salon). Le premier étage est dédié au coworking. Aux étages supérieurs, les cinquième et sixième étages ont une double hauteur sur une partie de l'étage. On y trouve des espaces tels qu'une buanderie et des espaces polyvalents. Enfin, aux trois étages supérieurs, la création d'une aire de jeux et d'un jardin rompt la croissance pour obtenir un étage plus petit aux deux niveaux supérieurs. Avec une zone très végétalisée et des points de repos, le sommet du bâtiment est comme un point de vue pour les habitants qui peuvent profiter d'une vue sur le quartier.",
    description5: " La forme des unités a fortement conditionné le choix des matériaux. Pour les piliers et les murs structurels, des éléments préfabriqués en béton ont été utilisés. Les murs en béton apportent un confort thermique grâce à leur masse et, pour respecter les normes d'isolation thermique, un matériau isolant et un enduit ont été ajoutés à l'intérieur. Les dalles étant également en béton, le bâtiment est constitué d'un seul matériau. La végétation dans les espaces communs est mise en place à l'aide de pots enterrés dans le sol. Les murs rectilignes sont en verre ou en panneaux, et pour assurer la protection solaire et l'intimité, un système de volets en bois a été mis en place. Le cœur des unités est un élément non structurel, c'est pourquoi l'utilisation de plâtre et d'un système léger a été privilégiée. Au rez-de-chaussée, comme nous avons différents niveaux pour relier les deux rues, la délimitation de ces murs a été réalisée à l'aide d'acier Corten qui sert d'élément de retenue et de mesure de sécurité, car chaque plate-forme est assez haute."
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
        <div className="mb-20 px-4 sm:px-8 lg:px-12">
          <Image
            src="/images/30VPO/BUILDING-AXO-PS.png"
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
        src="/images/30VPO/SITE PLAN PRJ.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
      />

      <Image
        src="/images/30VPO/SQUEMES_GEOMETRY.png"
        alt="Geometry schemes"
        width={700}
        height={500}
        className="w-full h-auto"
      />

      <div className="pt-4 text-black text-sm leading-relaxed text-justify">
        {translations[lang].description2}
      </div>

      <Image
        src="/images/30VPO/TYPOHOUSING.png"
        alt="FOUR HOUSING PER FLOOR"
        width={700}
        height={500}
        className="w-full h-auto"
      />  

     <Image
        src="/images/30VPO/SECTION Point de fuite .png"
        alt="Point de fuite"
        width={700}
        height={500}
        className="w-full h-auto"
      />   

      <div className="text-black text-sm leading-relaxed text-justify">
        {translations[lang].description4}
      </div>

      <Image
        src="/images/30VPO/AXO SECTION DETAIL TYPO.png"
        alt="Point de fuite"
        width={700}
        height={500}
        className="w-full h-auto"
      /> 

    </div>

    

    {/* Column 2 */}
    <div className="flex flex-col gap-6">
      <Image
        src="/images/30VPO/collage.png"
        alt="Collage"
        width={700}
        height={500}
        className="w-full h-auto"
      />

      <Image
        src="/images/30VPO/elevation bolivar.png"
        alt="Elevation Bolivar"
        width={700}
        height={500}
        className="w-full h-auto pt-20"
      />

      <Image
        src="/images/30VPO/TYPOHOUSING.png"
        alt="FOUR HOUSING PER FLOOR"
        width={700}
        height={500}
        className="w-full h-auto pt-20"
      />    

      <Image
        src="/images/30VPO/50M2_TYPO.png"
        alt="50M2 TYPO"
        width={700}
        height={600}
        className="w-full h-auto"
      />   

      <Image
        src="/images/30VPO/F6.png"
        alt="TWO HOUSING OF 70m2 AND COMMUNAL SPACE WITH DOUBLE HEIGHT"
        width={700}
        height={600}
        className="w-full h-auto"
      /> 

     <Image
        src="/images/30VPO/section transversal.png"
        alt="TWO HOUSING OF 70m2 AND COMMUNAL SPACE WITH DOUBLE HEIGHT"
        width={700}
        height={600}
        className="w-full h-auto"
      /> 

     <Image
        src="/images/30VPO/F11.png"
        alt="Point de fuite"
        width={700}
        height={500}
        className="w-full h-auto pt-20"
      /> 

      
    
    </div>

    {/* Column 3 — text + image */}
    <div className="flex flex-col gap-6">
      <div className="p-9 text-black text-sm leading-relaxed text-justify">
        {translations[lang].description1}
      </div>

      <Image
        src="/images/30VPO/F0.png"
        alt="Typology housing"
        width={700}
        height={500}
        className="w-full h-auto"
      />

      <Image
        src="/images/30VPO/AXO CONSTRUCTIF GENERAL PS .png"
        alt="AXO CONSTRUCTIF GENERAL"
        width={700}
        height={500}
        className="w-full h-auto"
      />

      <Image
        src="/images/30VPO/section bolivar to vallcarca.png"
        alt="AXO CONSTRUCTIF GENERAL"
        width={700}
        height={500}
        className="w-full h-auto pt-10"
      />

      <div className="pt-4 text-black text-sm leading-relaxed text-justify">
        {translations[lang].description3}
      </div>

      <Image
        src="/images/30VPO/70M2_TYPO.png"
        alt="70M2 TYPO"
        width={700}
        height={500}
        className="w-full h-auto"
      />

      <Image
        src="/images/30VPO/F9.png"
        alt="70M2 TYPO"
        width={700}
        height={500}
        className="w-full h-auto"
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
      Union Tale
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
