"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Section, Search, Select, Button } from "..";

import { brands, origin, year } from "@/lib";
import Link from "next/link";
import {
  ChevronDoubleLeftIcon,
  ListBulletIcon,
  PlusIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import clsx from "clsx";

export default function FilterHeader() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [toggleFilter, setToggleFilter] = React.useState(true);

  return (
    <header
      className={clsx(
        "relative w-full flex flex-col items-center justify-center py-3 md:pl-2 transition-all duration-300 max-md:transition-none",
        {
          "md:w-[320px] xl:md:w-[324px] md:flex-shrink-0": toggleFilter,
          "md:w-8 md:opacity-70": !toggleFilter,
        }
      )}
    >
      <Section className="relative gap-8 z-20 md:min-h-[86vh] md:overflow-hidden md:overflow-y-auto lg:rounded-lg bg-white dark:bg-black border border-red-50 dark:border-gray-800">
        <div
          className={clsx("w-full flex-wrap items-center gap-3", {
            flex: toggleFilter,
            "hidden max-md:flex": !toggleFilter,
          })}
        >
          <Search placeholder={"search listing"} />

          <div className="flex gap-1 p-1 border border-red-100 dark:border-gray-800 rounded-md">
            <ButtonDiv Icon={Square2StackIcon} query="grid" />
            <ButtonDiv Icon={ListBulletIcon} query="list" />
          </div>

          {true && (
            <Link
              href="/listings/new"
              className="flex gap-2 h-10 items-center rounded-lg bg-orange-600 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 md:absolute md:bottom-4"
              title="add to listing"
            >
              <span className="hidden xs:block">Create Listing</span>
              <PlusIcon className="h-4" />
            </Link>
          )}
        </div>

        <div
          className={clsx("flex-wrap gap-y-4 gap-x-3", {
            flex: toggleFilter,
            "hidden max-md:flex": !toggleFilter,
          })}
        >
          <Select
            fallback="category"
            options={["van", "car", "motorbikes", "keke"]}
            query={"category"}
          />

          <Select fallback="order" options={["asc", "dsc"]} query={"orderby"} />
          <Select
            fallback="sort"
            options={["year", "brand", "origin"]}
            query={"sortby"}
          />
          <Select fallback="filter by brand" options={brands} query={"brand"} />

          <Select
            fallback="filter by origin"
            options={origin}
            query={"origin"}
          />

          <Select fallback="filter by year" options={year} query={"year"} />

          {searchParams.size > 0 && (
            <button
              role="button"
              onClick={() => push("?")}
              className="hover:underline p-2"
            >
              clear all filter
            </button>
          )}
        </div>
      </Section>

      <Button
        onClick={() => setToggleFilter((prev) => !prev)}
        className="absolute -top-1 -right-3 z-10 hover:z-20 opacity-40 hover:opacity-100 bg-orange-600 hover:bg-orange-400 text-white hidden md:block"
      >
        <ChevronDoubleLeftIcon
          className={clsx("h-4 transition-all duration-300", {
            "-rotate-180": !toggleFilter,
          })}
        />
      </Button>
    </header>
  );
}

const ButtonDiv = ({
  Icon,
  query,
}: {
  Icon: React.ElementType;
  query: "grid" | "list";
}) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const isDefault = !searchParams.has("align") && query === "grid";
  const isActive = searchParams.has("align", query) || isDefault;

  const handleAlignCards = (term: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("align", term) : params.delete("align");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Button
      onClick={() => handleAlignCards(query)}
      className={clsx("p-1 hover:bg-red-100 dark:hover:bg-gray-600", {
        "bg-red-200 dark:bg-gray-800 rounded-md pointer-events-none": isActive,
      })}
    >
      <Icon className="h-5" />
    </Button>
  );
};
