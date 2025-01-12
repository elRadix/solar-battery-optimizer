import { HouseOverview } from "./HouseOverview";
import { YearlyComparison } from "./YearlyComparison";
import { EfficiencyMetrics } from "./EfficiencyMetrics";
import { Card } from "@/components/ui/card";

export const MyHouseAnalysis = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-2xl font-bold mb-4">My House Energy Analysis</h1>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Purpose</h3>
              <p className="text-muted-foreground">
                This comprehensive dashboard provides detailed insights into your property's
                energy performance, efficiency metrics, and consumption patterns across different
                timeframes. The analysis includes both historical data and current performance
                indicators to help you understand your home's energy profile.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Data Context</h3>
              <p className="text-muted-foreground">
                Your home demonstrates exceptional energy efficiency with an A+ rating, placing
                it among the top 17% of energy-efficient properties. This achievement reflects
                the effectiveness of your energy systems and insulation measures, resulting in
                significant environmental and financial benefits.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Significance & Applications</h3>
              <p className="text-muted-foreground">
                The information presented in this dashboard empowers you to make informed
                decisions about your home's energy management. By understanding your property's
                energy profile, you can evaluate the effectiveness of current energy-saving
                measures and plan future improvements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Interpretation Guide</h3>
              <p className="text-muted-foreground">
                To get the most value from this analysis, focus on trends in energy consumption,
                efficiency ratings, and performance metrics over time. Compare your home's
                performance across different seasons and years to understand patterns and
                identify opportunities for further optimization.
              </p>
            </div>
          </div>
        </div>
      </Card>
      
      <HouseOverview />
      <YearlyComparison />
      <EfficiencyMetrics />
    </div>
  );
};