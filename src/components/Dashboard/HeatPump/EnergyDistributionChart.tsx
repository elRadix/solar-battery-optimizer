import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { InfoTooltip } from "../InfoTooltip";

const COLORS = ['#F97316', '#0EA5E9', '#8B5CF6'];

const distributionData = [
  { name: 'Heating', value: 2363.0 },
  { name: 'Hot Water', value: 937.897 },
  { name: 'Cooling', value: 152.0 }
];

export const EnergyDistributionChart = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold">Energy Distribution</h3>
        <InfoTooltip content="Breakdown of energy usage across heating, hot water, and cooling functions" />
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={distributionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value.toFixed(1)} kWh`}
            >
              {distributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};