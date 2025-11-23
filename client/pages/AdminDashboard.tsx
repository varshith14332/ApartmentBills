import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  LogOut,
  BarChart3,
  Users,
  Clock,
  TrendingUp,
  Settings,
  Download,
  AlertCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DashboardData {
  totalCollected: number;
  totalPending: number;
  flatsPaid: number;
  flatsNotPaid: number;
  month: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toISOString().slice(0, 7)
  );
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    totalCollected: 45200,
    totalPending: 12500,
    flatsPaid: 18,
    flatsNotPaid: 7,
    month: selectedMonth,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchDashboardData();
  }, [selectedMonth, navigate]);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `/api/admin/dashboard?month=${selectedMonth}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          navigate("/admin/login");
          return;
        }
        throw new Error("Failed to fetch dashboard data");
      }

      const data = await response.json();
      setDashboardData(data);
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to load dashboard",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/admin/login");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  const currentYear = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(currentYear, i, 1);
    return date.toISOString().slice(0, 7);
  });

  const formatMonth = (monthStr: string) => {
    const [year, month] = monthStr.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
  };

  const collectionPercentage = (
    (dashboardData.flatsPaid /
      (dashboardData.flatsPaid + dashboardData.flatsNotPaid)) *
    100
  ).toFixed(0);

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              Admin Dashboard
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header and Month Selector */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Treasury Dashboard
              </h1>
              <p className="text-muted-foreground">
                Monitor apartment collections and pending dues
              </p>
            </div>
            <div className="w-full md:w-48">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {formatMonth(month)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Total Collected */}
          <Card className="border border-border p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Total Collected
                </p>
                <p className="text-3xl font-bold text-foreground">
                  ₹{dashboardData.totalCollected.toLocaleString()}
                </p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              From {dashboardData.flatsPaid} flats
            </p>
          </Card>

          {/* Total Pending */}
          <Card className="border border-border p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Total Pending
                </p>
                <p className="text-3xl font-bold text-foreground">
                  ₹{dashboardData.totalPending.toLocaleString()}
                </p>
              </div>
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              From {dashboardData.flatsNotPaid} flats
            </p>
          </Card>

          {/* Flats Paid */}
          <Card className="border border-border p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Flats Paid
                </p>
                <p className="text-3xl font-bold text-foreground">
                  {dashboardData.flatsPaid}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              {collectionPercentage}% collection rate
            </p>
          </Card>

          {/* Flats Not Paid */}
          <Card className="border border-border p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Not Paid
                </p>
                <p className="text-3xl font-bold text-foreground">
                  {dashboardData.flatsNotPaid}
                </p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Out of{" "}
              {dashboardData.flatsPaid + dashboardData.flatsNotPaid} total
            </p>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/admin/monthly-payments">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center gap-2 hover:border-primary hover:text-primary"
              >
                <BarChart3 className="w-5 h-5" />
                <span className="text-sm">Monthly Table</span>
              </Button>
            </Link>

            <Link to="/admin/pending-dues">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center gap-2 hover:border-primary hover:text-primary"
              >
                <Clock className="w-5 h-5" />
                <span className="text-sm">Pending Dues</span>
              </Button>
            </Link>

            <Link to="/admin/flat-master">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center gap-2 hover:border-primary hover:text-primary"
              >
                <Building2 className="w-5 h-5" />
                <span className="text-sm">Flat Master</span>
              </Button>
            </Link>

            <Button
              variant="outline"
              className="w-full h-20 flex flex-col items-center justify-center gap-2 hover:border-primary hover:text-primary"
              disabled
            >
              <Download className="w-5 h-5" />
              <span className="text-sm">Export Report</span>
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
              <div>
                <p className="font-medium text-foreground">
                  Payment from Flat A-12
                </p>
                <p className="text-sm text-muted-foreground">
                  ₹5,000 - Maintenance
                </p>
              </div>
              <p className="text-sm text-muted-foreground">Today</p>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
              <div>
                <p className="font-medium text-foreground">
                  Payment from Flat A-18
                </p>
                <p className="text-sm text-muted-foreground">
                  ₹5,000 - Maintenance
                </p>
              </div>
              <p className="text-sm text-muted-foreground">Yesterday</p>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
              <div>
                <p className="font-medium text-foreground">
                  Payment from Flat A-5
                </p>
                <p className="text-sm text-muted-foreground">
                  ₹5,000 - Maintenance
                </p>
              </div>
              <p className="text-sm text-muted-foreground">2 days ago</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
