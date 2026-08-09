import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Bot,
  Cpu,
  Activity,
  Plug,
  MessagesSquare,
  ArrowRight,
  Mail,
} from "lucide-react";

import { NeuralCanvas } from "@/components/NeuralCanvas";
import { SiteNav, Wordmark, useNavLinks } from "@/components/SiteNav";
import { SiteProvider, useSite } from "@/lib/site-context";
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

const icons = [Brain, Bot, Cpu, Activity];
const EMAIL = "contact@phonsys.com";

function Index() {
  return (
    <SiteProvider>
      <Page />
    </SiteProvider>
  );
}

function Page() {
  const { t } = useSite();
  const navLinks = useNavLinks();

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
                <p className="eyebrow">{t.hero.eyebrow}</p>
                <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                  {t.hero.titleA}
                  <span className="text-primary">{t.hero.titleAccent}</span>
                  {t.hero.titleB}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {t.hero.subtitle}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-light"
                  >
                    {t.hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#expertises"
                    className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card-hover"
                  >
                    {t.hero.ctaSecondary}
                  </a>
                </div>
              </div>

              <div className="order-first justify-self-center lg:order-none">
                <img
                  src={mark.url}
                  alt={t.hero.markAlt}
                  className="w-52 max-w-full sm:w-72 lg:w-full"
                  width={680}
                  height={570}
                />
              </div>
            </div>

            <div className="rule-line mt-14" />
            <ul className="grid gap-4 pt-6 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground sm:grid-cols-3">
              {t.hero.markers.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Expertises */}
        <section id="expertises" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">{t.expertises.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              {t.expertises.heading}
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {t.expertises.items.map((e, i) => {
                const Icon = icons[i]!;
                return (
                  <article
                    key={e.title}
                    className="rounded-lg border border-border bg-card p-6 transition-colors hover:bg-card-hover"
                  >
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.25} />
                    <h3 className="mt-5 text-base font-bold">{e.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Approche */}
        <section
          id="approche"
          className="scroll-mt-24 border-y border-border px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">{t.approche.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{t.approche.heading}</h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {t.approche.items.map((s) => (
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
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{t.contact.heading}</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {t.contact.text}
            </p>
            <p className="mt-8 font-mono text-sm tracking-[0.12em] text-foreground">{EMAIL}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-light"
            >
              <Mail className="h-4 w-4" /> {t.contact.cta}
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
            © {new Date().getFullYear()} Phonsys. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
