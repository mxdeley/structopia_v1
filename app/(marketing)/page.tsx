import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";
import { MedalIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="mx-auto items-center flex flex-col justify-center ">
      <div className="flex items-center justify-center p-10 pt-40 w-full text-center ">
        <div className="space-y-4 flex flex-col justify-center text-center mx-auto">
          <div className="bg-yellow-100 w-44 flex text-center justify-center space-x-3 mx-auto items-center p-3">
            <MedalIcon className="text-yellow-600" />
            <h1 className="text-yellow-600">No.1 Assistant</h1>
          </div>
          <h1 className="text-5xl font-bold text-center">
            Your Structural Engineering{" "}
          </h1>
          <div className="w-[30rem] flex justify-center mx-auto">
            <div className="p-4 px-6 bg-red-600 text-center">
              <span className=" inline-block text-center bg-clip-text text-8xl">
                Assistant
              </span>
            </div>
          </div>

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
      </div>
      <div className="justify-between w-full -mt-44 hidden md:flex -z-50">
        <Image
          src={"/digger2.svg"}
          width={400}
          height={400}
          alt="Test"
          className="transform -scale-x-100 -z-50"
        />
        <Image
          src={"/bobcat.svg"}
          width={400}
          height={200}
          alt="Test"
          className=" mt-[5rem] -z-50"
        />
      </div>

      <div className="bg-zinc-300 w-full md:-mt-24">Test</div>
      {/* <div className="w-full flex flex-col text-center space-y-8 items-center">
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
      </div> */}
    </main>
  );
}
