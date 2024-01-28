"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  XMarkIcon,
  Bars2Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { useGlobalContext } from "@/context";

import { Avatar, HoverButton } from ".";
import NavLink from "./NavBar/NavLink";
import { siteName } from "@/lib";
import clsx from "clsx";
import { navlinks } from "@/lib/data";

export default function NavBar() {
  const { isMenuClicked, setIsMenuClicked } = useGlobalContext();
  const pathname = usePathname();
  console.log(pathname);

  const toggleMenu = () => {
    setIsMenuClicked((prev) => !prev);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 dark:bg-black text-red-900 h-[65px] lg:h-[70px] w-full flex items-center justify-center z-50 transition-all duration-200",
        {
          "backdrop-blur-lg shadow-sm bg-opacity-30": !isMenuClicked,
          "bg-white": isMenuClicked,
        }
      )}
    >
      <header className="container p-4 md:p-0 md:px-1 flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4 md:gap-6">
        <div className="h-full w-full md:flex-1 flex items-center justify-between">
          <div className="h-full w-fit flex items-center gap-5">
            <button
              className="opacity-80 hover:opacity-100 dark:text-red-600 md:hidden"
              onClick={toggleMenu}
            >
              {isMenuClicked ? (
                <XMarkIcon className="h-6" />
              ) : (
                <Bars2Icon className="h-6" />
              )}
            </button>

            <Link
              href="/"
              onClick={() => setIsMenuClicked(false)}
              className="flex gap-2 sm:gap-2 items-center md:gap-1 lg:gap-3 font-serif"
            >
              <span className="font-bold dark:text-red-600 text-2xl sm:text-3xl lg:text-4xl">
                <h1>{siteName.split(" ")[0]}</h1>
              </span>
            </Link>
          </div>

          <HoverButton
            icon1={<Avatar />}
            icon2={
              <ChevronDownIcon className="group-hover:-rotate-180 h-5 text-sm transition-all duration-300" />
            }
          />
        </div>

        <aside
          className={`${
            !isMenuClicked
              ? "h-0 md:h-full -z-10 opacity-0 md:opacity-100 md:z-50"
              : "h-full md:top-0 opacity-100"
          } border-t border-red-100 dark:border-gray-800 md:border-0 left-0 overflow-hidden font-sans dark:text-gray-300 md:dark:font-semibold backdrop-blur md:backdrop-blur-none bg-gradient-to-b md:bg-none from-white dark:from-black from-20% md:bg-transparent fixed md:relative top-[65px] md:top-0 flex flex-col md:flex-row md:py-6 md:gap-4 lg:gap-6 w-full md:w-fit md:pr-1 md:text-base lg:text-[.91rem] transition-all duration-500 md:transition-none`}
        >
          {navlinks.map((l) => (
            <NavLink key={l.href} href={`/${l.href}`}>
              <l.icon
                className={clsx(
                  "h-8 text-3xl p-1 group-hover:bg-red-100 dark:group-hover:bg-gray-800 rounded-full",
                  {
                    "bg-red-100 dark:bg-gray-800":
                      pathname === `/${l.href}`,
                  }
                )}
              />
              <span>{l.href}</span>
            </NavLink>
          ))}
        </aside>
      </header>
    </nav>
  );
}
