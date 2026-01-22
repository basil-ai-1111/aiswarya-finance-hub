import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft border border-border mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-muted-foreground">Trusted by 1000+ customers in Palakkad</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 animate-fade-in-up animate-delay-100">
            Unlock the Value of Your{" "}
            <span className="text-gradient-gold">Gold</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Get instant gold loans with the lowest interest rates in Vadakkencherry. 
            Your gold is safe with us – experience trusted financial services with Aiswarya Finance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link to="/apply-loan">
              <Button size="lg" className="group gap-2 text-lg px-8 py-6 gradient-gold shadow-gold hover:shadow-elevated transition-all duration-300 hover:scale-105 text-primary-foreground font-semibold">
                Apply for Gold Loan
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/pay-interest">
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 border-2 border-gold/30 hover:border-gold hover:bg-gold/5 transition-all duration-300 hover:scale-105">
                Pay Interest
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-16 animate-fade-in-up animate-delay-400">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">100% Secure</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">Quick Approval</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">Low Interest</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
