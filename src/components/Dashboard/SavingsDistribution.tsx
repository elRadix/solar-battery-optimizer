import { Card } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

const savingsData = [
  { name: "Grid Savings", value: 2180, color: "#0EA5E9" },
  { name: "Feed-in Tariff", value: 280, color: "#8B5CF6" },
  { name: "Heat Pump Savings", value: 890, color: "#22C55E" },
  { name: "EV Charging", value: 304, color: "#F97316" },
];

export const SavingsDistribution = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Annual Savings Distribution</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={savingsData}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, value }) => `${name}: €${value}`}
              outerRadius={130}
              fill="#8884d8"
              dataKey="value"
            >
              {savingsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
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