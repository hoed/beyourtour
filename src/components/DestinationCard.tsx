import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const DestinationCard = ({ title, description, image, link }: DestinationCardProps) => {
  return (
    <Link to={link} className="group block">
      <div className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-smooth hover:scale-[1.02] hover:-translate-y-1 duration-300">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-2xl font-bold font-heading text-white drop-shadow-lg">
            {title}
          </h3>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
          <Button variant="ghost" size="sm" className="group-hover:text-primary">
            Explore {title}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
