import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { InfoTooltip } from "../Dashboard/InfoTooltip";

const yearlyData = [
  {
    year: "2023",
    totalConsumption: 2476.55,
    heatPumpUsage: 1487.82,
    heating: 1292.27,
    cooling: 91,
    hotWater: 1093.28,
    degreeDays: 1707.6,
    efficiency: 11.8
  },
  {
    year: "2024",
    totalConsumption: 3452.897,
    heatPumpUsage: 3362.897,
    heating: 2363.0,
    cooling: 152,
    hotWater: 937.897,
    degreeDays: 2259.4,
    efficiency: 16.4
  }
];

export const YearlyComparison = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Yearly Energy Comparison</h2>
        <InfoTooltip content="Comparison of key energy metrics between 2023 and 2024" />
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={yearlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalConsumption" name="Total Consumption (kWh)" fill="#0EA5E9" />
            <Bar dataKey="heatPumpUsage" name="Heat Pump Usage (kWh)" fill="#8B5CF6" />
            <Bar dataKey="heating" name="Heating (kWh)" fill="#F97316" />
            <Bar dataKey="cooling" name="Cooling (kWh)" fill="#22C55E" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};