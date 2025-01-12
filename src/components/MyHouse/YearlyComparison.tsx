import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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
      <div className="prose dark:prose-invert max-w-none mb-6">
        <h2 className="text-xl font-semibold mb-2">Annual Energy Performance Comparison</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Purpose</h3>
            <p className="text-muted-foreground">
              This detailed year-over-year analysis provides a comprehensive comparison of
              crucial energy metrics between 2023 and 2024, offering valuable insights into
              your home's evolving energy performance patterns. The visualization highlights
              key changes in total consumption, heat pump usage, and specific energy
              applications.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Data Context</h3>
            <p className="text-muted-foreground">
              The data reveals important trends in your home's energy usage, including an
              increase in total consumption from 2,476.55 kWh in 2023 to 3,452.897 kWh in
              2024. This change is primarily attributed to higher heating demands, as
              reflected in the degree days increase from 1,707.6 to 2,259.4.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Significance & Applications</h3>
            <p className="text-muted-foreground">
              By analyzing these yearly comparisons, you can gain valuable insights into
              your home's energy usage patterns and system performance. The data helps you
              evaluate the effectiveness of your energy systems under different conditions
              and identify opportunities for optimization.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Interpretation Guide</h3>
            <p className="text-muted-foreground">
              To make the most of this comparison, focus on understanding the relationships
              between different metrics. For example, observe how changes in heating degree
              days correlate with energy consumption, or how heat pump usage varies with
              seasonal demands.
            </p>
          </div>
        </div>
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