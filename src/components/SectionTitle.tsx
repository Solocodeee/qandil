import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({ eyebrow, title, subtitle, align = "center", className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn("max-w-3xl mb-14", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold uppercase tracking-[0.25em] text-brand-pink mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-magenta animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold leading-tight">
        {title.split("|").map((part, i) =>
          i % 2 === 1 ? (
            <span key={i} className="text-gradient">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
