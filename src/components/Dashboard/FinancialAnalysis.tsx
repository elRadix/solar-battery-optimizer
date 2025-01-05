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
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BanknoteIcon,
  PiggyBank,
  TrendingUp,
  BarChart3,
  Timer,
  ArrowUpCircle,
  CircleDollarSign,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
} from "lucide-react";

const costData = [
  { system: "Solar", cost: 7500, savings: 30470.7, roi: 306.3 },
  { system: "Battery", cost: 10600, savings: 15369, roi: 44.9 },
  { system: "Heat Pump", cost: 15000, savings: 8970.6, roi: -40.2 },
];

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

const investmentBreakdown = [
  { name: "Solar Panels", value: 7500 },
  { name: "Battery System", value: 10600 },
  { name: "Heat Pump", value: 15000 },
];

const COLORS = ["#0EA5E9", "#8B5CF6", "#22C55E"];

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
                    <BanknoteIcon className="h-6 w-6 text-primary" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Combined initial cost of solar panels, battery system, and heat pump installation</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€33,100</div>
            <p className="text-xs text-muted-foreground">
              Strategically distributed across three systems
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Total Savings</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <PiggyBank className="h-6 w-6 text-success" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Cumulative savings from reduced energy costs and government incentives through 2037</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€54,810</div>
            <p className="text-xs text-muted-foreground">
              Average monthly savings: €304.50
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Net Savings</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Total savings minus initial investment, showing real financial benefit</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€21,710</div>
            <p className="text-xs text-muted-foreground">
              165.6% return on investment
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">ROI</CardTitle>
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger>
                    <ArrowUpCircle className="h-6 w-6 text-success" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Return on investment over 15 years, significantly outperforming traditional investments</p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65.6%</div>
            <p className="text-xs text-muted-foreground">
              Exceeding market average by 45%
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Cost vs Savings by System</h2>
          </div>
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
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <PieChartIcon className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Investment Distribution</h2>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={investmentBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {investmentBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Timer className="h-6 w-6 text-primary" />
              <CardTitle>System-Specific Analysis</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <CircleDollarSign className="h-5 w-5 text-success" />
                  Solar System
                </h3>
                <p className="text-lg">Mid-2024</p>
                <p className="text-sm text-muted-foreground">
                  Fastest ROI: 306.3%
                </p>
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <BanknoteIcon className="h-5 w-5 text-primary" />
                  Battery System
                </h3>
                <p className="text-lg">Mid-2029</p>
                <p className="text-sm text-muted-foreground">
                  ROI: 44.9%
                </p>
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-warning" />
                  Heat Pump
                </h3>
                <p className="text-lg">2031</p>
                <p className="text-sm text-muted-foreground">
                  ROI: -40.2% (improving)
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Financial Impact Summary</h3>
              <p className="text-sm">
                Your solar system leads with an exceptional ROI of 306.3%, followed by the battery 
                system at 44.9%. While the heat pump currently shows -40.2% ROI, it's projected to 
                become profitable by 2031. The combined system achieves a positive ROI of 65.6% over 
                15 years, demonstrating strong financial viability. Monthly savings average €304.50, 
                with peak savings during summer months.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};