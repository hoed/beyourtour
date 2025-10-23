import Hero from "@/components/Hero";
import { Landmark, Check } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import tourismVillageImage from "@/assets/service-tourism-village.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TourismVillage = () => {
  const services = [
    "Community tourism strategy development",
    "Infrastructure planning and improvement",
    "Local guide training and certification",
    "Sustainable tourism practices implementation",
    "Marketing and promotion strategies",
    "Product development and diversification",
    "Quality standards establishment",
    "Partnership building with tour operators"
  ];

  return (
    <div>
      <Hero
        image={heroHome}
        title="Tourism Village Development"
        subtitle="Building sustainable tourism in rural communities"
        height="medium"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Landmark className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-6">
              Empowering Communities Through Tourism
            </h2>
            
            <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
              We provide consulting and support for developing sustainable tourism in rural communities. Our 
              approach helps villages create authentic tourism experiences while preserving cultural heritage, 
              protecting the environment, and supporting local economies.
            </p>

            <div className="mb-12 rounded-xl overflow-hidden card-shadow">
              <img 
                src={tourismVillageImage} 
                alt="Traditional Indonesian tourism village"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="bg-card rounded-xl p-8 card-shadow mb-12">
              <h3 className="text-2xl font-semibold font-heading mb-6">Our Comprehensive Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold font-heading mb-3">Cultural Preservation</h3>
                <p className="text-muted-foreground text-sm">
                  Maintain and showcase traditional practices, crafts, and customs while generating income.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold font-heading mb-3">Economic Growth</h3>
                <p className="text-muted-foreground text-sm">
                  Create sustainable livelihoods and business opportunities for local residents.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold font-heading mb-3">Environmental Care</h3>
                <p className="text-muted-foreground text-sm">
                  Implement eco-friendly practices that protect natural resources for future generations.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-8">
              <h3 className="text-2xl font-semibold font-heading mb-4">Our Approach</h3>
              <p className="text-muted-foreground mb-4">
                We work closely with village communities to understand their unique assets and challenges. Our 
                collaborative approach ensures that tourism development aligns with community values and creates 
                genuine benefits for local residents.
              </p>
              <p className="text-muted-foreground mb-6">
                From initial assessment to implementation and ongoing support, we guide villages through every 
                step of their tourism development journey.
              </p>
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">Start Your Village's Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourismVillage;
