import { Card } from "@/components/ui/card";
import { StatCard } from "../Dashboard/StatCard";
import { Home, Thermometer, Gauge, TreePine, LineChart, Zap } from "lucide-react";
import { InfoTooltip } from "../Dashboard/InfoTooltip";

export const HouseOverview = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="prose dark:prose-invert max-w-none mb-6">
          <h2 className="text-xl font-semibold mb-2">House Energy Performance Overview</h2>
          <p className="text-muted-foreground">
            This section provides a comprehensive view of your home's energy performance metrics for 2024,
            including the Energy Performance Certificate (EPC) rating, living space details, and key efficiency indicators.
            The data shows your home's exceptional energy efficiency, placing it among the top 17% of properties
            with an A+ rating, significantly outperforming the Flemish average of 356 kWh/m².
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