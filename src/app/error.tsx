'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Image from "next/image"
import broken_svg from "../../public/svgs/broken500.svg"
import { Button } from '@/components'

export default function Error({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // to Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="min-h-[70vh] w-full flex items-center justify-center text-red-950 dark:text-gray-400">

      <div className='max-w-[500px] w-[97%] flex flex-col items-center justify-center gap-5 p-4 relative rounded-md'>
        <Image src={broken_svg} alt={""} className="absolute top-0 left-0 opacity-50 -z-10" />

        <h1 className="font-bold capitalize text-3xl sm:text-4xl lg:text-5xl dark:text-white">an error occurred</h1>

        <p className='md:text-lg text-center font-bold'>Something seems broken! {error.message ?? ""}</p>

        <Button className='bg-red-900 text-slate-200 hover:bg-opacity-20 hover:text-red-900 rounded-md p-3 transition-all duration-300' onClick={() => reset()}>try again</Button>

      </div>

    </main>
  )
}