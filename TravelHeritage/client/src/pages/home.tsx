import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { AttractionCard } from "@/components/attraction-card";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mountain, Building, Calendar, Users, Route, Camera } from "lucide-react";
import { LADAKH_ATTRACTIONS, KARNATAKA_ATTRACTIONS, CULTURAL_FESTIVALS } from "@/lib/constants";
import { Link } from "wouter";

type Region = "ladakh" | "karnataka";

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState<Region>("ladakh");

  return (
    <div className="min-h-screen">
      <HeroSection onRegionSelect={setSelectedRegion} />
      
      {/* Regional Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-ladakh-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="text-white text-2xl h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Ladakh</h3>
              <p className="text-gray-600 mb-6 text-lg">
                India's largest union territory, a high-altitude desert nestled between the Karakoram and Himalayan ranges.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-ladakh-blue">18,380ft</div>
                  <div className="text-sm text-gray-500">Khardung La Pass</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ladakh-blue">150K+</div>
                  <div className="text-sm text-gray-500">Annual Visitors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ladakh-blue">40%</div>
                  <div className="text-sm text-gray-500">Buddhist Population</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-karnataka-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="text-white text-2xl h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Karnataka</h3>
              <p className="text-gray-600 mb-6 text-lg">
                4th most popular tourist state in India, home to UNESCO World Heritage Sites and magnificent temple architecture.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-karnataka-orange">3</div>
                  <div className="text-sm text-gray-500">UNESCO Sites</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-karnataka-orange">125+</div>
                  <div className="text-sm text-gray-500">Temples in Aihole</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-karnataka-orange">1000+</div>
                  <div className="text-sm text-gray-500">Years of History</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Attractions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most breathtaking destinations and cultural treasures in both regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LADAKH_ATTRACTIONS.slice(0, 3).map((attraction) => (
              <AttractionCard key={attraction.id} {...attraction} />
            ))}
            {KARNATAKA_ATTRACTIONS.slice(0, 3).map((attraction) => (
              <AttractionCard key={attraction.id} {...attraction} />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ladakh">
                <Button className="bg-ladakh-blue hover:bg-ladakh-deep text-white px-8 py-3">
                  Explore All Ladakh Attractions
                </Button>
              </Link>
              <Link href="/karnataka">
                <Button className="bg-karnataka-orange hover:bg-karnataka-gold text-white px-8 py-3">
                  Discover Karnataka Heritage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Highlights */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cultural Celebrations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience vibrant festivals and living traditions that define these remarkable regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CULTURAL_FESTIVALS.map((festival) => (
              <Card key={festival.id} className="bg-gray-800 border-gray-700">
                <div className="relative h-40">
                  <img 
                    src={festival.image} 
                    alt={festival.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-white">{festival.name}</h4>
                  <p className="text-gray-300 text-sm mb-3">{festival.description}</p>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-primary">{festival.timing}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/culture">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Explore All Cultural Experiences
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Planning */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Plan Your Journey</h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to explore Ladakh and Karnataka? Let us help you create the perfect itinerary.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-ladakh-blue mb-4">Ladakh Packages</h3>
                  <ul className="text-left space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <Route className="h-5 w-5 text-ladakh-blue mr-3" />
                      <span>Monastery circuit tours</span>
                    </li>
                    <li className="flex items-center">
                      <Mountain className="h-5 w-5 text-ladakh-blue mr-3" />
                      <span>Adventure trekking packages</span>
                    </li>
                    <li className="flex items-center">
                      <Camera className="h-5 w-5 text-ladakh-blue mr-3" />
                      <span>High-altitude lake circuits</span>
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 text-ladakh-blue mr-3" />
                      <span>Cultural festival experiences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-karnataka-orange mb-4">Karnataka Packages</h3>
                  <ul className="text-left space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <Building className="h-5 w-5 text-karnataka-orange mr-3" />
                      <span>UNESCO heritage site tours</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-karnataka-orange mr-3" />
                      <span>Royal palace experiences</span>
                    </li>
                    <li className="flex items-center">
                      <Route className="h-5 w-5 text-karnataka-orange mr-3" />
                      <span>Temple architecture circuits</span>
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 text-karnataka-orange mr-3" />
                      <span>Cultural festival participation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
