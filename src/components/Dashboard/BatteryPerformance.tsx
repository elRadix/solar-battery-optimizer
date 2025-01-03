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
} from "recharts";
import { Info } from "lucide-react";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const batteryData = [
  { year: 2022, capacity: 100, cycles: 0, efficiency: 95 },
  { year: 2023, capacity: 98.3, cycles: 120, efficiency: 94.2 },
  { year: 2024, capacity: 96.7, cycles: 240, efficiency: 93.9 },
  { year: 2025, capacity: 95, cycles: 356, efficiency: 93.5 },
];

export const BatteryPerformance = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Current Capacity</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Percentage of original capacity (16.56 kWh)</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">15.73 kWh available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Total Cycles</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Complete charge-discharge cycles since installation</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">356</div>
            <p className="text-xs text-muted-foreground">5.9% of rated life</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Energy Discharged</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total energy discharged since installation</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,893 kWh</div>
            <p className="text-xs text-muted-foreground">€1,767.90 saved</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Cycle Efficiency</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Energy out vs energy in per cycle</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">93.9%</div>
            <p className="text-xs text-muted-foreground">Above industry standard</p>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Battery Performance Trends</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={batteryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[90, 100]} />
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
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Analysis</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Your Degradation Rate</h3>
              <p className="text-lg">1.67% per year</p>
              <p className="text-sm text-muted-foreground">
                Significantly better than factory standard
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Factory Standard</h3>
              <p className="text-lg">4% per year</p>
              <p className="text-sm text-muted-foreground">
                Expected degradation rate
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Your Energy per Cycle</h3>
              <p className="text-lg">16.55 kWh/cycle</p>
              <p className="text-sm text-muted-foreground">
                Higher utilization than standard
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Factory Standard</h3>
              <p className="text-lg">13.25 kWh/cycle</p>
              <p className="text-sm text-muted-foreground">
                At 80% depth of discharge
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Projected Lifespan</h3>
            <p className="text-sm">
              At current degradation rates, your battery is expected to retain
              83.3% capacity after 10 years, significantly outperforming the
              factory guarantee of 60%.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};