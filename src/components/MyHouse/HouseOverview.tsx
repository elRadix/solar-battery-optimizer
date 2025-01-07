import { Card } from "@/components/ui/card";
import { StatCard } from "../Dashboard/StatCard";
import { Home, Thermometer, Gauge, TreePine, LineChart, Zap } from "lucide-react";
import { InfoTooltip } from "../Dashboard/InfoTooltip";

export const HouseOverview = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">House Overview</h2>
        <InfoTooltip content="Key metrics about your house's energy performance and efficiency ratings" />
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
  );
};