import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Eye, Layers, Check } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { ParticlesBg } from "@/components/ParticlesBg";
import { projects, projectCategories, type Project } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Qandil Studio" },
      {
        name: "description",
        content:
          "Explore Qandil's projects across software, e-commerce, marketing, branding, and mobile apps.",
      },
      { property: "og:title", content: "Qandil Projects" },
      { property: "og:description", content: "Selected case studies and recent work." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <ParticlesBg density={40} />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-flex glass rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-pink">
            Selected Work
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            Projects we're <span className="text-gradient">proud of</span>.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            A look at recent work across software, brand, and growth.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2 mt-6 justify-center mb-12">
            {projectCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  filter === c ? "text-white" : "text-muted-foreground hover:text-foreground glass"
                }`}
              >
                {filter === c && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-brand"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-2xl overflow-hidden glass-strong"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-flex rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                      {p.category}
                    </span>
                    <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-foreground/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/60 backdrop-blur-sm">
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="rounded-xl bg-white text-brand-dark px-4 py-2.5 text-sm font-semibold inline-flex items-center gap-2"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                      <button
                        onClick={() => setActive(p)}
                        className="rounded-xl bg-gradient-brand text-white px-4 py-2.5 text-sm font-semibold inline-flex items-center gap-2"
                      >
                        <Eye size={14} /> Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] grid place-items-center p-4 bg-background/80 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-3xl glass-strong overflow-hidden my-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 h-10 w-10 grid place-items-center rounded-full bg-background/60 hover:bg-background transition"
            >
              <X size={18} />
            </button>
            <div className="aspect-[16/9] overflow-hidden">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-8 md:p-10">
              <span className="inline-flex rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                {project.category}
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold">{project.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>

              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-brand-pink flex items-center gap-2">
                    <Layers size={14} /> Technologies
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full glass px-3 py-1 text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-brand-pink">
                    Key Features
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check size={16} className="text-brand-orange mt-0.5 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm uppercase tracking-widest text-brand-pink mb-4">Gallery</h4>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt=""
                        className="h-full w-full object-cover"
                        style={{ filter: `hue-rotate(${i * 30}deg)` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-brand-soft border-gradient">
                <h4 className="text-sm uppercase tracking-widest text-brand-pink">Case Study</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  We partnered closely with the {project.title} team across discovery, design,
                  engineering, and launch. The result: a beautifully crafted experience that
                  outperformed every benchmark we set together.
                </p>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="#"
                  className="rounded-xl bg-gradient-brand text-white px-5 py-3 font-semibold inline-flex items-center gap-2"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <button onClick={onClose} className="rounded-xl glass px-5 py-3 font-semibold">
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
