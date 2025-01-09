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
  Area,
  AreaChart,
  ReferenceArea,
  Brush,
} from "recharts";
import { useEffect, useState, useCallback } from "react";
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, TrendingUp, TrendingDown, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

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
  const [mounted, setMounted] = useState(false);
  const [dateRange, setDateRange] = useState({ start: 0, end: energyData.length - 1 });
  const [trend, setTrend] = useState<'up' | 'down' | null>(null);
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    // Calculate trend based on last 3 months
    const lastThreeMonths = energyData.slice(-3);
    const trend = lastThreeMonths[2].production > lastThreeMonths[0].production ? 'up' : 'down';
    setTrend(trend);
  }, []);

  const handleBrushChange = useCallback((data: any) => {
    if (data.startIndex !== undefined && data.endIndex !== undefined) {
      setDateRange({ start: data.startIndex, end: data.endIndex });
    }
  }, []);

  const resetZoom = useCallback(() => {
    setDateRange({ start: 0, end: energyData.length - 1 });
  }, []);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      const monthStr = format(selectedDate, 'MMM');
      const monthIndex = energyData.findIndex(d => d.month === monthStr);
      if (monthIndex !== -1) {
        setDateRange({ start: monthIndex, end: monthIndex });
      }
    }
  };

  if (!mounted) {
    return null;
  }

  const visibleData = energyData.slice(dateRange.start, dateRange.end + 1);
  const averageProduction = Math.round(visibleData.reduce((acc, curr) => acc + curr.production, 0) / visibleData.length);
  const averageConsumption = Math.round(visibleData.reduce((acc, curr) => acc + curr.consumption, 0) / visibleData.length);

  return (
    <Card className="mt-6 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Energy Production vs Consumption</h2>
          <TooltipProvider>
            <UITooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent className="max-w-sm">
                <p>This chart shows the relationship between energy production from solar panels and total household consumption, including heat pump usage. The area between production and consumption represents your energy independence.</p>
              </TooltipContent>
            </UITooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button
            variant="outline"
            size="icon"
            onClick={resetZoom}
            className="shrink-0"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          {trend && (
            <TooltipProvider>
              <UITooltip>
                <TooltipTrigger>
                  {trend === 'up' ? (
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-500" />
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Production trend is {trend === 'up' ? 'increasing' : 'decreasing'} over the last 3 months</p>
                </TooltipContent>
              </UITooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={visibleData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-background border rounded p-3 shadow-lg">
                      <p className="font-semibold mb-2">{label}</p>
                      {payload.map((entry: any) => (
                        <div key={entry.name} className="space-y-1">
                          <p style={{ color: entry.color }}>
                            {entry.name}: {entry.value} kWh
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {entry.name === "Production" 
                              ? `${Math.round((entry.value / averageProduction) * 100 - 100)}% vs average`
                              : `${Math.round((entry.value / averageConsumption) * 100 - 100)}% vs average`
                            }
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="production"
              stroke="#0EA5E9"
              fill="#0EA5E9"
              fillOpacity={0.2}
              name="Production"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="consumption"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.2}
              name="Consumption"
              strokeWidth={2}
            />
            {showDetailed && (
              <Area
                type="monotone"
                dataKey="heatPump"
                stroke="#22C55E"
                fill="#22C55E"
                fillOpacity={0.2}
                name="Heat Pump"
                strokeWidth={2}
              />
            )}
            <Brush
              dataKey="month"
              height={30}
              stroke="#8884d8"
              onChange={handleBrushChange}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};