import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroMysore from "@/assets/hero-mysore.jpg";
import heroHampi from "@/assets/hero-hampi.jpg";
import heroCoorg from "@/assets/hero-coorg.jpg";
import heroOoty from "@/assets/hero-ooty.jpg";
import heroBelur from "@/assets/hero-belur.jpg";
import templeCulture from "@/assets/temple-culture.jpg";

const Home = () => {
  const [currentHero, setCurrentHero] = useState(0);

  const heroes = [
    { image: heroMysore, title: "Mysore", subtitle: "Royal Heritage & Palaces" },
    { image: heroHampi, title: "Hampi", subtitle: "Ancient Ruins & Temples" },
    { image: heroCoorg, title: "Coorg", subtitle: "Coffee Plantations & Hills" },
    { image: heroOoty, title: "Ooty", subtitle: "Queen of Hill Stations" },
    { image: heroBelur, title: "Belur", subtitle: "Architectural Marvels" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredPackages = [
    {
      title: "Karnataka Temple Travel Package",
      duration: "4N/5D",
      destinations: ["Bangalore", "Belur", "Halebidu", "Sravanabelagola"],
      image: heroBelur,
      link: "/packages/karnataka-temple-4n5d",
      description: "Explore the rich spiritual heritage and architectural wonders of Karnataka temples"
    },
    {
      title: "Bangalore - Hampi - Bijapur Travel Package",
      duration: "5N/6D",
      destinations: ["Bangalore", "Hampi", "Bijapur"],
      image: heroHampi,
      link: "/packages/bangalore-hampi-bijapur",
      description: "Journey through the ancient ruins and UNESCO World Heritage Sites"
    },
    {
      title: "Bangalore - Mysore - Coorg - Ooty",
      duration: "5N/6D",
      destinations: ["Bangalore", "Mysore", "Coorg", "Ooty"],
      image: heroMysore,
      link: "/packages/bangalore-mysore-coorg-ooty",
      description: "Experience royal palaces, coffee estates, and scenic hill stations"
    },
    {
      title: "Chikmagalur Weekend Tour",
      duration: "2N/3D",
      destinations: ["Chikmagalur", "Mullayanagiri", "Baba Budangiri"],
      image: heroCoorg,
      link: "/packages/chikmagalur-weekend",
      description: "Perfect weekend getaway to Karnataka's coffee kingdom"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen">
        {heroes.map((hero, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHero ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={hero.image}
              alt={hero.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {heroes[currentHero].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              {heroes[currentHero].subtitle}
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Discover Karnataka's treasures with our expertly crafted travel packages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link to="/packages">
                  Explore Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <a href="tel:+919880423499">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHero(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentHero ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Karnataka Travel Packages</h2>
            <p className="text-lg text-muted-foreground">
              Start an amazing journey with our Karnataka Travel Packages, designed just for you. Feel the
              excitement of exploring with friends, enjoy a getaway for couples, create lasting family memories,
              or have fun on group adventures. Our affordable tour packages offer more than just places to
              visit—they provide experiences that match what you love. Dive into Karnataka's culture, from lively
              markets to ancient temples, all planned with your happiness and comfort in mind.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <DestinationCard image={heroMysore} title="Mysore" />
            <DestinationCard image={heroBelur} title="Belur" />
            <DestinationCard image={heroHampi} title="Hampi" />
            <DestinationCard image={heroOoty} title="Ooty" />
            <DestinationCard image={heroCoorg} title="Coorg" />
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tour Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated tour packages designed for unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.title} {...pkg} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/packages">
                View All Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${templeCulture})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pack Your Bags</h2>
          <p className="text-xl md:text-2xl mb-8">We have the best tour packages in India</p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
