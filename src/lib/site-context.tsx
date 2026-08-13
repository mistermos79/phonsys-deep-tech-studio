import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en";
export type Theme = "dark" | "light";

type Dict = {
  nav: {
    expertises: string;
    tarifications: string;
    approche: string;
    partenaires: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    markers: string[];
    markAlt: string;
  };
  expertises: {
    eyebrow: string;
    heading: string;
    items: { title: string; text: string }[];
  };
  approche: {
    eyebrow: string;
    heading: string;
    items: { n: string; title: string; text: string }[];
  };
  tarifications: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    intro: string;
    plans: {
      id: string;
      badge: string;
      name: string;
      price: string;
      desc: string;
      features: string[];
      cta: string;
      featured?: boolean;
    }[];
    subsHeading: string;
    subsText: string;
    subs: { name: string; price: string; badge?: string; features: string[] }[];
    customTitle: string;
    customText: string;
    customCta: string;
    whyEyebrow: string;
    whyHeading: string;
    why: { title: string; text: string }[];
    finalHeading: string;
    finalText: string;
    finalPrimary: string;
    finalSecondary: string;
    selectedLabel: string;
  };

  partenaires: { eyebrow: string; heading: string; text: string; visit: string };
  contact: { eyebrow: string; heading: string; text: string; cta: string };
  footer: { rights: string };
  ui: {
    openMenu: string;
    closeMenu: string;
    toTheme: (t: Theme) => string;
    toLang: (l: Lang) => string;
  };
};

