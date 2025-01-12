import { StatCard } from "@/components/Dashboard/StatCard";
import { EnergyChart } from "@/components/Dashboard/EnergyChart";
import { SystemEfficiencyChart } from "@/components/Dashboard/SystemEfficiencyChart";
import { SavingsDistribution } from "@/components/Dashboard/SavingsDistribution";
import { OverviewSummary } from "@/components/Dashboard/OverviewSummary";
import { Sun, Gauge, CircleDollarSign, TreePine } from "lucide-react";
import { Card } from "@/components/ui/card";

export const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-2xl font-bold mb-4">System Overview Dashboard</h1>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Purpose</h3>
              <p className="text-muted-foreground">
                This comprehensive dashboard provides a high-level view of your entire energy
                system's performance, combining data from solar production, battery storage,
                heat pump operation, and financial metrics. It serves as your central hub for
                monitoring and understanding your home's energy ecosystem.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Data Context</h3>
              <p className="text-muted-foreground">
                The metrics displayed here represent real-time and historical data from your
                integrated energy systems. The dashboard aggregates information from multiple
                sources to present a cohesive picture of your system's performance, including
                production rates, efficiency levels, cost savings, and environmental impact.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Significance & Applications</h3>
              <p className="text-muted-foreground">
                Understanding these metrics is crucial for optimizing your energy usage and
                maximizing the benefits of your investment. The overview helps you identify
                trends, spot potential issues early, and make informed decisions about energy
                consumption patterns and system maintenance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Interpretation Guide</h3>
              <p className="text-muted-foreground">
                To get the most value from this dashboard, focus on the relationships between
                different metrics. For example, observe how solar production correlates with
                savings, or how system efficiency impacts environmental benefits. Use this
                information to adjust your energy usage patterns and optimize system performance.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard
          title="Total System Output"
          value="8,746 kWh"
          icon={<Sun className="h-6 w-6" />}
          description="Annual solar production achieving 89.3% self-consumption rate, maximizing energy independence"
        />
        <StatCard
          title="System Efficiency"
          value="93.9%"
          icon={<Gauge className="h-6 w-6" />}
          description="Combined efficiency of solar, battery, and heat pump systems, exceeding industry standards"
        />
        <StatCard
          title="Annual Savings"
          value="€3,654"
          icon={<CircleDollarSign className="h-6 w-6" />}
          description="Total financial benefits including reduced grid consumption and feed-in tariff earnings"
        />
        <StatCard
          title="Carbon Offset"
          value="4.37 tons"
          icon={<TreePine className="h-6 w-6" />}
          description="Annual CO₂ emissions reduction, equivalent to planting 201 trees or removing 3.5 cars"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <EnergyChart />
        <SystemEfficiencyChart />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SavingsDistribution />
        <OverviewSummary />
      </div>
    </div>
  );
};