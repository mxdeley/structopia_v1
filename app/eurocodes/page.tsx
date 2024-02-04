"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { UserButton } from "@clerk/nextjs";
import {
  HomeIcon,
  MessageCircleIcon,
  MessageCircleQuestionIcon,
  MoveRightIcon,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Eurocodes = () => {
  const [navWidth, setNavWidth] = useState("50px"); // initial width

  const handlePanelClick = () => {
    setNavWidth(navWidth === "50px" ? "200px" : "50px"); // toggle width
  };
  return (
    <>
      <main className="h-screen w-full flex absolute">
        <div
          className={`w-[50px] m-2 px-2 flex flex-col justify-between transition-all duration-700 ease-in-out ${
            navWidth === "200px" ? "items-start" : "items-center"
          }`}
          style={{ width: navWidth }}
        >
          <div className="space-y-6">
            <div className="flex space-x-4">
              <Image
                src={"/red-cube.png"}
                width={20}
                height={1}
                alt="Logo"
                className={`${
                  navWidth === "200px" ? "items-start" : "items-center"
                }`}
              />
              {navWidth === "200px" && (
                <h1 className="font-bold">Structopia</h1>
              )}
            </div>

            <div
              className={`${
                navWidth === "200px" ? "items-start" : "items-center"
              }`}
            >
              {navWidth !== "200px" && (
                <SearchIcon size={20} className="text-zinc-400 " />
              )}
              {navWidth === "200px" && (
                <div className="w-full h-[50px] bg-zinc-700 rounded-xl p-[2px]">
                  <div className="bg-zinc-800 rounded-xl w-full h-full flex px-3 text-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-transparent outline-none text-sm w-full"
                    />
                  </div>
                </div>
              )}
            </div>
            <nav
              className={`flex flex-col space-y-6 text-zinc-400 text-lg ${
                navWidth === "200px" ? "items-start" : "items-center"
              }`}
            >
              <Link href={"/eurocodes/basis"} className="flex space-x-4">
                <Image src={"/basis.svg"} height={20} width={20} alt="basis" />
                {navWidth === "200px" && <h1>Basis</h1>}
              </Link>
              <Link href={"#"} className="flex space-x-4">
                {" "}
                <Image
                  src={"/actions.svg"}
                  height={20}
                  width={20}
                  alt="basis"
                />
                {navWidth === "200px" && <h1>Actions</h1>}
              </Link>
              <Link href={"#"} className="flex space-x-4">
                {" "}
                <Image
                  src={"/concrete.svg"}
                  height={20}
                  width={20}
                  alt="basis"
                />
                {navWidth === "200px" && <h1>Concrete</h1>}
              </Link>
              <Link href={"#"} className="flex space-x-4">
                {" "}
                <Image src={"/steel.svg"} height={20} width={20} alt="basis" />
                {navWidth === "200px" && <h1>Steel</h1>}
              </Link>
              <Link href={"#"} className="flex space-x-4">
                <Image src={"/steel.svg"} height={20} width={20} alt="basis" />
                {navWidth === "200px" && <h1>Composite</h1>}
              </Link>
              <Link href={"#"} className="flex space-x-4">
                {" "}
                <Image src={"/timber.svg"} height={20} width={20} alt="basis" />
                {navWidth === "200px" && <h1>Timber</h1>}
              </Link>
              <Link href={"#"} className="flex space-x-4">
                {" "}
                <Image
                  src={"/masonry.svg"}
                  height={20}
                  width={20}
                  alt="basis"
                />
                {navWidth === "200px" && <h1>Masonry</h1>}
              </Link>
              <Link href={"#"} className="flex space-x-4">
                {" "}
                <Image
                  src={"/geotechnical.svg"}
                  height={20}
                  width={20}
                  alt="basis"
                />
                {navWidth === "200px" && <h1>Geotechnical</h1>}
              </Link>
              <Link href={"#"} className="flex space-x-4">
                {" "}
                <Image
                  src={"/earthquake.svg"}
                  height={20}
                  width={20}
                  alt="basis"
                />
                {navWidth === "200px" && <h1>Earthquake</h1>}
              </Link>
              <Link href={"#"} className="flex space-x-4">
                <Image
                  src={"/aluminium.svg"}
                  height={20}
                  width={20}
                  alt="basis"
                />
                {navWidth === "200px" && <h1>Aluminium</h1>}
              </Link>
              <Separator className="bg-zinc-400" />
              {navWidth !== "200px" && (
                <PanelLeftOpen
                  size={20}
                  onClick={handlePanelClick}
                  className="cursor-pointer"
                />
              )}
              {navWidth === "200px" && (
                <PanelLeftClose
                  size={20}
                  onClick={handlePanelClick}
                  className="cursor-pointer"
                />
              )}
            </nav>
          </div>

          <div className="flex flex-col items-center justify-between space-y-4 w-full">
            <Separator className="bg-zinc-400" />

            <div
              className={`flex ${
                navWidth === "200px" ? "flex-row" : "flex-col space-y-4"
              } items-center justify-around  w-full h-fit`}
            >
              <UserButton afterSignOutUrl="/" />
              <Link href={"/"} className="flex items-center justify-center">
                <HomeIcon size={20} className="text-zinc-400" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-zinc-700 rounded-md m-1 p-[2px]">
          <div className="bg-zinc-800 rounded-md w-full h-full p-4 flex">
            <div className="w-[30%] border-r border-zinc-400 space-y-4">
              <h1 className="text-xl font-bold">Documents</h1>
              <ul className="flex flex-col space-y06">
                <li className="underline">Steel Design Manual</li>
              </ul>
            </div>
            <div className="w-full border-r border-zinc-400 px-4">
              <ScrollArea className="h-full w-full">
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium leading-none">
                    Title
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur blanditiis iusto ipsum ea et architecto eaque
                    asperiores repudiandae, possimus amet, placeat, animi
                    similique? Voluptates neque deleniti nemo repudiandae at
                    magni! Dignissimos autem accusantium dolor ipsum repudiandae
                    quisquam maxime aliquid magni quia blanditiis ad, ab error
                    voluptate sit aperiam recusandae, explicabo qui officiis!
                    Quam voluptas est magnam facilis, ab vero vel. Officia odio
                    aspernatur excepturi quibusdam dicta accusantium. Sapiente
                    incidunt sequi dignissimos fuga omnis consectetur sint
                    itaque, numquam ab provident architecto dolorem alias
                    officiis in excepturi accusamus, et laboriosam dolores quae.
                    Facilis, sequi voluptatem! Perferendis distinctio modi quasi
                    excepturi dolorem tempora vero rerum id saepe sunt! Quam
                    quae odio, ab sit voluptatum doloribus maxime, quo et, odit
                    impedit in laborum quisquam! Sit exercitationem quod
                    quisquam? Ut doloribus aperiam explicabo rem suscipit
                    corrupti minus maiores necessitatibus quae quos a
                    reprehenderit velit, ullam sunt autem eaque saepe odio
                    officia harum nostrum expedita neque? Ducimus laudantium
                    beatae doloribus ratione placeat veritatis id omnis,
                    obcaecati doloremque adipisci quibusdam corporis atque eum
                    neque aperiam architecto possimus excepturi quas! Mollitia
                    facere dignissimos maiores soluta quia doloribus ipsa!
                    Optio, atque natus fuga voluptate omnis quidem sint quasi,
                    culpa adipisci, aperiam itaque iusto porro ratione
                    consequatur non eum obcaecati iste? Dolorem obcaecati
                    molestiae rem mollitia et? Praesentium, accusantium fugit.
                    Ad molestias aliquid obcaecati amet voluptatibus magnam
                    excepturi voluptatem itaque ab eligendi iure repellat,
                    libero quis recusandae esse, ea natus porro accusamus
                    quaerat dolores magni ullam! Porro iusto debitis illum!
                    Autem commodi ipsam, ut inventore odio quisquam natus ab
                    quos ea quae libero quod voluptatum, praesentium
                    reprehenderit? Voluptates, veniam laborum, enim magni,
                    impedit qui quod dignissimos corporis harum fugiat illum.
                    Sit, neque iure accusantium pariatur optio impedit
                    dignissimos eligendi. Et corporis sunt beatae maiores
                    consectetur ipsam reprehenderit quam sint perferendis
                    asperiores tempora, facere vitae nam sit architecto
                    necessitatibus, veritatis voluptatem.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit, cupiditate illum. Aut blanditiis totam debitis
                    consequatur. Nulla error porro maiores fuga nemo aspernatur
                    obcaecati consectetur, voluptatum deserunt labore quas
                    itaque? Eaque officiis magni exercitationem itaque atque,
                    omnis nam molestiae. Natus aut eaque libero exercitationem
                    asperiores saepe laborum et accusamus, suscipit sit autem
                    laboriosam, modi dolore alias commodi, explicabo aliquam
                    tenetur. Vitae exercitationem veniam in similique nemo sequi
                    repellat, a velit neque perferendis sit cupiditate porro
                    optio atque! Tenetur, assumenda esse facere quisquam, dicta
                    quae aperiam quaerat illo vel eligendi provident?
                    Consequatur molestias soluta alias quibusdam ea qui maxime
                    provident iusto in totam facilis unde rem voluptatibus et
                    tempore iure numquam necessitatibus dignissimos, voluptas
                    aperiam ut cupiditate quas tenetur sequi. Dignissimos. Nisi
                    veniam quam error vero nam voluptates non mollitia id neque
                    est. Harum beatae dolor dolorum, tenetur cumque et! Ducimus,
                    quis dolorum vitae ipsam minima quam quibusdam temporibus
                    quo molestiae! Reiciendis explicabo quod, architecto
                    similique rerum nesciunt a cumque dolorem blanditiis
                    voluptate nihil, debitis delectus unde maxime ratione at
                    nostrum, nulla alias sequi cupiditate hic accusamus fuga
                    repellendus facere. Vitae! At dicta obcaecati, dolorum
                    cumque pariatur nesciunt ut dolorem eveniet quis deserunt
                    aperiam magni, a, repellendus excepturi. Fugit harum commodi
                    nobis, facilis totam nihil voluptatum et quae ex molestiae
                    iste! Odio laudantium vel magnam tempora ducimus quod
                    consequatur voluptates quam ipsam enim recusandae neque
                    adipisci accusantium repellendus quas hic dicta quibusdam,
                    dolores ut modi at? At facilis veniam optio? Dolor. Odit,
                    pariatur consequuntur illo consectetur quibusdam suscipit ea
                    ratione aut dolorum natus eligendi iste est dignissimos
                    magni sapiente, qui dolorem ut laudantium officia. Corrupti
                    excepturi sequi repellendus delectus dolorum? Ullam? Vel
                    natus, ipsum aliquam laudantium odio odit eaque,
                    necessitatibus reprehenderit dignissimos quaerat tempora
                    expedita quod. Culpa impedit qui exercitationem, ab illo,
                    adipisci laborum perspiciatis repellat harum et dignissimos
                    ullam? Eaque. Est illo nulla minus vel, consequatur minima
                    ducimus hic eum voluptatem, eos qui quibusdam quidem amet
                    obcaecati dolorum saepe provident inventore ipsum quasi
                    cumque ipsam alias quaerat, iure esse! Aperiam! Excepturi
                    magni magnam amet dolorum, voluptate sit omnis? In maxime
                    aperiam a aliquid cumque reiciendis reprehenderit facere
                    dignissimos ab ipsam praesentium natus dolore laboriosam
                    obcaecati fuga perspiciatis, consectetur harum odit.
                    Commodi, dolore qui officiis possimus magni mollitia
                    corporis quaerat corrupti veniam accusantium unde natus
                    nulla perferendis est, labore velit eos error asperiores.
                    Voluptatibus sunt architecto consectetur, adipisci
                    recusandae doloribus laborum! Possimus nisi ex nihil
                    assumenda voluptatem vel at cum officia voluptatibus. Saepe
                    hic sapiente nihil rem ullam aliquam ipsa consequatur eius
                    aliquid animi eaque dolorem, blanditiis facere reprehenderit
                    voluptate excepturi. Amet commodi eum hic unde vero, autem
                    blanditiis, esse aliquid cupiditate fuga perspiciatis natus,
                    maiores accusantium et. Inventore aliquid ut repellat,
                    libero, facere commodi omnis asperiores ipsam reiciendis,
                    dolores cumque. Architecto natus sit aperiam illo modi ab
                    adipisci reprehenderit voluptas similique quod saepe quaerat
                    necessitatibus itaque autem nihil, pariatur corrupti quos
                    nobis officia aliquam nulla possimus sed minus eligendi!
                    Totam? Praesentium, possimus. Sit, modi inventore beatae
                    exercitationem error eligendi non voluptate consequatur?
                    Iure aperiam rerum omnis molestiae deleniti impedit, alias
                    quas ab! Delectus possimus sapiente assumenda pariatur
                    aspernatur excepturi porro. Hic exercitationem magni, non
                    quaerat facilis dicta quam cumque quia nihil, animi quas,
                    voluptatum maiores praesentium. Eaque quam totam inventore
                    adipisci explicabo minima corporis quisquam numquam sed
                    corrupti, atque esse? Accusantium labore ipsum quam facilis
                    repellat aspernatur libero itaque molestiae at nostrum rem
                    sunt fugit alias sit saepe sint natus voluptatibus,
                    blanditiis ex, unde cupiditate neque doloribus quia! Hic,
                    at? Architecto vel quisquam quidem ad ullam voluptate iure
                    veritatis nobis, magnam ratione facere ex possimus facilis
                    reprehenderit omnis voluptates eius voluptatem? Explicabo
                    magnam rerum libero possimus, incidunt veritatis odit
                    recusandae.
                  </p>
                </div>
              </ScrollArea>
            </div>
            <div className="w-[30%] px-4 space-y-4 sticky">
              <h1 className="text-xl font-bold">Chapters</h1>
              <ul className="flex flex-col space-y-6">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
                <li>Six</li>
                <li>Seven</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-zinc-50 text-zinc-950 rounded-full h-[40px] w-[40px] fixed bottom-4 right-4 flex items-center justify-center">
        <MessageCircleQuestionIcon />
      </div>
    </>
  );
};

export default Eurocodes;

// Search
{
  /* <div className="w-full h-[50px] bg-zinc-700 rounded-xl p-[2px]">
              <div className="bg-zinc-800 rounded-xl w-full h-full flex px-3 text-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
            </div> */
}

{
  /* <nav className="flex flex-col space-y-6 text-zinc-400 text-lg">
            <Link href={"#"}>NABC</Link>
            <Link href={"#"}>LABC</Link>
          </nav> */
}
