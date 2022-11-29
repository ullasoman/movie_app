import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
const HeroSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={false}
                navigation={true}
                modules={[Pagination, Navigation]}
                effect="fade"
                className="mySwiper"
            >
                <SwiperSlide><img src='/sanddust2.jpg'></img></SwiperSlide>
                <SwiperSlide><img src='/movies05.jpg'></img></SwiperSlide>
                <SwiperSlide><img src='/Shadow.jpg'></img></SwiperSlide>
                <SwiperSlide><img src='/movie-abc.png'></img></SwiperSlide>
                <SwiperSlide><img src='/final-fantasy.jpg'></img></SwiperSlide>
            </Swiper>
        </>
    )
}

export default HeroSlider