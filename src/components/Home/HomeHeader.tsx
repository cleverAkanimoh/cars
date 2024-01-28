"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { Welcome, Special, Landing, Showcase } from '.';

type HomeHeaderProps = {}

export default function HomeHeader({ }: HomeHeaderProps) {
    return (
        <header className='h-[80vh] w-screen hidden sm:block lg:h-[90vh] xl:h-screen'>
            <Swiper
                className="w-full h-full slider"
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 15000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <Landing />
                </SwiperSlide>

                <SwiperSlide>
                    <Welcome />
                </SwiperSlide>

                <SwiperSlide>
                    <Special />
                </SwiperSlide>

                <SwiperSlide>
                    <Showcase />
                </SwiperSlide>
            </Swiper>
        </header>
    )
}