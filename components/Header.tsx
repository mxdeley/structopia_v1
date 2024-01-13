import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

export default async function Header() {
  const user = await currentUser();
  if (!user)
    return (
      <header className="w-full flex justify-between items-center inset-x-0 mx-auto p-4 fixed top-0 max-w-6xl">
        <Link href={"/"} className="flex items-center space-x-2">
          <h1>Structopia</h1>
          <Image src={"/red-cube.png"} width={25} height={1} alt="Logo" />
        </Link>

        <div className="text-sm flex items-center space-x-2">
          <nav className="flex space-x-4">
            <Link href={"/eurocodes"}>Eurocodes</Link>
            <Link href={"#"}>Tools</Link>
            <Link href={"#"}>Resources</Link>
            <Link href={"#"}>Pricing</Link>
          </nav>
          <Link href={"/sign-in"}>
            <Button variant={"ghost"} className="h-fit">
              Login
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button variant={"outline"} className="text-zinc-950 h-fit">
              Sign Up
            </Button>
          </Link>
        </div>
      </header>
    );
  return (
    <header className="max-w-6xl mx-auto flex justify-between items-center p-4">
      <Link href={"/"} className="flex items-center space-x-2">
        <h1>Structopia</h1>
        <Image src={"/red-cube.png"} width={25} height={1} alt="Logo" />
      </Link>
      <div className="text-sm flex items-center space-x-4">
        <nav className="flex space-x-4">
          <Link href={"/eurocodes"}>Eurocodes</Link>
          <Link href={"#"}>Tools</Link>
          <Link href={"#"}>Resources</Link>
          <Link href={"#"}>Pricing</Link>
        </nav>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
