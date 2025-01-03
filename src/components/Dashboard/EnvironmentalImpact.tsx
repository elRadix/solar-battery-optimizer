import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";

export const EnvironmentalImpact = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-500" />
              <CardTitle>CO₂ Emissions Saved</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-2">4,373 kg</div>
            <p className="text-muted-foreground">
              That's equivalent to planting 201 trees!
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Efficiency</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <h3 className="font-semibold">Solar Yield</h3>
              <p>838.5 kWh/kWp</p>
            </div>
            <div>
              <h3 className="font-semibold">Battery Cycle Efficiency</h3>
              <p>93.9%</p>
            </div>
            <div>
              <h3 className="font-semibold">Heat Pump SCOP</h3>
              <p>4.8</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Grid Interaction Metrics</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Grid Dependency Rate</h3>
              <p>31.3%</p>
            </div>
            <div>
              <h3 className="font-semibold">Grid Export Rate</h3>
              <p>10.7%</p>
            </div>
            <div>
              <h3 className="font-semibold">Self-Consumption Rate</h3>
              <p>89.3%</p>
            </div>
            <div>
              <h3 className="font-semibold">EV Charging Efficiency</h3>
              <p>33.7%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};