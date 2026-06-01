import {
  Code2,
  ShoppingBag,
  Smartphone,
  Palette,
  Search,
  Megaphone,
  Sparkles,
  Share2,
  Rocket,
  Lightbulb,
  Timer,
  Cpu,
  Headphones,
} from "lucide-react";

export const company = {
  name: "Qandil",
  tagline: "Shine Online",
  description:
    "Premium software development and digital marketing studio crafting standout digital experiences for ambitious brands.",
  email: "hello@qandil.studio",
  phone: "+1 (555) 012-3456",
  address: "1208 Innovation Avenue, Suite 400, Dubai, UAE",
  hours: "Sun – Thu · 9:00 – 18:00 GST",
  socials: [
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Dribbble", url: "#" },
    { name: "GitHub", url: "#" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Blazing-fast, scalable web platforms built with modern stacks.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Stores",
    desc: "Conversion-driven storefronts that turn visitors into customers.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Native-feeling iOS & Android apps your users will love.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Beautiful, accessible interfaces backed by user research.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Climb the rankings with technical & content SEO that works.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Performance campaigns with measurable ROI across channels.",
  },
  {
    icon: Sparkles,
    title: "Branding",
    desc: "Identity systems that tell your story and stand out.",
  },
  {
    icon: Share2,
    title: "Social Media",
    desc: "Content & community strategies that grow real audiences.",
  },
];

export const whyChoose = [
  {
    icon: Sparkles,
    title: "Experience",
    desc: "10+ years building digital products that ship and scale.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We push craft, AI, and motion to deliver memorable work.",
  },
  {
    icon: Timer,
    title: "Fast Delivery",
    desc: "Agile sprints with weekly demos and predictable releases.",
  },
  {
    icon: Cpu,
    title: "Modern Stack",
    desc: "React, TypeScript, Node, edge platforms and best-in-class tooling.",
  },
  {
    icon: Headphones,
    title: "Premium Support",
    desc: "Dedicated specialists in your Slack — not a ticket queue.",
  },
  {
    icon: Rocket,
    title: "Outcome Driven",
    desc: "We optimise for the business metric, not the deliverable.",
  },
];

export const stats = [
  { value: 320, suffix: "+", label: "Projects Completed" },
  { value: 180, suffix: "+", label: "Happy Clients" },
  { value: 42, suffix: "", label: "Team Members" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

export const processSteps = [
  { title: "Discovery", desc: "Workshops, audits, and clear KPIs." },
  { title: "Planning", desc: "Roadmap, architecture, scope lock." },
  { title: "Design", desc: "Identity, UX flows, polished UI." },
  { title: "Development", desc: "Clean, tested, scalable code." },
  { title: "Testing", desc: "QA, performance, security checks." },
  { title: "Launch", desc: "Deploy, monitor, iterate, grow." },
];

export const testimonials = [
  {
    name: "Layla Mansour",
    role: "CEO, Northwind Retail",
    quote:
      "Qandil rebuilt our storefront and our revenue jumped 47% in the first quarter. Pure craft.",
  },
  {
    name: "Daniel Okafor",
    role: "Founder, Helix Labs",
    quote: "The team feels like an extension of ours. Design, code, marketing — all top tier.",
  },
  {
    name: "Sophia Reyes",
    role: "CMO, Lumina Beauty",
    quote:
      "Our campaigns finally feel premium. ROAS is up, and customers compliment the brand daily.",
  },
  {
    name: "Yusuf Al-Hashimi",
    role: "CTO, Atlas Mobility",
    quote: "Shipped our mobile app in 12 weeks with zero compromises. Genuinely impressive.",
  },
  {
    name: "Emily Chen",
    role: "Product Lead, Vela",
    quote:
      "Strategic, sharp, and obsessed with quality. They raise the bar for every project they touch.",
  },
];

export const partners = [
  "Northwind",
  "Helix Labs",
  "Lumina",
  "Atlas",
  "Vela",
  "Orbital",
  "Nimbus",
  "Quanta",
  "Solace",
  "Pulse",
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Figma",
  "AWS",
  "Vercel",
  "Stripe",
  "Shopify",
  "Webflow",
  "PostgreSQL",
];

export const team = [
  { name: "Omar Khalil", role: "Founder & CEO" },
  { name: "Hala Saeed", role: "Creative Director" },
  { name: "Rami Nasser", role: "Engineering Lead" },
  { name: "Nora Ahmed", role: "Marketing Director" },
  { name: "Karim Adel", role: "Product Designer" },
  { name: "Lina Farah", role: "Brand Strategist" },
];

export const journey = [
  {
    year: "2015",
    title: "Founded in Dubai",
    desc: "Qandil opens its doors with three founders and one big idea.",
  },
  {
    year: "2017",
    title: "First 50 Clients",
    desc: "Crossed our first major milestone, hiring designers and engineers.",
  },
  { year: "2019", title: "Marketing Division", desc: "Launched our performance marketing arm." },
  {
    year: "2021",
    title: "Global Expansion",
    desc: "Clients across MENA, Europe, and North America.",
  },
  {
    year: "2023",
    title: "Award Winning",
    desc: "Recognised by Awwwards, CSS Design Awards, and Behance.",
  },
  { year: "2025", title: "AI Practice", desc: "Launched a dedicated AI engineering studio." },
];

export const values = [
  { title: "Craft", desc: "Pixel-perfect, beautifully engineered work — every time." },
  { title: "Honesty", desc: "Straight talk, clear scope, transparent pricing." },
  { title: "Partnership", desc: "Your goals are ours. We win when you win." },
  { title: "Curiosity", desc: "We learn relentlessly so your work stays ahead." },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects ship in 6–14 weeks depending on scope. We share a clear timeline after discovery.",
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely. About 40% of our clients are funded startups, from seed to Series B.",
  },
  {
    q: "Can you handle both design and development?",
    a: "Yes — we're a full-stack studio covering brand, design, engineering, and marketing.",
  },
  {
    q: "What does engagement look like?",
    a: "We work in weekly sprints with demos, a shared Slack channel, and a dedicated project lead.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, retainer plans cover maintenance, growth experiments, and continuous improvement.",
  },
];

export type Project = {
  id: string;
  title: string;
  category: "Web Development" | "E-commerce" | "Marketing" | "Branding" | "Mobile Apps";
  description: string;
  longDescription: string;
  image: string;
  link: string;
  tech: string[];
  features: string[];
};

// export const projects: Project[] = [
//   {
//     id: "northwind",
//     title: "Northwind Retail",
//     category: "E-commerce",
//     description: "A premium D2C storefront with headless commerce and luxury motion design.",
//     longDescription:
//       "We rebuilt Northwind Retail's entire commerce stack on a headless architecture, redesigning the brand and storefront from the ground up. The new experience drove a 47% revenue increase and a 31% lift in conversion rate within one quarter.",
//     image: "/images/project-1.webp",
//     link: "https://your-project-link.com",
//     tech: ["Next.js", "Shopify", "TypeScript", "Stripe"],
//     features: ["Headless commerce", "Custom checkout", "Personalisation engine", "Editorial CMS"],
//   },
//   {
//     id: "helix",
//     title: "Helix Labs Platform",
//     category: "Web Development",
//     description: "An enterprise SaaS dashboard for biotech research teams.",
//     longDescription:
//       "A complex data platform with real-time collaboration, custom visualisations, and enterprise-grade authentication for a leading biotech.",
//     image: "/images/project-2.webp",
//     tech: ["React", "Node.js", "PostgreSQL", "AWS"],
//     features: ["Realtime sync", "Role-based access", "Advanced analytics", "Audit logs"],
//   },
//   {
//     id: "lumina",
//     title: "Lumina Beauty Launch",
//     category: "Marketing",
//     description: "Omnichannel launch campaign that hit 4.2x ROAS in week one.",
//     longDescription:
//       "A full-funnel launch including content, paid social, influencer activation, and lifecycle email. The campaign hit 4.2x ROAS in the first week and built a 60k strong audience.",
//     image: "/images/project-3.webp",
//     tech: ["Meta Ads", "TikTok", "Klaviyo", "GA4"],
//     features: ["Creative strategy", "Influencer activation", "Lifecycle email", "Attribution"],
//   },
//   {
//     id: "atlas",
//     title: "Atlas Mobility App",
//     category: "Mobile Apps",
//     description: "Cross-platform mobility super-app with payments and live tracking.",
//     longDescription:
//       "A polished mobility app built in 12 weeks, featuring live tracking, in-app payments, ride history, and a beautifully crafted onboarding flow.",
//     image: "/images/project-4.webp",
//     tech: ["React Native", "Expo", "Mapbox", "Stripe"],
//     features: ["Live tracking", "In-app payments", "Push notifications", "Offline mode"],
//   },
//   {
//     id: "vela",
//     title: "Vela Brand System",
//     category: "Branding",
//     description: "Complete identity, motion system, and design tokens for an AI startup.",
//     longDescription:
//       "Identity, voice, motion principles, and a full design token system that scales across product, web, and marketing.",
//     image: "/images/project-5.webp",
//     tech: ["Figma", "After Effects", "Tokens Studio"],
//     features: ["Logo system", "Motion language", "Brand guidelines", "Design tokens"],
//   },
//   {
//     id: "orbital",
//     title: "Orbital Analytics",
//     category: "Web Development",
//     description: "Marketing site and product dashboard for a Series B analytics company.",
//     longDescription:
//       "A polished marketing site paired with a customer dashboard that turned demo requests into a 28% pipeline lift.",
//     image: "/images/project-6.webp",
//     tech: ["Next.js", "Tailwind", "Sanity", "Vercel"],
//     features: ["Editorial CMS", "Interactive demos", "Marketing automation"],
//   },
//   {
//     id: "nimbus",
//     title: "Nimbus Storefront",
//     category: "E-commerce",
//     description: "Subscription commerce experience with delightful micro-interactions.",
//     longDescription:
//       "A refined subscription storefront with a customisation flow that doubled average order value.",
//     image: "/images/project-7.jpg",
//     tech: ["Shopify Hydrogen", "Remix", "Stripe"],
//     features: ["Subscription engine", "Product customizer", "Customer portal"],
//   },
//   {
//     id: "pulse",
//     title: "Pulse Social Campaign",
//     category: "Marketing",
//     description: "Cross-platform social campaign hitting 12M organic impressions.",
//     longDescription:
//       "A bold, brand-led social campaign that broke through with 12M organic impressions and a 6% engagement rate across platforms.",
//     image: "/images/project-1.webp",
//     tech: ["Instagram", "TikTok", "YouTube", "Notion"],
//     features: ["Content strategy", "Creator partnerships", "Reporting dashboard"],
//   },
//   {
//     id: "solace",
//     title: "Solace Wellness App",
//     category: "Mobile Apps",
//     description: "A calming wellness experience with audio, journaling, and rituals.",
//     longDescription:
//       "A premium iOS & Android wellness app with audio rituals, mood tracking, and a journaling experience designed for daily delight.",
//     image: "/images/project-2.webp",
//     tech: ["Flutter", "Firebase", "RevenueCat"],
//     features: ["Audio rituals", "Mood tracking", "Subscription billing"],
//   },
// ];
export const projects: Project[] = [
  {
    id: "northwind",
    title: "Reno",
    category: "E-commerce",
    description:
      "A modern fashion e-commerce brand showcasing stylish clothing collections with a clean, elegant, and user-friendly shopping experience.",
    longDescription:
      "A contemporary fashion e-commerce website designed for Reno, focused on presenting clothing collections in a visually appealing and conversion-driven experience. The platform highlights product categories, new arrivals, and seasonal collections with a strong emphasis on branding, aesthetics, and smooth shopping flow. The UI is optimized for both mobile and desktop users to enhance engagement and boost online sales.",
    image: "/images/project-1.webp",
    link: "https://reno-eg.com/",
    tech: ["Next.js", "Shopify", "TypeScript", "Stripe"],
    features: ["Headless commerce", "Custom checkout", "Personalisation engine", "Editorial CMS"],
  },

  {
    id: "helix",
    title: "elitesmile Clinics",
    category: "Web Development",
    description:
      "A modern dental clinic website showcasing premium cosmetic dentistry services with a clean and patient-friendly experience.",

    longDescription:
      "A fully responsive medical website designed for Elite Smile Clinics, focusing on cosmetic and restorative dentistry. The platform highlights treatments, doctors, and patient journeys with a strong emphasis on trust, clarity, and premium healthcare presentation. The design is optimized for conversions and patient engagement.",
    image: "/images/project-2.webp",
    link: "https://elitesmile-clinics.com/",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    features: ["Realtime sync", "Role-based access", "Advanced analytics", "Audit logs"],
  },

  {
    id: "lumina",
    title: "shiakaalibaba",
    category: "Marketing",
    description:
      "An e-commerce fashion platform offering a wide range of stylish and affordable clothing products.",

    longDescription:
      "A full-featured e-commerce website for fashion retail, designed to showcase clothing collections with a strong focus on usability and conversion. It includes product listings, categories, and a smooth shopping experience tailored for fast browsing and easy purchasing.",
    image: "/images/project-3.webp",
    link: "https://shiakaalibaba.com/",
    tech: ["Meta Ads", "TikTok", "Klaviyo", "GA4"],
    features: ["Creative strategy", "Influencer activation", "Lifecycle email", "Attribution"],
  },

  {
    id: "atlas",
    title: "coachwm",
    category: "Mobile Apps",
    description:
      "A professional coaching and fitness platform focused on personal training and performance improvement programs.",

    longDescription:
      "A modern coaching website built to present fitness programs, coaching services, and transformation plans. The platform emphasizes motivation, clarity, and structured training offerings to help users achieve their health and fitness goals effectively.",
    image: "/images/project-4.webp",
    link: "https://coachwm.com/",
    tech: ["React Native", "Expo", "Mapbox", "Stripe"],
    features: ["Live tracking", "In-app payments", "Push notifications", "Offline mode"],
  },

  {
    id: "vela",
    title: "deltexco",
    category: "Branding",
    description:
      "A corporate website for a textile and manufacturing company showcasing products and industrial solutions.",

    longDescription:
      "A large-scale online marketplace designed to showcase diverse product categories. The platform focuses on fast browsing, product organization, and a user-friendly shopping experience optimized for both desktop and mobile users.",
    image: "/images/project-5.webp",
    link: "https://deltexco.com/",
    tech: ["Figma", "After Effects", "Tokens Studio"],
    features: ["Logo system", "Motion language", "Brand guidelines", "Design tokens"],
  },

  {
    id: "orbital",
    title: "Albazar",
    category: "Web Development",
    description:
      "A multi-category e-commerce platform offering a wide range of consumer products with a seamless shopping experience.",

    longDescription:
      "A large-scale online marketplace designed to showcase diverse product categories. The platform focuses on fast browsing, product organization, and a user-friendly shopping experience optimized for both desktop and mobile users.",
    image: "/images/project-6.webp",
    link: "https://albazaronline.com/",
    tech: ["Next.js", "Tailwind", "Sanity", "Vercel"],
    features: ["Editorial CMS", "Interactive demos", "Marketing automation"],
  },
];
export const projectCategories = [
  "All",
  "Web Development",
  "E-commerce",
  "Marketing",
  "Branding",
  "Mobile Apps",
] as const;
