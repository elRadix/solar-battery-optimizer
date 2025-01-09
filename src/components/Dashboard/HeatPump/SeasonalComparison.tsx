import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { InfoTooltip } from "../InfoTooltip";
import { heatPumpData } from "./data";

const getSeasonalData = () => {
  const seasons = {
    Winter: ["December", "January", "February"],
    Spring: ["March", "April", "May"],
    Summer: ["June", "July", "August"],
    Fall: ["September", "October", "November"],
  };

  return Object.entries(seasons).map(([season, months]) => {
    const seasonData = heatPumpData.filter(data => months.includes(data.month));
    return {
      season,
      heating: seasonData.reduce((acc, curr) => acc + curr.heating, 0) / seasonData.length,
      hotWater: seasonData.reduce((acc, curr) => acc + curr.hotWater, 0) / seasonData.length,
      cooling: seasonData.reduce((acc, curr) => acc + curr.cooling, 0) / seasonData.length,
    };
  });
};

export const SeasonalComparison = () => {
  const seasonalData = getSeasonalData();

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold">Seasonal Performance</h3>
        <InfoTooltip content="Average energy consumption patterns across seasons" />
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={seasonalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="season" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="heating" name="Heating" fill="#F97316" />
            <Bar dataKey="hotWater" name="Hot Water" fill="#0EA5E9" />
            <Bar dataKey="cooling" name="Cooling" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};