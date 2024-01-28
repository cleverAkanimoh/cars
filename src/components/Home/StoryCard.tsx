import Link from "next/link";
import { BsCalendar2Date, BsPersonCircle } from "react-icons/bs";

type CardProps = {
  slug: string;
  title: string;
  author: string;
  published_at: string;
  desc: string;
};

export default function StoryCard({
  title,
  author,
  published_at,
  desc,
  slug,
}: CardProps) {
  return (
    <div className="border h-full border-red-50 hover:border-red-200 dark:border-gray-800 dark:hover:border-gray-800 rounded-md hover:shadow w-full">
      <aside className="flex flex-col gap-3 px-2 py-3">
        <div className="flex gap-2 justify-between items-center">
          <Link
            href={`blog/${slug}`}
            className="font-bold font-mono max-w-[600px] text-xl sm:text-2xl text-red-900 dark:text-red-600 capitalize hover:underline"
            title={title}
          >
            {title
              .substring(0, 20)
              .trim()
              .concat(title.length >= 20 ? "..." : "")}
          </Link>
        </div>

        <Link href={`blog/${slug}`} className="text-base md:text-lg">
          {desc
            .substring(0, 100)
            .replaceAll("<p>", " ")
            .trim()
            .concat(desc.length >= 100 ? "...keep reading" : "")}
        </Link>

        <div className="capitalize text-sm flex flex-wrap gap-2 mb-2">
          <p className="flex items-center justify-center gap-2">
            <BsPersonCircle /> <span>{author}</span>
          </p>

          <p className="flex items-center justify-center gap-2">
            <BsCalendar2Date /> <span>{published_at.slice(0, 10)}</span>
          </p>
        </div>
      </aside>
    </div>
  );
}
