"use client"

import { Button } from "..";
import { useRouter } from "next/navigation";

type FilteredCardsProps = {
    heading: string;
    query?: string;
    value?: string;
    array: any[]
}

export default function FilteredCards({ heading, query, value, array }: FilteredCardsProps) {

    const router = useRouter()

    return (
        <Button
            onClick={() => router.replace(`/listings${query ? "?" + query + "=" + value : ""}`)}
            className="filter-div relative min-w-[220px] sm:min-w-[240px] lg:min-w-[260px] h-44 flex px-4 py-4 bg-gradient-to-b from-30% from-gray-300 dark:from-gray-900 rounded-md hover:shadow dark:hover:shadow-white z-10"
        >
            <h2 className="h-fit text-base xs:text-sm">{heading}</h2>

            <span className="absolute top-3 right-3 min-w-[2.2rem] min-h-[2.2rem] p-1 grid place-items-center font-mono text-sm bg-white dark:bg-black rounded-[100%]">{array.length}</span>

        </Button>
    )
}