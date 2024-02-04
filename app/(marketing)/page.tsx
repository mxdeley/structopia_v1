import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";
import { MedalIcon } from "lucide-react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            <div className="py-2 px-6 bg-red-600 text-center">
              <span className=" inline-block text-center bg-clip-text text-8xl tracking-tighter">
                Assistant
              </span>
            </div>
          </div>

          <p>
            Structopia will 10x your design workflow, organise your projects and
            assist you in everyday calculations.
          </p>
          <p>
            <Button variant={"outline"} className="text-zinc-950 h-fit">
              Closed Beta
            </Button>
          </p>
          {/* {!user ? (
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
          )} */}
        </div>
      </div>
      <div className="justify-between w-full -mt-44 hidden md:flex z-50">
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

      <div className="bg-zinc-300 w-full md:-mt-24">
        <div className="flex flex-col py-12">
          <h2 className="text-center">Structopia Replaces...</h2>
          <div className="flex w-full max-w-6xl mx-auto justify-between">
            <Image src={"/asana.svg"} width={100} height={100} alt="asana" />
            <Image src={"/skyciv.svg"} width={150} height={150} alt="skyciv" />
            <Image src={"/monday.svg"} width={100} height={100} alt="monday" />
            <Image
              src={"/clickup.svg"}
              width={150}
              height={150}
              alt="clickup"
            />
            <Image src={"/tedds.svg"} width={100} height={100} alt="tedds" />
          </div>
        </div>
      </div>

      <div className="bg-zinc-300 w-full py-6 relative pb-24 z-1">
        <div className="bg-zinc-300 flex max-w-6xl mx-auto">
          <div className="flex-1 flex-col space-y-4 py-4 pr-4">
            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-bold">Project Management</h2>
              <p className="text-sm">
                Infinitim is a renowned digital marketing agency that leverages
                cutting-edge technology to drive data-informed strategies,
                establishing our competitive edge. We are the trusted choice for
                unicorn startups, and internet enterprises who seek to unlock
                their digital potential and achieve remarkable success.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-bold">File Organisation</h2>
              <p className="text-sm">
                Infinitim is a renowned digital marketing agency that leverages
                cutting-edge technology to drive data-informed strategies,
                establishing our competitive edge. We are the trusted choice for
                unicorn startups, and internet enterprises who seek to unlock
                their digital potential and achieve remarkable success.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-bold">Calculations</h2>
              <p className="text-sm">
                Infinitim is a renowned digital marketing agency that leverages
                cutting-edge technology to drive data-informed strategies,
                establishing our competitive edge. We are the trusted choice for
                unicorn startups, and internet enterprises who seek to unlock
                their digital potential and achieve remarkable success.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-bold">Eurocodes</h2>
              <p className="text-sm">
                Infinitim is a renowned digital marketing agency that leverages
                cutting-edge technology to drive data-informed strategies,
                establishing our competitive edge. We are the trusted choice for
                unicorn startups, and internet enterprises who seek to unlock
                their digital potential and achieve remarkable success.
              </p>
            </div>
          </div>
          <div className="w-[45%] flex space-x-3 p-4">
            <div className="bg-zinc-400 h-full w-2 rounded-full"></div>
            <div className="bg-zinc-400 h-full w-full rounded-lg"></div>
          </div>
        </div>
        <Image
          src={"/caliper.svg"}
          height={200}
          width={200}
          alt="caliper"
          className="absolute z-30"
          style={{
            top: "-10%",
            right: "0%",
          }}
        />
        <Image
          src={"/helmet.svg"}
          height={200}
          width={200}
          alt="caliper"
          className="absolute z-30"
          style={{
            top: "70%",
            left: "0%",
          }}
        />
      </div>
      <div className="flex flex-col justify-center py-12 space-y-8">
        <h1 className="text-center text-3xl font-bold">
          Design Calculations for All Members
        </h1>
        <Image src={"/elements.svg"} height={500} width={1000} alt="Elements" />
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col justify-center mx-auto space-y-20">
          <div className="items-center">
            <h1 className="text-left text-6xl w-[38rem] font-[500]">
              Structopia lets you quickly search the Eurocodes
            </h1>
          </div>

          <Image src={"/map.svg"} width={800} height={300} alt="map" />
        </div>
        <div className="left-0">
          <Image
            src={"/eurocode_example.png"}
            height={200}
            width={600}
            alt="eurocodes"
          />
        </div>
      </div>
      <div className="bg-zinc-950 w-full py-12 flex flex-col space-y-8 mt-12">
        <div className="w-[40rem] flex justify-center mx-auto">
          <div className="py-2 px-6 bg-red-600 text-center">
            <span className=" inline-block text-center bg-clip-text text-6xl tracking-tighter text-zinc-50">
              Automate Calculations
            </span>
          </div>
        </div>
        <div className="w-1/2 text-zinc-50 mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I save my calculations?</AccordionTrigger>
              <AccordionContent>
                Yes. You will be able to save your calculations as a PDF.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Will the calcs abide to Eurocode?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What materials will be available?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <footer className="footer p-10 bg-zinc-950 text-zinc-50 w-full">
        @Structopia
      </footer>
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
