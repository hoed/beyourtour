import Hero from "@/components/Hero";
import { Car, Check } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CarBusRental = () => {
  const vehicles = [
    {
      type: "Private Cars",
      capacity: "4-6 passengers",
      features: ["Air-conditioned", "Professional driver", "Comfortable seating", "Luggage space"]
    },
    {
      type: "Mini Bus",
      capacity: "10-15 passengers",
      features: ["Air-conditioned", "Experienced driver", "Reclining seats", "Entertainment system"]
    },
    {
      type: "Large Bus",
      capacity: "25-45 passengers",
      features: ["Air-conditioned", "Professional driver", "Spacious interior", "Audio system"]
    }
  ];

  return (
    <div>
      <Hero
        image={heroHome}
        title="Car & Bus Rental"
        subtitle="Comfortable transportation across Java"
        height="medium"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Car className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-6">
              Professional Transportation Services
            </h2>
            
            <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
              Travel in comfort and style with our fleet of well-maintained vehicles. From private cars for 
              intimate groups to spacious buses for large parties, we provide reliable transportation with 
              professional drivers who know Java's roads intimately.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {vehicles.map((vehicle) => (
                <div key={vehicle.type} className="bg-card rounded-xl p-6 card-shadow">
                  <h3 className="text-xl font-semibold font-heading mb-2">{vehicle.type}</h3>
                  <p className="text-primary font-medium mb-4">{vehicle.capacity}</p>
                  <div className="space-y-2">
                    {vehicle.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-muted/30 rounded-xl p-8">
              <h3 className="text-2xl font-semibold font-heading mb-4">Why Choose Our Rental Service</h3>
              <ul className="space-y-3 mb-6 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Professional drivers with extensive knowledge of Java's routes and tourist destinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Well-maintained, clean, and air-conditioned vehicles for maximum comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Flexible rental options: daily, multi-day, or custom tour packages</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Competitive pricing with transparent rates and no hidden fees</span>
                </li>
              </ul>
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarBusRental;
