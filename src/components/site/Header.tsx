import { useEffect, useState } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#fleet", label: "Fleet" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
];

const TikTok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19.5 7.6a6.6 6.6 0 0 1-3.9-1.3v8.4a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.7a3 3 0 1 0 2.1 2.9V2h2.7a4 4 0 0 0 3.9 3.9v1.7Z"/></svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-deep/80 backdrop-blur-xl border-b border-white/10 py-2" : "bg-transparent py-4"
      }`}
      style={scrolled ? { backgroundColor: "color-mix(in oklab, var(--deep) 80%, transparent)" } : undefined}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white shadow-gold ring-1 ring-white/30">
            <img src={logo} alt="ECR Translogix logo" className="h-full w-full object-cover" />
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight">ECR TRANSLOGIX</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold">& Petroleum SA</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-2">
          {nav.map((n) => (
            <a key={n.href} href={n.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground hover:bg-white/10">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 mr-2">
            {[
              { I: Facebook, href: "#" },
              { I: Instagram, href: "#" },
              { I: TikTok, href: "#" },
              { I: Linkedin, href: "#" },
              { I: MessageCircle, href: "https://wa.me/263771243538" },
            ].map(({ I, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full text-foreground/70 hover:text-gold hover:bg-white/10 transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a href="#quote"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold gradient-gold shadow-gold hover:scale-[1.03] transition"
            style={{ color: "var(--gold-foreground)" }}>
            Get Quote
          </a>
          <button onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full glass">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-4 mt-3 glass rounded-2xl p-3 animate-in fade-in slide-in-from-top-2">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/10">
              {n.label}
            </a>
          ))}
          <a href="#quote" onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl px-4 py-3 text-center text-sm font-semibold gradient-gold"
            style={{ color: "var(--gold-foreground)" }}>Get Quote</a>
        </div>
      )}
    </header>
  );
}
