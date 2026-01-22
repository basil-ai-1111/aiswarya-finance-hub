import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, MapPin, Phone, Scale, Banknote, CheckCircle2, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ApplyLoan = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    place: "",
    phoneNumber: "",
    goldWeight: "",
    loanAmount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.customerName.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return false;
    }
    if (!formData.place.trim()) {
      toast({ title: "Please enter your place", variant: "destructive" });
      return false;
    }
    if (!formData.phoneNumber.trim() || !/^\d{10}$/.test(formData.phoneNumber)) {
      toast({ title: "Please enter a valid 10-digit phone number", variant: "destructive" });
      return false;
    }
    if (!formData.goldWeight.trim() || parseFloat(formData.goldWeight) <= 0) {
      toast({ title: "Please enter valid gold weight", variant: "destructive" });
      return false;
    }
    if (!formData.loanAmount.trim() || parseFloat(formData.loanAmount) <= 0) {
      toast({ title: "Please enter required loan amount", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Application Submitted Successfully!",
      description: "We will contact you shortly regarding your gold loan application.",
    });
    
    setIsSubmitting(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8 animate-fade-in-up"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Form Card */}
            <div className="gradient-card rounded-3xl border border-border shadow-elevated p-8 md:p-10 animate-fade-in-up animate-delay-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4 shadow-gold">
                  <Banknote className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                  Apply for Gold Loan
                </h1>
                <p className="text-muted-foreground">
                  Fill in your details and we'll get back to you
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Customer Name */}
                <div className="space-y-2">
                  <Label htmlFor="customerName" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gold" />
                    Customer Name
                  </Label>
                  <Input
                    id="customerName"
                    name="customerName"
                    placeholder="Enter your full name"
                    value={formData.customerName}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold"
                  />
                </div>

                {/* Place */}
                <div className="space-y-2">
                  <Label htmlFor="place" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    Place
                  </Label>
                  <Input
                    id="place"
                    name="place"
                    placeholder="Enter your location"
                    value={formData.place}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold" />
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Enter 10-digit phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold"
                  />
                </div>

                {/* Gold Weight */}
                <div className="space-y-2">
                  <Label htmlFor="goldWeight" className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-gold" />
                    Gold Weight (in grams)
                  </Label>
                  <Input
                    id="goldWeight"
                    name="goldWeight"
                    type="number"
                    step="0.01"
                    placeholder="Enter gold weight"
                    value={formData.goldWeight}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold"
                  />
                </div>

                {/* Loan Amount */}
                <div className="space-y-2">
                  <Label htmlFor="loanAmount" className="flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-gold" />
                    Required Loan Amount (₹)
                  </Label>
                  <Input
                    id="loanAmount"
                    name="loanAmount"
                    type="number"
                    placeholder="Enter required amount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg gradient-gold shadow-gold hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] text-primary-foreground font-semibold rounded-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Confirm Application
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyLoan;
