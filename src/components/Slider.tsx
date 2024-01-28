"use client";

import React from 'react';
import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

import { useResize } from '@/utils';

type SliderProps = {
    children: React.ReactNode

}

export default function Slider({ children }: SliderProps) {

    const pageWidth = useResize()

    return (
        
            <Swiper
                className="w-full slider"
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={pageWidth >= 450 && pageWidth <= 768 ? 2 : pageWidth >= 800 && pageWidth <= 1199 ? 3 : pageWidth >= 1200 ? 4 : 1}
                pagination={{ clickable: true }}
            >
                {children}
            </Swiper>
    )
}