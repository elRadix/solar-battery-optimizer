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
import { DashboardSidebar } from "@/components/Navigation/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <DashboardSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <div className="flex-1 p-6">
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
    </SidebarProvider>
  );
};

export default Index;