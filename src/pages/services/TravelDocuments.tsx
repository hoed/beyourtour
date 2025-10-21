import Hero from "@/components/Hero";
import { FileText, Check } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TravelDocuments = () => {
  const documents = [
    "Passport applications and renewals",
    "Visa applications for various countries",
    "Travel permits and special authorizations",
    "Immigration document assistance",
    "Document authentication and legalization",
    "Travel insurance documentation"
  ];

  return (
    <div>
      <Hero
        image={heroHome}
        title="Travel Documents"
        subtitle="Complete assistance with all your travel documentation needs"
        height="medium"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-6">
              Hassle-Free Document Processing
            </h2>
            
            <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
              We serve any travel documents, such as passport and visa from any countries. Let us handle the 
              paperwork so you can focus on planning your adventure. Our experienced team ensures all documentation 
              is processed correctly and on time.
            </p>

            <div className="bg-card rounded-xl p-8 card-shadow mb-12">
              <h3 className="text-2xl font-semibold font-heading mb-6">Documents We Handle</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc) => (
                  <div key={doc} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold font-heading mb-3">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  Our team stays updated with the latest visa regulations and requirements from embassies 
                  worldwide, ensuring accurate and timely processing.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold font-heading mb-3">Fast Processing</h3>
                <p className="text-muted-foreground">
                  We expedite the application process and maintain direct relationships with relevant authorities 
                  to ensure quick turnaround times.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold font-heading mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-95 max-w-2xl mx-auto">
                Contact us with your travel plans and document requirements. We'll guide you through the 
                entire process step by step.
              </p>
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">Get Document Assistance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelDocuments;
