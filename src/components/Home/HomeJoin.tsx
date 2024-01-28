"use client"

import React from 'react'
import { Section } from '..'

type Props = {}

export default function HomeJoin({ }: Props) {

    return (
        <Section className="my-6 bg-white dark:bg-black border border-red-50 dark:border-gray-800 gap-4 bg-opacity-70">

            <article className="flex px-1 py-3">
                <div>
                    join us
                </div>
            </article>

        </Section>
    )
}