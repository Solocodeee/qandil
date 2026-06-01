import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { company, navLinks, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-32 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand-soft opacity-60 pointer-events-none" />
      <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-magenta/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo showText size="lg" />
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              {company.description}
            </p>
            <div className="mt-6 flex gap-2">
              {company.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-gradient-brand transition-all duration-300 text-xs font-semibold"
                  aria-label={s.name}
                >
                  {s.name[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-widest text-brand-pink">
              Navigate
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-widest text-brand-pink">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li
                  key={s.title}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-widest text-brand-pink">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-orange" /> {company.address}
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand-orange" /> {company.phone}
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-orange" /> {company.email}
              </li>
            </ul>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                Newsletter
              </label>
              <div className="mt-2 flex gap-2 glass rounded-xl p-1">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
                />
                <button className="rounded-lg bg-gradient-brand px-3 text-white hover:opacity-90 transition">
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {company.name}. Crafted with care.
          </p>
          <p className="uppercase tracking-[0.3em] text-brand-magenta">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
