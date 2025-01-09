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
            color: "from-blue-500 to-blue-600"
          },
          {
            title: "System Specifications",
            icon: Settings,
            route: "/specifications",
            description: "Technical details about solar panels, battery storage, and heat pump systems",
            color: "from-purple-500 to-purple-600"
          },
          {
            title: "Energy Analysis",
            icon: LineChart,
            route: "/energy",
            description: "Comprehensive analysis of energy production and consumption patterns",
            color: "from-green-500 to-green-600"
          },
          {
            title: "Battery Performance",
            icon: Battery,
            route: "/battery",
            description: "Battery system efficiency, cycles, and optimization metrics",
            color: "from-yellow-500 to-yellow-600"
          },
          {
            title: "Financial Analysis",
            icon: CircleDollarSign,
            route: "/financial",
            description: "Investment overview, savings, and ROI calculations",
            color: "from-emerald-500 to-emerald-600"
          },
          {
            title: "Environmental Impact",
            icon: Leaf,
            route: "/environmental",
            description: "CO₂ emissions savings and sustainability metrics",
            color: "from-teal-500 to-teal-600"
          },
          {
            title: "My House",
            icon: House,
            route: "/house",
            description: "House-specific energy performance and efficiency metrics",
            color: "from-indigo-500 to-indigo-600"
          },
        ].map((item) => (
          <Link to={item.route} key={item.route}>
            <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-xl group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground group-hover:text-white/90 transition-colors">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center text-primary group-hover:text-white transition-colors">
                  <span className="mr-2">Explore</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FrontPage;