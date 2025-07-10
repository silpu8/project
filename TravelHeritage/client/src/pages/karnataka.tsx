import { AttractionCard } from "@/components/attraction-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Crown, Star, Calendar, MapPin, Users, Route } from "lucide-react";
import { KARNATAKA_ATTRACTIONS, ADVENTURE_ACTIVITIES } from "@/lib/constants";

export default function Karnataka() {
  const heritageCircuits = [
    {
      name: "Heritage Circuit",
      destinations: "Hampi - Badami - Aihole - Pattadakal",
      duration: "5-7 days",
      highlights: "UNESCO sites, cave temples, Vijayanagar ruins"
    },
    {
      name: "Palace Circuit", 
      destinations: "Mysore - Srirangapatna - Bangalore",
      duration: "3-4 days",
      highlights: "Royal palaces, Tipu Sultan's legacy, gardens"
    },
    {
      name: "Temple Circuit",
      destinations: "Belur - Halebidu - Somanathapura",
      duration: "2-3 days", 
      highlights: "Hoysala architecture, intricate stone carvings"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="text-karnataka-orange">Karnataka</span> - Cradle of Indian Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Journey through millennia of architectural brilliance, from ancient cave temples 
            to magnificent Hoysala masterpieces and Vijayanagar ruins.
          </p>
          <div className="flex justify-center">
            <Button variant="outline" className="border-karnataka-orange text-karnataka-orange hover:bg-karnataka-orange hover:text-white">
              Heritage Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-karnataka-orange mb-2">3</div>
              <div className="text-gray-600">UNESCO World Heritage Sites</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-karnataka-orange mb-2">125+</div>
              <div className="text-gray-600">Temples in Aihole</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-karnataka-orange mb-2">1000+</div>
              <div className="text-gray-600">Years of History</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-karnataka-orange mb-2">4th</div>
              <div className="text-gray-600">Most Popular Tourist State</div>
            </div>
          </div>
        </div>
      </section>

      {/* UNESCO World Heritage Sites */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">UNESCO World Heritage Sites</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore three magnificent UNESCO sites that showcase India's rich architectural heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {KARNATAKA_ATTRACTIONS.filter(attr => attr.category === "heritage").map((attraction) => (
              <AttractionCard key={attraction.id} {...attraction} />
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center p-4 bg-orange-100 rounded-lg">
              <Star className="h-6 w-6 text-karnataka-orange mr-3" />
              <span className="text-gray-800 font-medium">
                Karnataka ranks 4th among Indian states for heritage tourism
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Temple Architecture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hoysala Architecture Marvels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover intricate stone carvings and star-shaped temples from the 11th-13th centuries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {KARNATAKA_ATTRACTIONS.filter(attr => attr.category === "temple").slice(0, 4).map((attraction) => (
              <Card key={attraction.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">{attraction.name}</h4>
                  <p className="text-xs text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Circuits */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Heritage Circuits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Karnataka through carefully curated circuits that showcase different aspects of its heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {heritageCircuits.map((circuit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-karnataka-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    {index === 0 && <Building className="text-white h-8 w-8" />}
                    {index === 1 && <Crown className="text-white h-8 w-8" />}
                    {index === 2 && <Star className="text-white h-8 w-8" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{circuit.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Route className="h-4 w-4 text-karnataka-orange mt-1 mr-2" />
                      <span className="text-sm text-gray-600">{circuit.destinations}</span>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-4 w-4 text-karnataka-orange mt-1 mr-2" />
                      <span className="text-sm text-gray-600">{circuit.duration}</span>
                    </div>
                    <div className="flex items-start">
                      <Star className="h-4 w-4 text-karnataka-orange mt-1 mr-2" />
                      <span className="text-sm text-gray-600">{circuit.highlights}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Royal Heritage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Royal Palaces & Heritage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the grandeur of Karnataka's royal legacy and Islamic architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-karnataka-orange mb-6 flex items-center">
                <Crown className="mr-3 h-6 w-6" />
                Mysore - City of Palaces
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-karnataka-orange rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">Mysore Palace</p>
                    <p className="text-sm text-gray-600">Magnificent palace with exquisite carvings and world art</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-karnataka-orange rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">Dussehra Festival</p>
                    <p className="text-sm text-gray-600">Famous 10-day celebration with illuminated palace</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-karnataka-orange rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">Other Palaces</p>
                    <p className="text-sm text-gray-600">Lalitha Mahal, Jagmohan Palace, Cheluvamba Mansion</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-karnataka-orange mb-6 flex items-center">
                <Building className="mr-3 h-6 w-6" />
                Islamic Architecture
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-karnataka-orange rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">Gol Gumbad</p>
                    <p className="text-sm text-gray-600">World's largest dome after St. Peter's Basilica</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-karnataka-orange rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">Ibrahim Rauza</p>
                    <p className="text-sm text-gray-600">Finest Islamic building in the Deccan region</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-karnataka-orange rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">Gumbaz</p>
                    <p className="text-sm text-gray-600">Tipu Sultan's burial ground in manicured gardens</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cultural Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in Karnataka's living heritage and traditional arts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVENTURE_ACTIVITIES.karnataka.map((activity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-karnataka-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    {activity.name === "Heritage Tours" && <Building className="text-white h-8 w-8" />}
                    {activity.name === "Palace Visits" && <Crown className="text-white h-8 w-8" />}
                    {activity.name === "Temple Circuits" && <Star className="text-white h-8 w-8" />}
                    {activity.name === "Cultural Shows" && <Users className="text-white h-8 w-8" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{activity.name}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
