import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { 
  FileText, Car, Users, Building2, Landmark, MapIcon
} from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: FileText,
      title: "Travel Documents",
      description: "Comprehensive assistance with visa applications, travel permits, and all necessary documentation for your Java adventure. We handle the paperwork so you can focus on your journey.",
    },
    {
      icon: Car,
      title: "Car/Bus Rental",
      description: "Comfortable, air-conditioned vehicles with professional drivers. From private cars for intimate groups to spacious buses for large parties, we provide reliable transportation across Java.",
    },
    {
      icon: Users,
      title: "Tour Guide Services",
      description: "Expert local guides fluent in English with deep knowledge of Java's history, culture, and hidden gems. Our passionate guides bring every destination to life with authentic storytelling.",
    },
    {
      icon: Building2,
      title: "MICE Services",
      description: "Professional event management for Meetings, Incentives, Conferences, and Exhibitions. We organize corporate events with venue booking, logistics, team building activities, and cultural programs.",
    },
    {
      icon: Landmark,
      title: "Tourism Village Development",
      description: "Consulting and support for developing sustainable tourism in rural communities. We help villages create authentic tourism experiences while preserving cultural heritage and supporting local economies.",
    },
    {
      icon: MapIcon,
      title: "Tour Packages",
      description: "Carefully curated tour packages covering Java's most captivating destinations. From cultural explorations to thrilling adventures, our packages offer complete experiences with accommodation, meals, and activities.",
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

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Our Tourism Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Be Your Tour is a provider of tourism services. We offer several interesting places or tourist 
              attractions throughout the archipelago. Our tour packages offer a variety of experiences, 
              from cultural explorations to thrilling adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              Why Choose Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-3">🌟 Professional Excellence</h3>
                <p className="text-muted-foreground">
                  Years of experience delivering high-quality tourism services with attention to every detail and customer satisfaction.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-3">🤝 Trusted Partner</h3>
                <p className="text-muted-foreground">
                  Thousands of satisfied clients trust us for their Java adventures, from individual travelers to corporate groups.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-3">🎯 Customized Solutions</h3>
                <p className="text-muted-foreground">
                  Every service can be tailored to your specific needs, budget, and preferences for a truly personalized experience.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-3">💼 Complete Support</h3>
                <p className="text-muted-foreground">
                  From initial planning to final farewell, we provide comprehensive support including 24/7 assistance during your tour.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-3">🌍 Local Expertise</h3>
                <p className="text-muted-foreground">
                  Our team consists of locals who know Java intimately, ensuring authentic experiences and insider knowledge.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-3">✅ Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden fees or surprises. We provide clear, upfront pricing with detailed breakdowns of all services included.
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
