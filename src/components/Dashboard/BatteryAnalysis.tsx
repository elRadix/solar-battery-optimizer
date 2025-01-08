import { StatCard } from "@/components/Dashboard/StatCard";
import { BatteryPerformance } from "@/components/Dashboard/BatteryPerformance";
import { Percent, Timer, TrendingUp } from "lucide-react";

export const BatteryAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Cycle Efficiency"
          value="93.9%"
          icon={<Percent className="h-4 w-4" />}
          description="Industry-leading performance with minimal energy loss during charge/discharge cycles"
        />
        <StatCard
          title="Daily Cycles"
          value="0.98"
          icon={<Timer className="h-4 w-4" />}
          description="Optimal usage pattern achieved, maximizing battery lifespan while meeting energy demands"
        />
        <StatCard
          title="Peak Power"
          value="9.8 kW"
          icon={<TrendingUp className="h-4 w-4" />}
          description="Meeting 97% of demand spikes, ensuring reliable power supply during high consumption periods"
        />
      </div>
      <BatteryPerformance />
    </div>
  );
};