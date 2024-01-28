"use client";

import React from "react";
import { useGlobalContext } from "@/context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MdClose } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

type SearchProps = {
  placeholder: string;
  className?: string;
  isGlobal?: boolean;
  setFilterValue?: (x: any) => void;
};

export default function Search({
  placeholder,
  isGlobal = false,
  className,
  setFilterValue,
}: SearchProps) {
  const { globalSearchValue, setGlobalSearchValue } = useGlobalContext();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchValue = searchParams.get("search") ?? undefined;

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("search", term) : params.delete("search");
    params.set("currentPage", "1");
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const handleDeleteAllText = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={`relative flex flex-1 flex-shrink-0 w-auto ${className}`}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[17px] w-[17px] -translate-y-1/2 cursor-pointer text-gray-500 dark:peer-focus:text-red-600 peer-focus:text-red-900" />

      <input
        type="search"
        id="search"
        aria-label={placeholder}
        className="peer w-full py-[10px] pl-11 pr-4 bg-transparent font-mono text-sm placeholder:text-gray-400 border rounded-md border-red-100 dark:border-gray-800"
        placeholder={placeholder}
        defaultValue={
          isGlobal ? globalSearchValue : searchParams.get("query")?.toString()
        }
        accessKey="k"
        onChange={(e) => {
          isGlobal
            ? setGlobalSearchValue(e.target.value)
            : handleSearch(e.target.value);
        }}
      />

      <button
        onClick={() =>
          isGlobal ? setGlobalSearchValue("") : handleDeleteAllText()
        }
        className={`${
          searchValue || globalSearchValue ? "scale-100" : "scale-0"
        } absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer transition-all duration-300`}
      >
        <MdClose />
      </button>
    </div>
  );
}
