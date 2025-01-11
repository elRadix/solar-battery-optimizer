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
            Welcome to your home's comprehensive energy analysis dashboard. This section provides
            detailed insights into your property's energy performance, efficiency metrics, and
            consumption patterns. Your home demonstrates exceptional energy efficiency with an A+
            rating, showcasing the effectiveness of your energy systems and insulation measures.
            The analysis includes year-over-year comparisons, detailed efficiency metrics, and
            industry standard comparisons to help you understand your home's performance in context.
          </p>
        </div>
      </Card>
      
      <HouseOverview />
      <YearlyComparison />
      <EfficiencyMetrics />
    </div>
  );
};