import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const navLinks = [
  { href: "#expertises", label: "Expertises" },
  { href: "#approche", label: "Approche" },
  { href: "#contact", label: "Contact" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-lg font-extrabold tracking-[0.14em] ${className}`}
    >
      PHON<span className="text-primary">SYS</span>
    </span>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-light"
          >
            Démarrer un projet
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-foreground md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
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
              aria-label="Fermer le menu"
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
            Démarrer un projet
          </a>
        </aside>
      </div>
    </header>
  );
}
