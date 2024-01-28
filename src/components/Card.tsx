"use client"

import Image from 'next/image'
import React from 'react'

import defaultImage from "../../public/images/articles.webp"

import { motion as m } from 'framer-motion'
import { d } from '@/lib'
import Link from 'next/link'
import { BsCalendar2Date, BsPersonCircle } from 'react-icons/bs'

type CardProps = {
    title: string;
    slug: string;
    author: { node: { name: string } };
    published_at: string;
    desc: string;
}

export default function Card({ title, author:{node:{name}},slug, published_at, desc }: CardProps) {

    return (
        <div className='overflow-hidden'>
            <m.div
                initial={d.initial}
                whileInView={d.whileInView}
                transition={d.transition}
                viewport={d.viewport}
                className='border h-full border-red-50 dark:border-red-950 rounded-md hover:shadow-sm max-w-[200px] sm:max-w-[500px] md:max-w-[200px] xl:md:max-w-[500px] flex flex-col sm:flex-row md:flex-col xl:flex-row gap-2 overflow-hidden'>

                <div className='relative h-full w-full'>
                    <Image alt={"image of ".concat(title)}
                        src={defaultImage}
                        className='-z-10 h-full'
                        priority
                    />
                    <span className="absolute bottom-4 right-4 dark:text-white dark:bg-black bg-white rounded-md p-2 text-sm font-bold cursor-pointer">blog</span>
                </div>

                <aside className='flex flex-col gap-3 p-2 py-3'>

                    <div className="flex gap-2 justify-between items-center" >
                        <Link href={`blog/${slug}`} className='font-bold font-mono max-w-[600px] text-base sm:text-lg text-red-950 dark:text-red-600 capitalize hover:underline' title={title}>{title.substring(0, 18).trim().concat(title.length >=18 ? "...":"")}</Link>

                    </div>

                    <Link href={`blog/${slug}`} className='text-sm'>{desc.replace("<p>", " ").substring(0, 80).concat(desc.length >=80 ? "...keep reading":"")}</Link>

                    <div className='capitalize text-xs flex flex-wrap gap-3 mb-2'>
                        <p className='flex items-center justify-center gap-1'><BsPersonCircle/> <span>{name}</span></p>

                        <p className='flex items-center justify-center gap-1'><BsCalendar2Date/> <span>{published_at.slice(0,10)}</span></p>
                    </div>

                </aside>

            </m.div>
        </div>
    )
}