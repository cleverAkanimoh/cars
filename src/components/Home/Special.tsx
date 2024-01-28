"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Special({ className }: { className?: string }) {

    return (
        <div className={clsx("relative w-full h-full p-4 flex justify-center items-center lg:gap-6 xl:gap-8", className)}>

            <div className="relative w-full max-w-[440px] flex flex-col gap-4 p-4">
                <div>
                    <h1 className="font-serif text-3xl md:text-4xl dark:text-white">Tips and Tricks<br />for Affordable sellable car<br />Deals!</h1>

                    <div className="h-1 w-20 bg-black dark:bg-white rounded-xl" />
                </div>

                <h4 className="text-[.9rem] md:text-[.977rem]">Having the right budget allows you to jump on our early bird discounts and ensures a wider selection of vehicles</h4>

                <Link href="services/buy" className="w-fit flex items-center justify-center bg-slate-900 hover:bg-transparent border border-transparent hover:border-gray-900 hover:text-black dark:hover:text-white font-bold px-8 py-[6px] text-white rounded-md transition-all duration-300">
                    <span className="capitalize">buy now</span>
                    {/* <MoneyIcon className="h-5" /> */}
                </Link>
            </div>

            <Image src="/images/pexels_vlad_alexandru_popa_1402787.jpg" width={350} height={400} alt="buy this car" className="rounded-md hidden sm:block" loading="eager" priority />
        </div>
    )
}