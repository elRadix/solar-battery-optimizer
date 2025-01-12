import { StatCard } from "@/components/Dashboard/StatCard";
import { BatteryPerformance } from "@/components/Dashboard/BatteryPerformance";
import { Percent, Timer, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { batteryTranslations } from "@/translations/battery";

export const BatteryAnalysis = () => {
  const { language } = useLanguage();
  const t = batteryTranslations[language];

  return (
    <div className="space-y-6">
      {/* Introduction Section */}
      <Card>
        <CardHeader>
          <CardTitle>{t.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">{t.purpose.title}</h3>
            <p className="text-muted-foreground">{t.purpose.content}</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">{t.dataContext.title}</h3>
            <p className="text-muted-foreground">{t.dataContext.content}</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">{t.significance.title}</h3>
            <p className="text-muted-foreground">{t.significance.content}</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">{t.interpretation.title}</h3>
            <p className="text-muted-foreground">{t.interpretation.content}</p>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title={t.metrics.cycleEfficiency}
          value="93.9%"
          icon={<Percent className="h-4 w-4" />}
          description={t.metrics.efficiencyDesc}
        />
        <StatCard
          title={t.metrics.dailyCycles}
          value="0.98"
          icon={<Timer className="h-4 w-4" />}
          description={t.metrics.cyclesDesc}
        />
        <StatCard
          title={t.metrics.peakPower}
          value="9.8 kW"
          icon={<TrendingUp className="h-4 w-4" />}
          description={t.metrics.powerDesc}
        />
      </div>

      {/* Detailed Performance Analysis */}
      <BatteryPerformance />
    </div>
  );
};