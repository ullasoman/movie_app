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

const MovieCard = ({ title, id, backdrop_path, original_title }) => {
    return (
        <section className='mt-3'>
            <div className='mx-auto px-2 sm:px-6 lg:px-28'>
                <div className='section_head_row'>
                    <h2 class="section_title">{title}</h2>
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
                                    <Link href='#'><img src={backdrop_path} alt='test'></img></Link>
                                </div>
                                <h2>{original_title}</h2>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>


        </section>
    )
}

export default MovieCard