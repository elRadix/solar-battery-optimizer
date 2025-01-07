import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { InfoTooltip } from "../Dashboard/InfoTooltip";

const efficiencyCategories = [
  { category: "Well Insulated Homes", range: "0.0024 - 0.0048" },
  { category: "Moderately Insulated Homes", range: "0.0048 - 0.0096" },
  { category: "Poorly Insulated Homes", range: "> 0.0096" }
];

export const EfficiencyMetrics = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Efficiency Analysis</h2>
        <InfoTooltip content="Detailed breakdown of energy efficiency metrics and comparisons" />
      </div>
      <div className="space-y-6">
        <div className="prose dark:prose-invert">
          <p>
            Your home achieves an impressive EPC rating of 16.4 kWh/m² per year in 2024,
            significantly lower than the Flemish average of 356 kWh/m² per year. This places
            your property in the top 17% of most energy-efficient homes, earning an A+ rating.
          </p>
        </div>
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
    </Card>
  );
};