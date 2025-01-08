import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  Settings,
  Battery,
  LineChart,
  CircleDollarSign,
  Leaf,
  House,
} from "lucide-react";

const FrontPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Energy Dashboard</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive overview of your home energy system performance,
          efficiency, and environmental impact
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link to="/overview">
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-6 w-6 text-primary" />
                Overview Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get a complete snapshot of your energy system performance,
                including total system output, efficiency metrics, annual savings,
                and carbon offset. View key performance indicators and trends
                through interactive charts and detailed analytics.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/specifications">
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-6 w-6 text-primary" />
                System Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Detailed technical information about your solar panels, battery
                storage, and heat pump systems. View installation dates,
                capacities, costs, and current performance metrics for each
                component of your energy system.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/energy">
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-6 w-6 text-primary" />
                Energy Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprehensive analysis of your energy production and consumption
                patterns. Monitor solar self-consumption, grid export rates, and
                heat pump performance. Includes detailed charts and statistics
                for optimal energy management.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/battery">
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Battery className="h-6 w-6 text-primary" />
                Battery Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Track your battery system's efficiency, daily cycles, and peak
                power output. View detailed metrics on charge/discharge patterns,
                system health, and optimization recommendations for maximizing
                battery lifespan and performance.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/financial">
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CircleDollarSign className="h-6 w-6 text-primary" />
                Financial Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprehensive financial overview including initial investments,
                ongoing savings, and ROI calculations. Track grid savings,
                feed-in tariff earnings, and projected financial benefits through
                detailed charts and breakdowns.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/environmental">
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                Environmental Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Measure your contribution to environmental sustainability through
                CO₂ emissions savings, equivalent trees planted, and overall
                carbon footprint reduction. View detailed metrics on your
                system's environmental benefits and efficiency ratings.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/house">
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <House className="h-6 w-6 text-primary" />
                My House
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Detailed overview of your house's energy performance, including
                EPC rating, living area metrics, and yearly consumption
                comparisons. Track efficiency improvements and view comprehensive
                house-specific energy metrics.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default FrontPage;