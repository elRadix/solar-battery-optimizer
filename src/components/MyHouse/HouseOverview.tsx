import { Card } from "@/components/ui/card";
import { StatCard } from "../Dashboard/StatCard";
import { Home, Thermometer, Gauge, TreePine, LineChart, Zap } from "lucide-react";

export const HouseOverview = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="prose dark:prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold mb-2">House Energy Performance Overview</h2>
          <p className="text-muted-foreground">
            This comprehensive overview presents your home's key energy performance metrics for 2024,
            including the Energy Performance Certificate (EPC) rating, living space characteristics,
            and essential efficiency indicators that define your property's energy profile.
          </p>
          <p className="text-muted-foreground">
            Your home's exceptional A+ rating and EPC value of 16.4 kWh/m² demonstrate outstanding
            energy efficiency, significantly outperforming the Flemish average of 356 kWh/m². This
            places your property in the top 17% of energy-efficient homes, showcasing the success
            of your energy optimization strategies.
          </p>
          <p className="text-muted-foreground">
            The metrics below provide insights into various aspects of your home's energy performance,
            from basic characteristics like living area to sophisticated measurements such as
            degree days and efficiency trends. These indicators help you understand how your home
            performs across different seasons and conditions, enabling informed decision-making
            for future energy improvements.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Living Area"
            value="210 m²"
            icon={<Home className="h-4 w-4" />}
            description="Total habitable space of your property"
          />
          <StatCard
            title="2024 EPC Rating"
            value="16.4 kWh/m²"
            icon={<Gauge className="h-4 w-4" />}
            description="Places your home in the top 17% most efficient properties"
          />
          <StatCard
            title="2024 Degree Days"
            value="2,259.4"
            icon={<Thermometer className="h-4 w-4" />}
            description="Base temperature of 16.5°C, indicating heating needs"
          />
          <StatCard
            title="Energy Label"
            value="A+"
            icon={<TreePine className="h-4 w-4" />}
            description="Significantly better than Flemish average of 356 kWh/m²"
          />
          <StatCard
            title="Yearly Consumption"
            value="3,452.897 kWh"
            icon={<Zap className="h-4 w-4" />}
            description="Total energy consumption for 2024"
          />
          <StatCard
            title="Efficiency Trend"
            value="+39%"
            icon={<LineChart className="h-4 w-4" />}
            description="Year-over-year efficiency improvement from 2023"
          />
        </div>
      </Card>
    </div>
  );
};