import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  image: string;
  title: string;
  description?: string;
  className?: string;
}

const DestinationCard = ({ image, title, description, className }: DestinationCardProps) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-xl border-none shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer",
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 gradient-overlay flex items-end p-6">
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          {description && <p className="text-sm opacity-90">{description}</p>}
        </div>
      </div>
    </Card>
  );
};

export default DestinationCard;
