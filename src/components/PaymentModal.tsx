import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrCode, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  customerName: string;
  phoneNumber: string;
  place: string;
}

const PaymentModal = ({ isOpen, onClose, amount, customerName, phoneNumber, place }: PaymentModalProps) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePaymentDone = async () => {
    setIsProcessing(true);
    
    // Save payment to database
    const { error } = await supabase.from("interest_payments").insert({
      customer_name: customerName,
      phone_number: phoneNumber,
      place: place,
      amount: parseFloat(amount),
    });

    if (error) {
      toast({ title: "Failed to record payment", variant: "destructive" });
      setIsProcessing(false);
      return;
    }

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      navigate("/");
    }, 2500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {!showSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-center font-serif text-2xl">
                Complete Payment
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center py-6">
              <div className="mb-4 text-center">
                <p className="text-muted-foreground mb-1">Amount to Pay</p>
                <p className="text-3xl font-bold text-gold">₹{amount}</p>
                <p className="text-sm text-muted-foreground mt-1">for {customerName}</p>
              </div>
              
              {/* QR Code Placeholder */}
              <div className="w-56 h-56 rounded-2xl gradient-card border-2 border-dashed border-gold/30 flex flex-col items-center justify-center mb-6 shadow-soft">
                <QrCode className="w-32 h-32 text-gold/80" />
                <p className="text-sm text-muted-foreground mt-2">Scan to Pay</p>
              </div>

              <Button
                onClick={handlePaymentDone}
                size="lg"
                disabled={isProcessing}
                className="w-full gradient-gold shadow-gold hover:shadow-elevated transition-all duration-300 text-primary-foreground font-semibold"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                {isProcessing ? "Processing..." : "Payment Done"}
              </Button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center py-10 animate-fade-in-scale">
            <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
              Payment Successful!
            </h3>
            <p className="text-muted-foreground text-center">
              Thank you, {customerName}. Your payment of ₹{amount} has been received.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
