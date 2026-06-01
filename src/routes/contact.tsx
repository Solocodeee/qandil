import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { SectionTitle } from "@/components/SectionTitle";
import { ParticlesBg } from "@/components/ParticlesBg";
import { Logo } from "@/components/Logo";
import { company, faqs } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Qandil Studio" },
      {
        name: "description",
        content:
          "Get in touch with Qandil to start your next software, design, or marketing project.",
      },
      { property: "og:title", content: "Contact Qandil" },
      { property: "og:description", content: "We'd love to hear about your project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Toaster />
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <ParticlesBg density={40} />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-flex glass rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-pink">
            Let's Talk
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            Let's build something <span className="text-gradient">brilliant</span>.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Tell us about your project. We typically reply within one business day.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: MapPin, label: "Address", value: company.address },
            { icon: Phone, label: "Phone", value: company.phone },
            { icon: Mail, label: "Email", value: company.email },
            { icon: Clock, label: "Hours", value: company.hours },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl glass-strong p-6 border-gradient hover:glow transition-shadow"
              >
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-brand text-white">
                  <Icon size={20} />
                </div>
                <div className="mt-5 text-xs uppercase tracking-widest text-brand-pink">
                  {c.label}
                </div>
                <div className="mt-1 font-semibold leading-snug">{c.value}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
          <ContactForm />
          <MapPlaceholder />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionTitle eyebrow="FAQ" title="Common |questions|" />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Socials */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionTitle eyebrow="Stay in Touch" title="Follow our |work|" align="center" />
          <div className="flex flex-wrap justify-center gap-3">
            {company.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                className="rounded-xl glass-strong px-6 py-4 font-semibold hover:bg-gradient-brand hover:text-white transition-all duration-300"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl p-12 text-center bg-gradient-brand bg-[length:200%_200%] animate-gradient">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.18),transparent_40%)]" />
            <div className="relative flex flex-col items-center">
              <Logo size="lg" />
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
                Ready when you are.
              </h2>
              <p className="mt-3 text-white/90">
                Reply within 24h · NDA on request · Free consultation
              </p>
              <Link
                to="/projects"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white text-brand-dark px-7 py-4 font-semibold hover:scale-105 transition-transform"
              >
                See our work <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks — we'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };
  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmit}
      className="rounded-3xl glass-strong p-8 border-gradient"
    >
      <h3 className="text-2xl font-bold">Send us a message</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill the form and we'll respond promptly.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" placeholder="Your full name" required />
        <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
        <Field label="Phone" name="phone" type="tel" placeholder="+1 555 ..." />
        <Field label="Company" name="company" placeholder="Company name" />
      </div>
      <div className="mt-4">
        <label className="text-xs uppercase tracking-widest text-brand-pink">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project, goals, and timeline..."
          className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-brand-magenta transition placeholder:text-muted-foreground/70"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-brand bg-[length:200%_200%] px-6 py-3.5 font-semibold text-white shadow-[0_15px_40px_-15px_rgba(218,51,208,0.7)] hover:bg-[position:100%_50%] transition-all duration-700 disabled:opacity-60"
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send size={16} />
          </>
        )}
      </button>
    </motion.form>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-brand-pink">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-brand-magenta transition placeholder:text-muted-foreground/70"
      />
    </div>
  );
}

function MapPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-3xl glass-strong overflow-hidden min-h-[440px]"
    >
      <div className="absolute inset-0 bg-gradient-brand-soft" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(218,51,208,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(91,46,229,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <div className="h-16 w-16 grid place-items-center rounded-full bg-gradient-brand text-white shadow-[0_20px_50px_-15px_rgba(218,51,208,0.7)]">
            <MapPin size={26} />
          </div>
          <div className="glass-strong rounded-2xl px-5 py-3 text-center">
            <div className="text-xs uppercase tracking-widest text-brand-pink">Our Studio</div>
            <div className="font-semibold mt-1">{company.address}</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl glass overflow-hidden"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold">{q}</span>
        <ChevronDown
          size={18}
          className={`text-brand-pink transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{a}</div>
      </motion.div>
    </motion.div>
  );
}
