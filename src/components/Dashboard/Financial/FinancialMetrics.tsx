import { StatCard } from "@/components/Dashboard/StatCard";
import { BanknoteIcon, PiggyBank, TrendingUp, ArrowUpCircle } from "lucide-react";

export const FinancialMetrics = () => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <StatCard
        title="Total Investment"
        value="€33,100"
        icon={<BanknoteIcon className="h-6 w-6 text-primary" />}
        description="Combined initial cost of solar panels, battery system, and heat pump installation"
      />
      <StatCard
        title="Total Savings"
        value="€54,810"
        icon={<PiggyBank className="h-6 w-6 text-success" />}
        description="Cumulative savings from reduced energy costs and government incentives through 2037"
      />
      <StatCard
        title="Net Savings"
        value="€21,710"
        icon={<TrendingUp className="h-6 w-6 text-primary" />}
        description="Total savings minus initial investment, showing real financial benefit"
      />
      <StatCard
        title="ROI"
        value="65.6%"
        icon={<ArrowUpCircle className="h-6 w-6 text-success" />}
        description="Return on investment over 15 years, significantly outperforming traditional investments"
      />
    </div>
  );
};