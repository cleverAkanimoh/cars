import React from 'react'

type Props = { children: React.ReactNode; className?: string }

export default function Section({ children, className }: Props) {
    return <section className={`container w-[97%] flex flex-col px-2 py-6 lg:px-4 z-10 rounded-md ${className ? className : "bg-white dark:bg-black border border-red-50"}`}>{children}</section>
}