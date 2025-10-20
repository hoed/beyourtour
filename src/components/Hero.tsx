import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  height?: "small" | "medium" | "large";
  children?: ReactNode;
  overlay?: boolean;
}

const Hero = ({ image, title, subtitle, height = "large", children, overlay = true }: HeroProps) => {
  const heightClasses = {
    small: "h-[40vh] min-h-[300px]",
    medium: "h-[60vh] min-h-[400px]",
    large: "h-[85vh] min-h-[600px]",
  };

  return (
    <section className={cn("relative w-full", heightClasses[height])}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white mb-4 drop-shadow-2xl animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-lg animate-fade-in font-light">
              {subtitle}
            </p>
          )}
          {children && <div className="animate-fade-in">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
