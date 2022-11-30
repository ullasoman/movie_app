import React from 'react'
import MovieCard from './MovieCard'
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import Spinner from '../../components/_child/spinner';
import Error from '../../components/_child/error';

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

    const { data, isLoading, isError } = fetcher('popular')

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    if (data) console.log('result= ' + data)
    return (
        <>
            {
                (data || []).map((value, index) => (
                    <Post data={value} key={index}></Post>
                ))
            }
        </>
    )
}


function Post({ data }) {
    const { id, backdrop_path, original_title } = data;

    return (
        <MovieCard key={id} title={'Popular Movies'} id={id} backdrop_path={backdrop_path} original_title={original_title} />

    )
}