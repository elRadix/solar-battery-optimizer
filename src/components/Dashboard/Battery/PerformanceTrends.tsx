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
  { year: 2022, capacity: 100, cycles: 0, efficiency: 95, temperature: 25, chargeRate: 90 },
  { year: 2023, capacity: 98.3, cycles: 120, efficiency: 94.2, temperature: 26, chargeRate: 88 },
  { year: 2024, capacity: 96.7, cycles: 240, efficiency: 93.9, temperature: 24, chargeRate: 87 },
  { year: 2025, capacity: 95, cycles: 356, efficiency: 93.5, temperature: 25, chargeRate: 85 },
];

export const PerformanceTrends = () => {
  return (
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
  );
};