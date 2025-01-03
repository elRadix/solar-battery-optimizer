import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/Dashboard/StatCard";
import { TabContent } from "@/components/Dashboard/TabContent";
import { Battery, Home, LineChart, PiggyBank, Sun, Thermometer } from "lucide-react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const energyData = [
  { month: "Jan", production: 450, consumption: 380 },
  { month: "Feb", production: 520, consumption: 420 },
  { month: "Mar", production: 680, consumption: 550 },
  { month: "Apr", production: 890, consumption: 710 },
  { month: "May", production: 950, consumption: 780 },
  { month: "Jun", production: 980, consumption: 820 },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Energy Dashboard</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-6 gap-4 bg-muted p-1">
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
              />
              <StatCard
                title="Battery Health"
                value="95%"
                icon={<Battery className="h-4 w-4" />}
              />
              <StatCard
                title="Heat Pump Efficiency"
                value="4.8 SCOP"
                icon={<Thermometer className="h-4 w-4" />}
              />
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Energy Production vs Consumption</h2>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="production"
                      stroke="#0EA5E9"
                      name="Production"
                    />
                    <Line
                      type="monotone"
                      dataKey="consumption"
                      stroke="#8B5CF6"
                      name="Consumption"
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabContent>

          <TabContent value="specifications" activeTab={activeTab}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Solar System</h2>
                <div className="space-y-4">
                  <StatCard
                    title="Installation Date"
                    value="November 13, 2020"
                    icon={<Sun className="h-4 w-4" />}
                  />
                  <StatCard
                    title="Capacity"
                    value="10.43 kWp"
                    description="String 1: 18 panels × 360W = 6.48 kWp
                               String 2: 10 panels × 395W = 3.95 kWp"
                  />
                  <StatCard title="Inverter" value="Goodwe ET10K" />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Battery System</h2>
                <div className="space-y-4">
                  <StatCard
                    title="Installation Date"
                    value="February 2022"
                    icon={<Battery className="h-4 w-4" />}
                  />
                  <StatCard title="Capacity" value="16.56 kWh" description="BYD HVM 16.6" />
                </div>
              </div>
            </div>
          </TabContent>

          {/* Additional tabs will be implemented in subsequent iterations */}
          <TabContent value="energy" activeTab={activeTab}>
            <div className="text-center text-gray-500">Energy tab content coming soon...</div>
          </TabContent>

          <TabContent value="battery" activeTab={activeTab}>
            <div className="text-center text-gray-500">Battery tab content coming soon...</div>
          </TabContent>

          <TabContent value="financial" activeTab={activeTab}>
            <div className="text-center text-gray-500">Financial tab content coming soon...</div>
          </TabContent>

          <TabContent value="environmental" activeTab={activeTab}>
            <div className="text-center text-gray-500">Environmental tab content coming soon...</div>
          </TabContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;