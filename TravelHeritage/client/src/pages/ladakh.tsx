import { AttractionCard } from "@/components/attraction-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Camera, Route, Activity, Thermometer, MapPin, Clock } from "lucide-react";
import { LADAKH_ATTRACTIONS, ADVENTURE_ACTIVITIES } from "@/lib/constants";

export default function Ladakh() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="text-ladakh-blue">Ladakh</span> - Land of High Passes
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Experience the mystical beauty of the Himalayas, ancient Buddhist monasteries, 
            and pristine high-altitude lakes in India's northernmost frontier.
          </p>
          <div className="flex justify-center">
            <Button variant="outline" className="border-ladakh-blue text-ladakh-blue hover:bg-ladakh-blue hover:text-white">
              Download Travel Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-ladakh-blue mb-2">18,380ft</div>
              <div className="text-gray-600">Khardung La Pass</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ladakh-blue mb-2">-30°C</div>
              <div className="text-gray-600">Winter Temperature</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ladakh-blue mb-2">125 km²</div>
              <div className="text-gray-600">Pangong Lake</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ladakh-blue mb-2">40%</div>
              <div className="text-gray-600">Buddhist Population</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Top Monasteries & Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover ancient Buddhist monasteries, pristine lakes, and breathtaking mountain passes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LADAKH_ATTRACTIONS.map((attraction) => (
              <AttractionCard key={attraction.id} {...attraction} />
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Adventure Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Challenge yourself with high-altitude adventures and unique experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVENTURE_ACTIVITIES.ladakh.map((activity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-ladakh-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    {activity.name === "Trekking" && <Mountain className="text-white h-8 w-8" />}
                    {activity.name === "River Rafting" && <Activity className="text-white h-8 w-8" />}
                    {activity.name === "Motorbiking" && <Route className="text-white h-8 w-8" />}
                    {activity.name === "Photography" && <Camera className="text-white h-8 w-8" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{activity.name}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Travel Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-ladakh-blue mb-6 flex items-center">
                    <Thermometer className="mr-3 h-6 w-6" />
                    Best Time to Visit
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-ladakh-blue pl-4">
                      <h4 className="font-semibold text-gray-800">Summer (May-September)</h4>
                      <p className="text-gray-600 text-sm">Pleasant weather, all roads open, ideal for general tourism and trekking</p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h4 className="font-semibold text-gray-800">Winter (October-April)</h4>
                      <p className="text-gray-600 text-sm">Extremely cold, limited access, perfect for Chadar trek and winter festivals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-ladakh-blue mb-6 flex items-center">
                    <MapPin className="mr-3 h-6 w-6" />
                    How to Reach
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-ladakh-blue rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-800">By Air</p>
                        <p className="text-sm text-gray-600">Leh Airport (flights from Delhi, Mumbai)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-ladakh-blue rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-800">By Road</p>
                        <p className="text-sm text-gray-600">Srinagar-Leh Highway (434km) or Manali-Leh Highway (490km)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-ladakh-blue mb-6 flex items-center">
                    <Clock className="mr-3 h-6 w-6" />
                    Important Permits
                  </h3>
                  <p className="text-gray-600 mb-4">Inner Line Permits are required for the following areas:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-600">
                      <li>• Nubra Valley</li>
                      <li>• Pangong Tso area</li>
                      <li>• Tso Moriri and Tso Kar lakes</li>
                    </ul>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Dah and Hanu villages</li>
                      <li>• Areas along China border</li>
                      <li>• Changthang region</li>
                    </ul>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> Permits can be obtained online or at designated offices in Leh. 
                      It's recommended to apply in advance to avoid delays.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
