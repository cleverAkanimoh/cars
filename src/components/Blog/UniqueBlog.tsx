"use client"

import { BsLinkedin, BsPersonCircle, BsTwitterX } from "react-icons/bs";
import { BlogComment, Section } from "..";
import { MdFacebook, MdWhatsapp } from "react-icons/md";
import NotFound from "@/app/not-found";
import { CommentProps } from "@/actions/comment";

export default function UniqueBlog({ post }: any) {

    return (
        <>
            {post.notFound
                ? <NotFound />
                : <> <Section className="my-6 py-10 gap-4 bg-white dark:bg-black border border-red-50 dark:border-gray-800">
                    <h3 className="flex flex-wrap items-center gap-x-4"><span className="text-xs font-semibold">{post.date.slice(0, 10)}</span> <span className="bg-purple-50 dark:bg-gray-400 p-2 rounded-2xl text-purple-950 dark:text-purple-800 text-xs">3 mins. read</span></h3>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl text-red-900 dark:text-red-600 my-1 font-semibold font-cursive capitalize">{post.title}</h1>

                    <h3 className="flex flex-wrap items-center gap-2 capitalize text-sm"><BsPersonCircle /><span>{post.author.node.name}</span></h3>

                    <ul className="flex flex-wrap items-center justify-center gap-4 text-xl my-8">
                        <li><BsTwitterX /></li>
                        <li><MdWhatsapp /></li>
                        <li><BsLinkedin /></li>
                        <li><MdFacebook /></li>
                    </ul>

                    <p className="text-justify sm:text-lg lg:text-xl">
                        {post.excerpt.replace("<p>", " ").replace("</p>", " ").replace("[&hellip;]", " ")}
                        {post.excerpt.replace("<p>", " ").replace("</p>", " ").replace("[&hellip;]", " ")}
                        {post.excerpt.replace("<p>", " ").replace("</p>", " ").replace("[&hellip;]", " ")}
                        {post.excerpt.replace("<p>", " ").replace("</p>", " ").replace("[&hellip;]", " ")}
                    </p>
                </Section >
                <BlogComment heading={"please add a comment"} textAreaPh={"comment"} />
                </>
            }

        </>
    )
} 