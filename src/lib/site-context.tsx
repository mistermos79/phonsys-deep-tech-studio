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
    intro: string;
    badge: string;
    creation: string;
    monthly: string;
    plans: { name: string; price: string; sub: string; who: string; features: string[]; featured?: boolean }[];
    recoTitle: string;
    recoPrice: string;
    recoItems: { label: string; text: string }[];
    optionsTitle: string;
    options: { label: string; price: string }[];
    note: string;
    cta: string;
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
      approche: "Approche",
      partenaires: "Partenaires",
      contact: "Contact",
      cta: "Démarrer un projet",
    },
    hero: {
      eyebrow: "Studio IA · Robotique · Automatisation",
      titleA: "Concevoir aujourd'hui, ",
      titleAccent: "innover",
      titleB: " pour demain.",
      subtitle:
        "Phonsys conçoit des systèmes d'intelligence artificielle et des solutions robotiques sur mesure, de la recherche jusqu'à la mise en production — pour des entreprises qui veulent des résultats concrets, pas des concepts.",
      ctaPrimary: "Discuter de votre projet",
      ctaSecondary: "Découvrir nos expertises",
      markers: ["Intelligence artificielle", "Robotique avancée", "Automatisation"],
      markAlt:
        "Emblème Phonsys : lettres P et S entourées d'un circuit et d'un bras robotisé",
    },
    expertises: {
      eyebrow: "Expertises",
      heading: "Quatre domaines, une même exigence d'ingénierie.",
      items: [
        {
          title: "Intelligence artificielle",
          text: "Modèles et algorithmes sur mesure pour automatiser l'analyse, la décision et la prédiction.",
        },
        {
          title: "Robotique avancée",
          text: "Conception et intégration de systèmes robotiques adaptés à vos environnements de production.",
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
        {
          title: "Chatbots & assistants",
          text: "Assistants conversationnels entraînés sur vos documents internes, multilingues FR/DE/EN/IT — pour vos clients, vos équipes ou votre site web.",
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
      approche: "Approach",
      partenaires: "Partners",
      contact: "Contact",
      cta: "Start a project",
    },
    hero: {
      eyebrow: "AI · Robotics · Automation studio",
      titleA: "Designing today, ",
      titleAccent: "innovating",
      titleB: " for tomorrow.",
      subtitle:
        "Phonsys builds custom artificial intelligence systems and robotic solutions, from research through to production — for companies that want concrete results, not concepts.",
      ctaPrimary: "Discuss your project",
      ctaSecondary: "Explore our expertise",
      markers: ["Artificial intelligence", "Advanced robotics", "Automation"],
      markAlt:
        "Phonsys emblem: P and S letters framed by a circuit trace and a robotic arm",
    },
    expertises: {
      eyebrow: "Expertise",
      heading: "Four fields, one engineering standard.",
      items: [
        {
          title: "Artificial intelligence",
          text: "Custom models and algorithms to automate analysis, decision-making and prediction.",
        },
        {
          title: "Advanced robotics",
          text: "Design and integration of robotic systems adapted to your production environments.",
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
        {
          title: "Chatbots & assistants",
          text: "Conversational assistants trained on your internal documents, multilingual FR/DE/EN/IT — for your customers, your teams or your website.",
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
