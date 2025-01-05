import { FinancialMetrics } from "./Financial/FinancialMetrics";
import { CostSavingsChart } from "./Financial/CostSavingsChart";
import { MonthlySavingsChart } from "./Financial/MonthlySavingsChart";
import { InvestmentDistribution } from "./Financial/InvestmentDistribution";
import { SavingsBreakdown } from "./Financial/SavingsBreakdown";

export const FinancialAnalysis = () => {
  return (
    <div className="space-y-6">
      <FinancialMetrics />
      
      <div className="grid gap-6 md:grid-cols-2">
        <CostSavingsChart />
        <MonthlySavingsChart />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <InvestmentDistribution />
        <SavingsBreakdown />
      </div>
    </div>
  );
};