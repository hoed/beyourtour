import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Sunrise, Camera, Users } from "lucide-react";
import heroEastJava from "@/assets/hero-east-java.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const EastJava = () => {
  const highlights = [
    {
      icon: Mountain,
      title: "Mount Bromo Sunrise",
      description: "Witness one of the world's most spectacular sunrises over the Sea of Sand and volcanic craters.",
    },
    {
      icon: Sunrise,
      title: "Ijen Blue Flames",
      description: "Trek to see the mesmerizing electric blue flames at the sulfur mines of Kawah Ijen crater.",
    },
    {
      icon: Camera,
      title: "Madakaripura Waterfall",
      description: "Explore Indonesia's tallest waterfall hidden in a mystical canyon surrounded by lush cliffs.",
    },
    {
      icon: Users,
      title: "Tenggerese Culture",
      description: "Experience the unique Hindu traditions of the indigenous Tengger people living around Bromo.",
    },
  ];

  return (
    <div>
      <Hero
        image={heroEastJava}
        title="East Java Adventures"
        subtitle="Volcanic wonders and raw natural beauty"
        height="medium"
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Where Fire Meets Adventure
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                East Java is Indonesia's adventure playground, home to some of the world's most dramatic volcanic landscapes. 
                From the iconic Mount Bromo with its otherworldly Sea of Sand to the ethereal blue flames of Ijen crater, 
                this region offers experiences that will leave you breathless.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Beyond the volcanoes, discover hidden waterfalls, traditional villages, and a culture deeply connected 
                to the land. Whether you're chasing sunrise over crater rims or trekking through coffee plantations, 
                East Java promises adventure at every turn.
              </p>
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">
                  Plan Your East Java Trip
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={gallery1}
                alt="East Java landscape"
                className="rounded-lg card-shadow w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src={gallery2}
                alt="East Java culture"
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
              East Java Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Must-see attractions and experiences that define East Java's unique character.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="bg-card rounded-xl p-6 card-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-primary" />
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
              Popular East Java Tours
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully crafted itineraries to help you experience the best of East Java.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-xl font-bold font-heading mb-2">Bromo Sunrise Tour</h3>
              <p className="text-muted-foreground mb-4">2 Days / 1 Night</p>
              <p className="text-sm text-muted-foreground mb-4">
                Classic sunrise experience at Mount Bromo with accommodation and transportation included.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/trips">View Details</Link>
              </Button>
            </div>
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-xl font-bold font-heading mb-2">Bromo-Ijen Adventure</h3>
              <p className="text-muted-foreground mb-4">3 Days / 2 Nights</p>
              <p className="text-sm text-muted-foreground mb-4">
                Combined tour covering both Bromo sunrise and Ijen blue flames for the ultimate volcanic experience.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/trips">View Details</Link>
              </Button>
            </div>
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-xl font-bold font-heading mb-2">East Java Explorer</h3>
              <p className="text-muted-foreground mb-4">5 Days / 4 Nights</p>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive tour including Bromo, Ijen, waterfalls, and cultural experiences.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/trips">View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Ready to Explore East Java?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Contact us today to customize your East Java adventure. Our expert team will help you create the perfect itinerary.
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

export default EastJava;
