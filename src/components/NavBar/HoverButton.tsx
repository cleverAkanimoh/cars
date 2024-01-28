"use client"

import { useGlobalContext } from "@/context";
import Link from "next/link";
import { ReactNode } from "react";
import { AuthComponent } from "..";
import { BsLightbulbOff } from "react-icons/bs";
import { useTheme } from "next-themes";
import { UserCircleIcon, UserPlusIcon, UsersIcon, LightBulbIcon, ArrowLeftStartOnRectangleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

type HoverButtonProps = {
    heading?: string;
    icon1: ReactNode
    icon2: ReactNode
}

export default function HoverButton({ heading, icon1, icon2 }: HoverButtonProps) {
    const { setIsMenuClicked, setAuthClick } = useGlobalContext()
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => theme === "light" ? setTheme("dark") : setTheme("light")

    return (
        <div className='group h-[66px] flex flex-col items-center justify-center w-fit transition-all duration-300'>
            <button className='capitalize text-lg md:text-base lg:text-lg flex items-center gap-3 bg-white dark:bg-black dark:text-gray-300 border dark:border-gray-700 group-hover:border-red-100 dark:group-hover:border-gray-800 pl-1 pr-2 py-[2px] rounded-3xl'>
                {icon1}
                {heading && <span>{heading}</span>}
                {icon2}
            </button>

            <div className="h-0 translate-y-6 group-hover:translate-y-0 overflow-hidden opacity-0 flex flex-col gap-0 text-[0.96rem] group-hover:opacity-100 group-hover:z-[100000] font-sans text-black dark:text-gray-400 dark:bg-black group-hover:h-fit min-w-[220px] xl:w-[250px] fixed top-[65px] lg:top-[68px] rounded-md bg-white group-hover:border group-hover:border-red-100 dark:group-hover:border-gray-800 mr-44 md:mr-0 transition-all duration-300">

                {false && (<p className="flex items-center gap-2 border-b border-red-100 dark:group-hover:border-gray-800 px-2 py-4">
                    <UserCircleIcon className="h-5" />
                    <span className="max-w-[180px] overflow-hidden lg:max-w-full">{"crushclever1@gmail.com"}</span>
                </p>)}

                {false ?
                    (<Link href={`/profile/:id`} className='border-b border-red-100 dark:group-hover:border-gray-800 hover:bg-red-50 dark:hover:bg-gray-900 flex items-center gap-2 p-2 py-3'>
                        <UsersIcon className="h-5" />
                        <span>manage account</span>
                    </Link>)
                    : (<button onClick={() => setAuthClick(true)} className="border-b border-red-100 dark:group-hover:border-gray-800 hover:bg-red-50 dark:hover:bg-gray-900 flex items-center gap-2 p-2 py-3">
                        <UserPlusIcon className="h-5" />
                        <span>login or register</span>
                    </button>)}

                <button onClick={() => toggleTheme()} className="border-b border-red-100 hover:bg-red-50 dark:hover:bg-gray-900 dark:group-hover:border-gray-800 flex items-center gap-2 p-2 py-3">
                    {theme === "light" ? <LightBulbIcon className="h-5" /> : <BsLightbulbOff />}
                    <span>current theme: {theme === "light" ? "light" : "dark"}</span>
                </button>

                <div className="flex flex-wrap xl:gap-8 gap-4 p-2 py-3">
                    <span>language: {"en"}</span>
                    <Link href="/support" className='hover:underline w-fit flex items-center gap-2'>
                        <InformationCircleIcon className="h-5" />
                        <span>support</span>
                    </Link>
                </div>

                {false && (<button onClick={() => { }} className="border-t border-red-100 dark:group-hover:border-gray-800 flex items-center gap-2 p-2 py-3 hover:bg-red-50 dark:hover:bg-gray-900">
                    <ArrowLeftStartOnRectangleIcon className="h-5" />
                    <span>logout</span>
                </button>)}

            </div>

            <AuthComponent />
        </div>
    )
}