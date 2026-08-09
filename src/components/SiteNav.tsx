import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";

import { useSite } from "@/lib/site-context";

export const navIds = ["expertises", "approche", "contact"] as const;

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-lg font-extrabold tracking-[0.14em] ${className}`}
    >
      PHON<span className="text-primary">SYS</span>
    </span>
  );
}

export function useNavLinks() {
  const { t } = useSite();
  return [
    { href: "#expertises", label: t.nav.expertises },
    { href: "#approche", label: t.nav.approche },
    { href: "#contact", label: t.nav.contact },
  ];
}

function Toggles({ compact = false }: { compact?: boolean }) {
  const { theme, lang, t, toggleTheme, toggleLang } = useSite();
  const btn =
    "inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-border px-3 text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-card-hover hover:text-foreground";
  return (
    <div className={compact ? "flex gap-2" : "flex items-center gap-2"}>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={t.ui.toTheme(theme === "dark" ? "light" : "dark")}
        className={btn}
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
      <button
        type="button"
        onClick={toggleLang}
        aria-label={t.ui.toLang(lang === "fr" ? "en" : "fr")}
        className={btn}
      >
        <Languages className="h-4 w-4" />
        {lang === "fr" ? "EN" : "FR"}
      </button>
    </div>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useSite();
  const navLinks = useNavLinks();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Toggles />
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-light"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Toggles compact />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t.ui.openMenu}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col gap-2 border-l border-border bg-card p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <Wordmark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.ui.closeMenu}
              tabIndex={open ? 0 : -1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="border-b border-border py-3 text-base text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="mt-6 rounded-md bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
          >
            {t.nav.cta}
          </a>
        </aside>
      </div>
    </header>
  );
}
