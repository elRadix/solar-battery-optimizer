import { ReactNode } from "react";

interface TabContentProps {
  children: ReactNode;
  value: string;
  activeTab: string;
}

export const TabContent = ({ children, value, activeTab }: TabContentProps) => {
  return (
    <div
      role="tabpanel"
      className={`p-6 ${activeTab === value ? "block" : "hidden"}`}
    >
      {children}
    </div>
  );
};