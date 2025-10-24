import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";
import templeCulture from "@/assets/temple-culture.jpg";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize your comfort and happiness in every journey we plan"
    },
    {
      icon: Target,
      title: "Personalized Experiences",
      description: "Tailored packages that match your interests and travel style"
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Premium accommodations and reliable transportation for a seamless experience"
    },
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "Our love for Karnataka's heritage drives us to create memorable experiences"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${templeCulture})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto animate-fade-in">
              Your trusted partner in exploring Karnataka's rich heritage and natural beauty
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Karnataka Holiday Vacation</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Welcome to Karnataka Holiday Vacation, your premier travel partner for exploring the magnificent
                state of Karnataka. With years of experience in curating exceptional travel experiences, we
                specialize in creating personalized tour packages that showcase the best of Karnataka's rich
                cultural heritage, stunning landscapes, and architectural marvels.
              </p>
              <p>
                From the royal palaces of Mysore to the ancient ruins of Hampi, from the serene coffee
                plantations of Coorg to the spiritual temples of Belur and Halebidu, we bring you closer to the
                authentic beauty and charm of Karnataka. Our carefully designed itineraries cater to all types of
                travelers - whether you're seeking adventure, spiritual enlightenment, family bonding, or a
                romantic getaway.
              </p>
              <p>
                We take pride in our attention to detail, quality service, and commitment to making every journey
                memorable. Our team of experienced travel professionals ensures that every aspect of your trip,
                from comfortable accommodations to reliable transportation, is handled with utmost care and
                professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We're committed to providing exceptional travel experiences that exceed your expectations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="p-6 text-center hover:shadow-elevated transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're located in Bangalore and ready to help you plan your perfect Karnataka adventure
            </p>
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-semibold mb-4">Karnataka Holiday Vacation</h3>
              <p className="text-muted-foreground mb-4">
                No 8 Hanumagiri Layout<br />
                PadmanabhaNagar<br />
                Bangalore 560085
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919880423499" className="text-primary hover:underline font-medium">
                  +91 9880423499
                </a>
                <a href="tel:+918088703499" className="text-primary hover:underline font-medium">
                  +91 8088703499
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="mailto:contact@karnatakaholidayvacation.com"
                  className="text-primary hover:underline"
                >
                  contact@karnatakaholidayvacation.com
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
