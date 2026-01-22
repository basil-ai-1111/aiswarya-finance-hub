import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-4 animate-fade-in-up">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 animate-fade-in-up animate-delay-100">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-lg animate-fade-in-up animate-delay-200">
              Visit us or reach out – we're here to help with all your gold loan needs
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <a
              href="tel:9447997254"
              className="group p-6 rounded-2xl gradient-card border border-border hover:border-gold/30 shadow-soft hover:shadow-gold transition-all duration-500 hover:-translate-y-2 text-center animate-fade-in-up animate-delay-100"
            >
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4 shadow-gold group-hover:animate-pulse-gold">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-gold font-medium">9447997254</p>
            </a>

            {/* Email */}
            <a
              href="mailto:aiswaryafinance@gmail.com"
              className="group p-6 rounded-2xl gradient-card border border-border hover:border-gold/30 shadow-soft hover:shadow-gold transition-all duration-500 hover:-translate-y-2 text-center animate-fade-in-up animate-delay-200"
            >
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4 shadow-gold group-hover:animate-pulse-gold">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-gold font-medium text-sm break-all">aiswaryafinance@gmail.com</p>
            </a>

            {/* Location */}
            <div className="group p-6 rounded-2xl gradient-card border border-border hover:border-gold/30 shadow-soft hover:shadow-gold transition-all duration-500 hover:-translate-y-2 text-center animate-fade-in-up animate-delay-300">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4 shadow-gold group-hover:animate-pulse-gold">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">Vadakkencherry, Palakkad</p>
            </div>

            {/* Hours */}
            <div className="group p-6 rounded-2xl gradient-card border border-border hover:border-gold/30 shadow-soft hover:shadow-gold transition-all duration-500 hover:-translate-y-2 text-center animate-fade-in-up animate-delay-400">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4 shadow-gold group-hover:animate-pulse-gold">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
              <p className="text-muted-foreground text-sm">Mon - Sat: 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
