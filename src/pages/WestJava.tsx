import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { ArrowRight, Trees, Droplets, Coffee, Camera } from "lucide-react";
import heroWestJava from "@/assets/hero-west-java.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const WestJava = () => {
  const highlights = [
    {
      icon: Trees,
      title: "Tea Plantations",
      description: "Wander through emerald green tea estates in the cool highlands around Bandung and Puncak.",
    },
    {
      icon: Droplets,
      title: "Volcanic Hot Springs",
      description: "Relax in natural hot springs at Ciater and Sari Ater, heated by volcanic geothermal activity.",
    },
    {
      icon: Coffee,
      title: "Coffee Tours",
      description: "Visit traditional coffee plantations and learn about Indonesian coffee production and tasting.",
    },
    {
      icon: Camera,
      title: "Tangkuban Perahu",
      description: "Explore the active volcano crater with its sulfuric lakes and otherworldly landscape.",
    },
  ];

  return (
    <div>
      <Hero
        image={heroWestJava}
        title="West Java Escapes"
        subtitle="Highland retreats and natural wonders"
        height="medium"
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Nature's Highland Paradise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                West Java captivates with its lush mountain landscapes, cool climate, and agricultural beauty. 
                From Bandung's fashionable highland city to the pristine tea plantations that carpet rolling hills, 
                this region offers a refreshing escape into nature's embrace.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Experience the therapeutic warmth of volcanic hot springs, explore active craters releasing sulfuric steam, 
                trek through coffee and tea estates, and discover why West Java has been Java's favorite mountain retreat 
                for generations. Perfect for nature lovers and those seeking tranquil beauty.
              </p>
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">
                  Plan Your West Java Trip
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={gallery1}
                alt="West Java nature"
                className="rounded-lg card-shadow w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src={gallery2}
                alt="West Java highlands"
                className="rounded-lg card-shadow w-full h-64 object-cover mt-8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              West Java Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the natural beauty and agricultural wonders of West Java's highlands.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="bg-card rounded-xl p-6 card-shadow">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-accent" />
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
              Popular West Java Tours
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore West Java's scenic highlands, plantations, and volcanic wonders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-xl font-bold font-heading mb-2">Bandung Highlands</h3>
              <p className="text-muted-foreground mb-4">2 Days / 1 Night</p>
              <p className="text-sm text-muted-foreground mb-4">
                Explore Tangkuban Perahu volcano, Ciater hot springs, and scenic tea plantations.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/trips">View Details</Link>
              </Button>
            </div>
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-xl font-bold font-heading mb-2">Tea & Coffee Trail</h3>
              <p className="text-muted-foreground mb-4">3 Days / 2 Nights</p>
              <p className="text-sm text-muted-foreground mb-4">
                Visit working plantations, learn about production, and enjoy scenic highland views.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/trips">View Details</Link>
              </Button>
            </div>
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-xl font-bold font-heading mb-2">Nature Retreat</h3>
              <p className="text-muted-foreground mb-4">4 Days / 3 Nights</p>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive nature tour with waterfalls, hot springs, plantations, and volcano visits.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/trips">View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent to-primary text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Discover West Java's Natural Beauty
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Ready to experience the highlands? Contact us to plan your perfect West Java escape.
          </p>
          <Button asChild size="lg" variant="default">
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

export default WestJava;
