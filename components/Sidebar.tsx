import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { routes } from "@/constants/routes";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const Sidebar = () => {
  return (
    <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
      <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
        <div className="px-3 py-2 flex-1">
          <Link href={"/"} className="flex items-center pl-3 mb-14">
            <div className="relative w-8 h-8 mr-8">
              <Image fill alt="Logo" src={"/logo.png"} />
            </div>
            <h1 className={cn("text-2xl font-bold", montserrat.className)}>
              E-Ginee
            </h1>
          </Link>

          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
