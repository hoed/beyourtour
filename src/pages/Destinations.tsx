import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import heroHome from "@/assets/hero-home.jpg";
import heroEastJava from "@/assets/hero-east-java.jpg";
import heroCentralJava from "@/assets/hero-central-java.jpg";
import heroWestJava from "@/assets/hero-west-java.jpg";

const Destinations = () => {
  const destinations = [
    {
      title: "East Java",
      description: "Home to the legendary Mount Bromo and Ijen crater with its mesmerizing blue flames. Experience sunrise over volcanic landscapes, explore traditional Tenggerese villages, and witness nature's raw power in this adventure paradise.",
      image: heroEastJava,
      link: "/destinations/east-java",
    },
    {
      title: "Central Java",
      description: "The cultural heart of Java, featuring UNESCO World Heritage sites Borobudur and Prambanan temples. Immerse yourself in ancient Javanese civilization, royal palaces, and vibrant batik traditions in Yogyakarta and Solo.",
      image: heroCentralJava,
      link: "/destinations/central-java",
    },
    {
      title: "West Java",
      description: "A region of stunning natural beauty with emerald tea plantations in Bandung's highlands, volcanic hot springs at Ciater, and the mystical Tangkuban Perahu volcano. Perfect for nature lovers and photography enthusiasts.",
      image: heroWestJava,
      link: "/destinations/west-java",
    },
  ];

  return (
    <div>
      <Hero
        image={heroHome}
        title="Java's Diverse Destinations"
        subtitle="From volcanic peaks to ancient temples, discover the wonders of each region"
        height="medium"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Three Distinct Regions, Endless Adventures
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Java is divided into three main regions, each offering unique landscapes, cultural experiences, 
              and natural wonders. Choose your destination and let us guide you through unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <DestinationCard key={dest.title} {...dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
            What Makes Java Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">45+</div>
              <h3 className="text-lg font-semibold mb-2">Active Volcanoes</h3>
              <p className="text-muted-foreground">The world's most volcanic island with breathtaking landscapes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
              <h3 className="text-lg font-semibold mb-2">Years of History</h3>
              <p className="text-muted-foreground">Ancient kingdoms and temples dating back millennia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">150M</div>
              <h3 className="text-lg font-semibold mb-2">Population</h3>
              <p className="text-muted-foreground">Rich diversity of cultures, languages, and traditions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
