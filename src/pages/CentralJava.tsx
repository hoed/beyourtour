import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Palette, Music, Heart } from "lucide-react";
import heroCentralJava from "@/assets/hero-central-java.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const CentralJava = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Borobudur Temple",
      description: "Explore the world's largest Buddhist temple, a UNESCO World Heritage masterpiece dating back to the 9th century.",
    },
    {
      icon: Palette,
      title: "Batik Traditions",
      description: "Discover the ancient art of batik making in Yogyakarta and Solo, with workshops and museum visits.",
    },
    {
      icon: Music,
      title: "Javanese Culture",
      description: "Experience traditional gamelan music, classical dance performances, and royal palace ceremonies.",
    },
    {
      icon: Heart,
      title: "Prambanan Complex",
      description: "Visit the magnificent Hindu temple compound with its towering stone structures and intricate carvings.",
    },
  ];

  return (
    <div>
      <Hero
        image={heroCentralJava}
        title="Central Java Heritage"
        subtitle="Ancient temples and living traditions"
        height="medium"
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img
                src={gallery4}
                alt="Central Java temples"
                className="rounded-lg card-shadow w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src={gallery3}
                alt="Central Java culture"
                className="rounded-lg card-shadow w-full h-64 object-cover mt-8"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                The Cultural Heart of Java
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Central Java is where Indonesia's soul comes alive through ancient monuments, artistic traditions, 
                and spiritual heritage. Home to Yogyakarta, the cultural capital, and the historic city of Solo, 
                this region preserves centuries-old customs while embracing modernity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Walk among the stone stupas of Borobudur at sunrise, witness traditional wayang puppet shows, 
                learn the delicate art of batik, and explore royal palaces where Javanese sultans still reign. 
                Central Java offers a deep dive into Indonesia's rich cultural tapestry.
              </p>
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">
                  Plan Your Central Java Trip
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Central Java Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in the art, architecture, and traditions that define Central Java.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="bg-card rounded-xl p-6 card-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold font-heading mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Popular Central Java Tours
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated experiences to explore Central Java's temples, traditions, and cultural treasures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-xl font-bold font-heading mb-2">Yogyakarta Heritage</h3>
              <p className="text-muted-foreground mb-4">3 Days / 2 Nights</p>
              <p className="text-sm text-muted-foreground mb-4">
                Explore Borobudur, Prambanan, sultan's palace, and batik workshops in Yogyakarta.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/trips">View Details</Link>
              </Button>
            </div>
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-xl font-bold font-heading mb-2">Temple Tour Special</h3>
              <p className="text-muted-foreground mb-4">2 Days / 1 Night</p>
              <p className="text-sm text-muted-foreground mb-4">
                Focused temple tour covering UNESCO World Heritage sites with sunrise experiences.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/trips">View Details</Link>
              </Button>
            </div>
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-xl font-bold font-heading mb-2">Cultural Immersion</h3>
              <p className="text-muted-foreground mb-4">4 Days / 3 Nights</p>
              <p className="text-sm text-muted-foreground mb-4">
                In-depth cultural journey including arts, crafts, traditional performances, and village visits.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/trips">View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Experience Central Java's Rich Heritage
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Let us create a cultural journey tailored to your interests. Contact our team for personalized itineraries.
          </p>
          <Button asChild size="lg" variant="accent">
            <Link to="/contact">
              Send Enquiry
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CentralJava;
