import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import Nav from "./Nav";
import NavSignIn from "./NavSignIn";

export default async function Header() {
  const user = await currentUser();
  if (!user)
    return (
      <header className="w-full flex justify-between items-center inset-x-0 mx-auto p-4 fixed top-0 max-w-6xl">
        <Link href={"/"} className="flex items-center space-x-2">
          <h1>Structopia</h1>
          <Image src={"/red-cube.png"} width={25} height={1} alt="Logo" />
        </Link>

        <Nav />
      </header>
    );
  return (
    <header className="max-w-6xl mx-auto flex justify-between items-center p-4">
      <Link href={"/"} className="flex items-center space-x-2">
        <h1>Structopia</h1>
        <Image src={"/red-cube.png"} width={25} height={1} alt="Logo" />
      </Link>
      <div className="text-sm flex items-center space-x-4">
        <NavSignIn />
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
