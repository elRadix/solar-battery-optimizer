import { PieChart as PieChartIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const investmentBreakdown = [
  { name: "Solar Panels", value: 7500 },
  { name: "Battery System", value: 10600 },
  { name: "Heat Pump", value: 15000 },
];

const COLORS = ["#0EA5E9", "#8B5CF6", "#22C55E"];

export const InvestmentDistribution = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <PieChartIcon className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold">Investment Distribution</h2>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={investmentBreakdown}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {investmentBreakdown.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};