import { useState } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(1, { message: "Subject is required" }).max(200),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(2000),
  honeypot: z.string().max(0, { message: "Spam detected" }).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  // Structured data for SEO
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Be Your Tour",
    "description": "Get in touch with Be Your Tour to plan your perfect Java adventure. Contact us via email, phone, or WhatsApp",
    "mainEntity": {
      "@type": "TravelAgency",
      "name": "Be Your Tour",
      "email": "info@beyourtour.com",
      "telephone": "+62-123-456-789",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Indonesia",
        "addressRegion": "Java"
      }
    }
  };

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Message sent successfully! We'll get back to you soon.", {
        description: "Thank you for contacting Be Your Tour",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast.error("Validation Error", {
          description: firstError.message,
        });
      } else {
        toast.error("Failed to send message", {
          description: "Please try again or contact us directly via email or phone.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Hero
        image={heroHome}
        title="Get in Touch"
        subtitle="Let's plan your perfect Java adventure together"
        height="medium"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62 123 456 789"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Tour inquiry, custom itinerary, etc."
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans, interests, and any specific requirements..."
                    required
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                {/* Honeypot field for spam protection - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                  }}
                  aria-hidden="true"
                />

                <Button
                  type="submit"
                  size="lg"
                  variant="accent"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions? We're here to help! Reach out through any of these channels, 
                  and our team will get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading mb-1">Email</h3>
                    <a
                      href="mailto:info@beyourtour.com"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      info@beyourtour.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading mb-1">Phone / WhatsApp</h3>
                    <a
                      href="tel:+62123456789"
                      className="text-muted-foreground hover:text-secondary transition-smooth"
                    >
                      +62 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Java, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="font-semibold font-heading mb-4">Follow Us</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Stay updated with our latest tours, travel tips, and beautiful Java moments
                </p>
                <div className="flex space-x-3">
                  <a
                    href="https://instagram.com/beyourtour"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-smooth"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://facebook.com/beyourtour"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-smooth"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="font-semibold font-heading mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Emergency support available 24/7 for active tour participants
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Quick Answers
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions we receive from travelers
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="font-semibold font-heading mb-2">How do I book a tour?</h3>
              <p className="text-sm text-muted-foreground">
                Contact us through this form, email, or WhatsApp. We'll discuss your preferences and create a custom itinerary for you.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="font-semibold font-heading mb-2">What payment methods do you accept?</h3>
              <p className="text-sm text-muted-foreground">
                We accept bank transfers, credit cards, and PayPal. A deposit is required to confirm bookings.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="font-semibold font-heading mb-2">Can you arrange airport pickup?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! We offer airport transfer services from all major Java airports. Just let us know your flight details.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="font-semibold font-heading mb-2">Do you offer group discounts?</h3>
              <p className="text-sm text-muted-foreground">
                Absolutely! We have special rates for groups of 6 or more. Contact us for a custom quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
