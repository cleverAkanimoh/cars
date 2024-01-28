"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import notFoundImage from "../../public/images/not_found.png";
import { Button, Main } from "@/components";

export default function NotFound() {
  const router = useRouter();
  return (
    <Main>
      <div className="max-w-[500px] h-full dark:bg-white rounded-md relative w-[97%] flex flex-col items-center justify-center gap-5 p-4 text-red-950">
        <h1 className="font-bold text-3xl md:text-5xl text-center">
          Ooops! Page Not Found
        </h1>

        <p className="md:text-lg text-center">
          we have no information on the page you&apos;ve requested
        </p>

        <Image
          src={notFoundImage}
          alt={"not found"}
          className="absolute top-0 left-0 md:-left-1/3 opacity-30 -z-10"
        />

        <Button
          className="bg-red-900 text-slate-200 hover:bg-opacity-10 hover:border hover:font-bold hover:text-red-900 p-3"
          onClick={() => router.push("/")}
        >
          go to homepage
        </Button>
      </div>
    </Main>
  );
}
