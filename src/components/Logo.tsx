import logoSrc from "@/assets/logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "mark";
}

const sizes = { sm: "h-8", md: "h-10", lg: "h-14", xl: "h-20" };

export function Logo({ className, showText = false, size = "md", variant = "default" }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-brand blur-xl opacity-50 animate-pulse-glow" />
        <img
          src={logoSrc}
          alt="Qandil logo"
          className={cn(
            "relative object-contain drop-shadow-[0_4px_24px_rgba(218,51,208,0.45)]",
            sizes[size],
          )}
        />
      </div>
      {showText && variant === "default" && (
        <div className="leading-tight">
          <div className="text-lg font-bold tracking-wide text-foreground">QANDIL</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-brand-magenta">
            Shine Online
          </div>
        </div>
      )}
    </div>
  );
}
