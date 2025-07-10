import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface AttractionCardProps {
  name: string;
  description: string;
  location: string;
  image: string;
  category?: string;
}

export function AttractionCard({ name, description, location, image }: AttractionCardProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <CardContent className="p-6">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">{name}</h4>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex items-center text-primary">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">{location}</span>
        </div>
      </CardContent>
    </Card>
  );
}
