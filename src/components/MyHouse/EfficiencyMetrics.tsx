import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { InfoTooltip } from "../Dashboard/InfoTooltip";

const efficiencyCategories = [
  { category: "Well Insulated Homes", range: "0.0024 - 0.0048" },
  { category: "Moderately Insulated Homes", range: "0.0048 - 0.0096" },
  { category: "Poorly Insulated Homes", range: "> 0.0096" }
];

const yearlyMetrics = [
  {
    year: "2023",
    degreeDays: "1,707.6",
    consumption: "2,476.55",
    efficiency: "11.8",
    label: "A+"
  },
  {
    year: "2024",
    degreeDays: "2,259.4",
    consumption: "3,452.897",
    efficiency: "16.4",
    label: "A+"
  }
];

export const EfficiencyMetrics = () => {
  return (
    <Card className="p-6">
      <div className="prose dark:prose-invert max-w-none mb-6">
        <h2 className="text-xl font-semibold mb-2">Detailed Efficiency Analysis</h2>
        <p className="text-muted-foreground">
          This section provides an in-depth analysis of your home's energy efficiency metrics,
          comparing performance across years and against industry standards. The analysis includes
          degree days (indicating heating/cooling needs), consumption patterns, and efficiency ratings.
          Your home maintains an exceptional A+ rating with an EPC value of 16.4 kWh/m² in 2024,
          despite increased heating demands, demonstrating the effectiveness of your energy systems
          and insulation.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="prose dark:prose-invert">
          <p>
            Your home achieves an impressive EPC rating of 16.4 kWh/m² per year in 2024,
            significantly lower than the Flemish average of 356 kWh/m² per year. This places
            your property in the top 17% of most energy-efficient homes, earning an A+ rating.
          </p>
          <p>
            The increase in consumption from 2023 (11.8 kWh/m²) to 2024 (16.4 kWh/m²) is primarily
            due to higher heating demands, reflected in the 32% increase in degree days (2,259.4 vs 1,707.6).
            Despite this increase, your home maintains excellent efficiency metrics.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Yearly Performance Metrics</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Degree Days (16.5°C)</TableHead>
                <TableHead>Total Consumption (kWh)</TableHead>
                <TableHead>Efficiency (kWh/m²)</TableHead>
                <TableHead>EPC Label</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {yearlyMetrics.map((metric) => (
                <TableRow key={metric.year}>
                  <TableCell className="font-medium">{metric.year}</TableCell>
                  <TableCell>{metric.degreeDays}</TableCell>
                  <TableCell>{metric.consumption}</TableCell>
                  <TableCell>{metric.efficiency}</TableCell>
                  <TableCell>{metric.label}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Industry Comparison</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Home Category</TableHead>
                <TableHead>Consumption Range (kWh/m²/degree day)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {efficiencyCategories.map((category) => (
                <TableRow key={category.category}>
                  <TableCell className="font-medium">{category.category}</TableCell>
                  <TableCell>{category.range}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  );
};