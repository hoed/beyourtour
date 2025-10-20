import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { 
  Compass, Users, Shield, Heart, Camera, Map, 
  Utensils, Hotel, Car, Plane, Clock, Award 
} from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const coreServices = [
    {
      icon: Compass,
      title: "Guided Tours",
      description: "Expert local guides with deep knowledge of Java's history, culture, and hidden gems. Our guides speak English and are passionate about sharing their homeland.",
    },
    {
      icon: Users,
      title: "Custom Itineraries",
      description: "Personalized travel experiences designed around your interests, budget, and schedule. We create journeys that match your unique travel style.",
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      description: "Professional service with comprehensive insurance, safety protocols, and 24/7 support. Your safety and comfort are our top priorities.",
    },
    {
      icon: Heart,
      title: "Cultural Immersion",
      description: "Authentic experiences connecting you with local communities, traditional crafts, and Indonesian hospitality beyond typical tourist paths.",
    },
  ];

  const additionalServices = [
    {
      icon: Hotel,
      title: "Accommodation Booking",
      description: "From budget homestays to luxury resorts, we arrange lodging that suits your preferences and budget.",
    },
    {
      icon: Car,
      title: "Private Transportation",
      description: "Comfortable air-conditioned vehicles with experienced drivers for all your travel needs.",
    },
    {
      icon: Utensils,
      title: "Culinary Experiences",
      description: "Food tours, cooking classes, and restaurant reservations to explore Indonesia's diverse cuisine.",
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Specialized tours for photographers to capture Java's landscapes, culture, and wildlife at optimal times.",
    },
    {
      icon: Map,
      title: "Multi-Day Expeditions",
      description: "Extended adventures combining multiple destinations across Java with seamless logistics.",
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Reliable pick-up and drop-off services from all major airports in Java.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Tours that adapt to your pace, with options for early starts, leisurely exploration, or packed itineraries.",
    },
    {
      icon: Award,
      title: "Special Occasions",
      description: "Customized experiences for honeymoons, anniversaries, family reunions, or group celebrations.",
    },
  ];

  return (
    <div>
      <Hero
        image={heroHome}
        title="Our Services"
        subtitle="Comprehensive travel solutions for unforgettable Java experiences"
        height="medium"
      />

      {/* Core Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Why Choose Be Your Tour
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our tour packages offer a variety of experiences, from cultural explorations to thrilling adventures. 
              With years of expertise and a commitment to excellence, we ensure every journey exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {coreServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Complete Travel Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle every detail so you can focus on enjoying your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              Our Approach to Tourism
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Sustainable Tourism</h3>
                <p className="text-muted-foreground">
                  We support local communities and promote eco-friendly practices to preserve Java's natural and cultural heritage.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Local Partnerships</h3>
                <p className="text-muted-foreground">
                  We work directly with local guides, artisans, and businesses to ensure authentic experiences and community benefits.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Every aspect of our tours is carefully vetted for quality, safety, and authentic experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Ready to Plan Your Java Adventure?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Let's create a personalized itinerary that perfectly matches your travel dreams and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-foreground">
              <Link to="/trips">Browse Tours</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
