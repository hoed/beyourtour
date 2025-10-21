import { Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TripCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  location: string;
  price: string;
}

const TripCard = ({ title, description, image, duration, groupSize, location, price }: TripCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-smooth hover:scale-[1.02] hover:-translate-y-1 duration-300">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-smooth duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold shadow-lg">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold font-heading mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-secondary" />
            <span>{groupSize}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{location}</span>
          </div>
        </div>
        
        <Button asChild className="w-full" variant="default">
          <Link to="/contact">Book This Trip</Link>
        </Button>
      </div>
    </div>
  );
};

export default TripCard;
