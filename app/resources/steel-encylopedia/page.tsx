import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const UBs = [
  {
    UB: "1",
    Mass_per_Metre: "INV001",
    Depth_of_Section: "sds",
  },
];

const SteelEncylopedia = () => {
  return (
    <Table>
      <TableCaption>UB Section Properties</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-fit">Mass Per Metre (kg/m)</TableHead>
          <TableHead className="w-fit">Depth of Section (mm)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {UBs.map((UB) => (
          <TableRow key={UB.UB}>
            <TableCell className="font-medium">{UB.Mass_per_Metre}</TableCell>
            <TableCell className="font-medium">{UB.Depth_of_Section}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SteelEncylopedia;
