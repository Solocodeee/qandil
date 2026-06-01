import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Quote, Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { ParticlesBg } from "@/components/ParticlesBg";
import { SectionTitle } from "@/components/SectionTitle";
import { Counter } from "@/components/Counter";
import { Logo } from "@/components/Logo";
import {
  services,
  whyChoose,
  stats,
  processSteps,
  testimonials,
  partners,
  projects,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qandil — Software Development & Digital Marketing Studio" },
      {
        name: "description",
        content: "We design, build, and grow standout digital products for ambitious brands.",
      },
      { property: "og:title", content: "Qandil — Shine Online" },
      {
        property: "og:description",
        content: "Software development and digital marketing crafted to a premium standard.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <Stats />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <Partners />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-24 pt-24">
      <div className="absolute inset-0 bg-hero" />
      <ParticlesBg density={70} />

      {/* floating orbs */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-brand-indigo/30 blur-[120px] animate-float" />
      <div className="absolute bottom-10 -right-20 h-96 w-96 rounded-full bg-brand-magenta/30 blur-[120px] animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-pink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-magenta animate-pulse" />
            Software · Design · Marketing
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]"
          >
            We build digital <br />
            products that <span className="text-gradient">shine online</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Qandil is a premium software and digital marketing studio. We design, engineer, and grow
            standout brands — end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand bg-[length:200%_200%] px-7 py-4 font-semibold text-white shadow-[0_20px_50px_-15px_rgba(218,51,208,0.7)] hover:bg-[position:100%_50%] transition-all duration-700"
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-2xl glass px-7 py-4 font-semibold text-foreground hover:bg-white/10 transition-colors"
            >
              <Play size={16} className="text-brand-magenta" /> View Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full bg-gradient-brand border-2 border-background"
                  style={{ filter: `hue-rotate(${i * 30}deg)` }}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-brand-orange">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs">Rated 4.9 by 180+ clients</span>
            </div>
          </motion.div>
        </div>

        {/* Logo showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="relative w-[460px] h-[460px]">
            <div className="absolute inset-0 rounded-full bg-gradient-brand blur-3xl opacity-40 animate-pulse-glow" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-brand-magenta/30 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-brand-blue/20 border-dashed"
            />
            <div className="absolute inset-0 grid place-items-center">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Logo size="xl" className="scale-[2.2]" />
              </motion.div>
            </div>
            {/* orbiting dots */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 h-3 w-3 rounded-full bg-gradient-brand"
                style={{
                  transformOrigin: `0 0`,
                }}
                animate={{
                  rotate: 360,
                  x: Math.cos((i / 5) * Math.PI * 2) * 220,
                  y: Math.sin((i / 5) * Math.PI * 2) * 220,
                }}
                transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="What We Do"
          title="Services that |move metrics|"
          subtitle="Eight focused services, one premium standard. We integrate software, design, and marketing so every release ships and performs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative rounded-2xl glass p-6 hover:-translate-y-1 transition-all duration-500 border-gradient overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700" />
                <div className="relative">
                  <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-brand text-white shadow-[0_10px_30px_-10px_rgba(218,51,208,0.7)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand-pink opacity-0 group-hover:opacity-100 translate-x-[-6px] group-hover:translate-x-0 transition-all duration-300">
                    Explore <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 bg-gradient-brand-soft opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Why Qandil"
          title="A studio built for |outcomes|"
          subtitle="Clients trust us because we obsess over craft, speed, and impact — not deliverables on a checklist."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChoose.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl glass-strong p-6 hover:glow transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 grid place-items-center rounded-xl bg-white/5 text-brand-pink">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold">{w.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl glass-strong p-10 border-gradient">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold leading-none">
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
  );
}

// function FeaturedProjects() {
//   const featured = projects.slice(0, 6);
//   return (
//     <section className="relative py-28 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6">
//         <SectionTitle
//           eyebrow="Featured Work"
//           title="Recent |projects| we love"
//           subtitle="A glimpse of what we've shipped lately, across software, commerce, and brand."
//         />
//       </div>
//       <Swiper
//         modules={[Autoplay, EffectCoverflow, Pagination]}
//         effect="coverflow"
//         grabCursor
//         centeredSlides
//         loop
//         slidesPerView="auto"
//         coverflowEffect={{ rotate: 20, stretch: 0, depth: 200, modifier: 1.2, slideShadows: false }}
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         className="!pb-14"
//       >
//         {featured.map((p) => (
//           <SwiperSlide key={p.id} className="!w-[85%] sm:!w-[520px]">
//             <div className="group relative rounded-3xl overflow-hidden glass-strong">
//               <div className="aspect-[16/10] overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
//               </div>
//               <div className="absolute inset-x-0 bottom-0 p-6">
//                 <span className="inline-flex rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
//                   {p.category}
//                 </span>
//                 <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
//                 <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
//                 <div className="mt-4 flex gap-2">
//                   <Link
//                     to="/projects"
//                     className="rounded-xl bg-white/10 backdrop-blur px-4 py-2 text-xs font-semibold hover:bg-white/20 transition"
//                   >
//                     View Details
//                   </Link>
//                   <a
//                     href="#"
//                     className="rounded-xl bg-gradient-brand px-4 py-2 text-xs font-semibold text-white"
//                   >
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
function FeaturedProjects() {
  const featured = projects.slice(0, 6);

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Featured Work"
          title="Recent projects we love"
          subtitle="A glimpse of what we've shipped lately, across software, commerce, and brand."
        />
      </div>

      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        // loop={false} 👈 خليه false عشان تتجنب التكرار
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1.2,
          slideShadows: false,
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="!pb-14"
      >
        {featured.map((p) => (
          <SwiperSlide key={p.id} className="!w-[85%] sm:!w-[520px]">
            <div className="group relative rounded-3xl overflow-hidden glass-strong">
              {/* IMAGE */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-flex rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                  {p.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>

                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.description}</p>

                {/* BUTTONS */}
                <div className="mt-4 flex gap-2">
                  <Link
                    to="/projects"
                    className="rounded-xl bg-white/10 backdrop-blur px-4 py-2 text-xs font-semibold hover:bg-white/20 transition"
                  >
                    View Details
                  </Link>

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-gradient-brand px-4 py-2 text-xs font-semibold text-white"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Process() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Our Process"
          title="From idea to |launch| in 6 focused steps"
          subtitle="A proven workflow that keeps projects on time, on budget, and on brand."
        />
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-magenta/50 to-transparent hidden md:block" />
          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`md:flex items-center gap-10 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                <div className="md:w-1/2">
                  <div className="rounded-2xl glass-strong p-6 border-gradient">
                    <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">
                      Step 0{i + 1}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
                <div className="hidden md:grid place-items-center w-14 h-14 rounded-full bg-gradient-brand text-white font-bold shadow-[0_10px_30px_-10px_rgba(218,51,208,0.7)] shrink-0">
                  {i + 1}
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 bg-gradient-brand-soft opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Kind Words" title="What our |clients| are saying" />
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{ delay: 4500 }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="rounded-2xl glass-strong p-7 h-full">
                <Quote className="text-brand-magenta" size={28} />
                <p className="mt-4 text-base leading-relaxed text-foreground/90">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-brand grid place-items-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-muted-foreground mb-10">
          Trusted by teams worldwide
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="text-2xl md:text-3xl font-bold text-muted-foreground/50 hover:text-gradient transition-colors shrink-0"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center bg-gradient-brand bg-[length:200%_200%] animate-gradient shadow-[0_40px_120px_-30px_rgba(218,51,208,0.6)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.18),transparent_40%)]" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready to shine online?
            </h2>
            <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
              Let's build the next standout product, brand, or campaign together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-brand-dark px-7 py-4 font-semibold hover:scale-105 transition-transform"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/40 text-white px-7 py-4 font-semibold hover:bg-white/10 transition"
              >
                See Our Work
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
              {["Free consultation", "Reply within 24h", "NDA on request"].map((x) => (
                <div key={x} className="flex items-center gap-2">
                  <Check size={16} /> {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
