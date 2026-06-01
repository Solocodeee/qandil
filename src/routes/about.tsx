import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { Counter } from "@/components/Counter";
import { Logo } from "@/components/Logo";
import { ParticlesBg } from "@/components/ParticlesBg";
import { stats, techStack, team, journey, values, whyChoose } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Qandil Studio" },
      {
        name: "description",
        content:
          "Meet Qandil: a premium software and marketing studio crafting standout digital products since 2015.",
      },
      { property: "og:title", content: "About Qandil" },
      { property: "og:description", content: "Our story, mission, team, and values." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <ParticlesBg density={40} />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex glass rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-pink">
              About us
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Crafting digital <span className="text-gradient">brilliance</span> since 2015.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              We're a studio of designers, engineers, and marketers obsessed with shipping work that
              genuinely shines online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-brand-pink">Our Story</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              A studio born from <span className="text-gradient">craft</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Qandil started in Dubai in 2015 with three founders, one shared studio, and a refusal
              to settle for mediocre work. Ten years later, we're a 42-strong team partnering with
              brands across MENA, Europe, and North America.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe great work is the result of obsessive craft, honest partnership, and a
              willingness to push beyond what's expected.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl glass-strong p-10 grid place-items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-brand-soft" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(218,51,208,0.4),transparent_60%)]" />
              <Logo size="xl" className="relative scale-[2.5]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="What Drives Us" title="Mission · |Vision| · Values" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Mission",
                desc: "Empower brands to shine online through software and storytelling crafted to a premium standard.",
              },
              {
                icon: Eye,
                title: "Vision",
                desc: "To be the partner of choice for ambitious brands that refuse to look or feel ordinary online.",
              },
              {
                icon: Heart,
                title: "Values",
                desc: "Craft, honesty, partnership, and curiosity — in every interaction and every line of code.",
              },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl glass-strong p-8 border-gradient"
                >
                  <div className="h-14 w-14 grid place-items-center rounded-2xl bg-gradient-brand text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Principles" title="What we |stand| for" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl glass p-6"
              >
                <div className="text-3xl font-bold text-gradient">0{i + 1}</div>
                <h3 className="mt-3 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-brand-soft opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6">
          <SectionTitle eyebrow="Journey" title="A decade of |momentum|" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-magenta to-brand-orange" />
            {journey.map((j, i) => (
              <motion.div
                key={j.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative md:grid md:grid-cols-2 gap-12 mb-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
              >
                <div
                  className={`pl-12 md:pl-0 md:pr-12 md:text-right [direction:ltr] ${i % 2 === 0 ? "" : "md:order-2 md:pl-12 md:pr-0 md:text-left"}`}
                >
                  <div className="text-4xl font-bold text-gradient">{j.year}</div>
                  <h3 className="mt-2 text-xl font-bold">{j.title}</h3>
                  <p className="mt-2 text-muted-foreground">{j.desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 h-4 w-4 rounded-full bg-gradient-brand ring-4 ring-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Our People"
            title="Meet the |team|"
            subtitle="A small group of senior practitioners with one shared standard."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group rounded-2xl glass-strong overflow-hidden"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gradient-brand-soft">
                  <div className="absolute inset-0 bg-gradient-brand opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-7xl font-bold text-white/90">
                      {m.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{m.name}</h3>
                  <p className="text-sm text-brand-pink">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Technologies" title="The |stack| we love" />
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-full glass px-5 py-2.5 text-sm font-semibold hover:bg-gradient-brand hover:text-white transition-colors duration-300"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Why Qandil" title="Built for |outcomes|" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl glass p-6"
                >
                  <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-brand text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl glass-strong p-10 border-gradient">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
