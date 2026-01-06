export const languages = ["en", "es", "fr"];

const dict = {
  en: {
    logo: "CLAR",
    nav: { projects: "Projects", about: "About Me" },
    intro: {
      hero: "Architecture Portfolio",
      subtitle: "Spaces shaped by light, material, and calm precision.",
      ctaProjects: "View Projects",
      ctaAbout: "Meet the Architect",
    },
    projects: {
      title: "Projects",
      subtitle: "Selected works",
      seeMore: "See More Projects",
    },
    about: {
      title: "About Me",
      subtitle: "Thoughtful, human-first architecture.",
    },
  },
  es: {
    logo: "CLAR",
    nav: { projects: "Proyectos", about: "Sobre mí" },
    intro: {
      hero: "Portafolio de Arquitectura",
      subtitle: "Espacios creados con luz, materialidad y precisión serena.",
      ctaProjects: "Ver proyectos",
      ctaAbout: "Conoce al arquitecto",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Obras seleccionadas",
      seeMore: "Ver Más Proyectos",
    },
    about: {
      title: "Sobre mí",
      subtitle: "Arquitectura humana y cuidadosa.",
    },
  },
  fr: {
    logo: "CLAR",
    nav: { projects: "Projets", about: "À propos" },
    intro: {
      hero: "Portfolio d’Architecture",
      subtitle: "Des espaces sculptés par la lumière et la matière, avec précision.",
      ctaProjects: "Voir les projets",
      ctaAbout: "Découvrir l’architecte",
    },
    projects: {
      title: "Projets",
      subtitle: "Réalisations choisies",
      seeMore: "Voir Plus de Projets",
    },
    about: {
      title: "À propos",
      subtitle: "Une architecture attentive et humaine.",
    },
  },
};

export function getDictionary(lang) {
  return dict[lang] || dict.en;
}




