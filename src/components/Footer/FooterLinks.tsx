import Link from 'next/link';
import React from 'react'

type FooterLinksProps = {
    heading: string;
    links: {
        title: string;
        href?: string;
    }[]
}

export default function FooterLinks({ heading, links }: FooterLinksProps) {
    return (
        <div className="flex flex-col gap-2 p-2 border border-gray-700 border-opacity-10 hover:border-gray-400 rounded-md min-w-[180px]">
            <h1 className="font-serif text-lg capitalize">{heading}</h1>
            <ul>
                {links.map((l, i) => <li key={i}><Link href={l.href ? l.href : l.title} className="hover:underline text-base sm:text-sm text-gray-400 hover:text-gray-200 capitalize">{l.title}</Link></li>)}
            </ul>
        </div>
    )
}