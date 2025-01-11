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
            and financial benefits. Through the detailed metrics presented here, you can track
            improvements in your home's energy performance and identify areas for potential
            optimization.
          </p>
          <p className="text-muted-foreground">
            The information presented in this dashboard empowers you to make informed decisions
            about your home's energy management. By understanding your property's energy profile,
            you can evaluate the effectiveness of current energy-saving measures, plan future
            improvements, and monitor the impact of weather patterns and usage behaviors on your
            overall energy consumption. This knowledge is crucial for maintaining and enhancing
            your home's exceptional energy performance standards.
          </p>
          <p className="text-muted-foreground">
            To get the most value from this analysis, focus on trends in energy consumption,
            efficiency ratings, and performance metrics over time. Compare your home's performance
            across different seasons and years to understand patterns and identify opportunities
            for further optimization. The comprehensive data presented here serves as a valuable
            tool for maintaining your home's high energy efficiency standards and achieving
            long-term sustainability goals.
          </p>
        </div>
      </Card>
      
      <HouseOverview />
      <YearlyComparison />
      <EfficiencyMetrics />
    </div>
  );
};