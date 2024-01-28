import React from 'react'
import clsx from 'clsx'

type MainProps = { children: React.ReactNode; noPadding?: boolean }

export default function Main({ children, noPadding = false }: MainProps) {
    return <main className={clsx("flex min-h-[70vh] w-full flex-col justify-center items-center gap-6", { "pt-20": !noPadding })}>{children}</main>
}