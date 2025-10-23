import Hero from "@/components/Hero";
import { Users, Heart, Award, Globe } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

const About = () => {
  // Structured data for SEO
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Be Your Tour",
    "description": "Learn about Be Your Tour, your trusted partner for authentic Java experiences and professional tourism services across Indonesia",
    "mainEntity": {
      "@type": "TravelAgency",
      "name": "Be Your Tour",
      "description": "Be Your Tour is a provider of tourism services offering interesting places and tourist attractions throughout Java, Indonesia",
      "foundingDate": "2015",
      "slogan": "Be Your Tour strives to be a leading tourism service provider in terms of quality, so that your comfort and safety will be guaranteed and make your trip even more memorable"
    }
  };

  const values = [
    {
      icon: Heart,
      title: "Passion for Java",
      description: "We're deeply passionate about sharing Java's wonders with travelers from around the world. Every tour is crafted with love and local expertise.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We work directly with local communities, ensuring our tourism benefits the people and preserves the culture we showcase.",
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "From planning to execution, we maintain the highest standards of professionalism, safety, and customer satisfaction.",
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description: "We're committed to eco-friendly practices and responsible tourism that protects Java's natural and cultural heritage for future generations.",
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Hero
        image={heroHome}
        title="About Be Your Tour"
        subtitle="Your trusted partner for authentic Java experiences"
        height="medium"
      />

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Be Your Tour was born from a simple passion: sharing the incredible beauty and rich culture of Java 
                with travelers who seek authentic experiences. Founded by local guides who grew up exploring Java's 
                volcanic peaks, ancient temples, and vibrant villages, we understand this island like nowhere else.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over the years, we've had the privilege of guiding thousands of travelers from across the globe, 
                each seeking something unique—whether it's witnessing the sunrise over Mount Bromo, learning the 
                ancient art of batik, or simply connecting with the warmth of Indonesian hospitality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Be Your Tour stands as a trusted tourism agency, recognized for our professional service, 
                local expertise, and commitment to creating memories that last a lifetime. We're not just tour operators; 
                we're storytellers, cultural ambassadors, and your friends in Indonesia.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={gallery1}
                alt="Our team guiding tours"
                className="rounded-lg card-shadow w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src={gallery3}
                alt="Travelers enjoying experiences"
                className="rounded-lg card-shadow w-full h-64 object-cover mt-8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every tour we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 card-shadow text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-heading mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of travel experts and guides are dedicated to creating unforgettable 
              experiences for every traveler.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden card-shadow">
                <img 
                  src={teamMember1} 
                  alt="Sarah - Tour Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2">Sarah Wijaya</h3>
              <p className="text-primary font-medium mb-2">Tour Manager</p>
              <p className="text-muted-foreground text-sm">
                Expert in organizing seamless travel experiences
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden card-shadow">
                <img 
                  src={teamMember2} 
                  alt="Adi - Senior Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2">Adi Kusuma</h3>
              <p className="text-primary font-medium mb-2">Senior Guide</p>
              <p className="text-muted-foreground text-sm">
                10+ years guiding across Java's destinations
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden card-shadow">
                <img 
                  src={teamMember3} 
                  alt="Rizky - Adventure Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2">Rizky Pratama</h3>
              <p className="text-primary font-medium mb-2">Adventure Specialist</p>
              <p className="text-muted-foreground text-sm">
                Mountain trekking and outdoor activity expert
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden card-shadow">
                <img 
                  src={teamMember4} 
                  alt="Budi - Operations Coordinator"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2">Budi Santoso</h3>
              <p className="text-primary font-medium mb-2">Operations Coordinator</p>
              <p className="text-muted-foreground text-sm">
                Ensuring smooth logistics for every journey
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              All our guides are certified, speak English fluently, and have undergone comprehensive training in 
              safety, first aid, and customer service. More importantly, they're locals who know the hidden gems, 
              the best photo spots, and the stories that bring Java to life.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              Why Travelers Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-3">🎯 Local Expertise</h3>
                <p className="text-muted-foreground">
                  We're not just tour operators—we're locals who live and breathe Java. Our guides know every trail, 
                  temple, and hidden gem.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-3">✨ Authentic Experiences</h3>
                <p className="text-muted-foreground">
                  Go beyond tourist spots. We connect you with local communities, traditional crafts, and genuine 
                  Indonesian culture.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-3">🛡️ Safety First</h3>
                <p className="text-muted-foreground">
                  Comprehensive insurance, trained guides, well-maintained vehicles, and 24/7 support ensure your 
                  safety throughout.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-3">💎 Value for Money</h3>
                <p className="text-muted-foreground">
                  Competitive pricing without compromising quality. We work directly with local suppliers to offer 
                  the best value.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-3">🎨 Flexible Itineraries</h3>
                <p className="text-muted-foreground">
                  Every traveler is unique. We customize tours to match your interests, pace, and preferences.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold font-heading mb-3">⭐ Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Years of experience and thousands of satisfied travelers. Check our reviews and see why people 
                  trust us.
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
            Ready to Start Your Java Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Let's create your perfect Java adventure together. Our team is ready to help you plan an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center h-14 px-10 rounded-lg text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-smooth">
              Contact Us Today
            </a>
            <a href="/trips" className="inline-flex items-center justify-center h-14 px-10 rounded-lg text-base font-semibold border-2 border-white bg-white/10 text-white hover:bg-white hover:text-foreground backdrop-blur-sm transition-smooth">
              Browse Our Tours
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
