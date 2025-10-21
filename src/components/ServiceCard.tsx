import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-smooth group hover:scale-[1.03] hover:-translate-y-1 duration-300">
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-smooth">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
      </div>
      <h3 className="text-xl font-semibold font-heading mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
