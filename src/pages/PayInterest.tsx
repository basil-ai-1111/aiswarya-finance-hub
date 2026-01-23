import { useState } from "react";
import { ArrowLeft, User, MapPin, Phone, IndianRupee, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaymentModal from "@/components/PaymentModal";

const PayInterest = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    place: "",
    interestAmount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.customerName.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return false;
    }
    if (!formData.phoneNumber.trim() || !/^\d{10}$/.test(formData.phoneNumber)) {
      toast({ title: "Please enter a valid 10-digit phone number", variant: "destructive" });
      return false;
    }
    if (!formData.place.trim()) {
      toast({ title: "Please enter your place", variant: "destructive" });
      return false;
    }
    if (!formData.interestAmount.trim() || parseFloat(formData.interestAmount) <= 0) {
      toast({ title: "Please enter valid interest amount", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
    setShowPaymentModal(true);
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
                  <IndianRupee className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                  Pay Interest
                </h1>
                <p className="text-muted-foreground">
                  Enter your details to make an interest payment
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

                {/* Interest Amount */}
                <div className="space-y-2">
                  <Label htmlFor="interestAmount" className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-gold" />
                    Interest Amount (₹)
                  </Label>
                  <Input
                    id="interestAmount"
                    name="interestAmount"
                    type="number"
                    placeholder="Enter interest amount"
                    value={formData.interestAmount}
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
                      Processing...
                    </>
                  ) : (
                    "Confirm & Pay"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={formData.interestAmount}
        customerName={formData.customerName}
        phoneNumber={formData.phoneNumber}
        place={formData.place}
      />
    </div>
  );
};

export default PayInterest;
