import { HeatPumpOverview } from "./HeatPump/HeatPumpOverview";
import { EnergyDistributionChart } from "./HeatPump/EnergyDistributionChart";
import { MonthlyUsageChart } from "./HeatPump/MonthlyUsageChart";
import { ConsumptionTrendChart } from "./HeatPump/ConsumptionTrendChart";
import { UsageTable } from "./HeatPump/UsageTable";

export const HeatPumpAnalysis = () => {
  return (
    <div className="space-y-6">
      <HeatPumpOverview />
      <div className="grid gap-6 md:grid-cols-2">
        <EnergyDistributionChart />
        <MonthlyUsageChart />
      </div>
      <ConsumptionTrendChart />
      <UsageTable />
    </div>
  );
};