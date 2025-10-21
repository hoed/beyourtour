import Hero from "@/components/Hero";
import { Users, Check } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TourGuides = () => {
  const qualities = [
    "Fluent in English and other international languages",
    "Deep knowledge of Java's history, culture, and geography",
    "Certified and licensed professional guides",
    "Passionate storytellers who bring destinations to life",
    "Expert at customizing tours to guest interests",
    "Knowledgeable about hidden gems and local experiences",
    "Safety-conscious and customer-focused",
    "Friendly, professional, and culturally sensitive"
  ];

  return (
    <div>
      <Hero
        image={heroHome}
        title="Tour Guide Services"
        subtitle="Expert local guides for unforgettable Java experiences"
        height="medium"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-6">
              Professional Local Guides
            </h2>
            
            <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
              Our passionate guides are more than just tour leaders – they're cultural ambassadors who bring 
              Java's stories to life. With extensive knowledge and authentic storytelling, they transform your 
              journey into an immersive educational and emotional experience.
            </p>

            <div className="bg-card rounded-xl p-8 card-shadow mb-12">
              <h3 className="text-2xl font-semibold font-heading mb-6">What Makes Our Guides Special</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qualities.map((quality) => (
                  <div key={quality} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{quality}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold font-heading mb-3">🎓 Expertise</h3>
                <p className="text-muted-foreground">
                  All our guides undergo rigorous training and possess official certifications. They continuously 
                  update their knowledge to provide accurate and engaging information.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold font-heading mb-3">🌟 Personalization</h3>
                <p className="text-muted-foreground">
                  We match guides to your interests – whether you're passionate about history, photography, 
                  nature, or local cuisine, we have the perfect guide for you.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold font-heading mb-3">🤝 Local Connections</h3>
                <p className="text-muted-foreground">
                  Our guides have strong relationships with local communities, providing you access to authentic 
                  experiences tourists rarely see.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold font-heading mb-3">🛡️ Safety First</h3>
                <p className="text-muted-foreground">
                  Trained in first aid and emergency procedures, our guides prioritize your safety while 
                  ensuring you have an adventurous and memorable experience.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold font-heading mb-4">Experience the Difference</h3>
              <p className="mb-6 opacity-95 max-w-2xl mx-auto">
                A great guide transforms a good trip into an extraordinary adventure. Let our experts show you 
                the real Java through their eyes and hearts.
              </p>
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">Book Your Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourGuides;
