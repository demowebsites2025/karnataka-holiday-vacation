import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const tourPackages = [
    { name: "Karnataka Temple Travel Package (4N/5D)", path: "/packages/karnataka-temple-4n5d" },
    { name: "Bangalore - Hampi - Bijapur (5N/6D)", path: "/packages/bangalore-hampi-bijapur" },
    { name: "Bangalore - Mysore - Coorg - Ooty (5N/6D)", path: "/packages/bangalore-mysore-coorg-ooty" },
    { name: "Chikmagalur Weekend (2N/3D)", path: "/packages/chikmagalur-weekend" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tour Packages", path: "/packages" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <div className="font-bold text-lg">Karnataka Holiday</div>
                <div className="text-sm text-muted-foreground">Vacation</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Experience the beauty of Karnataka with our curated travel packages designed for
              unforgettable journeys.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Tour Packages */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Tour Packages</h3>
            <ul className="space-y-2">
              {tourPackages.map((pkg) => (
                <li key={pkg.path}>
                  <Link
                    to={pkg.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {pkg.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  No 8 Hanumagiri Layout PadmanabhaNagar. Bangalore 560085
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@karnatakaholidayvacation.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@karnatakaholidayvacation.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <a href="tel:+919880423499" className="hover:text-primary transition-colors block">
                    +91 9880423499
                  </a>
                  <a href="tel:+918088703499" className="hover:text-primary transition-colors block">
                    +91 8088703499
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2023 Karnataka Holiday Vacations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
