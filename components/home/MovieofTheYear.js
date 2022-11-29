import React from 'react'
import { BsStarFill, BsStarHalf, BsPlayFill } from "react-icons/bs";

const MovieofTheYear = () => {
    return (
        <section className='relative bg-center bg-no-repeat bg-cover' style={{ ["background-image"]: " url(https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/final-fantasy.jpg)" }}>
            <div className='bg_overlay'></div>
            <div className='mx-auto px-2 sm:px-6 lg:px-28'>
                <div className='moty_content'>
                    <div className='w-1/2 flex-col'>
                        <div className='moty_title_big'><h2 class="moty_title">bailey</h2></div>
                        <div className='moty_rating py-5'>
                            <div className='parallax-ratting flex items-center mt-3 mb-3'>
                                <ul className='ratting-start p-0 m-0  text-red-600 flex items-center justify-start gap-3 text-lg'>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarHalf /></li>
                                </ul>
                                <span className="text-white ml-3">4.2 (lmdb)</span>
                            </div>
                        </div>
                        <div className='moty_duration flex gap-3'>
                            <div className="bg-blue-100 text-blue-800 px-2 font-semibold rounded">15+</div>
                            <h6 class="text-white">2hr : 30mins</h6>
                        </div>
                        <div className='moty_details py-5'>
                            <h2 className='moty_caption'>Movie of the year</h2>
                            <p className='text-white moty_desc'>Baileys Irish Cream is an Irish cream liqueur an alcoholic beverage flavoured with cream, cocoa, and Irish whiskey made by Diageo at Republic of Ireland and in Mallusk, Northern Ireland.</p>
                        </div>
                        <div className='cta'>
                            <button class="flex items-center gap-2 rounded-lg px-4 py-2 bg-red-600 text-red-100 hover:bg-red-700 duration-300"> <BsPlayFill className='text-lg' /> Play Now</button>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='moty_picture'>
                            <img src='https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/elementor/thumbs/final-fantasy-pit66fybw2bhdt0d28s1y3azlhdf2vyr9lkxs9wxoo.jpg'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieofTheYear