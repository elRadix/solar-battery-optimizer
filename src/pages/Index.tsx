import { useState } from "react";
import { TabContent } from "@/components/Dashboard/TabContent";
import { DashboardNav } from "@/components/Navigation/DashboardNav";
import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { DashboardOverview } from "@/components/Dashboard/DashboardOverview";
import { SystemSpecs } from "@/components/Dashboard/SystemSpecs";
import { EnergyAnalysis } from "@/components/Dashboard/EnergyAnalysis";
import { BatteryAnalysis } from "@/components/Dashboard/BatteryAnalysis";
import { FinancialAnalysis } from "@/components/Dashboard/FinancialAnalysis";
import { EnvironmentalImpact } from "@/components/Dashboard/EnvironmentalImpact";
import { MyHouseAnalysis } from "@/components/MyHouse/MyHouseAnalysis";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <DashboardHeader />
        <DashboardNav activeTab={activeTab} onTabChange={setActiveTab} />

        <TabContent value="overview" activeTab={activeTab}>
          <DashboardOverview />
        </TabContent>

        <TabContent value="specifications" activeTab={activeTab}>
          <SystemSpecs />
        </TabContent>

        <TabContent value="energy" activeTab={activeTab}>
          <EnergyAnalysis />
        </TabContent>

        <TabContent value="battery" activeTab={activeTab}>
          <BatteryAnalysis />
        </TabContent>

        <TabContent value="financial" activeTab={activeTab}>
          <FinancialAnalysis />
        </TabContent>

        <TabContent value="environmental" activeTab={activeTab}>
          <EnvironmentalImpact />
        </TabContent>

        <TabContent value="house" activeTab={activeTab}>
          <MyHouseAnalysis />
        </TabContent>
      </div>
    </div>
  );
};

export default Index;