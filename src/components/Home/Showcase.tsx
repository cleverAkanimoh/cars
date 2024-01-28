"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Showcase() {

    return (
        <div className="w-full h-full p-4 text-white flex items-center justify-center">
            <Image src="/images/pexels-albert-nunez-88630.jpg" width={1000} height={400} alt="special car" className="w-full h-full -z-10 absolute top-0 left-0" loading="eager" priority />

            <div className="relative container h-full">
                <h1 className="absolute top-24 left-4 font-serif text-4xl md:text-6xl text-black capitalize">Today&apos;s featured car</h1>

                <Link href="showcase" className="h-10 px-6 py-1 flex items-center justify-between gap-10 absolute bottom-3 right-0 bg-black hover:bg-transparent hover:text-black font-bold border border-transparent hover:border-black rounded-lg transition-all duration-300">
                    <span>see what makes it special</span>
                    <ArrowRightIcon className="h-5" />
                </Link>
            </div>
        </div>
    )
}