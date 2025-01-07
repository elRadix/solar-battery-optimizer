import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { InfoTooltip } from "../InfoTooltip";
import { heatPumpData } from "./data";

export const UsageTable = () => {
  const totalHeating = heatPumpData.reduce((acc, curr) => acc + curr.heating, 0);
  const totalHotWater = heatPumpData.reduce((acc, curr) => acc + curr.hotWater, 0);
  const totalCooling = heatPumpData.reduce((acc, curr) => acc + curr.cooling, 0);

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold">Detailed Monthly Usage</h3>
        <InfoTooltip content="Monthly breakdown of energy consumption across heating, cooling, and hot water production. Values are in kilowatt-hours (kWh)." />
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month</TableHead>
              <TableHead className="text-right">Total (kWh)</TableHead>
              <TableHead className="text-right">Heating (kWh)</TableHead>
              <TableHead className="text-right">Hot Water (kWh)</TableHead>
              <TableHead className="text-right">Cooling (kWh)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {heatPumpData.map((row) => (
              <TableRow key={row.month}>
                <TableCell className="font-medium">{row.month}</TableCell>
                <TableCell className="text-right">{row.total.toFixed(3)}</TableCell>
                <TableCell className="text-right">{row.heating.toFixed(1)}</TableCell>
                <TableCell className="text-right">{row.hotWater.toFixed(3)}</TableCell>
                <TableCell className="text-right">{row.cooling.toFixed(1)}</TableCell>
              </TableRow>
            ))}
            <TableRow className="font-semibold">
              <TableCell>Total</TableCell>
              <TableCell className="text-right">
                {heatPumpData.reduce((acc, curr) => acc + curr.total, 0).toFixed(3)}
              </TableCell>
              <TableCell className="text-right">{totalHeating.toFixed(1)}</TableCell>
              <TableCell className="text-right">{totalHotWater.toFixed(3)}</TableCell>
              <TableCell className="text-right">{totalCooling.toFixed(1)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};