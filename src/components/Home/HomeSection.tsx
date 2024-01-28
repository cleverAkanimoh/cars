import { Suspense } from 'react';
import { Loading, Section, Underline } from '..';

import FilteredCardsWrapper from './FilteredCardsWrapper';

export default function HomeSection() {

    return (
        <Section className="my-6 bg-white dark:bg-black border border-red-50 dark:border-gray-800 gap-4 bg-opacity-70">
            <div className="w-fit flex flex-col gap-2">

                <h1 className="peer text-[1.82rem] xs:text-4xl sm:text-5xl lg:text-6xl text-red-950 dark:text-white">Browse cars for you</h1>
                <Underline className="bg-red-950 dark:bg-white" />

            </div>

            <Suspense fallback={<Loading />}>
                <article className="flex px-1 py-3 overflow-x-auto scroll-smooth scroll-slider">
                    <FilteredCardsWrapper />
                </article>
            </Suspense>
        </Section>
    )
}