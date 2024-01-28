"use client"

import { Spinner } from "@/components";

export default function loading() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className='min-h-[40vh] w-[97%] max-w-[500px] flex items-center justify-center gap-2 sm:gap-3'>
                <Spinner />
                <span className='font-semibold text-lg md:text-xl animate-pulse font-mono'>loading...</span>
            </div>
        </div>
    )
}