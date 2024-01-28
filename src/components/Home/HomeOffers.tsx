"use client"

import React from 'react'
import { Section } from '..';

type Props = {

}

export default function HomeOffers({ }: Props) {

    return (
        <Section className="my-6 bg-white dark:bg-black border border-red-50 dark:border-gray-800 gap-4 bg-opacity-70">
            cars offers available for you
        </Section>
    )
}