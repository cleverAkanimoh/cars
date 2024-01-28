"use client";
import Image from "next/image";
import Link from "next/link";
// import clsx from "clsx";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Landing() {

    return (
        <div className="relative w-full h-full p-4 pt-24 flex justify-center items-center text-black bg-gradient-to-b from-white">
            <Image src="/images/pexels-trace-constant-707046.jpg" width={1000} height={400} alt="special car" className="w-full h-full -z-10 absolute top-0 left-0" loading="eager" priority />

            <div className="relative container h-full flex flex-col items-center gap-4 p-4 border border-white xl:border-transparent">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">Explore, Experience and Enjoy</h1>

                <h4 className="text-[.9rem] md:text-[.977rem] max-w-[650px] text-center">Be it a business trip, family vacation or a spontaneous road trip, we provide the wheels that take you where you want to go</h4>

                <Link href="services/rent" className="absolute bottom-4 w-fit flex items-center justify-center gap-3 bg-black hover:bg-transparent border border-transparent hover:border-black hover:text-black font-bold px-8 py-[6px] rounded-full text-white transition-all duration-300">
                    <span className="capitalize">start your journey now</span>
                    {/* <ArrowRightIcon className="h-5" /> */}
                </Link>
            </div>
        </div>
    )
}