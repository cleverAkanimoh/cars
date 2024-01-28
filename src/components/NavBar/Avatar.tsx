"use client"

import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/16/solid";


type AvatarProps = {
    src?: string
}

export default function Avatar({ src }: AvatarProps) {

    return src ? <Image src={src} alt="profile button" className='h-7 w-7 md:h-9 md:w-9' priority /> : <UserCircleIcon className="h-6 md:h-7" />
}