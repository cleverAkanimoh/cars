import Link from "next/link";
import React from "react";
import clsx from "clsx"

import { usePathname } from "next/navigation";
import { useGlobalContext } from "@/context";

type NavLinkProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
    activeClassName?: string;
};

export default function NavLink({ children, className, href, activeClassName }: NavLinkProps) {

    const { setIsMenuClicked } = useGlobalContext();
    const pathname = usePathname();

    const activeClass = pathname === href ? "underline text-red-800 dark:text-gray-500 pointer-events-none " + activeClassName : ""

    return (<Link
        href={href}
        className={
            clsx(
                "group flex items-center gap-2 w-fit ml-4 my-2 p-2 py-1 md:p-0 md:m-0 hover:underline hover:text-red-800 dark:hover:text-gray-400 transition-all duration-300",
                activeClass,
                className
            )}
        onClick={() => setIsMenuClicked(false)}
    > {children}</Link >)

}
