"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Building Your Dreams Into Reality",
      subtitle: "Professional construction and renovation services",
      cta: "Get Started",
      badge: "Professional Construction Services",
      stats: {
        projects: "150+",
        projectsLabel: "Projects Completed",
        experience: "25+",
        experienceLabel: "Years Experience",
        satisfaction: "98%",
        satisfactionLabel: "Client Satisfaction",
      },
    },
    about: {
      title: "About Us",
      subtitle: "Building excellence since 1999",
      description:
        "We specialize in creating exceptional spaces that blend modern design with sustainable construction practices.",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive construction solutions",
      residential: "Residential Construction",
      commercial: "Commercial Projects",
      renovation: "Renovation & Remodeling",
    },
    projects: {
      title: "Our Projects",
      subtitle: "Discover our latest work",
      viewAll: "View All Projects",
      description:
        "Modern construction with sustainable materials and innovative design solutions.",
      items: {
        office: {
          title: "Modern Office Complex",
          category: "Commercial",
        },
        villa: {
          title: "Luxury Residential Villa",
          category: "Residential",
        },
        warehouse: {
          title: "Industrial Warehouse",
          category: "Industrial",
        },
      },
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Let's discuss your project",
      name: "Full Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
    footer: {
      companyName: "Goupil Construction",
      description: "Professional construction and renovation services",
      copyright: "© 2024 Goupil Construction. All rights reserved.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      title: "Construisons vos rêves",
      subtitle: "Services professionnels de construction et rénovation",
      cta: "Commencer",
      badge: "Services de Construction Professionnels",
      stats: {
        projects: "150+",
        projectsLabel: "Projets Réalisés",
        experience: "25+",
        experienceLabel: "Années d'Expérience",
        satisfaction: "98%",
        satisfactionLabel: "Satisfaction Client",
      },
    },
    about: {
      title: "À propos",
      subtitle: "Excellence en construction depuis 1999",
      description:
        "Nous nous spécialisons dans la création d'espaces exceptionnels qui allient design moderne et pratiques de construction durables.",
    },
    services: {
      title: "Nos Services",
      subtitle: "Solutions de construction complètes",
      residential: "Construction Résidentielle",
      commercial: "Projets Commerciaux",
      renovation: "Rénovation & Transformation",
    },
    projects: {
      title: "Nos Projets",
      subtitle: "Découvrez nos derniers travaux",
      viewAll: "Voir tous les projets",
      description:
        "Construction moderne avec des matériaux durables et des solutions de design innovantes.",
      items: {
        office: {
          title: "Complexe de Bureaux Moderne",
          category: "Commercial",
        },
        villa: {
          title: "Villa Résidentielle de Luxe",
          category: "Résidentiel",
        },
        warehouse: {
          title: "Entrepôt Industriel",
          category: "Industriel",
        },
      },
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Discutons de votre projet",
      name: "Nom complet",
      email: "Email",
      message: "Message",
      send: "Envoyer",
    },
    footer: {
      companyName: "Goupil Construction",
      description: "Services professionnels de construction et rénovation",
      copyright: "© 2024 Goupil Construction. Tous droits réservés.",
    },
  },
};

// Helper function to get translation
const getTranslation = (key: string, lang: Language): string => {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => getTranslation(key, "en"),
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // You could also load the language from localStorage here if needed
  }, []);

  // Debug language changes
  useEffect(() => {
    console.log("LanguageProvider - Language changed to:", language);
  }, [language]);

  const t = (key: string): string => {
    const translation = getTranslation(key, language);
    console.log(
      `LanguageProvider - Translation for "${key}" in "${language}":`,
      translation
    );
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}
