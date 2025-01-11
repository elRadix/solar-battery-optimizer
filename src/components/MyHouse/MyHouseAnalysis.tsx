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
          <p className="text-muted-foreground">
            Welcome to your comprehensive home energy analysis dashboard. This section provides
            detailed insights into your property's energy performance, efficiency metrics, and
            consumption patterns across different timeframes. The analysis includes both historical
            data and current performance indicators to help you understand your home's energy profile.
          </p>
          <p className="text-muted-foreground">
            Your home demonstrates exceptional energy efficiency with an A+ rating, placing it among
            the top 17% of energy-efficient properties. This achievement reflects the effectiveness
            of your energy systems and insulation measures, resulting in significant environmental
            and financial benefits.
          </p>
          <p className="text-muted-foreground">
            Through detailed metrics, charts, and comparative analyses, you can track your home's
            energy performance over time, identify trends, and understand how various factors like
            weather conditions and system upgrades impact your overall energy efficiency. This
            information helps you make informed decisions about future energy improvements and
            validate the effectiveness of your current energy management strategies.
          </p>
        </div>
      </Card>
      
      <HouseOverview />
      <YearlyComparison />
      <EfficiencyMetrics />
    </div>
  );
};