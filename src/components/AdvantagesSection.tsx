import { Clock, Percent, Shield, Heart, Zap, Award } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Quick Loan Approval",
    description: "Get your loan approved within minutes. No lengthy paperwork or waiting periods.",
  },
  {
    icon: Percent,
    title: "Lowest Interest Rates",
    description: "Enjoy competitive interest rates starting from just 0.75% per month.",
  },
  {
    icon: Shield,
    title: "Safe Gold Storage",
    description: "Your gold is stored in secure vaults with 24/7 surveillance and insurance.",
  },
  {
    icon: Heart,
    title: "Trusted Local Service",
    description: "Serving Vadakkencherry and Palakkad for over 15 years with dedication.",
  },
  {
    icon: Clock,
    title: "Flexible Repayment",
    description: "Choose repayment terms that suit your needs with no hidden charges.",
  },
  {
    icon: Award,
    title: "Transparent Process",
    description: "Clear valuation, honest assessment, and no surprise fees.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-4 animate-fade-in-up">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 animate-fade-in-up animate-delay-100">
            The Aiswarya Advantage
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up animate-delay-200">
            Experience hassle-free gold loans with benefits that put your needs first
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group p-6 md:p-8 rounded-2xl gradient-card border border-border hover:border-gold/30 shadow-soft hover:shadow-gold transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-5 shadow-gold group-hover:animate-pulse-gold transition-all duration-300">
                <advantage.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
