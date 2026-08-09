import { createFileRoute } from "@tanstack/react-router";
import { Brain, Bot, Cpu, Activity, ArrowRight, Mail } from "lucide-react";

import { NeuralCanvas } from "@/components/NeuralCanvas";
import { SiteNav, Wordmark, navLinks } from "@/components/SiteNav";
import mark from "@/assets/phonsys-mark.png.asset.json";

const title = "Phonsys — IA, robotique avancée et automatisation industrielle";
const description =
  "Phonsys conçoit des systèmes d'intelligence artificielle et des solutions robotiques sur mesure, de la recherche jusqu'à la mise en production.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const expertises = [
  {
    icon: Brain,
    title: "Intelligence artificielle",
    text: "Modèles et algorithmes sur mesure pour automatiser l'analyse, la décision et la prédiction.",
  },
  {
    icon: Bot,
    title: "Robotique avancée",
    text: "Conception et intégration de systèmes robotiques adaptés à vos environnements de production.",
  },
  {
    icon: Cpu,
    title: "Solutions intelligentes",
    text: "Intégration de puces et de capteurs pour connecter vos équipements et vos données.",
  },
  {
    icon: Activity,
    title: "Automatisation & performance",
    text: "Automatisation de processus et pilotage à distance pour gagner en efficacité opérationnelle.",
  },
];

const etapes = [
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
];

const EMAIL = "contact@phonsys.com";

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
          <NeuralCanvas />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="eyebrow">Studio IA · Robotique · Automatisation</p>
                <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                  Concevoir aujourd'hui,{" "}
                  <span className="text-primary">innover</span> pour demain.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Phonsys conçoit des systèmes d'intelligence artificielle et des solutions
                  robotiques sur mesure, de la recherche jusqu'à la mise en production — pour
                  des entreprises qui veulent des résultats concrets, pas des concepts.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-light"
                  >
                    Discuter de votre projet <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#expertises"
                    className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card-hover"
                  >
                    Découvrir nos expertises
                  </a>
                </div>
              </div>

              <div className="order-first justify-self-center lg:order-none">
                <img
                  src={mark.url}
                  alt="Emblème Phonsys : lettres P et S entourées d'un circuit et d'un bras robotisé"
                  className="w-52 max-w-full sm:w-72 lg:w-full"
                  width={680}
                  height={570}
                />
              </div>
            </div>

            <div className="rule-line mt-14" />
            <ul className="grid gap-4 pt-6 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground sm:grid-cols-3">
              <li>Intelligence artificielle</li>
              <li>Robotique avancée</li>
              <li>Automatisation</li>
            </ul>
          </div>
        </section>

        {/* Expertises */}
        <section id="expertises" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Expertises</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              Quatre domaines, une même exigence d'ingénierie.
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {expertises.map((e) => (
                <article
                  key={e.title}
                  className="rounded-lg border border-border bg-card p-6 transition-colors hover:bg-card-hover"
                >
                  <e.icon className="h-6 w-6 text-primary" strokeWidth={1.25} />
                  <h3 className="mt-5 text-base font-bold">{e.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approche */}
        <section
          id="approche"
          className="scroll-mt-24 border-y border-border px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Approche</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Notre méthode</h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {etapes.map((s) => (
                <li key={s.n} className="border-t border-border pt-6">
                  <span className="font-mono text-sm tracking-[0.2em] text-primary">{s.n}</span>
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Un projet en tête ?</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Décrivez-nous votre besoin en intelligence artificielle, robotique ou automatisation
              — on revient vers vous rapidement.
            </p>
            <p className="mt-8 font-mono text-sm tracking-[0.12em] text-foreground">{EMAIL}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-light"
            >
              <Mail className="h-4 w-4" /> Nous écrire
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-10 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
          <Wordmark />
          <div className="flex flex-wrap items-center gap-6 sm:justify-end">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground sm:col-span-2">
            © {new Date().getFullYear()} Phonsys. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
