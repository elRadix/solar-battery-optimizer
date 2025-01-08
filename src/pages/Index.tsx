import { useState } from "react";
import { TabContent } from "@/components/Dashboard/TabContent";
import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { DashboardOverview } from "@/components/Dashboard/DashboardOverview";
import { SystemSpecs } from "@/components/Dashboard/SystemSpecs";
import { EnergyAnalysis } from "@/components/Dashboard/EnergyAnalysis";
import { BatteryAnalysis } from "@/components/Dashboard/BatteryAnalysis";
import { FinancialAnalysis } from "@/components/Dashboard/FinancialAnalysis";
import { EnvironmentalImpact } from "@/components/Dashboard/EnvironmentalImpact";
import { MyHouseAnalysis } from "@/components/MyHouse/MyHouseAnalysis";
import { DashboardNavigation } from "@/components/Navigation/DashboardNavigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <div className="pt-20 pb-20 px-4 md:px-6">
        <DashboardHeader />
        
        <TabContent value="overview" activeTab={activeSection}>
          <DashboardOverview />
        </TabContent>

        <TabContent value="specifications" activeTab={activeSection}>
          <SystemSpecs />
        </TabContent>

        <TabContent value="energy" activeTab={activeSection}>
          <EnergyAnalysis />
        </TabContent>

        <TabContent value="battery" activeTab={activeSection}>
          <BatteryAnalysis />
        </TabContent>

        <TabContent value="financial" activeTab={activeSection}>
          <FinancialAnalysis />
        </TabContent>

        <TabContent value="environmental" activeTab={activeSection}>
          <EnvironmentalImpact />
        </TabContent>

        <TabContent value="house" activeTab={activeSection}>
          <MyHouseAnalysis />
        </TabContent>
      </div>
    </div>
  );
};

export default Index;