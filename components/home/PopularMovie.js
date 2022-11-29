import React from 'react'
import MovieCard from './MovieCard'

const Movies = [
    { id: 1, name: '/latest-movies/movie-01.jpg' },
    { id: 2, name: '/latest-movies/movie-02.png' },
    { id: 3, name: '/latest-movies/movie-03.jpg' },
    { id: 4, name: '/latest-movies/movie-04.jpg' },
    { id: 5, name: '/latest-movies/movie-05.jpg' },
    { id: 6, name: '/latest-movies/movie-06.jpg' },
    { id: 7, name: '/latest-movies/movie-07.jpg' },
    { id: 8, name: '/latest-movies/movie-08.jpg' },
]

export default function PopularMovie() {
    return (
        <MovieCard title={'Popular Movies'} Movies={Movies} />
    )
}
