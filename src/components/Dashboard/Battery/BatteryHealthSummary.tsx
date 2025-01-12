import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, Zap } from "lucide-react";

export const BatteryHealthSummary = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Battery Health Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            This comprehensive health summary provides an overview of your battery system's current 
            condition and performance metrics. Regular monitoring of these indicators helps predict 
            and prevent potential issues while ensuring optimal system operation.
          </p>
          <p className="text-muted-foreground">
            The analysis combines historical data with current measurements to provide actionable 
            insights and recommendations for maintaining peak performance of your battery system.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Performance Metrics
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="text-sm">• Degradation rate: 1.67% per year (Better than 4% industry standard)</li>
              <li className="text-sm">• Cycle efficiency: 93.9% (Above 90% target)</li>
              <li className="text-sm">• Average daily cycles: 0.98 (Optimal usage pattern)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Health Indicators
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="text-sm">• Temperature range: 24-26°C (Within optimal 20-30°C)</li>
              <li className="text-sm">• Charge rate: 85-90% (Normal range)</li>
              <li className="text-sm">• Cell balance: 98% (Excellent condition)</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-semibold flex items-center gap-2">
            <Zap className="h-5 w-5 text-success" />
            System Recommendations
          </h3>
          <p className="mt-2 text-sm">
            The battery system is performing exceptionally well, with degradation rates significantly
            better than industry standards. Current usage patterns are optimal for longevity.
            Recommended actions:
          </p>
          <ul className="mt-2 space-y-2">
            <li className="text-sm">• Continue current charge/discharge patterns</li>
            <li className="text-sm">• Next maintenance check scheduled for Q3 2024</li>
            <li className="text-sm">• Consider enabling storm mode during upcoming winter season</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};