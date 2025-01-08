import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    title: "Overview",
    value: "overview",
    description: "System performance summary and key metrics"
  },
  {
    title: "Specifications",
    value: "specifications",
    description: "Detailed system specifications and configurations"
  },
  {
    title: "Energy",
    value: "energy",
    description: "Energy production, consumption, and heat pump analysis"
  },
  {
    title: "Battery",
    value: "battery",
    description: "Battery performance and storage metrics"
  },
  {
    title: "Financial",
    value: "financial",
    description: "Financial analysis and ROI metrics"
  },
  {
    title: "Environmental",
    value: "environmental",
    description: "Environmental impact and sustainability metrics"
  },
  {
    title: "My House",
    value: "house",
    description: "House-specific energy performance metrics"
  }
];

interface DashboardNavProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

export const DashboardNav = ({ activeTab, onTabChange }: DashboardNavProps) => {
  return (
    <NavigationMenu className="max-w-full justify-start mb-6">
      <NavigationMenuList className="space-x-2">
        {sections.map((section) => (
          <NavigationMenuItem key={section.value}>
            <NavigationMenuTrigger
              onClick={() => onTabChange(section.value)}
              className={cn(
                "text-sm px-3 py-2",
                activeTab === section.value && "bg-accent text-accent-foreground"
              )}
            >
              {section.title}
              <ChevronDown className="h-4 w-4 ml-1" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[220px]">
                <p className="text-sm leading-tight text-muted-foreground">
                  {section.description}
                </p>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};