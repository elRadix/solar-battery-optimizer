import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  { system: "Solar", cost: 7500, savings: 30470.7 },
  { system: "Battery", cost: 10600, savings: 15369 },
  { system: "Heat Pump", cost: 15000, savings: 8970.6 },
];

export const FinancialAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Total Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€33,100</div>
            <p className="text-xs text-muted-foreground">Combined system cost</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Total Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€54,810</div>
            <p className="text-xs text-muted-foreground">2022-2037 (15 years)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65.6%</div>
            <p className="text-xs text-muted-foreground">Over 15 years</p>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Cost vs Savings by System</h2>
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

      <Card>
        <CardHeader>
          <CardTitle>Payback Timeline</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold">Solar System</h3>
              <p>Mid-2024</p>
            </div>
            <div>
              <h3 className="font-semibold">Battery System</h3>
              <p>Mid-2029</p>
            </div>
            <div>
              <h3 className="font-semibold">Heat Pump</h3>
              <p>2031</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};