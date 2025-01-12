import { StatCard } from "@/components/Dashboard/StatCard";
import { BatteryPerformance } from "@/components/Dashboard/BatteryPerformance";
import { Percent, Timer, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BatteryAnalysis = () => {
  return (
    <div className="space-y-6">
      {/* Introduction Section */}
      <Card>
        <CardHeader>
          <CardTitle>Battery System Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Purpose</h3>
            <p className="text-muted-foreground">
              This section provides a comprehensive analysis of your battery system's performance, 
              efficiency, and health status. The data presented helps you understand how effectively 
              your battery system is operating and identify any potential areas for optimization.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Data Context</h3>
            <p className="text-muted-foreground">
              The metrics displayed are calculated from continuous monitoring of your battery system, 
              including charge/discharge cycles, temperature readings, and efficiency measurements. 
              These values are compared against industry standards to provide meaningful insights.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Significance</h3>
            <p className="text-muted-foreground">
              Understanding your battery system's performance is crucial for maximizing your energy 
              independence and reducing electricity costs. Regular monitoring helps ensure optimal 
              battery lifespan and identifies potential maintenance needs before they become issues.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Interpretation Guide</h3>
            <p className="text-muted-foreground">
              The key metrics shown below include cycle efficiency (how effectively the battery stores 
              and releases energy), daily cycles (optimal usage patterns), and peak power capability. 
              Green indicators suggest optimal performance, while yellow or red may indicate areas 
              needing attention.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Cycle Efficiency"
          value="93.9%"
          icon={<Percent className="h-4 w-4" />}
          description="Industry-leading performance with minimal energy loss during charge/discharge cycles"
        />
        <StatCard
          title="Daily Cycles"
          value="0.98"
          icon={<Timer className="h-4 w-4" />}
          description="Optimal usage pattern achieved, maximizing battery lifespan while meeting energy demands"
        />
        <StatCard
          title="Peak Power"
          value="9.8 kW"
          icon={<TrendingUp className="h-4 w-4" />}
          description="Meeting 97% of demand spikes, ensuring reliable power supply during high consumption periods"
        />
      </div>

      {/* Detailed Performance Analysis */}
      <BatteryPerformance />
    </div>
  );
};