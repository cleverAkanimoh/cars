"use client";

import { Section } from "..";

export default function ListingSkeleton() {

    return (

        <Section className="mb-5 bg-white dark:bg-black border border-red-50 dark:border-gray-800  gap-8 justify-center">
            <p className='w-full text-center font-bold'>showing </p>

            <> <article className="my-5 flex flex-wrap gap-x-4 gap-y-8 sm:gap-x-8 justify-center">
                cards
            </article>

                <div>pagination</div>
            </>
        </Section>
    )
}