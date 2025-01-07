import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  LineChart,
  Line,
} from "recharts";
import { Thermometer, Droplet, Snowflake } from "lucide-react";
import { StatCard } from "./StatCard";

const heatPumpData = [
  { month: "January", total: 683.661, heating: 610.0, hotWater: 73.661, cooling: 0 },
  { month: "February", total: 346.503, heating: 253.0, hotWater: 93.503, cooling: 0 },
  { month: "March", total: 295.889, heating: 213.0, hotWater: 82.889, cooling: 0 },
  { month: "April", total: 185.441, heating: 102.0, hotWater: 83.441, cooling: 0 },
  { month: "May", total: 97.634, heating: 9.0, hotWater: 81.634, cooling: 0 },
  { month: "June", total: 99.511, heating: 0.0, hotWater: 75.511, cooling: 24 },
  { month: "July", total: 84.765, heating: 0.0, hotWater: 44.765, cooling: 40 },
  { month: "August", total: 154.779, heating: 0.0, hotWater: 79.779, cooling: 75 },
  { month: "September", total: 113.770, heating: 30.0, hotWater: 77.770, cooling: 6 },
  { month: "October", total: 233.936, heating: 158.0, hotWater: 75.936, cooling: 0 },
  { month: "November", total: 498.077, heating: 426.0, hotWater: 72.077, cooling: 0 },
  { month: "December", total: 543.051, heating: 472.0, hotWater: 71.051, cooling: 0 }
];

const totalHeating = heatPumpData.reduce((acc, curr) => acc + curr.heating, 0);
const totalHotWater = heatPumpData.reduce((acc, curr) => acc + curr.hotWater, 0);
const totalCooling = heatPumpData.reduce((acc, curr) => acc + curr.cooling, 0);

export const HeatPumpAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Total Heating"
          value={`${totalHeating.toFixed(1)} kWh`}
          icon={<Thermometer className="h-4 w-4" />}
          description="Annual energy used for space heating"
        />
        <StatCard
          title="Hot Water Production"
          value={`${totalHotWater.toFixed(1)} kWh`}
          icon={<Droplet className="h-4 w-4" />}
          description="Energy consumed for domestic hot water"
        />
        <StatCard
          title="Cooling Usage"
          value={`${totalCooling.toFixed(1)} kWh`}
          icon={<Snowflake className="h-4 w-4" />}
          description="Summer cooling energy consumption"
        />
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Monthly Distribution</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={heatPumpData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
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

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Total Consumption Trend</h3>
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

      <Card className="p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Detailed Monthly Usage</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month</TableHead>
              <TableHead className="text-right">Total (kWh)</TableHead>
              <TableHead className="text-right">Heating (kWh)</TableHead>
              <TableHead className="text-right">Hot Water (kWh)</TableHead>
              <TableHead className="text-right">Cooling (kWh)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {heatPumpData.map((row) => (
              <TableRow key={row.month}>
                <TableCell>{row.month}</TableCell>
                <TableCell className="text-right">{row.total.toFixed(3)}</TableCell>
                <TableCell className="text-right">{row.heating.toFixed(1)}</TableCell>
                <TableCell className="text-right">{row.hotWater.toFixed(3)}</TableCell>
                <TableCell className="text-right">{row.cooling.toFixed(1)}</TableCell>
              </TableRow>
            ))}
            <TableRow className="font-semibold">
              <TableCell>Total</TableCell>
              <TableCell className="text-right">
                {heatPumpData.reduce((acc, curr) => acc + curr.total, 0).toFixed(3)}
              </TableCell>
              <TableCell className="text-right">{totalHeating.toFixed(1)}</TableCell>
              <TableCell className="text-right">{totalHotWater.toFixed(3)}</TableCell>
              <TableCell className="text-right">{totalCooling.toFixed(1)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};