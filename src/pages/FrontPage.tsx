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
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

      {/* Key KPIs Section */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card className="bg-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Annual Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">€3,654</p>
            <p className="text-sm text-muted-foreground">2024 Total Savings</p>
          </CardContent>
        </Card>
        
        <Card className="bg-secondary/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Energy Production</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8,746 kWh</p>
            <p className="text-sm text-muted-foreground">2024 Solar Generation</p>
          </CardContent>
        </Card>

        <Card className="bg-green-500/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">CO₂ Reduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">4.37 tons</p>
            <p className="text-sm text-muted-foreground">Carbon Offset in 2024</p>
          </CardContent>
        </Card>

        <Card className="bg-orange-500/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">System Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">93.9%</p>
            <p className="text-sm text-muted-foreground">Overall Performance</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Overview Dashboard",
            icon: Home,
            route: "/overview",
            description: "Complete snapshot of system performance, efficiency metrics, and key indicators",
          },
          {
            title: "System Specifications",
            icon: Settings,
            route: "/specifications",
            description: "Technical details about solar panels, battery storage, and heat pump systems",
          },
          {
            title: "Energy Analysis",
            icon: LineChart,
            route: "/energy",
            description: "Comprehensive analysis of energy production and consumption patterns",
          },
          {
            title: "Battery Performance",
            icon: Battery,
            route: "/battery",
            description: "Battery system efficiency, cycles, and optimization metrics",
          },
          {
            title: "Financial Analysis",
            icon: CircleDollarSign,
            route: "/financial",
            description: "Investment overview, savings, and ROI calculations",
          },
          {
            title: "Environmental Impact",
            icon: Leaf,
            route: "/environmental",
            description: "CO₂ emissions savings and sustainability metrics",
          },
          {
            title: "My House",
            icon: House,
            route: "/house",
            description: "House-specific energy performance and efficiency metrics",
          },
        ].map((item) => (
          <Card key={item.route} className="relative overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <item.icon className="h-6 w-6 text-primary" />
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{item.description}</p>
              <Link to={item.route}>
                <Button className="w-full">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FrontPage;