import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mountain, Building, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Region = "ladakh" | "karnataka";

const regionContent = {
  ladakh: {
    title: "Discover India's",
    subtitle: "Himalayan Mystique",
    description: "From ancient monasteries to pristine high-altitude lakes, explore the mystical beauty of Ladakh's Buddhist heritage and Himalayan landscapes.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    gradient: "from-ladakh-blue/70 to-transparent"
  },
  karnataka: {
    title: "Explore India's",
    subtitle: "Heritage Treasures",
    description: "From magnificent temple architecture to royal palaces, discover Karnataka's rich cultural heritage spanning over a millennium.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    gradient: "from-karnataka-orange/70 to-transparent"
  }
};

interface HeroSectionProps {
  onRegionSelect?: (region: Region) => void;
}

export function HeroSection({ onRegionSelect }: HeroSectionProps) {
  const [currentRegion, setCurrentRegion] = useState<Region>("ladakh");

  const handleRegionSwitch = (region: Region) => {
    if (region !== currentRegion) {
      setCurrentRegion(region);
      onRegionSelect?.(region);
    }
  };

  const content = regionContent[currentRegion];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRegion}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${content.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${content.gradient}`} />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1 
          key={`${currentRegion}-title`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block">{content.title}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
            {content.subtitle}
          </span>
        </motion.h1>
        
        <motion.p 
          key={`${currentRegion}-desc`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          {content.description}
        </motion.p>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            variant="outline"
            className={`group bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-ladakh-blue transition-all duration-300 font-semibold text-lg min-w-[200px] ${
              currentRegion === "ladakh" ? "ring-2 ring-white" : ""
            }`}
            onClick={() => handleRegionSwitch("ladakh")}
          >
            <Mountain className="mr-2 h-5 w-5" />
            Explore Ladakh
          </Button>
          <Button
            size="lg"
            variant="outline"
            className={`group bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-karnataka-orange transition-all duration-300 font-semibold text-lg min-w-[200px] ${
              currentRegion === "karnataka" ? "ring-2 ring-white" : ""
            }`}
            onClick={() => handleRegionSwitch("karnataka")}
          >
            <Building className="mr-2 h-5 w-5" />
            Discover Karnataka
          </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}
