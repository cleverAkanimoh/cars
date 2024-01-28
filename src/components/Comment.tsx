"use client"

import { FormEvent, useState } from "react";
import { CommentProps } from "@/actions/comment";
import { Button, Section } from ".";

type commentProps = {
    action?: ({ message, email }: CommentProps) => Promise<void>;
    heading: string;
    textAreaPh: string;
    btnText?: string;
}

export default function BlogComment({ action, heading, textAreaPh, btnText = "submit" }: commentProps) {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSubmitting(true)
        setDisabled(true)

        try {

            const commentObj = { message, email }
            if(action) await action(commentObj)

            setSubmitting(false)

            setTimeout(() => setDisabled(false), 60000)
        } catch (err) {
            console.log(err)
            setSubmitting(false)
        }
        finally {
            setSubmitting(false)
            setEmail("")
            setMessage("")
        }
    }

    return <Section className="mt-6 py-10 px-4 gap-4 bg-white dark:bg-black border border-red-50 dark:border-gray-800 max-w-[600px]">
        <h1 className="font-cursive text-4xl mb-4 dark:text-gray-200">{heading}</h1>

        {/* {info && <p className="text-center text-orange-500 dark:text-gray-300 dark:bg-gray-900 my-1 p-4 rounded-md bg-transparent">{info}</p>} */}

        <form
            // action={commentAction}
            onSubmit={handleSubmit}
            method="POST"
            className="grid gap-5"
        >

            <textarea
                name="message"
                placeholder={textAreaPh}
                className="min-h-[150px] max-h-[300px] resize-none border p-4 rounded-md dark:border-gray-800 bg-transparent border-red-50"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="h-14 p-4 rounded-md border dark:border-gray-800 bg-transparent border-red-50"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />

            <Button
                submitting={submitting}
                disabled={disabled}
                className="border dark:border-gray-800 bg-transparent border-red-50 my-4 py-3 bg-orange-600"
            >{btnText
                    // ? btnText : "submit"
                }</Button>

        </form>
    </Section>
}