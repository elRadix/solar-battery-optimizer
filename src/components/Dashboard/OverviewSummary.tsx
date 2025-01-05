import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Battery, Thermometer, DollarSign, Leaf } from "lucide-react";

export const OverviewSummary = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Performance Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Solar Generation</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Your solar system has achieved 8,746 kWh annual production, operating at
            21.3% efficiency - exceeding the industry average by 1.8%. Peak
            production occurs between 11 AM and 3 PM.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Battery className="h-5 w-5 text-secondary" />
            <h3 className="font-semibold">Energy Storage</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            The battery system maintains 93.9% efficiency with 356 cycles
            completed. It provides an average of 12.4 hours of daily backup power,
            with 89.3% of stored energy being effectively utilized.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-success" />
            <h3 className="font-semibold">Heat Pump Performance</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Operating at 4.8 SCOP, your heat pump delivers 480% efficiency,
            providing optimal heating and cooling while minimizing energy
            consumption. This results in significant cost savings and reduced
            carbon emissions.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-warning" />
            <h3 className="font-semibold">Financial Benefits</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Total annual savings of €3,654, comprising reduced grid consumption
            (€2,180), feed-in tariff earnings (€280), heat pump efficiency gains
            (€890), and EV charging benefits (€304).
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-500" />
            <h3 className="font-semibold">Environmental Impact</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Your system has reduced CO₂ emissions by 4.37 tons annually,
            equivalent to planting 201 trees or removing 3.5 cars from the road.
            This contributes significantly to reducing your carbon footprint.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};