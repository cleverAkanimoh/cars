"use client"

import Image from "next/image"
import { Select, Button } from ".."
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { brands, origin } from "@/lib"
import clsx from "clsx"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function Welcome({ className }: { className?: string }) {

    const searchParams = useSearchParams()

    return (<div className={clsx("w-full h-full relative p-4 flex flex-col items-center text-white", className, { "bg-gradient-to-br from-gray-400 dark:from-black from-5%": className === undefined })}>
        <Image src="/images/pexels-mike-bird-112460.jpg" width={1000} height={400} alt="welcome" className="hidden sm:block w-full h-full absolute top-0 right-0 -z-10" loading="eager" priority />

        <div className="flex flex-col sm:flex-col-reverse mt-20 lg:mt-24 z-20 container gap-6">
            <h1 className="capitalize text-black dark:text-white text-3xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold">get experience of<br />luxury cars</h1>

            <aside className="sticky flex flex-col sm:flex-row xs:flex-wrap items-center justify-between border border-red-100 dark:border-gray-800 gap-4 p-2 py-6 xs:p-4 bg-white dark:bg-black rounded-lg w-full sm:max-w-fit">
                <div className="flex flex-wrap gap-3 gap-y-5 xs:gap-5 xs:p-1">
                    <FilterDiv heading={"type of car"} query={"type"} options={origin} />
                    <FilterDiv heading={"brand of car"} query={"brand"} options={brands} />
                    <FilterDiv heading={"model of car"} query={"model"} options={brands} />

                </div>

                <Link
                    href={`services/buy?${searchParams}`}
                    className="bg-orange-600 w-full xs:w-[93%] px-4 sm:w-[120px] md:w-11 xl:w-[120px] sm:translate-y-[13px] h-11 text-sm capitalize hover:bg-opacity-70 rounded-md flex items-center justify-between transition-all duration-300"
                >
                    <span className="md:hidden xl:block">search car</span>
                    <MagnifyingGlassIcon className="h-5" />
                </Link>
            </aside>
        </div>
    </div>)
}
const FilterDiv = ({ heading, query, options }: { heading: string; query: string, options: string[] }) => {

    return <div className="flex flex-col gap-[2px] xs:gap-1">
        <h3 className="text-black dark:text-gray-300 font-serif capitalize text-base">{heading}</h3>
        <Select options={options} query={query} />
    </div>
}