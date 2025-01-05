import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  Battery,
  BatteryCharging,
  Gauge,
  Timer,
  Zap,
  AlertTriangle,
  Info,
  TrendingUp,
} from "lucide-react";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StatCard } from "./StatCard";

const batteryData = [
  { year: 2022, capacity: 100, cycles: 0, efficiency: 95, temperature: 25, chargeRate: 90 },
  { year: 2023, capacity: 98.3, cycles: 120, efficiency: 94.2, temperature: 26, chargeRate: 88 },
  { year: 2024, capacity: 96.7, cycles: 240, efficiency: 93.9, temperature: 24, chargeRate: 87 },
  { year: 2025, capacity: 95, cycles: 356, efficiency: 93.5, temperature: 25, chargeRate: 85 },
];

const dailyUsageData = [
  { time: "00:00", charge: 75 },
  { time: "04:00", charge: 60 },
  { time: "08:00", charge: 45 },
  { time: "12:00", charge: 80 },
  { time: "16:00", charge: 65 },
  { time: "20:00", charge: 90 },
  { time: "23:59", charge: 75 },
];

export const BatteryPerformance = () => {
  return (
    <div className="space-y-6">
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

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Performance Trends</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <Info className="h-5 w-5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Long-term battery performance metrics</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={batteryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis domain={[80, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="capacity"
                    stroke="#0EA5E9"
                    name="Capacity %"
                  />
                  <Line
                    type="monotone"
                    dataKey="efficiency"
                    stroke="#22C55E"
                    name="Cycle Efficiency %"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Daily Usage Pattern</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <Info className="h-5 w-5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>24-hour battery charge level pattern</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyUsageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="charge"
                    stroke="#8B5CF6"
                    fill="#8B5CF680"
                    name="Charge Level %"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Battery Health Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Performance Metrics
              </h3>
              <ul className="mt-2 space-y-2">
                <li className="text-sm">• Degradation rate: 1.67% per year (Better than 4% industry standard)</li>
                <li className="text-sm">• Cycle efficiency: 93.9% (Above 90% target)</li>
                <li className="text-sm">• Average daily cycles: 0.98 (Optimal usage pattern)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Health Indicators
              </h3>
              <ul className="mt-2 space-y-2">
                <li className="text-sm">• Temperature range: 24-26°C (Within optimal 20-30°C)</li>
                <li className="text-sm">• Charge rate: 85-90% (Normal range)</li>
                <li className="text-sm">• Cell balance: 98% (Excellent condition)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold flex items-center gap-2">
              <Zap className="h-5 w-5 text-success" />
              System Recommendations
            </h3>
            <p className="mt-2 text-sm">
              The battery system is performing exceptionally well, with degradation rates significantly
              better than industry standards. Current usage patterns are optimal for longevity.
              Recommended actions:
            </p>
            <ul className="mt-2 space-y-2">
              <li className="text-sm">• Continue current charge/discharge patterns</li>
              <li className="text-sm">• Next maintenance check scheduled for Q3 2024</li>
              <li className="text-sm">• Consider enabling storm mode during upcoming winter season</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};