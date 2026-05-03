"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { GalleryImage } from "../../components/ImageGallery";
import { getDictionary } from "../../i18n";

const translations = {
  en: {
    title: "CONTINUUM",
    subtitle: "When buildings become public space",
    description1: "The Continuum is a response to a public multiservice infrastructure located at Placa Margarida Xirgu, between two contrasting neighbourhoods. On one side, Poble Sec presents a dense and urban condition; on the other, Montjuic unfolds as a natural hillside defined by topography and vegeta- tion. The project emerges from this condition of transition, not as an object, but as an extension of the existing landscape. The building is articulated as a sequence of vegetated terraces that progressively rise from the city towards the hill. These terraces invite people into the infrastructure through public space, allowing nature to penetrate the urban fabric and soften the boundary between built and natural environments. Rather than separating the two contexts, the Continuum acts as a mediator, integrating greenery, circulation, and public use into a continuous spatial system. By embracing the site’s topographic challenges, the project transforms infrastructure into an accessible and active public ground. It fosters social interaction and col- lective use, becoming a place of encounter that passively connects Poble Sec with Montjuic, reinforcing continuity between city and landscape.",
    description2: "The position of each center was carefully thought out; the cultural center is placed on the ground floor in relationship to all of the other cultural facilities of Plaza Margarida Xirgu such as the Teatre Lliure, the Institut del Teatre, or the Museum placed close by. The communitary center is in the basement floor to have a more private and direct access to the neighbours of Poble Sec, the same logic is applied to the gym and climbing facilities. This floor also has a street continuation to not interrupt the movement of people and break the original cul-de-sac The kinder-garden required a more secluded access with its own garden in case of having a school patio, for this reason it is found on the first floor. Finally the multi-sport ground are found at the end of the promenade on the second floor.",
    description3: "The project’s materiality is defined by the demanding structural requirements of the building. The use of steel pillars, beams, and trusses is essential to ensure stability while allowing for large spans and open interior spaces. All structural elements are prefabricated in order to optimize construction time and simplify the building process. To facilitate assembly on site, a system of intermediate connecting pieces is developed, allowing the structure to be easily and efficiently executed. Through the use of steel plates and IPE/ HEB profiles, a steel connector links the three dimensions of the structure by means of a bolted system. This strategy ensures structural clarity, precision, and adaptability, while reinforcing the modular logic of the project. The expressed structure becomes an integral part of the architectural language, defining both the spatial organization and the material identity of the building. Regarding the facades, the south-east orientation is treated with a double-skin system that incorporates solar protection. This system consists of a steel substructure combined with vertically sliding perforated steel panels, allowing the facade to adapt to varying solar gains and lighting requirements throughout the day. The adjustable envelope improves thermal comfort while maintaining visual permeability and a strong relationship with the exterior. The stairs are constructed using tramex in order to achieve a lightweight appearance while maintaining continuity in material expression.",
    description4: "The Continuum presents it self with four main facilities : cultural, communitary, sport centers and a kindergarden. As the project inscribes it self as an invitation to enter the building through a series of public spaces, the interior distribution keeps the same spirit. Even if the structure is very clear and it permits modularity the decision was to put all of the functional areas on one end of the building, leaving the Southern part be the main hall and circulation for the users. This permits to have less climate control on the bigger areas that are the common spaces of each center and to have only the individual rooms be closed and climatically controlled. On the northern facade we find the main communication, a series of stairs that link directly each level. We can note that we also have stairs on the public gardens to not have a big concentration of people circulating on the side but rather seize the opportunity of the promenade through the terrace to move up and down.",
    description5: "The slabs are composed of mixed concrete systems, with a CLT finish applied to the interior surfaces to provide warmth and contrast to the steel structure. On the terraces, the integration of vegetation contributes to the creation of a climatic shelter for users, reinforcing the project’s relationship with nature. For the multisport ground, a textile shading system is implemented to protect users from excessive solar radiation. These material and environmental strategies enhance comfort throughout the Continuum, while allowing each area to respond specifically to its functional and climatic requirements."
},
  es: {
    title: "CONTINUUM",
    subtitle: "Cuando los edificios se convierten en espacio público",
    description1: "El Continuum es una respuesta a una infraestructura multiservicio pública ubicada en la Plaza Margarida Xirgu, entre dos barrios contrastantes. Por un lado, Poble Sec presenta una condición densa y urbana; por el otro, Montjuic se despliega como una ladera natural definida por topografía y vegetación. El proyecto emerge de esta condición de transición, no como un objeto, sino como una extensión del paisaje existente. El edificio se articula como una secuencia de terrazas vegetadas que se elevan progresivamente desde la ciudad hacia la colina. Estas terrazas invitan a la gente a la infraestructura a través del espacio público, permitiendo que la naturaleza penetre el tejido urbano y suavice el límite entre entornos construidos y naturales. En lugar de separar los dos contextos, el Continuum actúa como mediador, integrando vegetación, circulación y uso público en un sistema espacial continuo. Al abrazar los desafíos topográficos del sitio, el proyecto transforma la infraestructura en un terreno público accesible y activo. Fomenta la interacción social y el uso colectivo, convirtiéndose en un lugar de encuentro que conecta pasivamente Poble Sec con Montjuic, reforzando la continuidad entre la ciudad y el paisaje.",
    description2: "La posición de cada centro fue cuidadosamente pensada; el centro cultural se ubica en la planta baja en relación con todas las otras instalaciones culturales de la Plaza Margarida Xirgu, como el Teatre Lliure, el Institut del Teatre o el Museo cercano. El centro comunitario está en la planta sótano para tener un acceso más privado y directo a los vecinos de Poble Sec; la misma lógica se aplica al gimnasio e instalaciones de escalada. Esta planta también tiene una continuación de calle para no interrumpir el movimiento de personas y romper el callejón sin salida original. El jardín de infancia requería un acceso más aislado con su propio jardín en caso de tener un patio escolar, por esta razón se encuentra en la primera planta. Finalmente, los campos multideportivos se encuentran al final del paseo en la segunda planta.",
    description3: "La materialidad del proyecto está definida por los requisitos estructurales exigentes del edificio. El uso de pilares de acero, vigas y cerchas es esencial para garantizar la estabilidad mientras se permiten grandes luces y espacios interiores abiertos. Todos los elementos estructurales están prefabricados para optimizar el tiempo de construcción y simplificar el proceso de construcción. Para facilitar el montaje en obra, se desarrolla un sistema de piezas conectoras intermedias, permitiendo que la estructura se ejecute fácil y eficientemente. Mediante el uso de placas de acero y perfiles IPE/HEB, un conector de acero vincula las tres dimensiones de la estructura por medio de un sistema atornillado. Esta estrategia asegura claridad estructural, precisión y adaptabilidad, mientras refuerza la lógica modular del proyecto. La estructura expresada se convierte en parte integral del lenguaje arquitectónico, definiendo tanto la organización espacial como la identidad material del edificio. En cuanto a las fachadas, la orientación sureste se trata con un sistema de doble piel que incorpora protección solar. Este sistema consiste en una subestructura de acero combinada con paneles de acero perforados que se deslizan verticalmente, permitiendo que la fachada se adapte a variaciones en las ganancias solares y requisitos de iluminación a lo largo del día. La envolvente ajustable mejora el confort térmico manteniendo la permeabilidad visual y una fuerte relación con el exterior. Las escaleras se construyen usando tramex para lograr una apariencia ligera manteniendo continuidad en la expresión material.",
    description4: "El Continuum se presenta con cuatro instalaciones principales: centros cultural, comunitario, deportivo y un jardín de infancia. Como el proyecto se inscribe como una invitación para entrar al edificio a través de una serie de espacios públicos, la distribución interior mantiene el mismo espíritu. Aunque la estructura es muy clara y permite modularidad, la decisión fue colocar todas las áreas funcionales en un extremo del edificio, dejando la parte Sur como el salón principal y circulación para los usuarios. Esto permite tener menos control climático en las áreas más grandes que son los espacios comunes de cada centro y tener solo las habitaciones individuales cerradas y climatizadas. En la fachada norte encontramos la comunicación principal, una serie de escaleras que enlazan directamente cada nivel. Podemos notar que también tenemos escaleras en los jardines públicos para no tener una gran concentración de personas circulando en los lados sino más bien aprovechar la oportunidad del paseo a través de la terraza para subir y bajar.",
    description5: "Las losas están compuestas por sistemas de hormigón mixto, con un acabado de CLT aplicado a las superficies interiores para proporcionar calidez y contraste con la estructura de acero. En las terrazas, la integración de vegetación contribuye a la creación de un refugio climático para los usuarios, reforzando la relación del proyecto con la naturaleza. Para el campo multideportivo, se implementa un sistema de sombreado textil para proteger a los usuarios de la radiación solar excesiva. Estas estrategias materiales y ambientales mejoran el confort en todo el Continuum, mientras permiten que cada área responda específicamente a sus requisitos funcionales y climáticos."
},
  fr: {
    title: "CONTINUUM",
    subtitle: "Quand les bâtiments deviennent des espaces publics",
    description1: "Le Continuum est une réponse à une infrastructure multiserviсe publique située à la Plaza Margarida Xirgu, entre deux quartiers contrastants. D'un côté, Poble Sec présente une condition dense et urbaine; de l'autre, Montjuic se déploie comme une pente naturelle définie par la topographie et la végétation. Le projet émerge de cette condition de transition, non pas comme un objet, mais comme une extension du paysage existant. Le bâtiment est articulé comme une séquence de terrasses végétalisées qui s'élèvent progressivement de la ville vers la colline. Ces terrasses invitent les gens dans l'infrastructure par le biais d'espaces publics, permettant à la nature de pénétrer le tissu urbain et d'adoucir la limite entre les environnements construits et naturels. Plutôt que de séparer les deux contextes, le Continuum agit comme médiateur, intégrant la végétation, la circulation et l'utilisation publique dans un système spatial continu. En embrassant les défis topographiques du site, le projet transforme l'infrastructure en un terrain public accessible et actif. Il favorise l'interaction sociale et l'utilisation collective, devenant un lieu de rencontre qui connecte passivement Poble Sec à Montjuic, renforçant la continuité entre la ville et le paysage.",
    description2: "La position de chaque centre a été soigneusement réfléchie; le centre culturel est placé au rez-de-chaussée en relation avec toutes les autres installations culturelles de la Plaza Margarida Xirgu comme le Teatre Lliure, l'Institut del Teatre ou le Musée à proximité. Le centre communautaire se trouve au sous-sol pour avoir un accès plus privé et direct aux voisins de Poble Sec; la même logique s'applique au gymnase et aux installations d'escalade. Cet étage a également une continuation de rue pour ne pas interrompre le mouvement des personnes et briser l'impasse originale. L'école maternelle nécessitait un accès plus isolé avec son propre jardin en cas de cour d'école, c'est pourquoi elle se trouve au premier étage. Enfin, les terrains multisports se trouvent à la fin de la promenade au deuxième étage.",
    description3: "La matérialité du projet est définie par les exigences structurelles exigeantes du bâtiment. L'utilisation de piliers en acier, de poutres et de fermes est essentielle pour assurer la stabilité tout en permettant de grandes portées et des espaces intérieurs ouverts. Tous les éléments structurels sont préfabriqués afin d'optimiser le temps de construction et de simplifier le processus de construction. Pour faciliter l'assemblage sur site, un système de pièces de connexion intermédiaires est développé, permettant à la structure d'être exécutée facilement et efficacement. Grâce à l'utilisation de plaques d'acier et de profils IPE/HEB, un connecteur en acier lie les trois dimensions de la structure par un système boulonné. Cette stratégie assure la clarté structurelle, la précision et l'adaptabilité, tout en renforçant la logique modulaire du projet. La structure exprimée devient une partie intégrante du langage architectural, définissant à la fois l'organisation spatiale et l'identité matérielle du bâtiment. Concernant les façades, l'orientation sud-est est traitée avec un système de double peau qui incorpore une protection solaire. Ce système consiste en une sous-structure en acier combinée à des panneaux en acier perforés qui glissent verticalement, permettant à la façade de s'adapter aux variations des gains solaires et aux exigences d'éclairage tout au long de la journée. L'enveloppe ajustable améliore le confort thermique tout en maintenant la perméabilité visuelle et une forte relation avec l'extérieur. Les escaliers sont construits en utilisant du tramex pour obtenir une apparence légère tout en maintenant la continuité de l'expression matérielle.",
    description4: "Le Continuum se présente avec quatre installations principales: centres culturel, communautaire, sportif et une école maternelle. Comme le projet s'inscrit comme une invitation à entrer dans le bâtiment par une série d'espaces publics, la distribution intérieure maintient le même esprit. Même si la structure est très claire et permet la modularité, la décision a été de placer toutes les zones fonctionnelles à une extrémité du bâtiment, laissant la partie Sud comme hall principal et circulation pour les utilisateurs. Cela permet d'avoir moins de contrôle climatique sur les zones plus grandes qui sont les espaces communs de chaque centre et d'avoir uniquement les pièces individuelles fermées et climatisées. Sur la façade nord, nous trouvons la communication principale, une série d'escaliers qui relient directement chaque niveau. On peut noter que nous avons aussi des escaliers dans les jardins publics pour ne pas avoir une grande concentration de personnes circulant sur les côtés mais plutôt saisir l'opportunité de la promenade à travers la terrasse pour monter et descendre.",
    description5: "Les dalles sont composées de systèmes de béton mixte, avec une finition CLT appliquée aux surfaces intérieures pour fournir de la chaleur et un contraste avec la structure en acier. Sur les terrasses, l'intégration de la végétation contribue à la création d'un abri climatique pour les utilisateurs, renforçant la relation du projet avec la nature. Pour le terrain multisports, un système d'ombrage textile est mis en œuvre pour protéger les utilisateurs des radiations solaires excessives. Ces stratégies matérielles et environnementales améliorent le confort dans tout le Continuum, tout en permettant à chaque zone de répondre spécifiquement à ses exigences fonctionnelles et climatiques."
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
    { src: "/images/CONTINUUM/axo_full_building_base.png", alt: "Project axonometric view" },
    { src: "/images/CONTINUUM/SITE_HANDDRAWING_OF_SITE0.png", alt: "Site plan" },
    { src: "/images/CONTINUUM/DIAGRAM_CONCEPT_IDEA.png", alt: "Concept diagram" },
    { src: "/images/CONTINUUM/DIAGRAM_TERRACEENERGY.png", alt: "Terrace energy diagram" },
    { src: "/images/CONTINUUM/PLANTAS_PRIMERA.png", alt: "First floor plan" },
    { src: "/images/CONTINUUM/DIAGRAM_FLOORPLAN_FLEXIBILITY.png", alt: "Floor plan flexibility" },
    { src: "/images/CONTINUUM/axo_insidebasecollage.png", alt: "Inside axonometric" },
    { src: "/images/CONTINUUM/ALZADO_SURESTE.png", alt: "Southeast elevation" },
    { src: "/images/CONTINUUM/PLANTAS_BAJA.png", alt: "Ground floor plan" },
    { src: "/images/CONTINUUM/CORTE_LONGITUDINAL.png", alt: "Longitudinal section" },
    { src: "/images/CONTINUUM/CORTE_TRANSVERSAL.png", alt: "Transversal section" },
    { src: "/images/CONTINUUM/DIAGRAM_PROGRAM.png", alt: "Program diagram" },
    { src: "/images/CONTINUUM/AXO_FLOORSDIAGRAM.png", alt: "Floors diagram" },
    { src: "/images/CONTINUUM/PLANTAS_CUBIERTA.png", alt: "Roof plan" },
    { src: "/images/CONTINUUM/ALZADO_NORTEOESTE.png", alt: "Northwest elevation" },
    { src: "/images/CONTINUUM/AXO_STRUCTURE_EXPLOADED.png", alt: "Structure exploded" },
    { src: "/images/CONTINUUM/AXO_FACADE_EXPLOADED.png", alt: "Facade exploded" },
    { src: "/images/CONTINUUM/PLANTAS_SOTANO0.png", alt: "Basement plan" },
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
            src="/images/CONTINUUM/axo_full_building_base.png"
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
        src="/images/CONTINUUM/SITE_HANDDRAWING_OF_SITE0.png"
        alt="Site plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={1}
      /> 

      <div className="text-black text-sm leading-relaxed text-justify pt-6">
        {translations[lang].description2}
      </div>

      <GalleryImage
        src="/images/CONTINUUM/PLANTAS_PRIMERA.png"
        alt="First floor plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={4}
      />

      <GalleryImage
        src="/images/CONTINUUM/ALZADO_SURESTE.png"
        alt="Southeast elevation"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={7}
      /> 

      <div className="text-black text-sm leading-relaxed text-justify pt-6">
        {translations[lang].description3}
      </div>

      <GalleryImage
        src="/images/CONTINUUM/CORTE_TRANSVERSAL.png"
        alt="Transversal section"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={10}
      />

      <GalleryImage
        src="/images/CONTINUUM/AXO_FACADE_EXPLOADED.png"
        alt="Facade exploded"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={16}
      />
    </div>

    {/* Column 2 */}
    <div className="flex flex-col gap-20">
      <GalleryImage
        src="/images/CONTINUUM/DIAGRAM_CONCEPT_IDEA.png"
        alt="Concept diagram"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={2}
      />

       <GalleryImage
        src="/images/CONTINUUM/DIAGRAM_FLOORPLAN_FLEXIBILITY.png"
        alt="Floor plan flexibility"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={5}
      />

     <GalleryImage
        src="/images/CONTINUUM/PLANTAS_BAJA.png"
        alt="Ground floor plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={8}
      />

      <GalleryImage
        src="/images/CONTINUUM/DIAGRAM_PROGRAM.png"
        alt="Program diagram"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={11}
      />

      <GalleryImage
        src="/images/CONTINUUM/PLANTAS_CUBIERTA.png"
        alt="Roof plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={13}
      /> 

      <GalleryImage
        src="/images/CONTINUUM/ALZADO_NORTEOESTE.png"
        alt="Northwest elevation"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={14}
      /> 

      <GalleryImage
        src="/images/CONTINUUM/AXO_STRUCTURE_EXPLOADED.png"
        alt="Structure exploded"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={15}
      /> 

    </div>

    {/* Column 3 */}
    <div className="flex flex-col gap-20">
      <GalleryImage
        src="/images/CONTINUUM/DIAGRAM_TERRACEENERGY.png"
        alt="Terrace energy diagram"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={3}
      />

      <GalleryImage
        src="/images/CONTINUUM/PLANTAS_SOTANO0.png"
        alt="Basement plan"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={17}
      />

      <div className="text-black text-sm leading-relaxed text-justify pt-6">
        {translations[lang].description4}
      </div>

     <GalleryImage
        src="/images/CONTINUUM/axo_insidebasecollage.png"
        alt="Inside axonometric"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={6}
      />

      <GalleryImage
        src="/images/CONTINUUM/CORTE_LONGITUDINAL.png"
        alt="Longitudinal section"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={9}
      />

      <GalleryImage
        src="/images/CONTINUUM/AXO_FLOORSDIAGRAM.png"
        alt="Floors diagram"
        width={700}
        height={500}
        className="w-full h-auto"
        galleryImages={galleryImages}
        galleryIndex={12}
      />

      <div className="text-black text-sm leading-relaxed text-justify pt-6">
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
