import { ArrowLeft, Calendar, IndianRupee, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Static payment history data for demo
const paymentHistory = [
  {
    id: 1,
    date: "2024-01-15",
    amount: 2500,
    status: "completed",
    customerName: "Rahul Kumar",
  },
  {
    id: 2,
    date: "2024-01-10",
    amount: 1800,
    status: "completed",
    customerName: "Priya Nair",
  },
  {
    id: 3,
    date: "2024-01-05",
    amount: 3200,
    status: "completed",
    customerName: "Anil Menon",
  },
  {
    id: 4,
    date: "2023-12-28",
    amount: 2100,
    status: "completed",
    customerName: "Deepa Joseph",
  },
  {
    id: 5,
    date: "2023-12-20",
    amount: 1500,
    status: "completed",
    customerName: "Suresh Pillai",
  },
];

const PaymentHistory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8 animate-fade-in-up"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Header */}
            <div className="text-center mb-10 animate-fade-in-up animate-delay-100">
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4 shadow-gold">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                Payment History
              </h1>
              <p className="text-muted-foreground">
                View your recent interest payments
              </p>
            </div>

            {/* Payment List */}
            <div className="space-y-4">
              {paymentHistory.map((payment, index) => (
                <div
                  key={payment.id}
                  className="gradient-card rounded-2xl border border-border shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-1 p-5 md:p-6 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {payment.customerName}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {new Date(payment.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:text-right">
                      <IndianRupee className="w-5 h-5 text-gold" />
                      <span className="text-2xl font-bold text-gold">
                        {payment.amount.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State (if no history) */}
            {paymentHistory.length === 0 && (
              <div className="text-center py-16 animate-fade-in-up">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  No payments yet
                </h3>
                <p className="text-muted-foreground">
                  Your payment history will appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentHistory;
