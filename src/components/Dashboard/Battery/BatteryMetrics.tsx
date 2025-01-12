import { StatCard } from "../StatCard";
import { Battery, BatteryCharging, Gauge, Timer } from "lucide-react";

export const BatteryMetrics = () => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <StatCard
        title="Current Capacity"
        value="95%"
        description="15.73 kWh available from original 16.56 kWh"
        icon={<Battery className="h-6 w-6" />}
      />
      <StatCard
        title="Charge Rate"
        value="7.4 kW"
        description="85% of maximum rated power"
        icon={<BatteryCharging className="h-6 w-6" />}
      />
      <StatCard
        title="Temperature"
        value="25°C"
        description="Operating within optimal range"
        icon={<Gauge className="h-6 w-6" />}
      />
      <StatCard
        title="Response Time"
        value="0.2s"
        description="Grid support reaction time"
        icon={<Timer className="h-6 w-6" />}
      />
    </div>
  );
};