import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground font-serif">A</span>
            </div>
            <span className="font-serif font-semibold">Aiswarya Finance</span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-background/70">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <Link to="/apply-loan" className="hover:text-gold transition-colors">Apply Loan</Link>
            <Link to="/pay-interest" className="hover:text-gold transition-colors">Pay Interest</Link>
            <Link to="/payment-history" className="hover:text-gold transition-colors">History</Link>
          </nav>

          <p className="flex items-center gap-1 text-sm text-background/70">
            Made with <Heart className="w-4 h-4 text-gold fill-gold" /> in Palakkad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
