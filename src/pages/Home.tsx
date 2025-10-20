import { Link } from "react-router-dom";
import { ArrowRight, Compass, Users, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import ServiceCard from "@/components/ServiceCard";
import heroHome from "@/assets/hero-home.jpg";
import heroEastJava from "@/assets/hero-east-java.jpg";
import heroCentralJava from "@/assets/hero-central-java.jpg";
import heroWestJava from "@/assets/hero-west-java.jpg";

const Home = () => {
  const destinations = [
    {
      title: "East Java",
      description: "Experience the raw beauty of volcanic landscapes, from the dramatic Mount Bromo sunrise to the ethereal blue flames of Ijen crater.",
      image: heroEastJava,
      link: "/destinations/east-java",
    },
    {
      title: "Central Java",
      description: "Discover ancient temples and rich cultural heritage, including the magnificent Borobudur and Prambanan temple complexes.",
      image: heroCentralJava,
      link: "/destinations/central-java",
    },
    {
      title: "West Java",
      description: "Explore lush tea plantations, volcanic hot springs, and traditional villages nestled in the scenic highlands.",
      image: heroWestJava,
      link: "/destinations/west-java",
    },
  ];

  const services = [
    {
      icon: Compass,
      title: "Guided Tours",
      description: "Expert local guides who bring Java's history and culture to life with authentic storytelling.",
    },
    {
      icon: Users,
      title: "Custom Itineraries",
      description: "Personalized travel experiences tailored to your interests, pace, and preferences.",
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      description: "Professional service with comprehensive safety measures and 24/7 support throughout your journey.",
    },
    {
      icon: Heart,
      title: "Cultural Immersion",
      description: "Deep connections with local communities for authentic Indonesian experiences.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        image={heroHome}
        title="Discover the Heart of Java"
        subtitle="Unforgettable adventures across Indonesia's most captivating island"
        height="large"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild size="lg" variant="accent">
            <Link to="/trips">
              Explore Our Tours
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-foreground backdrop-blur-sm">
            <Link to="/contact">Plan Your Trip</Link>
          </Button>
        </div>
      </Hero>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Your Gateway to Java's Hidden Treasures
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our tour packages offer a variety of experiences, from cultural explorations to thrilling adventures. 
              Whether you're seeking ancient temples, volcanic landscapes, or immersive local traditions, 
              Be Your Tour creates journeys that connect you with the authentic soul of Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Explore Java's Regions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each region of Java offers unique landscapes, cultures, and adventures waiting to be discovered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <DestinationCard key={dest.title} {...dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Why Choose Be Your Tour</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to creating memorable experiences with professional service and local expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Let us craft your perfect Java experience. From planning to execution, we're with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-foreground">
              <Link to="/trips">View All Tours</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
