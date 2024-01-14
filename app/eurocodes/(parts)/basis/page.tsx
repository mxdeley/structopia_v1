import { Separator } from "@/components/ui/separator";
import { UserButton } from "@clerk/nextjs";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Basis = () => {
  return (
    <main className="h-screen w-full flex">
      <div className="w-[15%] m-2 px-4 flex flex-col justify-between">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-center">Eurocode Docs</h1>
          <div>
            <div className="w-full h-[50px] bg-zinc-700 rounded-xl p-[2px]">
              <div className="bg-zinc-800 rounded-xl w-full h-full flex px-3 text-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
            </div>
          </div>
          <nav className="flex flex-col space-y-6 text-zinc-400 text-lg">
            <Link href={"/eurocodes/basis"}>Basis of Design</Link>
            <Link href={"#"}>Actions</Link>
            <Link href={"#"}>Concrete</Link>
            <Link href={"#"}>Steel</Link>
            <Link href={"#"}>Composite</Link>
            <Link href={"#"}>Timber</Link>
            <Link href={"#"}>Masonry</Link>
            <Link href={"#"}>Geotechnical</Link>
            <Link href={"#"}>Earthquake</Link>
            <Link href={"#"}>Aluminium</Link>
          </nav>
          <Separator className="bg-zinc-400" />
          <nav className="flex flex-col space-y-6 text-zinc-400 text-lg">
            <Link href={"#"}>NABC</Link>
            <Link href={"#"}>LABC</Link>
          </nav>
        </div>
        <Separator className="bg-zinc-400" />
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <HomeIcon size={20} className="text-zinc-400" />
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="w-[85%] bg-zinc-700 rounded-md m-1 p-[2px]">
        <div className=" bg-zinc-800 rounded-md  w-full h-full p-4">Basis</div>
      </div>
    </main>
  );
};

export default Basis;
