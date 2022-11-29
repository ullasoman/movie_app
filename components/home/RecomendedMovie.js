import React from 'react'
import MovieCard from './MovieCard'

const Movies = [
    { id: 1, name: '/recomended/1.jpg' },
    { id: 1, name: '/recomended/2.jpg' },
    { id: 1, name: '/recomended/3.jpg' },
    { id: 1, name: '/recomended/4.jpg' },
]
const RecomendedMovie = () => {
    return (
        <MovieCard title={'Recommended For You'} Movies={Movies} />
    )
}

export default RecomendedMovie