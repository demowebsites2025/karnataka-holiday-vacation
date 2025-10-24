import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import heroMysore from "@/assets/hero-mysore.jpg";
import heroHampi from "@/assets/hero-hampi.jpg";
import heroCoorg from "@/assets/hero-coorg.jpg";
import heroOoty from "@/assets/hero-ooty.jpg";
import heroBelur from "@/assets/hero-belur.jpg";

const Packages = () => {
  const packages = [
    {
      title: "Karnataka Temple Travel Package",
      duration: "4N/5D",
      destinations: ["Bangalore", "Belur", "Halebidu", "Sravanabelagola"],
      image: heroBelur,
      link: "/packages/karnataka-temple-4n5d",
      description: "Explore Karnataka's most sacred temples and architectural marvels. Visit Belur's intricate Hoysala temples and the majestic Gommateshwara statue."
    },
    {
      title: "Bangalore - Hampi - Bijapur Travel Package",
      duration: "5N/6D",
      destinations: ["Bangalore", "Hampi", "Bijapur"],
      image: heroHampi,
      link: "/packages/bangalore-hampi-bijapur",
      description: "Journey through UNESCO World Heritage sites. Discover ancient Vijayanagara Empire ruins and magnificent Deccan architecture."
    },
    {
      title: "Karnataka Temple Tour Package",
      duration: "7N/8D",
      destinations: ["Bangalore", "Belur", "Halebidu", "Sravanabelagola", "Shivanasamudra", "Talakadu"],
      image: heroBelur,
      link: "/packages/karnataka-temple-7n8d",
      description: "Extended temple tour covering Karnataka's spiritual and architectural heritage with visits to multiple sacred sites."
    },
    {
      title: "Bangalore - Mysore - Coorg - Ooty Tour Package",
      duration: "5N/6D",
      destinations: ["Bangalore", "Mysore", "Coorg", "Ooty"],
      image: heroMysore,
      link: "/packages/bangalore-mysore-coorg-ooty",
      description: "Experience royal palaces, coffee plantations, and hill station charm. Perfect blend of culture and nature."
    },
    {
      title: "Mysore - Coorg - Karnataka Temple Tour Package",
      duration: "7N/8D",
      destinations: ["Mysore", "Coorg", "Belur", "Halebidu", "Sravanabelagola"],
      image: heroMysore,
      link: "/packages/mysore-coorg-temple-7n8d",
      description: "Comprehensive tour combining royal heritage, coffee estates, and ancient temples of Karnataka."
    },
    {
      title: "Bangalore - Mysore - Ooty Tour Package",
      duration: "5N/6D",
      destinations: ["Bangalore", "Mysore", "Ooty"],
      image: heroOoty,
      link: "/packages/bangalore-mysore-ooty",
      description: "Classic South India tour featuring Mysore Palace and the scenic beauty of Ooty hill station."
    },
    {
      title: "Chikmagalur Weekend Tour Package",
      duration: "2N/3D",
      destinations: ["Chikmagalur", "Mullayanagiri", "Baba Budangiri"],
      image: heroCoorg,
      link: "/packages/chikmagalur-weekend",
      description: "Perfect weekend escape to Karnataka's coffee capital. Trek to highest peaks and explore coffee plantations."
    },
    {
      title: "Coorg Hill Station Tour Package",
      duration: "3N/4D",
      destinations: ["Coorg", "Madikeri", "Abbey Falls", "Dubare"],
      image: heroCoorg,
      link: "/packages/coorg-tour-3n4d",
      description: "Immerse yourself in the Scotland of India. Explore waterfalls, coffee estates, and serene landscapes."
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-secondary to-primary">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Tour Packages</h1>
            <p className="text-xl max-w-2xl mx-auto animate-fade-in">
              Discover Karnataka with our expertly crafted travel packages
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.title} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer customized tour packages tailored to your preferences. Contact us to create your perfect
            Karnataka adventure!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Contact Us
            </a>
            <a
              href="tel:+919880423499"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              Call +91 9880423499
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
