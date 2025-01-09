import { addMonths, format } from "date-fns";

export interface EnergyData {
  month: string;
  production: number;
  consumption: number;
  heatPump: number;
}

export const filterDataByDateRange = (
  data: EnergyData[],
  startDate: Date,
  endDate: Date
): EnergyData[] => {
  return data.filter((item) => {
    const itemDate = new Date(item.month + " 1, 2024");
    return itemDate >= startDate && itemDate <= endDate;
  });
};

export const calculateTrend = (data: EnergyData[]): number => {
  if (data.length < 2) return 0;
  const firstValue = data[0].production;
  const lastValue = data[data.length - 1].production;
  return ((lastValue - firstValue) / firstValue) * 100;
};

export const forecastNextMonth = (data: EnergyData[]): EnergyData => {
  const lastThreeMonths = data.slice(-3);
  const avgProduction = lastThreeMonths.reduce((acc, curr) => acc + curr.production, 0) / 3;
  const avgConsumption = lastThreeMonths.reduce((acc, curr) => acc + curr.consumption, 0) / 3;
  const avgHeatPump = lastThreeMonths.reduce((acc, curr) => acc + curr.heatPump, 0) / 3;

  const lastDate = new Date(lastThreeMonths[2].month + " 1, 2024");
  const nextMonth = format(addMonths(lastDate, 1), "MMM");

  return {
    month: nextMonth,
    production: Math.round(avgProduction),
    consumption: Math.round(avgConsumption),
    heatPump: Math.round(avgHeatPump),
  };
};