import Hero from "@/components/Hero";
import { Building2, Check } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import miceMeeting from "@/assets/mice-meeting.jpg";
import miceIncentive from "@/assets/mice-incentive.jpg";
import miceConference from "@/assets/mice-conference.jpg";
import miceExhibition from "@/assets/mice-exhibition.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MiceServices = () => {
  const services = [
    {
      title: "Meetings",
      description: "Professional venue booking and logistics for corporate meetings of any size",
      image: miceMeeting
    },
    {
      title: "Incentives",
      description: "Reward programs combining business objectives with memorable travel experiences",
      image: miceIncentive
    },
    {
      title: "Conferences",
      description: "Full-service conference management from planning to execution",
      image: miceConference
    },
    {
      title: "Exhibitions",
      description: "Trade show and exhibition coordination with local vendor networks",
      image: miceExhibition
    }
  ];

  return (
    <div>
      <Hero
        image={heroHome}
        title="MICE Services"
        subtitle="Professional event management for corporate groups"
        height="medium"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-6">
              Meetings, Incentives, Conferences & Exhibitions
            </h2>
            
            <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
              We specialize in organizing corporate events that combine business objectives with unique cultural 
              experiences. Our MICE services handle all aspects of event management, allowing you to focus on 
              your business goals while we ensure a seamless experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service) => (
                <div key={service.title} className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-smooth">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-110 transition-smooth"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold font-heading mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-muted/30 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold font-heading mb-6">What We Provide</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Venue selection and booking</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Accommodation arrangements</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Transportation logistics</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Team building activities</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Cultural programs and entertainment</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Catering and dining experiences</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Audio-visual equipment</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">On-site event coordination</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-semibold font-heading mb-4">Perfect Blend of Business & Leisure</h3>
              <p className="text-muted-foreground mb-6">
                Java offers the perfect backdrop for corporate events, combining modern facilities with rich 
                cultural heritage. From beachfront resorts to mountain retreats, we can arrange venues that 
                inspire productivity and create lasting memories for your team.
              </p>
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">Plan Your Event</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiceServices;
