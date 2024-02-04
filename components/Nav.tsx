"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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

const Nav = () => {
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
            <NavigationMenuContent className="grid w-[450px] gap-3 p-4 md:w-[450px] md:grid-cols-2 lg:w-[450px] bg-zinc-700 text-zinc-50">
              <Link href={"/resources/examples"}>
                <h2 className="text-left">Examples</h2>
              </Link>
              <Link href={"/resources/steel-encylopedia"}>
                <h2 className="text-left">Steel Encylopedia</h2>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <Link href={"#"}>Forum</Link>
        <Link href={"#"}>Pricing</Link>
      </nav>
      <Button variant={"ghost"} className="h-fit">
        Closed Beta
      </Button>
      {/* <Link href={"/sign-in"}>
        <Button variant={"ghost"} className="h-fit">
          Login
        </Button>
      </Link>
      <Link href={"/sign-up"}>
        <Button variant={"outline"} className="text-zinc-950 h-fit">
          Sign Up
        </Button>
      </Link> */}
    </div>
  );
};

export default Nav;

// export function NavigationMenuDemo() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     <Icons.logo className="h-6 w-6" />
//                     <div className="mb-2 mt-4 text-lg font-medium">
//                       shadcn/ui
//                     </div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                       Beautifully designed components built with Radix UI and
//                       Tailwind CSS.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }
