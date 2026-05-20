import { Clock, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Modules", href: "#modules" },
      { name: "AI & Analytics", href: "#ai" },
      { name: "Security", href: "#security" },
      { name: "Pricing", href: "#pricing" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press", href: "#press" },
      { name: "Partners", href: "#partners" },
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "API Reference", href: "#api" },
      { name: "Community", href: "#community" },
      { name: "Webinars", href: "#webinars" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">Campus Clock</span>
            </a>
            <p className="text-background/70 mb-6 max-w-xs">
              The intelligent operating system for modern education. Empowering
              institutions worldwide.
            </p>
            <div className="space-y-3 text-sm text-background/60">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                hash2codeteam@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                +91 9036486726
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                Umblebaile main road, Bommanakatte, Bhadravathi -577302
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-background mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Campus Clock. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "Facebook", "YouTube"].map((social) => (
              <a
                key={social}
                href={`#${social.toLowerCase()}`}
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
