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
import { useEffect, useState } from "react";

const efficiencyData = [
  { system: "Solar Panels", efficiency: 21.3, benchmark: 19.5 },
  { system: "Battery Storage", efficiency: 93.9, benchmark: 90.0 },
  { system: "Heat Pump", efficiency: 480, benchmark: 450 },
  { system: "Grid Integration", efficiency: 98.2, benchmark: 96.5 },
  { system: "Energy Management", efficiency: 94.7, benchmark: 92.0 },
];

export const SystemEfficiencyChart = () => {
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
      <h2 className="text-xl font-semibold mb-4">System Efficiency Analysis</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={efficiencyData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="system" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="efficiency" name="Current Efficiency" fill="#0EA5E9" />
            <Bar dataKey="benchmark" name="Industry Benchmark" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};