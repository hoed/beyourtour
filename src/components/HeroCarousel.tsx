import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface HeroCarouselProps {
  images: string[];
  title: string;
  subtitle?: string;
  height?: "small" | "medium" | "large";
  children?: ReactNode;
  overlay?: boolean;
}

const HeroCarousel = ({ 
  images, 
  title, 
  subtitle, 
  height = "large", 
  children, 
  overlay = true 
}: HeroCarouselProps) => {
  const heightClasses = {
    small: "h-[40vh] min-h-[250px]",
    medium: "h-[60vh] min-h-[350px]",
    large: "h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]",
  };

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <section className={cn("relative w-full overflow-hidden", heightClasses[height])}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0 h-full">
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`${title} - slide ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {overlay && (
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
      </Carousel>

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
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white mb-3 md:mb-4 drop-shadow-2xl animate-fade-in px-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 md:mb-8 max-w-3xl mx-auto drop-shadow-lg animate-fade-in font-light px-4">
              {subtitle}
            </p>
          )}
          {children && <div className="animate-fade-in">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
