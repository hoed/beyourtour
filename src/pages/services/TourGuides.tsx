import Hero from "@/components/Hero";
import { Users, Check } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import tourGuideImage from "@/assets/service-tour-guide.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TourGuides = () => {
  const guideTypes = [
    {
      title: "Cultural Guides",
      description: "Experts in Indonesian history, art, and traditions who bring ancient temples and cultural sites to life"
    },
    {
      title: "Adventure Guides",
      description: "Experienced mountaineers and outdoor specialists for volcano treks and nature expeditions"
    },
    {
      title: "City Guides",
      description: "Urban experts who know the best local spots, restaurants, and hidden corners of Java's cities"
    },
    {
      title: "Photography Guides",
      description: "Guides who understand composition and lighting, helping you capture the perfect Java moments"
    }
  ];

  return (
    <div>
      <Hero
        image={heroHome}
        title="Tour Guides Service"
        subtitle="Expert local guides for authentic experiences"
        height="medium"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-6">
              Professional Local Tour Guides
            </h2>
            
            <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
              Our professional tour guides are more than just information providers—they're storytellers, 
              cultural ambassadors, and your companions on the journey through Java's wonders. Each guide 
              is carefully selected, trained, and certified to provide exceptional experiences.
            </p>

            <div className="mb-12 rounded-xl overflow-hidden card-shadow">
              <img 
                src={tourGuideImage} 
                alt="Professional tour guide with tourists in Java"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {guideTypes.map((type) => (
                <div key={type.title} className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-smooth">
                  <h3 className="text-xl font-semibold font-heading mb-3">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-muted/30 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold font-heading mb-6">What Sets Our Guides Apart</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Certified and licensed by Indonesian tourism authority</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Fluent in English and other languages</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">First aid and emergency response trained</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Deep knowledge of local culture and history</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Professional communication and hospitality skills</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Regularly updated training on tourism best practices</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-semibold font-heading mb-4">Hire a Guide for Your Journey</h3>
              <p className="text-muted-foreground mb-6">
                Whether you're exploring temples, hiking volcanoes, or discovering local villages, our guides 
                ensure you get the most out of your Java experience. We match you with guides who specialize 
                in your areas of interest and can accommodate your preferred language and pace.
              </p>
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">Request a Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourGuides;
