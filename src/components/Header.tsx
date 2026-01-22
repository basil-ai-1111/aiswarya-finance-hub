import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, History, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-gold flex items-center justify-center shadow-gold transition-transform duration-300 group-hover:scale-110">
              <span className="text-lg md:text-xl font-bold text-primary-foreground font-serif">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-serif font-bold text-foreground">
                Aiswarya Finance
              </h1>
              <p className="text-xs text-muted-foreground -mt-0.5">Trusted Gold Loans</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link to="/payment-history">
              <Button
                variant={isActive("/payment-history") ? "default" : "ghost"}
                className="gap-2 transition-all duration-300 hover:scale-105"
              >
                <History className="w-4 h-4" />
                Payment History
              </Button>
            </Link>
            <Link to="/#contact">
              <Button variant="ghost" className="gap-2 transition-all duration-300 hover:scale-105">
                <Phone className="w-4 h-4" />
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col gap-2">
              <Link
                to="/payment-history"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                <History className="w-5 h-5" />
                Payment History
              </Link>
              <Link
                to="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                <Phone className="w-5 h-5" />
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