export const dict: Record<Lang, Dict> = {
  fr: {
    nav: {
      expertises: "Expertises",
      tarifications: "Tarifications",
      approche: "Approche",
      partenaires: "Partenaires",
      contact: "Contact",
      cta: "Démarrer un projet",
    },
    hero: {
      eyebrow: "Studio IA · Domotique · Automatisation",
      titleA: "Concevoir aujourd'hui, ",
      titleAccent: "innover",
      titleB: " pour demain.",
      subtitle:
        "Phonsys conçoit des systèmes d'intelligence artificielle et des solutions robotiques sur mesure, de la recherche jusqu'à la mise en production — pour des entreprises qui veulent des résultats concrets, pas des concepts.",
      ctaPrimary: "Discuter de votre projet",
      ctaSecondary: "Découvrir nos expertises",
      markers: ["Intelligence artificielle", "Domotique IA", "Automatisation"],
      markAlt:
        "Emblème Phonsys : lettres P et S entourées d'un circuit et d'un bras robotisé",
    },
    expertises: {
      eyebrow: "Expertises",
      heading: "Quatre domaines, une même exigence d'ingénierie.",
      items: [
        {
          title: "Domotique boostée IA",
          text: "Mise en place de la domotique augmentée par l'IA : pilotage intelligent de l'éclairage, du chauffage, de la sécurité et de l'énergie, avec des scénarios qui s'adaptent à vos usages.",
        },
        {
          title: "Conception site web boostée IA",
          text: "Sites et interfaces sur mesure, conçus et optimisés avec l'IA : contenus, SEO et performance, du prototype à la mise en ligne.",
        },
        {
          title: "Automatisation & performance",
          text: "Automatisation de processus et pilotage à distance pour gagner en efficacité opérationnelle.",
        },
        {
          title: "Agents IA — Plug & Play",
          text: "Des agents IA pré-entraînés pour la vente, le support, les RH ou la création de contenu. Connectés à vos CRM, mails et Slack, sans code et disponibles 24/7.",
        },
      ],
    },
    approche: {
      eyebrow: "Approche",
      heading: "Notre méthode",
      items: [
        {
          n: "01",
          title: "Analyse",
          text: "Étude de votre environnement, de vos contraintes techniques et de vos objectifs avant toute proposition.",
        },
        {
          n: "02",
          title: "Conception",
          text: "Développement itératif des modèles IA ou des systèmes robotiques, validés par des tests concrets.",
        },
        {
          n: "03",
          title: "Déploiement",
          text: "Mise en production, formation des équipes et suivi pour assurer la performance dans la durée.",
        },
      ],
    },
    tarifications: {
      eyebrow: "Tarifications",
      heading: "Sites web boosté IA",
      intro:
        "L'objectif n'est pas seulement un site esthétique : c'est de générer des appels et des demandes de devis, grâce au SEO local et à l'automatisation par IA.",
      badge: "Recommandé",
      creation: "Création",
      monthly: "Abonnement",
      plans: [
        {
          name: "Essentiel",
          price: "790 – 1 000 € HT",
          sub: "29 – 49 € HT / mois",
          who: "Artisan qui démarre",
          features: ["1 à 3 pages", "Optimisé mobile", "Formulaire de contact", "Fiche Google Maps"],
        },
        {
          name: "Professionnel",
          price: "1 490 – 1 900 € HT",
          sub: "49 – 79 € HT / mois",
          who: "Artisan établi",
          features: ["5 à 7 pages", "Design sur mesure", "SEO local", "Galerie de réalisations", "Avis clients"],
          featured: true,
        },
        {
          name: "Premium",
          price: "2 200 – 3 000 € HT",
          sub: "79 – 129 € HT / mois",
          who: "Entreprise locale ambitieuse",
          features: ["SEO poussé", "Rédaction professionnelle", "Optimisation des conversions", "Suivi & reporting"],
        },
        {
          name: "Premium + IA",
          price: "2 500 – 4 000 € HT",
          sub: "99 – 199 € HT / mois",
          who: "Entreprise qui veut automatiser",
          features: ["SEO + IA", "Chatbot intelligent", "Qualification des demandes", "Automatisations métier"],
        },
      ],
      recoTitle: "Offre recommandée : « Visibilité Artisan + IA »",
      recoPrice: "1 490 € HT de création + 69 € HT / mois",
      recoItems: [
        {
          label: "Pages",
          text: "Accueil, entreprise, prestations, réalisations, zones d'intervention, avis, contact/devis.",
        },
        {
          label: "Conversion",
          text: "Boutons Appeler et WhatsApp, formulaire de devis et appels à l'action soignés.",
        },
        {
          label: "SEO local",
          text: "Optimisation sur des recherches type « maçon Châteaurenard » ou « rénovation Avignon ».",
        },
        {
          label: "Google",
          text: "Optimisation de la fiche Google Business Profile et connexion des outils de mesure.",
        },
        {
          label: "IA",
          text: "Aide à la rédaction, FAQ intelligente, préqualification des demandes et génération de réponses.",
        },
        {
          label: "Maintenance",
          text: "Hébergement, sauvegardes, mises à jour et petites modifications selon le forfait.",
        },
      ],
      optionsTitle: "Options facturables en supplément",
      options: [
        { label: "Page supplémentaire", price: "100 – 180 € HT" },
        { label: "Rédaction SEO avancée", price: "250 – 500 € HT" },
        { label: "Optimisation Google Business Profile", price: "150 – 300 € HT" },
        { label: "Chatbot IA personnalisé", price: "300 – 800 € HT" },
        { label: "Automatisation devis / CRM", price: "400 – 1 200 € HT" },
        { label: "Campagne Google Ads", price: "à partir de 300 € HT + budget publicitaire" },
        { label: "Photographies professionnelles", price: "sur devis" },
      ],
      note: "Plus qu'un site internet : une machine à obtenir des demandes de devis — rapide sur mobile, visible localement, avec appels directs, formulaire intelligent et automatisation IA.",
      cta: "Demander un devis",
    },
    partenaires: {
      eyebrow: "Partenaires",
      heading: "Ils nous accompagnent",
      text: "Nous collaborons avec des acteurs de référence pour concevoir des systèmes fiables, de la carte électronique jusqu'à la mise en production.",
      visit: "Visiter le site",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Un projet en tête ?",
      text: "Décrivez-nous votre besoin en intelligence artificielle, robotique ou automatisation — on revient vers vous rapidement.",
      cta: "Nous écrire",
    },
    footer: { rights: "Tous droits réservés." },
    ui: {
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      toTheme: (t) => (t === "light" ? "Passer en thème clair" : "Passer en thème sombre"),
      toLang: (l) => (l === "en" ? "Switch to English" : "Passer en français"),
    },
  },
  en: {
    nav: {
      expertises: "Expertise",
      tarifications: "Pricing",
      approche: "Approach",
      partenaires: "Partners",
      contact: "Contact",
      cta: "Start a project",
    },
    hero: {
      eyebrow: "AI · Home automation · Automation studio",
      titleA: "Designing today, ",
      titleAccent: "innovating",
      titleB: " for tomorrow.",
      subtitle:
        "Phonsys builds custom artificial intelligence systems and robotic solutions, from research through to production — for companies that want concrete results, not concepts.",
      ctaPrimary: "Discuss your project",
      ctaSecondary: "Explore our expertise",
      markers: ["Artificial intelligence", "AI home automation", "Automation"],
      markAlt:
        "Phonsys emblem: P and S letters framed by a circuit trace and a robotic arm",
    },
    expertises: {
      eyebrow: "Expertise",
      heading: "Four fields, one engineering standard.",
      items: [
        {
          title: "AI-powered home automation",
          text: "Smart home and building automation enhanced by AI: intelligent control of lighting, heating, security and energy, with scenarios that adapt to how you live.",
        },
        {
          title: "AI-powered web design",
          text: "Custom websites and interfaces designed and optimised with AI: content, SEO and performance, from prototype to launch.",
        },
        {
          title: "Automation & performance",
          text: "Process automation and remote control to increase operational efficiency.",
        },
        {
          title: "AI agents — Plug & Play",
          text: "Pre-trained AI agents for sales, support, HR or content creation. Connected to your CRM, email and Slack, no code required and available 24/7.",
        },
      ],
    },
    approche: {
      eyebrow: "Approach",
      heading: "Our method",
      items: [
        {
          n: "01",
          title: "Analysis",
          text: "A study of your environment, technical constraints and objectives before any proposal.",
        },
        {
          n: "02",
          title: "Design",
          text: "Iterative development of AI models or robotic systems, validated through real-world testing.",
        },
        {
          n: "03",
          title: "Deployment",
          text: "Production rollout, team training and follow-up to sustain performance over time.",
        },
      ],
    },
    tarifications: {
      eyebrow: "Pricing",
      heading: "AI-powered websites",
      intro:
        "The goal isn't just a good-looking website: it's generating calls and quote requests, through local SEO and AI automation.",
      badge: "Recommended",
      creation: "Setup",
      monthly: "Subscription",
      plans: [
        {
          name: "Essential",
          price: "€790 – €1,000",
          sub: "€29 – €49 / month",
          who: "Craftsman getting started",
          features: ["1 to 3 pages", "Mobile optimised", "Contact form", "Google Maps listing"],
        },
        {
          name: "Professional",
          price: "€1,490 – €1,900",
          sub: "€49 – €79 / month",
          who: "Established craftsman",
          features: ["5 to 7 pages", "Custom design", "Local SEO", "Project gallery", "Customer reviews"],
          featured: true,
        },
        {
          name: "Premium",
          price: "€2,200 – €3,000",
          sub: "€79 – €129 / month",
          who: "Ambitious local business",
          features: ["Advanced SEO", "Professional copywriting", "Conversion optimisation", "Tracking & reporting"],
        },
        {
          name: "Premium + AI",
          price: "€2,500 – €4,000",
          sub: "€99 – €199 / month",
          who: "Business ready to automate",
          features: ["SEO + AI", "Smart chatbot", "Lead qualification", "Business automations"],
        },
      ],
      recoTitle: "Recommended offer: “Craftsman Visibility + AI”",
      recoPrice: "€1,490 setup + €69 / month",
      recoItems: [
        {
          label: "Pages",
          text: "Home, company, services, projects, service areas, reviews, contact/quote.",
        },
        { label: "Conversion", text: "Call and WhatsApp buttons, quote form and clear calls to action." },
        {
          label: "Local SEO",
          text: "Optimised for searches such as “mason Châteaurenard” or “renovation Avignon”.",
        },
        { label: "Google", text: "Google Business Profile optimisation and analytics setup." },
        {
          label: "AI",
          text: "Copywriting support, smart FAQ, quote pre-qualification and automated replies.",
        },
        { label: "Maintenance", text: "Hosting, backups, updates and small changes depending on the plan." },
      ],
      optionsTitle: "Billable add-ons",
      options: [
        { label: "Extra page", price: "€100 – €180" },
        { label: "Advanced SEO copywriting", price: "€250 – €500" },
        { label: "Google Business Profile optimisation", price: "€150 – €300" },
        { label: "Custom AI chatbot", price: "€300 – €800" },
        { label: "Quote / CRM automation", price: "€400 – €1,200" },
        { label: "Google Ads campaign", price: "from €300 + ad budget" },
        { label: "Professional photography", price: "on request" },
      ],
      note: "More than a website: a quote-generating machine — fast on mobile, visible locally, with direct calls, a smart form and AI automation.",
      cta: "Request a quote",
    },
    partenaires: {
      eyebrow: "Partners",
      heading: "Who we work with",
      text: "We partner with trusted specialists to build reliable systems, from the electronic board to production rollout.",
      visit: "Visit website",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Got a project in mind?",
      text: "Tell us about your artificial intelligence, robotics or automation needs — we'll get back to you quickly.",
      cta: "Email us",
    },
    footer: { rights: "All rights reserved." },
    ui: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      toTheme: (t) => (t === "light" ? "Switch to light theme" : "Switch to dark theme"),
      toLang: (l) => (l === "en" ? "Switch to English" : "Passer en français"),
    },
  },
};

type SiteContextValue = {
  lang: Lang;
  theme: Theme;
  t: Dict;
  toggleLang: () => void;
  toggleTheme: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedLang = window.localStorage.getItem("phonsys-lang");
    if (storedLang === "en" || storedLang === "fr") setLang(storedLang);
    const storedTheme = window.localStorage.getItem("phonsys-theme");
    if (storedTheme === "light" || storedTheme === "dark") setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.lang = lang;
    window.localStorage.setItem("phonsys-theme", theme);
    window.localStorage.setItem("phonsys-lang", lang);
  }, [theme, lang]);

  const toggleLang = useCallback(() => setLang((l) => (l === "fr" ? "en" : "fr")), []);
  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  const value = useMemo(
    () => ({ lang, theme, t: dict[lang], toggleLang, toggleTheme }),
    [lang, theme, toggleLang, toggleTheme],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
