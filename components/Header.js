import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <nav class="bg-gray-800">
                <div class="mx-auto px-2 sm:px-6 lg:px-28">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>

                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex flex-shrink-0 items-center">
                                <img class="hidden h-8 w-auto lg:block" src="/logo.png" alt="Your Company"></img>
                            </div>
                            <div class="flex justify-between w-full">
                                <div class="flex space-x-8 ml-10">
                                    <Link href='#' className='text-white py-2.5'>Home</Link>
                                    <Link href='#' className='text-white py-2.5'>Series</Link>
                                    <Link href='#' className='text-white py-2.5'>Movies</Link>
                                    <Link href='#' className='text-white py-2.5'>TV Shows</Link>
                                    <Link href='#' className='text-white py-2.5'>Watch</Link>
                                    <Link href='#' className='text-white py-2.5'>Awards & Events</Link>

                                </div>
                                <button class="rounded-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5">Subscribe Now</button>
                            </div>

                        </div>

                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Header