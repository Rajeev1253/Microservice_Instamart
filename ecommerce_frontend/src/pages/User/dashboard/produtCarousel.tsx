import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import style from "./userDashboard.module.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import ProductCard from './ProductCard';
import { Stack } from '@mui/material';

const data = [
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    <ProductCard/>,
    

]

export default function ProductCarousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className={style.swiper} >
        <SwiperSlide>
            <Stack direction={"row"}>

            {data.map((item)=>item)}
            </Stack>
            </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        
      </Swiper>
    </>
  );
}
