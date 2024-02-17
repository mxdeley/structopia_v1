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
import React from "react";

const Dashboard = () => {
  return (
    <div className="h-screen flex">
      <div className="h-full flex w-[50px] justify-center">
        <nav className="pt-4 flex flex-col space-y-12 justify-top items-center">
          <Link href={"#"}>
            <Menu size={28} />
          </Link>
          <Link href={"#"}>
            <LayoutDashboard size={28} />
          </Link>
          <Link href={"#"}>
            <FolderKanban size={28} />
          </Link>
          <Link href={"#"}>
            <File size={28} />
          </Link>
          <Link href={"#"}>
            <PenTool size={28} />
          </Link>
          <Link href={"#"}>
            <Sigma size={28} />
          </Link>
          <Link href={"/eurocodes"}>
            <Euro size={28} />
          </Link>
          <Link href={"/dashboard/bluebook"}>
            <Image src={"/steel.svg"} height={28} width={28} alt="basis" />
          </Link>
        </nav>
      </div>
      <div className="h-ful rounded-sm p-1 flex-1">
        <div className="p-[2px] bg-zinc-700 w-full h-full rounded-sm">
          <div className="p-[2px] bg-zinc-800 w-full h-full rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
