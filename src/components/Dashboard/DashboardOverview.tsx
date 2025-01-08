import { StatCard } from "@/components/Dashboard/StatCard";
import { EnergyChart } from "@/components/Dashboard/EnergyChart";
import { SystemEfficiencyChart } from "@/components/Dashboard/SystemEfficiencyChart";
import { SavingsDistribution } from "@/components/Dashboard/SavingsDistribution";
import { OverviewSummary } from "@/components/Dashboard/OverviewSummary";
import { Sun, Gauge, CircleDollarSign, TreePine } from "lucide-react";

export const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard
          title="Total System Output"
          value="8,746 kWh"
          icon={<Sun className="h-6 w-6" />}
          description="Annual solar production achieving 89.3% self-consumption rate, maximizing energy independence"
        />
        <StatCard
          title="System Efficiency"
          value="93.9%"
          icon={<Gauge className="h-6 w-6" />}
          description="Combined efficiency of solar, battery, and heat pump systems, exceeding industry standards"
        />
        <StatCard
          title="Annual Savings"
          value="€3,654"
          icon={<CircleDollarSign className="h-6 w-6" />}
          description="Total financial benefits including reduced grid consumption and feed-in tariff earnings"
        />
        <StatCard
          title="Carbon Offset"
          value="4.37 tons"
          icon={<TreePine className="h-6 w-6" />}
          description="Annual CO₂ emissions reduction, equivalent to planting 201 trees or removing 3.5 cars"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <EnergyChart />
        <SystemEfficiencyChart />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SavingsDistribution />
        <OverviewSummary />
      </div>
    </div>
  );
};