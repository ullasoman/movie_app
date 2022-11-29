import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className='footer_top'>
                <div className='mx-auto px-2 sm:px-6 lg:px-28 flex'>
                    <div className='w-7/12'>
                        <div className='widget'>
                            <div className='footer_menu'>
                                <ul className='flex gap-4'>
                                    <li><Link href='#'>Terms Of Use</Link></li>
                                    <li><Link href='#'>Privacy-Policy</Link></li>
                                    <li><Link href='#'>Blog</Link></li>
                                    <li><Link href='#'>FAQ</Link></li>
                                    <li><Link href='#'>Watch List</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='widget'>
                            <div className='text_widget'><p>© 2022 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p></div>
                        </div>
                    </div>
                    <div className='w-2/12'>
                        <h6 className="footer_link_title">Follow Us :</h6>
                        <ul className="info_share">
                            <li><Link href='#' ><FaFacebook /></Link></li>
                            <li><Link href='#'><FaTwitter /></Link></li>
                            <li><Link href='#'><FaYoutube /></Link></li>
                            <li><Link href='#'><FaInstagram /></Link></li>
                        </ul>
                    </div>
                    <div className='w-2/12'>
                        <h6 className="footer_link_title">Streamit App</h6>
                        <div className='flex items-center gap-3'>
                            <Link href='#' className='app_img'>
                                <img src="/play_store.png" alt="play-store"></img>
                            </Link>
                            <Link href='#' className='app_img'>
                                <img src="/app_store.png" alt="app-store"></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer