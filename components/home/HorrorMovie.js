import React from 'react'
import MovieCard from './MovieCard'

const Movies = [
    { id: 1, name: '/horror-movies/horror-1.jpg' },
    { id: 2, name: '/horror-movies/horror-2.jpg' },
    { id: 3, name: '/horror-movies/horror-3.jpg' },
    { id: 4, name: '/horror-movies/horror-4.jpg' },
    { id: 5, name: '/horror-movies/horror-5.jpg' },
    { id: 6, name: '/horror-movies/horror-6.jpg' },
    { id: 7, name: '/horror-movies/horror-7.jpg' },
    { id: 8, name: '/horror-movies/horror-8.jpg' },
    { id: 8, name: '/horror-movies/horror-9.jpg' },
    { id: 8, name: '/horror-movies/horror-10.jpg' },
    { id: 8, name: '/horror-movies/horror-11.jpg' },
    { id: 8, name: '/horror-movies/horror-12.jpg' },
]

const HorrorMovie = () => {
    return (
        <MovieCard title={'Horror Series'} Movies={Movies} />
    )
}

export default HorrorMovie