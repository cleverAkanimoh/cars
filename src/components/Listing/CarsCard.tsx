"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import defaultImage from "../../../public/images/pexels_vlad_alexandru_popa_1402787.jpg";

import { motion as m } from "framer-motion";
import { d } from "@/lib";
import Link from "next/link";
import { MdShutterSpeed } from "react-icons/md";
import { PiGasCan } from "react-icons/pi";
import {
  GiGasPump,
  GiPathDistance,
  GiCarWheel,
  GiCarDoor,
  GiSteeringWheel,
} from "react-icons/gi";
import {
  CalendarDaysIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

type CardProps = {
  id: number;
  name: string;
  miles_per_gallon: number;
  cylinders: number;
  displacement: number;
  horsepower: number;
  weight_in_lbs: number;
  acceleration: number;
  year: string;
  origin: string
};

export default function CarsCard({
  id,
  name,
  miles_per_gallon,
  cylinders,
  displacement,
  horsepower,
  weight_in_lbs,
  acceleration,
  year,
  origin,
}: CardProps) {
  const searchParams = useSearchParams();
  const alignType = searchParams.get("align") || "grid";

  const isListAlign = alignType === "list";
  return (
    <article
      className={clsx("overflow-hidden rounded-sm min-h-full", {
        "hover:shadow": !isListAlign,
      })}
    >
      <m.div
        initial={d.initial}
        whileInView={d.whileInView}
        transition={d.transition}
        viewport={{ once: true }}
        className={clsx("w-full h-full flex overflow-hidden", {
          "flex-col max-w-[400px] sm:max-w-[330px] items-center": !isListAlign,
          "group max-w-full": isListAlign,
        })}
      >
        <div
          className={clsx("relative overflow-hidden", {
            "h-full w-full": !isListAlign,
            "flex flex-col flex-shrink-0 gap-2 w-[80px] h-[80px] xs:w-[150px] xs:h-[150px] overflow-visible":
              isListAlign,
          })}
        >
          <Image
            alt={"image of ".concat(name)}
            src={defaultImage}
            className={clsx("-z-10", {
              "w-[80px] h-[80px] xs:w-[200px] xs:h-[150px]": isListAlign,
            })}
            loading="eager"
            priority
          />
          <span
            className={clsx(
              "p-2 text-sm xs:text-[.98rem] capitalize dark:bg-black dark:text-white",
              {
                "absolute bottom-4 right-4 bg-white rounded-md max-w-[390px] ":
                  !isListAlign,
                "max-w-[250px] xs:max-w-[480px] xs:opacity-0 group-hover:opacity-100 xs:absolute xs:z-30 top-2 left-2":
                  isListAlign,
              }
            )}
          >
            {name}
          </span>
        </div>

        <section
          className={clsx("flex flex-col px-1 py-0 w-full h-full", {
            "justify-evenly border-x border-b border-red-50 dark:border-gray-900 rounded-b":
              !isListAlign,
            "xs:flex-1 md:w-full": isListAlign,
          })}
        >
          <div
            className={clsx(
              "capitalize text-xs xs:text-sm flex flex-wrap gap-8 py-2  font-serif",
              {
                "px-4": !isListAlign,
                "px-2": isListAlign,
              }
            )}
          >
            <Location heading={origin} Icon={MapPinIcon} />
            <Location heading={year} Icon={CalendarDaysIcon} />
          </div>

          <aside
            className={clsx("flex items-center", {
              "flex-wrap gap-y-4 gap-x-2": !isListAlign,
              "gap-x-1": isListAlign,
            })}
          >
            <Specifications
              feature={Math.ceil(Math.random() * 4)}
              heading={"passengers"}
              Icon={UserGroupIcon}
              isListAlign={isListAlign}
            />

            <Specifications
              feature={Math.ceil(Math.random() * 4)}
              heading={"doors"}
              Icon={GiCarDoor}
              isListAlign={isListAlign}
            />

            <Specifications
              feature={acceleration}
              heading={"acceleration"}
              Icon={MdShutterSpeed}
              isListAlign={isListAlign}
            />

            <Specifications
              feature={miles_per_gallon}
              heading={"miles per gallon"}
              Icon={GiGasPump}
              isListAlign={isListAlign}
            />

            <Specifications
              feature={cylinders}
              heading={"cylinders"}
              Icon={PiGasCan}
              isListAlign={isListAlign}
            />

            <Specifications
              feature={displacement}
              heading={"displacement"}
              Icon={GiPathDistance}
              isListAlign={isListAlign}
            />

            <Specifications
              feature={horsepower}
              heading={"horsepower"}
              Icon={GiSteeringWheel}
              isListAlign={isListAlign}
            />

            <Specifications
              feature={weight_in_lbs}
              heading={"weight in lbs"}
              Icon={GiCarWheel}
              isListAlign={isListAlign}
            />
          </aside>

          <div
            className={clsx("flex", {
              "w-full": !isListAlign,
              "py-1 overflow-x-auto scroll-smooth scroll-slider": isListAlign,
            })}
          >
            <div
              className={clsx("flex", {
                "flex-wrap": !isListAlign,
                "overflow-x-scroll": isListAlign,
              })}
            >
              <Availability
                text={`rent for $${Math.fround(
                  miles_per_gallon / acceleration
                ).toLocaleString()} per day`}
                flag={acceleration > 10}
                isListAlign={isListAlign}
              />
              <Availability
                text={`estimated buy $${Math.fround(
                  horsepower * cylinders
                ).toLocaleString()}`}
                flag
                isListAlign={isListAlign}
              />
            </div>
          </div>

          <Link
            href={`listings/`}
            className={clsx(
              "w-11/12 px-6 self-center rounded-md bg-orange-600 hover:bg-orange-500 border-orange-100 text-center text-sm text-white capitalize",
              {
                "py-[10px] my-3": !isListAlign,
                "py-2": isListAlign,
              }
            )}
          >
            view offer
          </Link>
        </section>
      </m.div>
    </article>
  );
}

function Specifications(props: {
  feature: number;
  heading: string;
  isListAlign: boolean;
  Icon: React.ElementType;
}) {
  return (
    props.feature > 0 && (
      <div
        className={clsx(
          "flex flex-col items-center justify-center gap-1 p-2 ",
          {
            "border-r border-red-100 dark:border-gray-800 last:border-0":
              !props.isListAlign,
            "": props.isListAlign,
          }
        )}
      >
        <div
          className="flex items-center justify-center gap-2"
          title={props.isListAlign ? props.heading : undefined}
        >
          <props.Icon className="text-xl h-5" />
          <span className="font-serif text-sm">{props.feature}</span>
        </div>
        {!props.isListAlign && (
          <span className="capitalize font-serif font-normal text-sm xs:text-[.9rem] text-slate-900 dark:text-gray-400">
            {props.heading}
          </span>
        )}
      </div>
    )
  );
}

function Location(props: { heading: string; Icon: React.ElementType }) {
  return (
    props.heading && (
      <div className="flex items-center justify-center gap-1">
        <props.Icon className="h-5" />
        <span>{props.heading}</span>
      </div>
    )
  );
}

function Availability({
  text,
  flag,
  isListAlign,
}: {
  text: string;
  flag?: boolean;
  isListAlign: boolean;
}) {
  return (
    flag && (
      <div
        className={clsx(
          "border-r border-red-100 dark:border-gray-800 last:border-0 p-2 py-1",
          {
            "xs:min-w-[150px]": isListAlign,
            "w-fit": !isListAlign,
          }
        )}
      >
        <span className="text-sm xs:text-[.98rem] dark:text-white font-rubik capitalize">
          {text}
        </span>
      </div>
    )
  );
}
