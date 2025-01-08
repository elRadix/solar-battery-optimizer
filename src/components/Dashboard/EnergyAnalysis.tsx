import { StatCard } from "@/components/Dashboard/StatCard";
import { EnergyChart } from "@/components/Dashboard/EnergyChart";
import { HeatPumpAnalysis } from "@/components/Dashboard/HeatPumpAnalysis";
import { Home, LineChart, CloudSun } from "lucide-react";

export const EnergyAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Self-Consumed Solar"
          value="7,813 kWh"
          icon={<Home className="h-4 w-4" />}
          description="Reducing grid dependency by 68.7% through efficient energy management and storage"
        />
        <StatCard
          title="Grid Export"
          value="933 kWh"
          icon={<LineChart className="h-4 w-4" />}
          description="€279.90 in feed-in tariff earnings, contributing to overall system ROI"
        />
        <StatCard
          title="Heat Pump Usage"
          value="3,566 kWh"
          icon={<CloudSun className="h-4 w-4" />}
          description="Producing 17,116.8 kWh of heat energy with a remarkable SCOP of 4.8"
        />
      </div>
      <EnergyChart showDetailed={true} />
      <HeatPumpAnalysis />
    </div>
  );
};