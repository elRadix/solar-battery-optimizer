import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";

export const SavingsBreakdown = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          <CardTitle>Detailed Savings Breakdown</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Solar System Savings (€30,470.70)</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Reduced grid consumption: €22,345.50</li>
              <li>Feed-in tariff earnings: €5,125.20</li>
              <li>Government incentives: €3,000.00</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Battery System Savings (€15,369.00)</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Peak demand reduction: €8,234.00</li>
              <li>Time-of-use optimization: €4,135.00</li>
              <li>Grid independence bonus: €3,000.00</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Heat Pump Savings (€8,970.60)</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Heating cost reduction: €5,870.60</li>
              <li>Cooling efficiency gains: €2,100.00</li>
              <li>Maintenance savings: €1,000.00</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Additional Benefits</h3>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Carbon credit earnings: €1,200.00</li>
            <li>Property value increase: Estimated 4-6%</li>
            <li>Energy price inflation protection: ~2.5% annual benefit</li>
          </ul>
        </div>

        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Total System Savings</h3>
          <p className="text-sm">
            Combined savings of €54,810.30 are derived from direct energy cost reductions,
            government incentives, and additional benefits. This represents a 165.6% return
            on the initial €33,100 investment over the 15-year period, averaging €304.50
            in monthly savings.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};