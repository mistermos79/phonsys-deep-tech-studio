import { createFileRoute } from "@tanstack/react-router";
import {
  House,
  MonitorSmartphone,
  Activity,
  Plug,
  ArrowRight,
  Check,
  Mail,
} from "lucide-react";

import { NeuralCanvas } from "@/components/NeuralCanvas";
import { SiteNav, Wordmark, useNavLinks } from "@/components/SiteNav";
import { SiteProvider, useSite } from "@/lib/site-context";
import mark from "@/assets/phonsys-emblem.png.asset.json";
import kubii from "@/assets/kubii-logo.png.asset.json";
import arduino from "@/assets/arduino-logo.png.asset.json";
import nvidia from "@/assets/nvidia-logo.png.asset.json";
import claude from "@/assets/claude-logo.png.asset.json";
import chatgpt from "@/assets/chatgpt-logo.png.asset.json";
import n8n from "@/assets/n8n-logo.png.asset.json";

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

const icons = [House, MonitorSmartphone, Activity, Plug];
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
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:whitespace-nowrap lg:text-[clamp(1.75rem,3.4vw,2.6rem)]">
              {t.expertises.heading}
            </h2>
            <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">

              {t.expertises.items.map((e, i) => {
                const Icon = icons[i]!;
                const body = (
                  <>
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.25} />
                    <h3 className="mt-5 text-base font-bold">{e.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                  </>
                );
                if (i === 1) {
                  return (
                    <a
                      key={e.title}
                      href="#tarifications"
                      className="group block rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary hover:bg-card-hover"
                    >
                      {body}
                      <span className="mt-5 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary">
                        {t.nav.tarifications} <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </a>
                  );
                }
                return (
                  <article
                    key={e.title}
                    className="rounded-lg border border-border bg-card p-6 transition-colors hover:bg-card-hover"
                  >
                    {body}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Offres & Tarifs */}
        <section
          id="tarifications"
          className="scroll-mt-24 border-t border-border px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">{t.tarifications.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
              {t.tarifications.heading}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/90 md:text-lg">
              {t.tarifications.subtitle}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {t.tarifications.intro}
            </p>

            <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
              {t.tarifications.plans.map((p) => (
                <article
                  key={p.id}
                  className={`flex h-full flex-col rounded-xl border bg-card p-6 transition-colors sm:p-8 ${
                    p.featured
                      ? "border-primary shadow-[0_0_0_1px_var(--color-primary)] lg:-mt-4 lg:pb-10"
                      : "border-border hover:bg-card-hover"
                  }`}
                >
                  <span
                    className={`inline-flex w-fit rounded-full px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] ${
                      p.featured
                        ? "bg-primary text-primary-foreground"
                        : "border border-border text-muted-foreground"
                    }`}
                  >
                    {p.badge}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{p.name}</h3>
                  <p className="mt-3 text-2xl font-extrabold text-primary sm:text-[1.7rem]">
                    {p.price}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    onClick={() => onSelect(`${p.name} — ${p.price}`)}
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-medium transition-colors ${
                      p.featured
                        ? "bg-primary text-primary-foreground hover:bg-primary-light"
                        : "border border-border text-foreground hover:bg-card-hover"
                    }`}
                  >
                    {p.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>

            {/* Abonnements */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold sm:text-3xl">{t.tarifications.subsHeading}</h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {t.tarifications.subsText}
              </p>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {t.tarifications.subs.map((s) => (
                  <article
                    key={s.name}
                    className={`flex h-full flex-col rounded-xl border bg-card p-6 ${
                      s.badge ? "border-primary" : "border-border"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-base font-bold">{s.name}</h4>
                      {s.badge && (
                        <span className="rounded-full bg-primary px-3 py-1 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-primary-foreground">
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-lg font-bold text-primary">{s.price}</p>
                    <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                            strokeWidth={1.5}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            {/* Devis personnalisé */}
            <div className="mt-14 rounded-xl border border-border bg-card p-8 text-center md:p-10">
              <h3 className="text-xl font-bold sm:text-2xl">{t.tarifications.customTitle}</h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {t.tarifications.customText}
              </p>
              <a
                href="#contact"
                onClick={() => onSelect(null)}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-light sm:w-auto"
              >
                {t.tarifications.customCta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Pourquoi Phonsys */}
            <div className="mt-20">
              <p className="eyebrow">{t.tarifications.whyEyebrow}</p>
              <h3 className="mt-4 max-w-3xl text-2xl font-bold sm:text-3xl">
                {t.tarifications.whyHeading}
              </h3>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {t.tarifications.why.map((w, i) => {
                  const Icon = whyIcons[i]!;
                  return (
                    <article
                      key={w.title}
                      className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card-hover"
                    >
                      <Icon className="h-6 w-6 text-primary" strokeWidth={1.25} />
                      <h4 className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-foreground">
                        {w.title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                    </article>
                  );
                })}
              </div>
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

        {/* Partenaires */}
        <section
          id="partenaires"
          className="scroll-mt-24 border-b border-border px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">{t.partenaires.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{t.partenaires.heading}</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t.partenaires.text}
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: "https://www.kubii.com/fr/", src: kubii.url, alt: "Kubii" },
                { href: "https://store.arduino.cc/", src: arduino.url, alt: "Arduino" },
                { href: "https://www.nvidia.com/fr-fr/", src: nvidia.url, alt: "NVIDIA" },
                { href: "https://claude.ai/", src: claude.url, alt: "Claude AI" },
                { href: "https://chatgpt.com/", src: chatgpt.url, alt: "ChatGPT" },
                { href: "https://n8n.io/", src: n8n.url, alt: "n8n" },
              ].map((p) => (
                <a
                  key={p.alt}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-start gap-6 rounded-lg border border-border bg-card p-8 transition-colors hover:bg-card-hover"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="h-12 w-auto"
                    loading="lazy"
                  />
                  <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary">
                    {t.partenaires.visit} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              ))}
            </div>

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
