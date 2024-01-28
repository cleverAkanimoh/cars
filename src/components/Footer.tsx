'use client'

import React from "react";
import Image from 'next/image';
import bgImage from "../../public/images/body_bg.jpg"

import { BsArrowBarUp } from 'react-icons/bs'

import { useGlobalContext } from "@/context";
import { siteName } from "@/lib";
import Link from "next/link";
import { Section } from ".";
import FooterLinks from "./Footer/FooterLinks";

export default function Footer() {

  const { setIsMenuClicked } = useGlobalContext()
  const [isMoveToVisble, setIsMoveToVisble] = React.useState(false)

  const year = new Date().getFullYear()

  const moveToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    setIsMenuClicked(false)
  }

  const scrolling = () => window.scrollY > 500 ? setIsMoveToVisble(true) : setIsMoveToVisble(false);

  React.useEffect(() => {
    window.onscroll = scrolling;

    return window.removeEventListener("scroll", scrolling)
  }, [isMoveToVisble])

  return (
    <>
      <Image src={bgImage} alt={'background'} className='fixed top-0 left-0 -z-[9999] w-screen h-screen opacity-5' priority />

      <footer className='w-full relative flex flex-col gap-4 items-center justify-center py-6 md:py-8 my-10 sm:my-0 text-slate-300 text-lg px-2'>

        <Section className='bg-red-950 items-center'>

          <aside className="flex flex-wrap gap-6">

            <div className="w-36 h-32 grid place-items-center">
              <span>Logo | carsinn</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <FooterLinks heading={"services"} links={[{ title: "rent", href: `listings?flag=rent` }, { title: "sell", href: `listings?flag=sell` }, { title: "buy", href: `listings?flag=buy` }, { title: "listings", href: `listings` }]} />

              <FooterLinks heading={"company"} links={[{ title: "Team", href: `about/#team` }, { title: "Mission", href: `about/#mission` }, { title: "Careers", href: `about/#careers` }]} />

              <FooterLinks heading={"privacy"} links={[{ title: "Privacy Policy", href: `privacy/#privacy` }, { title: "Terms and Conditions", href: `privacy/#terms` },]} />
              <FooterLinks heading={"support"} links={[{ title: "contact us", href: `support/#contact` }, { title: "Feedback", href: `support/#feedback` }, { title: "Frequently asked questions", href: `support/#faqs` }]} />

              <FooterLinks heading={"social"} links={[{ title: "Facebook", href: `https://www.facebook.com/carsinn` }, { title: "Instagram", href: `https://www.instagram.com/carsinn` }, { title: "Twitter/X", href: `https://www.x.com/carsinn` }]} />
            </div>

          </aside>

        </Section>

        <Section className='bg-red-950 justify-center'>

          <p className='text-sm text-center sm:text-[0.90rem] font-semibold'>copyright reserved {year} | <Link href={"/"} className="hover:underline" >{siteName}</Link></p>

        </Section>

        <button onClick={moveToTop} className={`${isMoveToVisble ? "scale-100 opacity-100" : "scale-0 opacity-0"} fixed bottom-4 right-4 bg-orange-600 bg-opacity-50 hover:bg-opacity-100 text-white p-3 rounded-full z-[10000] outline-0 transition-all duration-300`}><BsArrowBarUp className='text-2xl sm:text-xl' /></button>

      </footer>
    </>
  )
}