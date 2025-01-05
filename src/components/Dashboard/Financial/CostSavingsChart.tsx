import { BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const costData = [
  { system: "Solar", cost: 7500, savings: 30470.7, roi: 306.3 },
  { system: "Battery", cost: 10600, savings: 15369, roi: 44.9 },
  { system: "Heat Pump", cost: 15000, savings: 8970.6, roi: -40.2 },
];

export const CostSavingsChart = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold">Cost vs Savings by System</h2>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={costData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="system" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cost" fill="#F97316" name="Initial Cost" />
            <Bar dataKey="savings" fill="#22C55E" name="Projected Savings" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};