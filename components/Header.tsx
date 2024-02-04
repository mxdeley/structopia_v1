import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import NavSignIn from "./NavSignIn";

export default async function Header() {
  const user = await currentUser();
  if (!user)
    return (
      <header className="w-full flex justify-between items-center inset-x-0 mx-auto p-4 sticky top-0 px-60 bg-zinc-50/50 backdrop-blur-xl z-50">
        <Link href={"/"} className="flex items-center space-x-2">
          <h1>Structopia</h1>

          <Image src={"/red-cube.png"} width={25} height={1} alt="Logo" />
        </Link>
        <Nav />
      </header>
    );
  return (
    <header className="px-60 mx-auto flex justify-between items-center p-4 bg-zinc-50 z-50">
      <Link href={"/"} className="flex items-center space-x-2">
        <h1>Structopia</h1>
        <Image src={"/red-cube.png"} width={25} height={1} alt="Logo" />
      </Link>
      <div className="text-sm flex items-center space-x-4">
        <NavSignIn />
        {/* <UserButton afterSignOutUrl="/" /> */}
      </div>
    </header>
  );
}
