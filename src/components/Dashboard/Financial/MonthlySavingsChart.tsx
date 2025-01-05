import { LineChart as LineChartIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
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

const monthlyData = [
  { month: "Jan", savings: 350 },
  { month: "Feb", savings: 420 },
  { month: "Mar", savings: 480 },
  { month: "Apr", savings: 520 },
  { month: "May", savings: 580 },
  { month: "Jun", savings: 620 },
  { month: "Jul", savings: 650 },
  { month: "Aug", savings: 630 },
  { month: "Sep", savings: 580 },
  { month: "Oct", savings: 510 },
  { month: "Nov", savings: 460 },
  { month: "Dec", savings: 380 },
];

export const MonthlySavingsChart = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <LineChartIcon className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold">Monthly Savings Trend</h2>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="savings"
              stroke="#0EA5E9"
              name="Monthly Savings (€)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};