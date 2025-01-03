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
import { Info } from "lucide-react";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const costData = [
  { system: "Solar", cost: 7500, savings: 30470.7, roi: 306.3 },
  { system: "Battery", cost: 10600, savings: 15369, roi: 44.9 },
  { system: "Heat Pump", cost: 15000, savings: 8970.6, roi: -40.2 },
];

export const FinancialAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Total Investment</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Combined cost of all systems</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€33,100</div>
            <p className="text-xs text-muted-foreground">Initial investment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Total Savings</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Projected savings through 2037</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€54,810</div>
            <p className="text-xs text-muted-foreground">2022-2037 (15 years)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Net Savings</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total savings minus investment</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€21,710</div>
            <p className="text-xs text-muted-foreground">After costs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">ROI</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Return on investment over 15 years</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
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
          <CardTitle>System-Specific Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold">Solar System</h3>
              <p className="text-lg">Mid-2024</p>
              <p className="text-sm text-muted-foreground">
                Fastest payback period
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Battery System</h3>
              <p className="text-lg">Mid-2029</p>
              <p className="text-sm text-muted-foreground">
                7.5 year payback period
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Heat Pump</h3>
              <p className="text-lg">2031</p>
              <p className="text-sm text-muted-foreground">
                7 years from installation
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Financial Impact Summary</h3>
            <p className="text-sm">
              Your solar system shows the highest ROI at 306.3%, followed by the
              battery system at 44.9%. While the heat pump currently shows a
              negative ROI of -40.2%, it's projected to become profitable by 2031.
              The combined system achieves a positive ROI of 65.6% over the
              15-year period, demonstrating strong financial viability.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};