import Hero from "@/components/Hero";
import { MapIcon, Check } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import tourPackageImage from "@/assets/service-tour-packages.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TourPackages = () => {
  const features = [
    "Carefully curated itineraries covering Java's most captivating destinations",
    "Complete package including accommodation, meals, and activities",
    "Cultural explorations of ancient temples and traditional villages",
    "Adventure experiences from volcano trekking to water activities",
    "Flexible customization to match your preferences and budget",
    "Professional tour guides with deep local knowledge",
    "All transportation and logistics handled",
    "Small group tours for personalized experiences"
  ];

  return (
    <div>
      <Hero
        image={heroHome}
        title="Tour Packages"
        subtitle="Discover Java through carefully crafted experiences"
        height="medium"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <MapIcon className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-6">
              Complete Java Tour Experiences
            </h2>
            
            <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
              Our tour packages offer a variety of experiences, from cultural explorations to thrilling adventures. 
              Each package is designed to showcase the best of Java while ensuring your comfort and creating 
              unforgettable memories.
            </p>

            <div className="mb-12 rounded-xl overflow-hidden card-shadow">
              <img 
                src={tourPackageImage} 
                alt="Tour package essentials - passport, map, tickets"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="bg-card rounded-xl p-8 card-shadow mb-12">
              <h3 className="text-2xl font-semibold font-heading mb-6">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-8">
              <h3 className="text-2xl font-semibold font-heading mb-4">Popular Destinations</h3>
              <p className="text-muted-foreground mb-6">
                Our tour packages cover all three regions of Java, including iconic destinations like Mount Bromo, 
                Borobudur Temple, Prambanan Temple, Ijen Crater, Kawah Putih, and many more hidden gems waiting 
                to be discovered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="accent">
                  <Link to="/trips">Browse All Packages</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Request Custom Package</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourPackages;
