"use client";

import React from 'react';
import Image from 'next/image';
import { motion as m } from "framer-motion"
import { d } from "@/lib"

import notSeenImage from "../../public/svgs/quilly-good.svg";

type EmptyProps = {
    text?: string
}

export default function Empty({ text }: EmptyProps) {
    return <div className='text-center overflow-hidden w-full h-full md:h-[76.2vh] flex flex-col justify-center items-center'>
        <m.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={d.transition}
        ><Image src={notSeenImage} alt='nothing to see here' /></m.div>

        <m.h3
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .9, ease: "easeOut", duration: .6 }}
            className='font-bold sm:text-lg'
        >{text ? text : `Sorry nothing to see here!`}</m.h3>
    </div>
}