import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, TreePine, Car, Factory } from "lucide-react";

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
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Equivalent to planting 201 trees!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <TreePine className="h-4 w-4 text-green-500" />
                  <span className="text-sm">201 trees worth of CO₂ absorption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">17,492 km not driven</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Efficiency</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <Factory className="h-4 w-4" />
                Solar Yield
              </h3>
              <p className="text-lg">838.5 kWh/kWp</p>
              <p className="text-sm text-muted-foreground">
                9.6% capacity factor
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Battery Cycle Efficiency</h3>
              <p className="text-lg">93.9%</p>
              <p className="text-sm text-muted-foreground">
                15,880% annual utilization rate
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Heat Pump SCOP</h3>
              <p className="text-lg">4.8</p>
              <p className="text-sm text-muted-foreground">
                480% energy efficiency
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Grid Interaction Metrics</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Grid Dependency Rate</h3>
              <p className="text-lg">31.3%</p>
              <p className="text-sm text-muted-foreground">
                Percentage of energy from grid
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Grid Export Rate</h3>
              <p className="text-lg">10.7%</p>
              <p className="text-sm text-muted-foreground">
                Excess energy sent to grid
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Self-Consumption Rate</h3>
              <p className="text-lg">89.3%</p>
              <p className="text-sm text-muted-foreground">
                Energy used on-site
              </p>
            </div>
            <div>
              <h3 className="font-semibold">EV Charging Efficiency</h3>
              <p className="text-lg">33.7%</p>
              <p className="text-sm text-muted-foreground">
                €885 charging cost savings
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Annual Impact Summary</h3>
            <p className="text-sm">
              Your system has achieved a remarkable 68.7% grid independence,
              with 89.3% of generated solar energy being consumed on-site.
              The combination of solar, battery, and heat pump systems has
              reduced your carbon footprint by 4,373 kg CO₂, equivalent to
              taking 3.5 cars off the road for a year.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};