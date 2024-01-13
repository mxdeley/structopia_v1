import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between p-10 pt-40">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold">
            Your Structural Engineering{" "}
            <span className="bg-gradient-to-t to-red-800 from-red-400 inline-block text-transparent bg-clip-text">
              Assistant
            </span>
          </h1>
          <p>
            Structopia will 10x your design workflow, organise your projects and
            assist you in everyday calculations.
          </p>
          {!user ? (
            <p>
              <Link href={"/sign-up"}>
                <Button variant={"outline"} className="text-zinc-950 h-fit">
                  Sign up for free.
                </Button>
              </Link>
            </p>
          ) : (
            <p>
              <Link href={"/dashboard"}>
                <Button variant={"outline"} className="text-zinc-950 h-fit">
                  Go to Dashboard
                </Button>
              </Link>
            </p>
          )}
        </div>
        <div>
          <Image
            src={"/steel-frame.png"}
            width={1000}
            height={400}
            alt="steel-frame"
          />
        </div>
      </div>
    </main>
  );
}
