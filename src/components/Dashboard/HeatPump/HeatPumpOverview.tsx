import { StatCard } from "../StatCard";
import { Card } from "@/components/ui/card";
import { Thermometer, Droplet, Snowflake } from "lucide-react";
import { InfoTooltip } from "../InfoTooltip";

export const HeatPumpOverview = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Heat Pump System Overview</h2>
        <InfoTooltip content="Your heat pump system provides heating, cooling, and hot water production. The system's efficiency varies throughout the year based on outdoor temperatures and demand patterns." />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Space Heating"
          value="2,363.0 kWh"
          icon={<Thermometer className="h-4 w-4" />}
          description="Primary heating energy consumption"
        />
        <StatCard
          title="Hot Water Production"
          value="937.9 kWh"
          icon={<Droplet className="h-4 w-4" />}
          description="Domestic hot water energy usage"
        />
        <StatCard
          title="Space Cooling"
          value="152.0 kWh"
          icon={<Snowflake className="h-4 w-4" />}
          description="Summer cooling energy consumption"
        />
      </div>
    </Card>
  );
};