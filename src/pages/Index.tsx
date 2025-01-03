import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/Dashboard/StatCard";
import { TabContent } from "@/components/Dashboard/TabContent";
import {
  Battery,
  BatteryCharging,
  DollarSign,
  Home,
  Leaf,
  LineChart,
  PiggyBank,
  Sun,
  Thermometer,
} from "lucide-react";
import { EnergyChart } from "@/components/Dashboard/EnergyChart";
import { SystemSpecs } from "@/components/Dashboard/SystemSpecs";
import { BatteryPerformance } from "@/components/Dashboard/BatteryPerformance";
import { FinancialAnalysis } from "@/components/Dashboard/FinancialAnalysis";
import { EnvironmentalImpact } from "@/components/Dashboard/EnvironmentalImpact";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Energy Dashboard</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 gap-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="energy">Energy</TabsTrigger>
            <TabsTrigger value="battery">Battery</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="environmental">Environmental</TabsTrigger>
          </TabsList>

          <TabContent value="overview" activeTab={activeTab}>
            <div className="grid gap-4 md:grid-cols-3">
              <StatCard
                title="Total Solar Production"
                value="8,746 kWh"
                icon={<Sun className="h-4 w-4" />}
                description="89.3% Self-Consumed"
              />
              <StatCard
                title="Battery Health"
                value="95%"
                icon={<BatteryCharging className="h-4 w-4" />}
                description="356 Total Cycles"
              />
              <StatCard
                title="Heat Pump Efficiency"
                value="4.8 SCOP"
                icon={<Thermometer className="h-4 w-4" />}
                description="17,116.8 kWh Produced"
              />
            </div>
            <EnergyChart />
          </TabContent>

          <TabContent value="specifications" activeTab={activeTab}>
            <SystemSpecs />
          </TabContent>

          <TabContent value="energy" activeTab={activeTab}>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <StatCard
                title="Self-Consumed Solar"
                value="7,813 kWh"
                icon={<Sun className="h-4 w-4" />}
              />
              <StatCard
                title="Grid Export"
                value="933 kWh"
                icon={<LineChart className="h-4 w-4" />}
              />
              <StatCard
                title="Heat Pump Usage"
                value="3,566 kWh"
                icon={<Thermometer className="h-4 w-4" />}
              />
            </div>
            <EnergyChart showDetailed={true} />
          </TabContent>

          <TabContent value="battery" activeTab={activeTab}>
            <BatteryPerformance />
          </TabContent>

          <TabContent value="financial" activeTab={activeTab}>
            <FinancialAnalysis />
          </TabContent>

          <TabContent value="environmental" activeTab={activeTab}>
            <EnvironmentalImpact />
          </TabContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;