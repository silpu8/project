import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mountain, Building, Music, Palette, Users } from "lucide-react";
import { CULTURAL_FESTIVALS } from "@/lib/constants";

export default function Culture() {
  const artForms = {
    ladakh: [
      {
        name: "Cham Dance",
        description: "Traditional mask dances performed by Buddhist monks during festivals",
        significance: "Spiritual performances that ward off evil spirits and bring blessings"
      },
      {
        name: "Ladakhi Folk Music",
        description: "Traditional songs accompanied by instruments like daman and surna",
        significance: "Preserves oral traditions and celebrates daily life in the mountains"
      },
      {
        name: "Thangka Painting",
        description: "Sacred Buddhist scroll paintings on cotton or silk",
        significance: "Religious art used for meditation and teaching Buddhist philosophy"
      }
    ],
    karnataka: [
      {
        name: "Yakshagana",
        description: "Traditional dance-drama with elaborate costumes and makeup",
        significance: "Showcases mythological stories and preserves ancient narratives"
      },
      {
        name: "Carnatic Music",
        description: "Classical South Indian music tradition with complex ragas",
        significance: "Spiritual and artistic expression central to Karnataka's culture"
      },
      {
        name: "Stone Carving",
        description: "Living craft tradition in temple towns and heritage sites",
        significance: "Continuation of ancient architectural and artistic traditions"
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-ladakh-blue/30 via-purple-600/30 to-karnataka-orange/30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cultural Celebrations
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the vibrant festivals, ancient traditions, and living cultural heritage 
            that define Ladakh and Karnataka's remarkable legacy.
          </p>
        </div>
      </section>

      {/* Major Festivals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Major Festivals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of pilgrims and travelers in celebrating these UNESCO-recognized 
              and culturally significant festivals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Ladakh Festivals */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-ladakh-blue mb-6 flex items-center">
                <Mountain className="mr-3 h-8 w-8" />
                Ladakh Traditions
              </h3>
              
              {CULTURAL_FESTIVALS.filter(f => f.region === "Ladakh").map((festival) => (
                <Card key={festival.id} className="bg-blue-50 border-ladakh-blue/20">
                  <div className="relative h-48">
                    <img 
                      src={festival.image} 
                      alt={festival.name}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">{festival.name}</h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{festival.description}</p>
                    <div className="flex items-center text-ladakh-blue">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{festival.timing}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Karnataka Festivals */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-karnataka-orange mb-6 flex items-center">
                <Building className="mr-3 h-8 w-8" />
                Karnataka Heritage
              </h3>
              
              {CULTURAL_FESTIVALS.filter(f => f.region === "Karnataka").map((festival) => (
                <Card key={festival.id} className="bg-orange-50 border-karnataka-orange/20">
                  <div className="relative h-48">
                    <img 
                      src={festival.image} 
                      alt={festival.name}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">{festival.name}</h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{festival.description}</p>
                    <div className="flex items-center text-karnataka-orange">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{festival.timing}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Art Forms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Traditional Art Forms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the living traditions that continue to thrive in both regions, 
              preserving ancient wisdom and artistic excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ladakh Arts */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-ladakh-blue mb-6 flex items-center">
                <Mountain className="mr-3 h-6 w-6" />
                Ladakhi Arts & Crafts
              </h3>
              
              {artForms.ladakh.map((art, index) => (
                <Card key={index} className="border-l-4 border-ladakh-blue">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-ladakh-blue rounded-full flex items-center justify-center">
                        {index === 0 && <Users className="text-white h-6 w-6" />}
                        {index === 1 && <Music className="text-white h-6 w-6" />}
                        {index === 2 && <Palette className="text-white h-6 w-6" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{art.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">{art.description}</p>
                        <p className="text-ladakh-blue text-sm font-medium">{art.significance}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Karnataka Arts */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-karnataka-orange mb-6 flex items-center">
                <Building className="mr-3 h-6 w-6" />
                Karnataka Arts & Traditions
              </h3>
              
              {artForms.karnataka.map((art, index) => (
                <Card key={index} className="border-l-4 border-karnataka-orange">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-karnataka-orange rounded-full flex items-center justify-center">
                        {index === 0 && <Users className="text-white h-6 w-6" />}
                        {index === 1 && <Music className="text-white h-6 w-6" />}
                        {index === 2 && <Palette className="text-white h-6 w-6" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{art.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">{art.description}</p>
                        <p className="text-karnataka-orange text-sm font-medium">{art.significance}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Preservation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cultural Preservation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how both regions actively preserve their unique heritage for future generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-ladakh-blue mb-6">Ladakh Initiatives</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-ladakh-blue rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">Lamdon Model School</p>
                    <p className="text-sm text-gray-600">Preserves Ladakhi language and traditional culture</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-ladakh-blue rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">Monastery Schools</p>
                    <p className="text-sm text-gray-600">Active centers of Buddhist learning and philosophy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-ladakh-blue rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">Government Support</p>
                    <p className="text-sm text-gray-600">Cultural festivals and traditional crafts promotion</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-karnataka-orange mb-6">Karnataka Heritage</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-karnataka-orange rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">UNESCO Recognition</p>
                    <p className="text-sm text-gray-600">Three World Heritage Sites under protection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-karnataka-orange rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">Living Crafts</p>
                    <p className="text-sm text-gray-600">Traditional stone carving and metalwork continue</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-karnataka-orange rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">Cultural Events</p>
                    <p className="text-sm text-gray-600">Annual festivals maintain traditional practices</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Living Culture</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us for an immersive cultural journey that goes beyond sightseeing to genuine 
            interaction with local communities and traditions.
          </p>
          <div className="flex justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Festival Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
