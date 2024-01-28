"use client";

import { Main } from "@/components";
import { motion as m } from "framer-motion"

export default function Loading() {
    return (
        <Main>
            <div className='min-h-[60vh] m-2 w-full rounded-md flex flex-col items-center justify-center gap-2 sm:gap-3'>
                <m.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["15%", "20%", "40%", "50%", "15%"],
                    }}
                    transition={{ duration: 2, repeat: Infinity, }}
                    className='w-20 h-20 bg-red-950 dark:bg-red-600'
                />
                <span className='font-semibold text-lg md:text-xl animate-pulse font-mono'>loading page...</span>
            </div>
        </Main>
    )
}