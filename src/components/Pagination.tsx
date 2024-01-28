"use client";

import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { useDebouncedCallback } from "use-debounce";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

type PaginationProps = {
  totalPosts: number;
  postPerPage: number;
  currentPage: number;
}

const Pagination = ({
  totalPosts,
  postPerPage,
  currentPage }: PaginationProps) => {

  /**
  - totalPosts = total number of items in an array
  - postPerPage = how many post will be displayed per page
  - currentPage = the currrent page requested by the user
  - totalPages = signifies the last available paginatable page
  
   */

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handlePaginate = (x: number|string) => {
    const params = new URLSearchParams(searchParams);
    x ? params.set("currentPage", x.toString()) : params.delete("currentPage");
    return `${pathname}?${params.toString()}`;
  }

  const totalPages = Math.ceil(totalPosts / postPerPage)
  
  const pages = generatePagination(currentPage, totalPages)

  const renderPaginationButtons = pages.map((page, index) => {
      let position: 'first' | 'last' | 'single' | 'middle' | undefined;

      if (index === 0) position = 'first';
      if (page === totalPages) position = 'last';
      if (totalPages === 1) position = 'single';
      if (page === '...') position = 'middle';

      return (
        <PaginationNumber
          key={page}
          href={handlePaginate(page)}
          page={page}
          position={position}
          isActive={currentPage === page}
        />
      );
  })

  const handleInputChange = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)

    handlePaginate(value)

    if (isNaN(value)) {
      handlePaginate(1)
    }

    if (value >= totalPages) {
      handlePaginate(totalPages)
    }

    if (value <= 0) {
      handlePaginate(1)
    }
  }, 800)

  return (
    <>

      <div className="inline-flex">
        <PaginationArrow
          direction="left"
          href={handlePaginate(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        {true ?
          <div className="flex -space-x-px">
            {renderPaginationButtons}
          </div>
          : <div>
            <input type="text" title="highlight text before input" value={currentPage} onChange={handleInputChange} className="w-10 h-auto text-center rounded-lg bg-transparent border border-red-50 hover:border-current focus:border-orange-600 focus:outline-0 transition-all duration-300" /> / <span title="total pages">{totalPages}</span>
          </div>}

        <PaginationArrow
          direction="right"
          href={handlePaginate(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </>
  );
}

// function to generate pagination links

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center text-sm border',
    {
      'rounded-l-md': position === 'first' || position === 'single',
      'rounded-r-md': position === 'last' || position === 'single',
      'z-10 bg-orange-600 border-orange-600 text-white': isActive,
      'hover:bg-orange-200 dark:hover:bg-gray-800 border-orange-200 dark:border-gray-800': !isActive && position !== 'middle',
      'text-black dark:text-gray-300 opacity-40 border-orange-200 dark:border-gray-800': position === 'middle',
    },
  );

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center rounded-md border dark:hover:bg-gray-800 dark:hover:bg-gray-800 border-orange-200 dark:border-gray-800',
    {
      'pointer-events-none text-gray-300 opacity-60 dark:opacity-30': isDisabled,
      'hover:bg-orange-50 opacity-100': !isDisabled,
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right',
    },
  );

  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}

 const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export default Pagination;