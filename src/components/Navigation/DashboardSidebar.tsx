import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Settings,
  Battery,
  Sun,
  PiggyBank,
  Leaf,
  Home,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Overview",
    value: "overview",
    icon: LayoutDashboard,
    description: "System performance summary and key metrics"
  },
  {
    title: "Specifications",
    value: "specifications",
    icon: Settings,
    description: "Detailed system specifications and configurations"
  },
  {
    title: "Energy",
    value: "energy",
    icon: Sun,
    description: "Energy production, consumption, and heat pump analysis"
  },
  {
    title: "Battery",
    value: "battery",
    icon: Battery,
    description: "Battery performance and storage metrics"
  },
  {
    title: "Financial",
    value: "financial",
    icon: PiggyBank,
    description: "Financial analysis and ROI metrics"
  },
  {
    title: "Environmental",
    value: "environmental",
    icon: Leaf,
    description: "Environmental impact and sustainability metrics"
  },
  {
    title: "My House",
    value: "house",
    icon: Home,
    description: "House-specific energy performance metrics"
  }
];

interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (value: string) => void;
}

export const DashboardSidebar = ({ activeSection, onSectionChange }: DashboardSidebarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log("Mobile menu toggled:", !isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMobileMenu}
          className="bg-background"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <Sidebar
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.value}>
                    <SidebarMenuButton
                      onClick={() => {
                        onSectionChange(item.value);
                        setIsMobileMenuOpen(false); // Close mobile menu after selection
                      }}
                      className={activeSection === item.value ? "bg-accent" : ""}
                    >
                      <item.icon className="h-4 w-4 mr-2" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
};