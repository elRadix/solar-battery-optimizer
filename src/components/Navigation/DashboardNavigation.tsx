import { useState } from "react";
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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

interface DashboardNavigationProps {
  activeSection: string;
  onSectionChange: (value: string) => void;
}

export const DashboardNavigation = ({ activeSection, onSectionChange }: DashboardNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 h-16 bg-background border-b z-50">
        <div className="container h-full mx-auto px-4 flex items-center space-x-4">
          <span className="font-semibold text-lg">Energy Dashboard</span>
          <div className="flex-1 flex items-center justify-center space-x-2">
            {menuItems.map((item) => (
              <Button
                key={item.value}
                variant={activeSection === item.value ? "default" : "ghost"}
                className="h-9"
                onClick={() => onSectionChange(item.value)}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-50">
        <div className="grid grid-cols-4 gap-1 p-2">
          {menuItems.slice(0, 3).map((item) => (
            <Button
              key={item.value}
              variant={activeSection === item.value ? "default" : "ghost"}
              className="flex flex-col items-center py-2 h-auto"
              onClick={() => onSectionChange(item.value)}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs mt-1">{item.title}</span>
            </Button>
          ))}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="flex flex-col items-center py-2 h-auto">
                <Menu className="h-5 w-5" />
                <span className="text-xs mt-1">More</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <div className="grid grid-cols-2 gap-4 pt-6">
                {menuItems.slice(3).map((item) => (
                  <Button
                    key={item.value}
                    variant={activeSection === item.value ? "default" : "ghost"}
                    className="flex flex-col items-center py-4 h-auto"
                    onClick={() => {
                      onSectionChange(item.value);
                      setIsOpen(false);
                    }}
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="text-sm mt-2">{item.title}</span>
                    <p className="text-xs text-muted-foreground mt-1 text-center">
                      {item.description}
                    </p>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};