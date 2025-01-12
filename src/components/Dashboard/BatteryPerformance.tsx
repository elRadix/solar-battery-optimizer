import { BatteryMetrics } from "./Battery/BatteryMetrics";
import { PerformanceTrends } from "./Battery/PerformanceTrends";
import { DailyUsageChart } from "./Battery/DailyUsageChart";
import { BatteryHealthSummary } from "./Battery/BatteryHealthSummary";

export const BatteryPerformance = () => {
  return (
    <div className="space-y-6">
      <BatteryMetrics />
      <div className="grid gap-6 md:grid-cols-2">
        <PerformanceTrends />
        <DailyUsageChart />
      </div>
      <BatteryHealthSummary />
    </div>
  );
};