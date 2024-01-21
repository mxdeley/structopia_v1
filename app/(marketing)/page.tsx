import { Button } from "@/components/ui/button";
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
      <div className="w-full flex flex-col text-center space-y-8 items-center">
        <h1 className="text-4xl font-bold">
          Sign Up Below to Join Our Weekly{" "}
          <span className="bg-gradient-to-t to-red-800 from-red-400 inline-block text-transparent bg-clip-text">
            {" "}
            Newsletter
          </span>
          .
        </h1>
        <p className="text-lg">
          You&apos;ll hear personal experiences, stories and learnings from the
          journey of a young structural engineer.
        </p>
        <input
          type="text"
          className="w-[250px] border border-red-800 bg-transparent p-2 rounded-md"
        />
        <h4>This blog lives and works after Einstein&apos;s</h4>
        <div className="flex text-center justify-center items-center space-x-4">
          <p className="text-red-800 text-xl">
            “If you can&apos;t explain it simply, you don&apos;t understand it
            well enough.”
          </p>
          <span className="text-zinc-400">- ALBERT EINSTEIN.</span>
        </div>

        <p>
          Breaking down complex or poorly documented calculations in the easiest
          possible way.
        </p>
        <p>
          This site and blog was born out of repeated questions or problems to
          which I or friends did not find simple and quick solutions online.
        </p>
      </div>
    </main>
  );
}
