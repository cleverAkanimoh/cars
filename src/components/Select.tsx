"use client"

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BsChevronDown } from "react-icons/bs";

type SelectProps = {
    options: string[];
    query: string
    fallback?: string;
}

export default function Select({ options, fallback, query }: SelectProps) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSelect = (term: string) => {

        const params = new URLSearchParams(searchParams);
        if (params.has("search")) params.delete('search');
        if (params.has("currentPage") && params.get("currentPage") !== "1") params.set('currentPage', '1');
        term ? params.set(query, term) : params.delete(query);
        replace(`${pathname}?${params.toString()}`);

    }

    const handleDeleteOption = () => {

        const params = new URLSearchParams(searchParams);
        params.delete(query);
        replace(`${pathname}?${params.toString()}`);

    }

    return (
        <div className='group relative h-fit flex flex-col items-center justify-center gap-1 w-fit transition-all duration-300'>
            <button className='flex items-center justify-between h-11 min-w-[130px] gap-1 bg-transparent border group-hover:border-red-100 dark:group-hover:border-gray-600 dark:border-gray-800 text-black dark:text-gray-400 text-left p-2 rounded-md cursor-pointer'>

                <span className="opacity-80 w-full text-[0.96rem] sm:text-base">{searchParams.has(query) ? searchParams.get(query) : fallback}</span>
                <BsChevronDown className="group-hover:rotate-180 text-sm transition-all duration-300" />

            </button>

            <div className="max-h-0 min-w-[130px] group-hover:max-h-[50vh] group-hover:min-h-fit overflow-hidden overflow-y-auto opacity-0 group-hover:opacity-100 border-red-100 absolute top-12 left-0 flex flex-col z-[1000] text-black dark:text-white rounded-md bg-white dark:bg-black border dark:border-gray-800 transition-all duration-300">
                {searchParams.has(query) && <Option onClick={() => handleDeleteOption()}>clear</Option>}

                {options.sort().map((d, i) => <Option key={i} onClick={() => handleSelect(d)}>{d}</Option>)}
            </div>
        </div>
    )
}

const Option = ({ children, onClick }: { children: React.ReactNode; onClick?: React.MouseEventHandler<HTMLButtonElement> }) => (<button className="border-b dark:border-gray-800 dark:hover:border-gray-800 hover:border-red-100 p-2 text-left hover:bg-red-50 focus:bg-red-50 dark:hover:bg-gray-800 dark:focus:bg-gray-700" onClick={onClick}>{children}</button>)