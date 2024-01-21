"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const NavSignIn = () => {
  return (
    <div className="text-sm flex items-center space-x-2">
      <nav className="flex space-x-4 items-center">
        <Link href={"/eurocodes"}>Eurocodes</Link>
        <NavigationMenu>
          <NavigationMenuItem className="list-none bg-transparent">
            <NavigationMenuTrigger className="h-fit bg-transparent">
              <Link href={"/tools"}> Tools</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="grid w-[200px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[450px] bg-zinc-700 text-zinc-50">
              <Link href={"#"}>
                <h2 className="text-left">Beam Calculator</h2>
              </Link>
              <Link href={"#"}>
                <h2 className="text-left">Truss Calculator</h2>
              </Link>
              <Link href={"#"}>
                <h2 className="text-left">Frame Calculator</h2>
              </Link>
              <Link href={"#"}>
                <h2 className="text-left">Moment of Inertia Calculator</h2>
              </Link>
              <Link href={"#"}>
                <h2 className="text-left">Free Wind Load Calculator</h2>
              </Link>
              <Link href={"#"}>
                <h2 className="text-left">Foundation Calculator</h2>
              </Link>
              <Link href={"#"}>
                <h2 className="text-left">Steel I Beam Sizes</h2>
              </Link>
              <Link href={"#"}>
                <h2 className="text-left">Base Plate Calculator</h2>
              </Link>
              <Link href={"#"}>
                <h2 className="text-left">Retaining Wall Calculator</h2>
              </Link>
              <Link href={"#"}>
                <h2 className="text-left">Connection Design Calculator</h2>
              </Link>
              <Link href={"#"}>
                <h2 className="text-left">Design Check Software</h2>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuItem className="list-none bg-transparent">
            <NavigationMenuTrigger className="h-fit bg-transparent">
              <Link href={"/resources"}>Resources</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="grid w-[150px] gap-3 p-4 md:w-[150px] md:grid-cols-2 lg:w-[150px] bg-zinc-700 text-zinc-50">
              <Link href={"/resources/examples"}>
                <h2 className="text-center">Examples</h2>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>

        <Link href={"#"}>Pricing</Link>
      </nav>
    </div>
  );
};

export default NavSignIn;
