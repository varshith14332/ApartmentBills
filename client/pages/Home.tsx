import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Upload,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  Smartphone,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              Treasury Management
            </span>
          </div>
          <Link to="/admin/login">
            <Button variant="outline" size="sm">
              Admin Login
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Modern Apartment Treasury Management
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Simplify apartment financial management. Submit payment proofs
                digitally, track maintenance funds, and manage resident dues
                with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/submit-payment">
                  <Button size="lg" className="w-full sm:w-auto">
                    Submit Payment <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <Upload className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  Easy Uploads
                </h3>
                <p className="text-sm text-muted-foreground">
                  Submit payment proofs instantly
                </p>
              </div>
              <div className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  Auto Reports
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monthly summaries generated
                </p>
              </div>
              <div className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  Resident Tracking
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monitor all flat contributions
                </p>
              </div>
              <div className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  Real-time Updates
                </h3>
                <p className="text-sm text-muted-foreground">
                  Track dues in real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats / Dashboard Teaser */}
      <section className="py-12 md:py-16 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            This Month's Overview
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-blue-900/70 mb-1">
                    Total Collected
                  </p>
                  <p className="text-3xl font-bold text-blue-900">
                    ₹45,200
                  </p>
                </div>
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-xs text-blue-800/60">From 18 flats</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-orange-900/70 mb-1">
                    Total Pending
                  </p>
                  <p className="text-3xl font-bold text-orange-900">
                    ₹12,500
                  </p>
                </div>
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-xs text-orange-800/60">From 7 flats</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-green-900/70 mb-1">
                    Flats Paid
                  </p>
                  <p className="text-3xl font-bold text-green-900">18</p>
                </div>
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-xs text-green-800/60">Out of 25 total</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-red-900/70 mb-1">
                    Not Paid
                  </p>
                  <p className="text-3xl font-bold text-red-900">7</p>
                </div>
                <Building2 className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-xs text-red-800/60">Out of 25 total</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Powerful Features for Apartment Management
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Digital Payment Proofs
              </h3>
              <p className="text-muted-foreground mb-4">
                Residents submit screenshots of payment transfers. No more paper
                trails or manual verification.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Multiple payment methods
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Instant submission
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Secure uploads
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Automated Reports
              </h3>
              <p className="text-muted-foreground mb-4">
                Monthly tables auto-generated showing collection status, pending
                dues, and payment details.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  PDF/Excel export
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Payment breakdowns
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Historical tracking
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Resident Management
              </h3>
              <p className="text-muted-foreground mb-4">
                Track owners and tenants. Auto-flag overdue payments and
                cumulative pending dues.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Flat master records
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Payment history
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Dues alerts
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Admin Controls
              </h3>
              <p className="text-muted-foreground mb-4">
                Treasurer login dashboard to verify submissions, mark payments,
                and manage flat records.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Secure JWT auth
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Role-based access
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Activity logs
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                PWA & Mobile
              </h3>
              <p className="text-muted-foreground mb-4">
                Fully responsive, installable on Android and iOS. Works offline
                with sync when online.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Offline support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Mobile installable
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Fast & responsive
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Real-time Tracking
              </h3>
              <p className="text-muted-foreground mb-4">
                Track pending dues month-by-month. Get auto-alerts for overdue
                payments and maintain history.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Cumulative tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Auto-alerts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Payment status
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Simplify Your Apartment Treasury?
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Start submitting payment proofs today. It only takes a few minutes
            to upload your proof.
          </p>
          <Link to="/submit-payment">
            <Button
              size="lg"
              variant="secondary"
              className="font-semibold"
            >
              Submit Payment Proof Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-6 h-6 text-primary" />
                <span className="font-bold text-foreground">Treasury</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Modern apartment financial management made simple.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Residents</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/submit-payment" className="hover:text-primary">
                    Submit Payment
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Payment Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Admin</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/admin/login" className="hover:text-primary">
                    Admin Login
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:support@treasury.local" className="hover:text-primary">
                    support@treasury.local
                  </a>
                </li>
                <li>
                  <a href="tel:+91-90000-00000" className="hover:text-primary">
                    +91 90000 00000
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Apartment Treasury Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
