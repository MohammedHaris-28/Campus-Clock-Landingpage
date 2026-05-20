import { Phone, Mail, Headset } from "lucide-react";

const SALES_PHONE = "+919999999999";
const SALES_EMAIL = "sales@yourcompany.com";

const ContactSalesSection = () => {
  return (
    
    <section id="contact-sales" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full text-success text-sm font-medium mb-6">
            <Headset className="w-4 h-4" />
            Contact Sales
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let’s Talk About{" "}
            <span className="bg-gradient-to-r from-success to-accent bg-clip-text text-transparent">
              Your Requirements
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Reach out to our sales team to discuss pricing, demos, or custom
            solutions for your institution.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Call Option */}
          <div className="card-premium p-8 group">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center group-hover:bg-success/20 transition-colors">
                <Phone className="w-7 h-7 text-success" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Call Sales
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Speak directly with our sales experts for quick guidance and
                  immediate assistance.
                </p>

                <a
                  href={`tel:${SALES_PHONE}`}
                  aria-label="Call sales team"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-success text-white font-medium hover:opacity-90 transition"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Email Option */}
          <div className="card-premium p-8 group">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center group-hover:bg-success/20 transition-colors">
                <Mail className="w-7 h-7 text-success" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Email Sales
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Send us your requirements and our team will get back to you
                  within one business day.
                </p>

                <a
                  href={`mailto:${SALES_EMAIL}`}
                  aria-label="Email sales team"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-success text-white font-medium hover:opacity-90 transition"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Note */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          Our sales conversations are consultative, transparent, and obligation-free.
        </div>
       
      </div>
      
    </section>
  );
};

export default ContactSalesSection;
