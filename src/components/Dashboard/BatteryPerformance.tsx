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

const batteryData = [
  { year: 2022, capacity: 100, cycles: 0 },
  { year: 2023, capacity: 98.3, cycles: 120 },
  { year: 2024, capacity: 96.7, cycles: 240 },
  { year: 2025, capacity: 95, cycles: 356 },
];

export const BatteryPerformance = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Current Capacity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">of 16.56 kWh</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Total Cycles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">356</div>
            <p className="text-xs text-muted-foreground">Since installation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Energy Discharged</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,893 kWh</div>
            <p className="text-xs text-muted-foreground">Total since 2022</p>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Battery Degradation</h2>
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
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Factory Standards Comparison</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Your Degradation Rate</h3>
              <p>1.67% per year</p>
            </div>
            <div>
              <h3 className="font-semibold">Factory Standard</h3>
              <p>4% per year</p>
            </div>
            <div>
              <h3 className="font-semibold">Your Energy per Cycle</h3>
              <p>16.55 kWh/cycle</p>
            </div>
            <div>
              <h3 className="font-semibold">Factory Standard</h3>
              <p>13.25 kWh/cycle</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};