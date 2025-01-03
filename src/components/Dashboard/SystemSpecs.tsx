import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Sun, Thermometer } from "lucide-react";

export const SystemSpecs = () => {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5" />
            <CardTitle>Solar System</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Installation Date</h3>
              <p>November 13, 2020</p>
            </div>
            <div>
              <h3 className="font-semibold">Total Capacity</h3>
              <p>10.43 kWp</p>
            </div>
            <div>
              <h3 className="font-semibold">String 1</h3>
              <p>18 panels × 360W = 6.48 kWp</p>
            </div>
            <div>
              <h3 className="font-semibold">String 2</h3>
              <p>10 panels × 395W = 3.95 kWp</p>
            </div>
            <div>
              <h3 className="font-semibold">Inverter</h3>
              <p>Goodwe ET10K (10 kW)</p>
            </div>
            <div>
              <h3 className="font-semibold">System Cost</h3>
              <p>€7,500</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Battery className="h-5 w-5" />
            <CardTitle>Battery System</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Installation Date</h3>
              <p>February 2022</p>
            </div>
            <div>
              <h3 className="font-semibold">Capacity</h3>
              <p>16.56 kWh (BYD HVM 16.6)</p>
            </div>
            <div>
              <h3 className="font-semibold">System Cost</h3>
              <p>€10,600</p>
            </div>
            <div>
              <h3 className="font-semibold">Current Health</h3>
              <p>95% (as of 2025)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Thermometer className="h-5 w-5" />
            <CardTitle>Heat Pump System</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Installation Date</h3>
              <p>2024</p>
            </div>
            <div>
              <h3 className="font-semibold">System Cost</h3>
              <p>€15,000</p>
            </div>
            <div>
              <h3 className="font-semibold">SCOP</h3>
              <p>4.8</p>
            </div>
            <div>
              <h3 className="font-semibold">Energy Production</h3>
              <p>17,116.8 kWh</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};