import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Link from 'next/link';


const LatestMovies = ({ title, margin }) => {

    return (
        <section className={margin}>
            <div className='mx-auto px-2 sm:px-6 lg:px-28'>
                <div className='section_head_row'>
                    <h2 class="section_title"> {title}</h2>
                </div>
                <div className='movie_card_list'>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        loop={true}
                        pagination={false}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="listSwiper"
                    >
                        <SwiperSlide>
                            <div className='product-wrap relative overflow-hidden rounded-md mb-30 group block'>
                                <div className='product-img relative overflow-hidden'>
                                    <Link href='#'><img src='/latest-movies/movie-01.jpg'></img></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='product-wrap relative overflow-hidden rounded-md mb-30 group block'>
                                <div className='product-img relative overflow-hidden'>
                                    <Link href='#'><img src='/latest-movies/movie-02.png'></img></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='product-wrap relative overflow-hidden rounded-md mb-30 group block'>
                                <div className='product-img relative overflow-hidden'>
                                    <Link href='#'><img src='/latest-movies/movie-03.jpg'></img></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='product-wrap relative overflow-hidden rounded-md mb-30 group block'>
                                <div className='product-img relative overflow-hidden'>
                                    <Link href='#'><img src='/latest-movies/movie-04.jpg'></img></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='product-wrap relative overflow-hidden rounded-md mb-30 group block'>
                                <div className='product-img relative overflow-hidden'>
                                    <Link href='#'><img src='/latest-movies/movie-05.jpg'></img></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='product-wrap relative overflow-hidden rounded-md mb-30 group block'>
                                <div className='product-img relative overflow-hidden'>
                                    <Link href='#'><img src='/latest-movies/movie-06.jpg'></img></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='product-wrap relative overflow-hidden rounded-md mb-30 group block'>
                                <div className='product-img relative overflow-hidden'>
                                    <Link href='#'><img src='/latest-movies/movie-07.jpg'></img></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='product-wrap relative overflow-hidden rounded-md mb-30 group block'>
                                <div className='product-img relative overflow-hidden'>
                                    <Link href='#'><img src='/latest-movies/movie-08.jpg'></img></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default LatestMovies