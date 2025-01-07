import { Card } from "@/components/ui/card";
import { StatCard } from "../Dashboard/StatCard";
import { Home, Thermometer, Gauge, TreePine } from "lucide-react";
import { InfoTooltip } from "../Dashboard/InfoTooltip";

export const HouseOverview = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">House Overview</h2>
        <InfoTooltip content="Key metrics about your house's energy performance and efficiency ratings" />
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard
          title="Living Area"
          value="210 m²"
          icon={<Home className="h-4 w-4" />}
          description="Total habitable space"
        />
        <StatCard
          title="2024 EPC Rating"
          value="16.4 kWh/m²"
          icon={<Gauge className="h-4 w-4" />}
          description="Energy Performance Certificate rating"
        />
        <StatCard
          title="Degree Days (2024)"
          value="2,259.4"
          icon={<Thermometer className="h-4 w-4" />}
          description="Heating degree days (base 16.5°C)"
        />
        <StatCard
          title="Energy Label"
          value="A+"
          icon={<TreePine className="h-4 w-4" />}
          description="Top 17% most efficient homes"
        />
      </div>
    </Card>
  );
};