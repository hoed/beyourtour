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
    <section className={cn("relative w-full overflow-hidden", heightClasses[height])}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        )}
      </div>

      {/* Burning Paper Edge Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(25, 95%, 53%)', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: 'hsl(18, 100%, 50%)', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(0, 0%, 100%)', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <path 
            d="M0,60 C150,80 200,40 300,50 C400,60 450,30 550,45 C650,60 700,35 800,50 C900,65 950,45 1050,55 C1150,65 1180,50 1200,60 L1200,120 L0,120 Z"
            fill="url(#orangeGradient)"
            opacity="0.7"
          />
          <path 
            d="M0,75 C100,90 180,65 280,75 C380,85 430,60 530,70 C630,80 680,65 780,75 C880,85 930,70 1030,80 C1130,90 1170,75 1200,80 L1200,120 L0,120 Z"
            fill="hsl(0, 0%, 100%)"
          />
        </svg>
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
