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
      eyebrow: "Offres & Tarifs",
      heading: "Votre site internet travaille pour vous",
      subtitle:
        "Site professionnel, visibilité locale et intelligence artificielle pour transformer vos visiteurs en demandes de devis.",
      intro:
        "Nous créons des sites internet professionnels conçus pour être visibles sur Google, présenter votre savoir-faire et générer davantage de demandes de devis.",
      plans: [
        {
          id: "Essentiel",
          badge: "Pour démarrer",
          name: "Essentiel",
          price: "À partir de 790 € HT",
          desc: "Une présence professionnelle sur Internet pour présenter votre activité et permettre à vos clients de vous contacter facilement.",
          features: [
            "1 à 3 pages",
            "Design professionnel responsive",
            "Optimisation smartphone",
            "Formulaire de contact",
            "Bouton d'appel",
            "Google Maps",
            "Informations de l'entreprise",
            "Mise en ligne",
          ],
          cta: "Demander un devis",
        },
        {
          id: "Professionnel",
          badge: "★ Le plus choisi",
          name: "Professionnel",
          price: "À partir de 1 490 € HT",
          desc: "Une véritable vitrine digitale conçue pour développer votre visibilité locale et générer des demandes de devis.",
          features: [
            "5 à 7 pages",
            "Design personnalisé",
            "Site parfaitement responsive",
            "SEO local",
            "Galerie de réalisations",
            "Présentation des prestations",
            "Pages zones d'intervention",
            "Mise en avant des avis clients",
            "Formulaire de demande de devis",
            "Boutons d'appel",
            "Google Maps",
            "Optimisation Google Business Profile",
            "Configuration des outils de mesure",
            "Optimisation des performances",
          ],
          cta: "Obtenir mon devis",
          featured: true,
        },
        {
          id: "Professionnel + IA",
          badge: "IA & Automatisation",
          name: "Professionnel + IA",
          price: "À partir de 2 490 € HT",
          desc: "Une présence digitale avancée avec des outils d'intelligence artificielle pour automatiser une partie de votre relation avec vos prospects.",
          features: [
            "Tout le contenu de l'offre Professionnel",
            "Assistant IA",
            "FAQ intelligente",
            "Qualification automatique des prospects",
            "Formulaire de devis intelligent",
            "Génération assistée des réponses clients",
            "Automatisation des notifications",
            "Intégration possible avec CRM",
            "Automatisation du suivi des prospects",
            "Optimisation SEO assistée par IA",
          ],
          cta: "Découvrir l'offre IA",
        },
      ],
      subsHeading: "Un site qui reste performant dans le temps",
      subsText:
        "Votre site ne doit pas simplement être créé puis oublié. PHONSYS peut assurer son hébergement, sa maintenance et son évolution dans le temps.",
      subs: [
        {
          name: "Essentiel",
          price: "À partir de 49 € HT / mois",
          features: ["Hébergement", "SSL", "Sauvegardes", "Maintenance technique", "Mises à jour"],
        },
        {
          name: "Confort",
          price: "À partir de 69 € HT / mois",
          badge: "★ Recommandé",
          features: [
            "Tout le forfait Essentiel",
            "Petites modifications de contenu",
            "Assistance",
            "Surveillance du site",
            "Optimisations régulières",
          ],
        },
        {
          name: "Performance",
          price: "À partir de 99 € HT / mois",
          features: [
            "Tout le forfait Confort",
            "Optimisation SEO",
            "Optimisation IA",
            "Amélioration continue",
            "Analyse des performances",
            "Optimisation de la conversion",
          ],
        },
      ],
      customTitle: "Pas de solution standard imposée.",
      customText:
        "Chaque entreprise est différente. Les tarifs affichés sont des tarifs « à partir de ». Après échange sur votre activité, vos objectifs et vos besoins, PHONSYS vous propose une solution et un devis personnalisés.",
      customCta: "Recevoir mon devis gratuitement",
      whyEyebrow: "Pourquoi Phonsys ?",
      whyHeading: "Plus qu'un site internet : un outil pour développer votre activité.",
      why: [
        {
          title: "Visibilité locale",
          text: "Soyez visible lorsque vos clients recherchent vos services dans votre secteur.",
        },
        {
          title: "Mobile",
          text: "Un site parfaitement adapté aux smartphones, là où vos clients effectuent aujourd'hui une grande partie de leurs recherches.",
        },
        {
          title: "Intelligence artificielle",
          text: "Utilisez l'IA pour automatiser certaines tâches et améliorer la gestion de vos prospects.",
        },
        {
          title: "Conversion",
          text: "Un site pensé pour générer des appels, des demandes de devis et de nouveaux clients.",
        },
      ],
      finalHeading: "Vous avez un projet de site internet ?",
      finalText:
        "Parlons de votre activité et voyons comment PHONSYS peut vous aider à développer votre présence en ligne.",
      finalPrimary: "Demander mon devis gratuitement",
      finalSecondary: "Nous contacter",
      selectedLabel: "Offre sélectionnée",
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
