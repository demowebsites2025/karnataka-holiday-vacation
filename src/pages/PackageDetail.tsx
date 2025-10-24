import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Users, Car, Hotel, Phone, CheckCircle } from "lucide-react";
import heroMysore from "@/assets/hero-mysore.jpg";
import heroHampi from "@/assets/hero-hampi.jpg";
import heroCoorg from "@/assets/hero-coorg.jpg";
import heroBelur from "@/assets/hero-belur.jpg";

const PackageDetail = () => {
  const { packageId } = useParams();

  const packageData: Record<string, any> = {
    "karnataka-temple-4n5d": {
      title: "Karnataka Temple Travel Package",
      duration: "4 Nights / 5 Days",
      image: heroBelur,
      description: "Embark on a spiritual journey through Karnataka's most magnificent temples and architectural wonders. This carefully curated package takes you through the heart of Karnataka's religious heritage.",
      destinations: ["Bangalore", "Belur", "Halebidu", "Sravanabelagola"],
      highlights: [
        "Visit the exquisite Chennakeshava Temple at Belur with its intricate Hoysala architecture",
        "Explore Halebidu's twin temples - Hoysaleswara and Kedareshwara",
        "Witness the magnificent 57-foot Gommateshwara statue at Sravanabelagola",
        "Experience the rich cultural heritage and architectural brilliance",
        "Professional guide explaining temple history and significance"
      ],
      itinerary: [
        { day: "Day 1", title: "Bangalore to Belur", description: "Depart from Bangalore. Visit Chennakeshava Temple. Overnight stay in Belur." },
        { day: "Day 2", title: "Belur to Halebidu", description: "Explore Hoysaleswara Temple and Kedareshwara Temple. Evening at leisure." },
        { day: "Day 3", title: "Halebidu to Sravanabelagola", description: "Visit the iconic Gommateshwara statue. Evening cultural program." },
        { day: "Day 4", title: "Sravanabelagola Exploration", description: "Visit Chandragiri Hill temples. Shopping for local handicrafts." },
        { day: "Day 5", title: "Return to Bangalore", description: "Leisure morning. Depart for Bangalore with wonderful memories." }
      ],
      includes: [
        "Comfortable AC accommodation for 4 nights",
        "Daily breakfast and dinner",
        "AC transportation throughout the tour",
        "All entrance fees and monument tickets",
        "Professional guide services",
        "All applicable taxes"
      ]
    },
    "bangalore-hampi-bijapur": {
      title: "Bangalore - Hampi - Bijapur Travel Package",
      duration: "5 Nights / 6 Days",
      image: heroHampi,
      description: "Discover the ancient glory of the Vijayanagara Empire and Deccan Sultanate architecture on this historic tour through Karnataka's UNESCO World Heritage sites.",
      destinations: ["Bangalore", "Hampi", "Bijapur"],
      highlights: [
        "Explore the UNESCO World Heritage Site of Hampi",
        "Visit the magnificent Virupaksha Temple and Vittala Temple complex",
        "Marvel at the Gol Gumbaz - world's second largest dome",
        "Discover Ibrahim Rouza's architectural beauty",
        "Experience the grandeur of ancient empires"
      ],
      itinerary: [
        { day: "Day 1", title: "Bangalore to Hampi", description: "Journey to Hampi. Check into hotel. Evening exploration of local markets." },
        { day: "Day 2", title: "Hampi Full Day Tour", description: "Visit Virupaksha Temple, Vittala Temple, Stone Chariot, and Royal Enclosure." },
        { day: "Day 3", title: "Hampi to Bijapur", description: "Continue exploring Hampi. Travel to Bijapur. Overnight stay." },
        { day: "Day 4", title: "Bijapur Sightseeing", description: "Visit Gol Gumbaz, Ibrahim Rouza, Bara Kaman, and Jama Masjid." },
        { day: "Day 5", title: "Bijapur to Bangalore", description: "Leisure morning. Begin return journey to Bangalore." },
        { day: "Day 6", title: "Arrive Bangalore", description: "Reach Bangalore with memories of historic Karnataka." }
      ],
      includes: [
        "5 nights accommodation in quality hotels",
        "All meals (breakfast and dinner)",
        "Private AC vehicle with driver",
        "Entry fees to all monuments",
        "Expert local guides",
        "GST and all taxes"
      ]
    },
    "bangalore-mysore-coorg-ooty": {
      title: "Bangalore - Mysore - Coorg - Ooty Tour Package",
      duration: "5 Nights / 6 Days",
      image: heroMysore,
      description: "Experience the perfect blend of royal heritage, coffee plantations, and hill station beauty on this comprehensive South India tour covering Karnataka's most loved destinations.",
      destinations: ["Bangalore", "Mysore", "Coorg", "Ooty"],
      highlights: [
        "Visit the magnificent Mysore Palace",
        "Explore Brindavan Gardens with musical fountain",
        "Experience Coorg's coffee plantations and waterfalls",
        "Enjoy Ooty's scenic beauty and toy train ride",
        "Visit botanical gardens and serene lakes"
      ],
      itinerary: [
        { day: "Day 1", title: "Bangalore to Mysore", description: "Visit Mysore Palace, Chamundi Hills. Overnight in Mysore." },
        { day: "Day 2", title: "Mysore Exploration", description: "Brindavan Gardens, Srirangapatna. Evening cultural program." },
        { day: "Day 3", title: "Mysore to Coorg", description: "Travel to Coorg. Visit Abbey Falls and Raja's Seat." },
        { day: "Day 4", title: "Coorg to Ooty", description: "Coffee plantation tour. Journey to Ooty through scenic routes." },
        { day: "Day 5", title: "Ooty Sightseeing", description: "Botanical Gardens, Ooty Lake, Doddabetta Peak, Toy Train ride." },
        { day: "Day 6", title: "Return to Bangalore", description: "Leisure morning. Return journey with beautiful memories." }
      ],
      includes: [
        "5 nights premium accommodation",
        "Daily breakfast and dinner",
        "Luxury AC transport",
        "All sightseeing and entry tickets",
        "Coffee plantation tour guide",
        "Toy train tickets and all taxes"
      ]
    },
    "chikmagalur-weekend": {
      title: "Chikmagalur Weekend Tour Package",
      duration: "2 Nights / 3 Days",
      image: heroCoorg,
      description: "Perfect weekend escape to Karnataka's coffee kingdom. Experience the refreshing mountain air, trek to the highest peak, and immerse in coffee culture.",
      destinations: ["Chikmagalur", "Mullayanagiri", "Baba Budangiri"],
      highlights: [
        "Trek to Mullayanagiri - Karnataka's highest peak",
        "Visit Baba Budangiri's sacred caves",
        "Tour aromatic coffee plantations",
        "Experience breathtaking sunrise views",
        "Taste freshly brewed local coffee"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Chikmagalur", description: "Check-in. Visit coffee plantation. Evening at leisure." },
        { day: "Day 2", title: "Mullayanagiri Trek", description: "Early morning trek to peak. Visit Baba Budangiri. Coffee tasting session." },
        { day: "Day 3", title: "Departure", description: "Leisure morning. Optional activities. Depart with coffee samples." }
      ],
      includes: [
        "2 nights cozy accommodation",
        "All meals included",
        "Transportation for sightseeing",
        "Trek guide and safety equipment",
        "Coffee plantation tour",
        "All applicable charges"
      ]
    }
  };

  const currentPackage = packageData[packageId || ""] || packageData["karnataka-temple-4n5d"];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${currentPackage.image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              {currentPackage.title}
            </h1>
            <p className="text-xl animate-fade-in">{currentPackage.duration}</p>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="p-6 shadow-card">
                <h2 className="text-3xl font-bold mb-4">Package Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {currentPackage.description}
                </p>
              </Card>

              {/* Highlights */}
              <Card className="p-6 shadow-card">
                <h2 className="text-3xl font-bold mb-6">Highlights</h2>
                <ul className="space-y-3">
                  {currentPackage.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Itinerary */}
              <Card className="p-6 shadow-card">
                <h2 className="text-3xl font-bold mb-6">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {currentPackage.itinerary.map((day: any, index: number) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {day.day}: {day.title}
                      </h3>
                      <p className="text-muted-foreground">{day.description}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Inclusions */}
              <Card className="p-6 shadow-card">
                <h2 className="text-3xl font-bold mb-6">Package Includes</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentPackage.includes.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="p-6 shadow-card sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-sm text-muted-foreground">{currentPackage.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Destinations</p>
                      <p className="text-sm text-muted-foreground">
                        {currentPackage.destinations.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Group Size</p>
                      <p className="text-sm text-muted-foreground">Flexible (Min 2 pax)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Transport</p>
                      <p className="text-sm text-muted-foreground">Private AC Vehicle</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Hotel className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Accommodation</p>
                      <p className="text-sm text-muted-foreground">3-4 Star Hotels</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button className="w-full" size="lg" asChild>
                    <a href="/contact">Book Now</a>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a href="tel:+919880423499">
                      <Phone className="mr-2 h-5 w-5" /> Call for Details
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackageDetail;
