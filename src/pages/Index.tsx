import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabContent } from "@/components/Dashboard/TabContent";
import { StatCard } from "@/components/Dashboard/StatCard";
import {
  Battery, BatteryCharging, DollarSign, Home, Leaf,
  LineChart, PiggyBank, Sun, Thermometer, Zap,
  BarChart3, TrendingUp, Percent, Timer, Lightbulb,
  CloudSun, CircleDollarSign, Gauge, TreePine
} from "lucide-react";
import { EnergyChart } from "@/components/Dashboard/EnergyChart";
import { SystemSpecs } from "@/components/Dashboard/SystemSpecs";
import { BatteryPerformance } from "@/components/Dashboard/BatteryPerformance";
import { FinancialAnalysis } from "@/components/Dashboard/FinancialAnalysis";
import { EnvironmentalImpact } from "@/components/Dashboard/EnvironmentalImpact";
import { OverviewSummary } from "@/components/Dashboard/OverviewSummary";
import { SystemEfficiencyChart } from "@/components/Dashboard/SystemEfficiencyChart";
import { SavingsDistribution } from "@/components/Dashboard/SavingsDistribution";
import { HeatPumpAnalysis } from "@/components/Dashboard/HeatPumpAnalysis";
import { MyHouseAnalysis } from "@/components/MyHouse/MyHouseAnalysis";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Energy Dashboard</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-7 gap-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="energy">Energy</TabsTrigger>
            <TabsTrigger value="battery">Battery</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="environmental">Environmental</TabsTrigger>
            <TabsTrigger value="house">My House</TabsTrigger>
          </TabsList>

          <TabContent value="overview" activeTab={activeTab}>
            <div className="grid gap-4 md:grid-cols-4">
              <StatCard
                title="Total System Output"
                value="8,746 kWh"
                icon={<Sun className="h-6 w-6" />}
                description="Annual solar production with 89.3% self-consumption rate"
              />
              <StatCard
                title="System Efficiency"
                value="93.9%"
                icon={<Gauge className="h-6 w-6" />}
                description="Combined efficiency of solar, battery, and heat pump systems"
              />
              <StatCard
                title="Annual Savings"
                value="€3,654"
                icon={<CircleDollarSign className="h-6 w-6" />}
                description="Total financial benefits including grid export and reduced consumption"
              />
              <StatCard
                title="Carbon Offset"
                value="4.37 tons"
                icon={<TreePine className="h-6 w-6" />}
                description="Annual CO₂ emissions reduction, equivalent to 201 trees"
              />
            </div>

            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <EnergyChart />
              <SystemEfficiencyChart />
            </div>

            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <SavingsDistribution />
              <OverviewSummary />
            </div>
          </TabContent>

          <TabContent value="specifications" activeTab={activeTab}>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <StatCard
                title="System Power Rating"
                value="10.43 kWp"
                icon={<Zap className="h-4 w-4" />}
                description="Optimal sizing for household consumption"
              />
              <StatCard
                title="Battery Capacity"
                value="16.56 kWh"
                icon={<Battery className="h-4 w-4" />}
                description="Sufficient for 24-hour autonomy"
              />
              <StatCard
                title="Heat Pump Rating"
                value="12 kW"
                icon={<Thermometer className="h-4 w-4" />}
                description="Sized for peak winter demand"
              />
            </div>
            <SystemSpecs />
          </TabContent>

          <TabContent value="energy" activeTab={activeTab}>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <StatCard
                title="Self-Consumed Solar"
                value="7,813 kWh"
                icon={<Home className="h-4 w-4" />}
                description="Reducing grid dependency by 68.7%"
              />
              <StatCard
                title="Grid Export"
                value="933 kWh"
                icon={<LineChart className="h-4 w-4" />}
                description="€279.90 in feed-in tariff earnings"
              />
              <StatCard
                title="Heat Pump Usage"
                value="3,566 kWh"
                icon={<CloudSun className="h-4 w-4" />}
                description="17,116.8 kWh heat energy produced"
              />
            </div>
            <EnergyChart showDetailed={true} />
            <HeatPumpAnalysis />
          </TabContent>

          <TabContent value="battery" activeTab={activeTab}>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <StatCard
                title="Cycle Efficiency"
                value="93.9%"
                icon={<Percent className="h-4 w-4" />}
                description="Industry-leading performance"
              />
              <StatCard
                title="Daily Cycles"
                value="0.98"
                icon={<Timer className="h-4 w-4" />}
                description="Optimal usage pattern achieved"
              />
              <StatCard
                title="Peak Power"
                value="9.8 kW"
                icon={<TrendingUp className="h-4 w-4" />}
                description="Meeting 97% of demand spikes"
              />
            </div>
            <BatteryPerformance />
          </TabContent>

          <TabContent value="financial" activeTab={activeTab}>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <StatCard
                title="Total Savings"
                value="€54,810"
                icon={<DollarSign className="h-4 w-4" />}
                description="15-year projected savings"
              />
              <StatCard
                title="ROI"
                value="65.6%"
                icon={<BarChart3 className="h-4 w-4" />}
                description="Exceeding investment projections"
              />
              <StatCard
                title="Monthly Savings"
                value="€304.50"
                icon={<PiggyBank className="h-4 w-4" />}
                description="Average over last 12 months"
              />
            </div>
            <FinancialAnalysis />
          </TabContent>

          <TabContent value="environmental" activeTab={activeTab}>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <StatCard
                title="CO₂ Reduction"
                value="4,373 kg"
                icon={<Leaf className="h-4 w-4" />}
                description="Equivalent to 201 trees planted"
              />
              <StatCard
                title="Energy Offset"
                value="8,746 kWh"
                icon={<Lightbulb className="h-4 w-4" />}
                description="68.7% grid independence achieved"
              />
              <StatCard
                title="Carbon Efficiency"
                value="0.5 kg/kWh"
                icon={<CloudSun className="h-4 w-4" />}
                description="50% better than grid average"
              />
            </div>
            <EnvironmentalImpact />
          </TabContent>

          <TabContent value="house" activeTab={activeTab}>
            <MyHouseAnalysis />
          </TabContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
