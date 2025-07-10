import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, Car, Train, Mountain, Thermometer, MapPin, Clock, 
  Heart, Backpack, Camera, AlertTriangle, CheckCircle 
} from "lucide-react";

export default function TravelGuide() {
  const seasons = {
    ladakh: [
      {
        season: "Summer",
        months: "May - September",
        weather: "Pleasant (15-25°C)",
        roads: "All roads open",
        bestFor: "General tourism, trekking, monastery visits",
        difficulty: "Easy",
        color: "bg-green-100 text-green-800"
      },
      {
        season: "Winter", 
        months: "October - April",
        weather: "Extremely cold (-30°C)",
        roads: "Limited access",
        bestFor: "Chadar trek, winter festivals, photography",
        difficulty: "Extreme",
        color: "bg-blue-100 text-blue-800"
      }
    ],
    karnataka: [
      {
        season: "Winter",
        months: "October - March", 
        weather: "Pleasant (15-25°C)",
        roads: "Excellent condition",
        bestFor: "Heritage exploration, festivals",
        difficulty: "Easy",
        color: "bg-green-100 text-green-800"
      },
      {
        season: "Summer",
        months: "April - June",
        weather: "Hot (25-35°C)",
        roads: "Good condition", 
        bestFor: "Hill stations, early morning visits",
        difficulty: "Moderate",
        color: "bg-yellow-100 text-yellow-800"
      }
    ]
  };

  const transportation = {
    ladakh: [
      {
        method: "By Air",
        route: "Leh Airport",
        details: "Direct flights from Delhi, Mumbai, Srinagar",
        duration: "1.5-2 hours from Delhi",
        cost: "₹8,000-15,000",
        icon: <Plane className="h-5 w-5" />
      },
      {
        method: "By Road",
        route: "Srinagar-Leh Highway",
        details: "434km scenic route through Kashmir",
        duration: "10-12 hours",
        cost: "₹3,000-5,000",
        icon: <Car className="h-5 w-5" />
      },
      {
        method: "By Road",
        route: "Manali-Leh Highway", 
        details: "490km high-altitude adventure route",
        duration: "12-14 hours",
        cost: "₹4,000-6,000",
        icon: <Car className="h-5 w-5" />
      }
    ],
    karnataka: [
      {
        method: "By Air",
        route: "Bangalore/Mysore Airports",
        details: "Well-connected to major Indian cities",
        duration: "2-3 hours from major cities",
        cost: "₹3,000-8,000",
        icon: <Plane className="h-5 w-5" />
      },
      {
        method: "By Train",
        route: "Golden Chariot",
        details: "Luxury train covering heritage sites",
        duration: "7-day circuit",
        cost: "₹50,000-1,00,000",
        icon: <Train className="h-5 w-5" />
      },
      {
        method: "By Road",
        route: "State Highways",
        details: "Excellent road network, KSTDC buses",
        duration: "Varies by circuit",
        cost: "₹1,000-3,000",
        icon: <Car className="h-5 w-5" />
      }
    ]
  };

  const travelTips = [
    {
      category: "Health & Safety",
      icon: <Heart className="h-6 w-6 text-red-500" />,
      tips: [
        "Acclimatization essential for Ladakh (spend 2-3 days in Leh)",
        "Carry altitude sickness medication",
        "Stay hydrated and avoid alcohol initially",
        "Travel insurance recommended for high-altitude regions"
      ]
    },
    {
      category: "Packing Essentials",
      icon: <Backpack className="h-6 w-6 text-blue-500" />,
      tips: [
        "Warm clothing for Ladakh even in summer",
        "Comfortable walking shoes for heritage sites",
        "Sun protection (sunglasses, sunscreen, hat)",
        "Portable charger and power bank"
      ]
    },
    {
      category: "Photography",
      icon: <Camera className="h-6 w-6 text-yellow-500" />,
      tips: [
        "Respect photography restrictions at monasteries",
        "Ask permission before photographing people",
        "Golden hour lighting at heritage sites",
        "Backup storage for high-resolution images"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Travel Planning Guide</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Essential information and insider tips to help you plan the perfect journey 
            to Ladakh and Karnataka's incredible destinations.
          </p>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Best Time to Visit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect season based on your interests, comfort level, and travel goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ladakh Seasons */}
            <div>
              <h3 className="text-3xl font-bold text-ladakh-blue mb-8 flex items-center">
                <Mountain className="mr-3 h-8 w-8" />
                Ladakh Travel Seasons
              </h3>
              
              <div className="space-y-6">
                {seasons.ladakh.map((season, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-gray-800">{season.season}</h4>
                        <Badge className={season.color}>{season.difficulty}</Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-ladakh-blue mr-2" />
                          <span className="font-medium">{season.months}</span>
                        </div>
                        <div className="flex items-center">
                          <Thermometer className="h-4 w-4 text-ladakh-blue mr-2" />
                          <span>{season.weather}</span>
                        </div>
                        <div className="flex items-center">
                          <Car className="h-4 w-4 text-ladakh-blue mr-2" />
                          <span>{season.roads}</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-ladakh-blue mr-2" />
                          <span>{season.bestFor}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Karnataka Seasons */}
            <div>
              <h3 className="text-3xl font-bold text-karnataka-orange mb-8 flex items-center">
                <Building className="mr-3 h-8 w-8" />
                Karnataka Travel Seasons
              </h3>
              
              <div className="space-y-6">
                {seasons.karnataka.map((season, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-gray-800">{season.season}</h4>
                        <Badge className={season.color}>{season.difficulty}</Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-karnataka-orange mr-2" />
                          <span className="font-medium">{season.months}</span>
                        </div>
                        <div className="flex items-center">
                          <Thermometer className="h-4 w-4 text-karnataka-orange mr-2" />
                          <span>{season.weather}</span>
                        </div>
                        <div className="flex items-center">
                          <Car className="h-4 w-4 text-karnataka-orange mr-2" />
                          <span>{season.roads}</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-karnataka-orange mr-2" />
                          <span>{season.bestFor}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How to Reach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare transportation options to find the best route for your journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ladakh Transportation */}
            <div>
              <h3 className="text-2xl font-bold text-ladakh-blue mb-8">Getting to Ladakh</h3>
              <div className="space-y-4">
                {transportation.ladakh.map((option, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-ladakh-blue rounded-full flex items-center justify-center text-white">
                          {option.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">{option.method}</h4>
                          <p className="text-sm font-medium text-ladakh-blue mb-2">{option.route}</p>
                          <p className="text-sm text-gray-600 mb-2">{option.details}</p>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Duration: {option.duration}</span>
                            <span>Cost: {option.cost}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Karnataka Transportation */}
            <div>
              <h3 className="text-2xl font-bold text-karnataka-orange mb-8">Getting to Karnataka</h3>
              <div className="space-y-4">
                {transportation.karnataka.map((option, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-karnataka-orange rounded-full flex items-center justify-center text-white">
                          {option.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">{option.method}</h4>
                          <p className="text-sm font-medium text-karnataka-orange mb-2">{option.route}</p>
                          <p className="text-sm text-gray-600 mb-2">{option.details}</p>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Duration: {option.duration}</span>
                            <span>Cost: {option.cost}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Travel Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Essential Travel Tips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insider knowledge to ensure a safe, comfortable, and memorable journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {travelTips.map((category, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    {category.icon}
                    <h3 className="text-xl font-semibold text-gray-800 mt-4">{category.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Permits & Documentation */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Permits & Documentation</h2>
              <p className="text-xl text-gray-600">Important requirements for restricted areas and border regions.</p>
            </div>

            <Card className="border-red-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <AlertTriangle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ladakh Permit Requirements</h3>
                    <p className="text-gray-600 mb-4">
                      Inner Line Permits (ILP) are mandatory for Indian citizens visiting the following areas:
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Restricted Areas:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-red-500 mr-2" />
                        Nubra Valley (Diskit, Hunder, Panamik)
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-red-500 mr-2" />
                        Pangong Tso area
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-red-500 mr-2" />
                        Tso Moriri and Tso Kar lakes
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-red-500 mr-2" />
                        Dah and Hanu villages
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">How to Apply:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Online through official Ladakh website
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Designated offices in Leh
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Tourist information centers
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Most tour operators arrange permits
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> Permits are usually processed within 24 hours but apply in advance 
                    to avoid any delays. Keep multiple copies of permits and valid ID proof while traveling.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Planning?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Use our comprehensive travel guide to create your perfect itinerary for 
            Ladakh and Karnataka's incredible destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-ladakh-blue hover:bg-ladakh-deep text-white px-8 py-3">
              Get Custom Itinerary
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Download Travel Checklist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
