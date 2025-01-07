import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { InfoTooltip } from "../InfoTooltip";
import { heatPumpData } from "./data";

export const ConsumptionTrendChart = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold">Total Consumption Trend</h3>
        <InfoTooltip content="Monthly trend of total heat pump energy consumption" />
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={heatPumpData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="total" 
              name="Total Consumption" 
              stroke="#22C55E" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};