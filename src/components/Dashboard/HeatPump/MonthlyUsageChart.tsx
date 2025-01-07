import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { InfoTooltip } from "../InfoTooltip";
import { heatPumpData } from "./data";

export const MonthlyUsageChart = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold">Monthly Distribution</h3>
        <InfoTooltip content="Monthly breakdown of energy consumption across different functions" />
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={heatPumpData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="heating" name="Heating" fill="#F97316" stackId="a" />
            <Bar dataKey="hotWater" name="Hot Water" fill="#0EA5E9" stackId="a" />
            <Bar dataKey="cooling" name="Cooling" fill="#8B5CF6" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};