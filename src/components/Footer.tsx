import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Be Your Tour Logo" className="w-12 h-12 object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-bold font-heading">Be Your Tour</span>
                <span className="text-xs text-muted-foreground">Tour and Travel</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for authentic Indonesian adventures across Java's stunning landscapes and rich cultural heritage.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/beyourtour"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/beyourtour"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/trips" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Trips & Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-semibold font-heading mb-4">Explore Java</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations/east-java" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  East Java
                </Link>
              </li>
              <li>
                <Link to="/destinations/central-java" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Central Java
                </Link>
              </li>
              <li>
                <Link to="/destinations/west-java" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  West Java
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold font-heading mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Educity Apartment Y&P Tower A17</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:beyourtour@gmail.com" className="hover:text-primary transition-smooth">
                  beyourtour@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+6281553942464" className="hover:text-primary transition-smooth">
                  +62 815 5394 2464
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Be Your Tour. All rights reserved. Crafted with passion for adventure.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
