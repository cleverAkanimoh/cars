import Image, { StaticImageData } from 'next/image'
import React from 'react'

type HeaderProps = {
    headerBg: StaticImageData | string
    heading: string
    tagline: string
}

export default function Header({ headerBg,
    heading,
    tagline }: HeaderProps) {
    return (
        <header className="relative min-h-[70vh] mb-12 w-screen flex flex-col items-center justify-center px-3 sm:px-0">
            <Image src={headerBg} alt={'header background'} className='absolute top-0 left-0 -z-10 h-full w-full opacity-90' />

            <div className='flex flex-col items-center justify-center gap-3 bg-blue-950 text-white bg-opacity-30 rounded-md p-4 h-[200px] z-10'>
                <h1 className="capitalize text-center text-[1.7rem] sm:text-6xl font-bold">{heading}</h1>

                <p className='text-center'>{tagline}</p>

            </div>
        </header>
    )
}