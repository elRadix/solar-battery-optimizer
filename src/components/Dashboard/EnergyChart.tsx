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
import { useEffect, useState } from "react";

const energyData = [
  { month: "Jan", production: 450, consumption: 380, heatPump: 320 },
  { month: "Feb", production: 520, consumption: 420, heatPump: 350 },
  { month: "Mar", production: 680, consumption: 550, heatPump: 310 },
  { month: "Apr", production: 890, consumption: 710, heatPump: 290 },
  { month: "May", production: 950, consumption: 780, heatPump: 270 },
  { month: "Jun", production: 980, consumption: 820, heatPump: 250 },
  { month: "Jul", production: 1020, consumption: 850, heatPump: 230 },
  { month: "Aug", production: 950, consumption: 800, heatPump: 240 },
  { month: "Sep", production: 850, consumption: 720, heatPump: 260 },
  { month: "Oct", production: 650, consumption: 580, heatPump: 290 },
  { month: "Nov", production: 480, consumption: 420, heatPump: 310 },
  { month: "Dec", production: 420, consumption: 370, heatPump: 330 },
];

interface EnergyChartProps {
  showDetailed?: boolean;
}

export const EnergyChart = ({ showDetailed = false }: EnergyChartProps) => {
  const [key, setKey] = useState(0);

  // Force a re-render when the component mounts to ensure proper sizing
  useEffect(() => {
    const timer = setTimeout(() => {
      setKey(prev => prev + 1);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="mt-6 p-6">
      <h2 className="text-xl font-semibold mb-4">
        Energy Production vs Consumption
      </h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%" key={key}>
          <LineChart
            data={energyData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="production"
              stroke="#0EA5E9"
              name="Production"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="consumption"
              stroke="#8B5CF6"
              name="Consumption"
              strokeWidth={2}
            />
            {showDetailed && (
              <Line
                type="monotone"
                dataKey="heatPump"
                stroke="#22C55E"
                name="Heat Pump"
                strokeWidth={2}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};