import Hero from "@/components/Hero";
import TripCard from "@/components/TripCard";
import heroHome from "@/assets/hero-home.jpg";
import heroEastJava from "@/assets/bromo1-beyourtour.jpeg";
import heroIjen from "@/assets/kawahijen-beyourtour.jpg";
import heroCentralJava from "@/assets/hero-central-java.jpg";
import heroWestJava from "@/assets/hero-west-java.jpg";
import heroBali1 from "@/assets/bali2-beyourtour.jpeg";
import heroBaliHoneymoon from "@/assets/bali-honeymoon-beyourtour.jpeg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Trips = () => {
  const trips = [
    {
      title: "Mount Bromo Sunrise Tour",
      description: "Witness the iconic sunrise over Mount Bromo's volcanic landscape. Includes jeep ride, viewing platform access, and breakfast with a view.",
      image: heroEastJava,
      duration: "2 Days / 1 Night",
      groupSize: "2-6 people",
      location: "East Java",
      price: "From IDR 2M/px",
    },
    {
      title: "Bromo-Ijen Volcano Adventure",
      description: "The ultimate volcanic experience combining Mount Bromo sunrise with Ijen's mesmerizing blue flames. Perfect for adventure seekers.",
      image: heroIjen,
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 people",
      location: "East Java",
      price: "From IDR 4M/px",
    },
    {
      title: "Yogyakarta Cultural Heritage",
      description: "Explore UNESCO World Heritage temples Borobudur and Prambanan, visit the Sultan's Palace, and experience traditional batik making.",
      image: heroCentralJava,
      duration: "3 Days / 2 Nights",
      groupSize: "60 people",
      location: "Central Java",
      price: "From IDR 1.5M/px",
    },
    {
      title: "Bali Group Adventure",
      description: "Rafting Adventure, Dinner with Kuta Sunset and local village tour.",
      image: heroBali1,
      duration: "4 Days / 3 Nights",
      groupSize: "60 people",
      location: "Bali",
      price: "From IDR 1.8M/px",
    },
    {
      title: "Bandung Highland Escape",
      description: "Start from Surabaya to discover West Java's natural beauty with visits to Tangkuban Perahu volcano, Ciater hot springs, and scenic tea plantations.",
      image: heroWestJava,
      duration: "3 Days / 2 Night",
      groupSize: "2-15 people",
      location: "West Java",
      price: "From IDR 5M/px",
    },
    {
      title: "Tea & Coffee Trail",
      description: "Start from Bandung to explore working tea and coffee plantations in the cool highlands, learn about production, and enjoy tastings with panoramic views.",
      image: heroWestJava,
      duration: "3 Days / 2 Nights",
      groupSize: "2-10 people",
      location: "West Java",
      price: "From IDR 1.5M/px",
    },
    {
      title: "Java Cultural Journey",
      description: "Comprehensive cultural tour covering traditional crafts, temple complexes, royal palaces, and authentic village experiences across Java.",
      image: gallery2,
      duration: "5 Days / 4 Nights",
      groupSize: "2-12 people",
      location: "Central Java",
      price: "From 4M/px",
    },
    {
      title: "Java Overland Adventure",
      description: "The ultimate Java experience combining Bromo, Ijen, Borobudur, and cultural highlights in one incredible journey.",
      image: heroHome,
      duration: "7 Days / 6 Nights",
      groupSize: "2-15 people",
      location: "All Java",
      price: "From IDR 9M/px",
    },
    {
      title: "Banyuwangi Culture Tour",
      description: "Adventure journey featuring Africa van Java, Beach visits, traditional meals, and cultural performances in Banyuwangi.",
      image: gallery3,
      duration: "4 Days / 3 Nights",
      groupSize: "4-12 people",
      location: "Central Java",
      price: "From IDR 4M/px",
    },
    {
      title: "Bali Honeymoon Experience",
      description: "Specialized tour for couple who escape from routine with optimal timing for landscapes villas, cultural events, and portrait opportunities at iconic locations.",
      image: heroBaliHoneymoon,
      duration: "4 Days / 3 Nights",
      groupSize: "2 people",
      location: "Bali",
      price: "From IDR 15M/cpuple",
    },
    {
      title: "Temple Explorer Tour",
      description: "Deep dive into Java's ancient temples including Borobudur, Prambanan, Mendut, and lesser-known temple complexes with expert guides.",
      image: gallery4,
      duration: "4 Days / 3 Nights",
      groupSize: "2-15 people",
      location: "Central Java",
      price: "From IDR 3M/px",
    },
    {
      title: "Surabaya History Adventure",
      description: "Explore Surabaya Old Town and stay in 4stars Hotel, experiencing the jetsky with Suramadu Bridge View.",
      image: gallery1,
      duration: "2 Days / 1 Nights",
      groupSize: "2-10 people",
      location: "Surabaya East Java",
      price: "From IDR 2M/px",
    },
  ];

  return (
    <div>
      <Hero
        image={heroHome}
        title="Our Tour Packages"
        subtitle="Carefully crafted experiences across Java's most captivating destinations"
        height="medium"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Find Your Perfect Java Adventure
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our tour packages offer a variety of experiences, from cultural explorations to thrilling adventures. 
              Each itinerary is carefully designed to showcase the best of Java while ensuring comfort, safety, and authentic experiences.
              Can't find what you're looking for? We create custom itineraries tailored to your interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <TripCard key={trip.title} {...trip} />
            ))}
          </div>

          <div className="mt-16 text-center bg-muted/30 rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Looking for Something Different?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We specialize in creating custom itineraries tailored to your specific interests, budget, and schedule. 
              Whether it's a family reunion, corporate retreat, or a unique personal journey, we'll make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center h-11 px-6 py-2.5 rounded-lg text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-smooth">
                Request Custom Tour
              </a>
              <a href="/services" className="inline-flex items-center justify-center h-11 px-6 py-2.5 rounded-lg text-sm font-semibold border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-4 text-secondary">✓ Included</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Professional English-speaking guide</li>
                  <li>• Private air-conditioned transportation</li>
                  <li>• Accommodation as per itinerary</li>
                  <li>• Entrance fees to attractions</li>
                  <li>• Breakfast daily</li>
                  <li>• Mineral water during tours</li>
                  <li>• Travel insurance</li>
                  <li>• 24/7 support</li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-4 text-destructive">✗ Not Included</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• International flights</li>
                  <li>• Lunch and dinner (unless specified)</li>
                  <li>• Personal expenses</li>
                  <li>• Tips for guide and driver</li>
                  <li>• Additional activities not in itinerary</li>
                  <li>• Visa fees</li>
                  <li>• Travel insurance upgrade</li>
                  <li>• Souvenirs and shopping</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trips;
