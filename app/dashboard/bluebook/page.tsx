import {
  AlignCenter,
  Euro,
  File,
  FolderKanban,
  LayoutDashboard,
  Menu,
  PenTool,
  Sigma,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import React from "react";
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

const Dashboard = () => {
  return (
    <div className="h-screen flex">
      <div className="h-full flex w-[50px] justify-center"></div>
      <div className="h-ful rounded-sm p-1 flex-1">
        <div className="p-[2px] bg-zinc-700 w-full h-full rounded-[2px]">
          <div className="p-[2px] bg-zinc-800 w-full h-full rounded-[2px]">
            <div className="p-20">
              <ScrollArea className="max-w-7xl w-7xl whitespace-nowrap rounded-md border border-stone-500">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Section designation</TableHead>
                      <TableHead>Mass per metre</TableHead>
                      <TableHead>Depth of section</TableHead>
                      <TableHead>Width of section</TableHead>
                      <TableHead>
                        Thickness
                        <div>
                          <TableHead>Web</TableHead>
                          <TableHead>Flange</TableHead>
                        </div>
                      </TableHead>
                      <TableHead>Root radius</TableHead>
                      <TableHead>Depth between fillets</TableHead>
                      <TableHead>Ratios for local buckling</TableHead>
                      <TableHead>Dimensions for detailing</TableHead>
                      <TableHead>Surface area</TableHead>
                      <TableHead>Surface area</TableHead>
                      <TableHead>Surface area</TableHead>
                      <TableHead>Surface area</TableHead>
                      <TableHead>Surface area</TableHead>
                      <TableHead>Surface area</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Test</TableCell>
                      <TableCell></TableCell>
                      <TableCell>Test</TableCell>
                      <TableCell className="text-right">Test</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3}>Total</TableCell>
                      <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
