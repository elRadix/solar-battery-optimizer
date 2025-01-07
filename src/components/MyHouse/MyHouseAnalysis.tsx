import { HouseOverview } from "./HouseOverview";
import { YearlyComparison } from "./YearlyComparison";
import { EfficiencyMetrics } from "./EfficiencyMetrics";

export const MyHouseAnalysis = () => {
  return (
    <div className="space-y-6">
      <HouseOverview />
      <YearlyComparison />
      <EfficiencyMetrics />
    </div>
  );
};