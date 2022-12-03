import React, { useState } from 'react'
import MovieCard from "./MovieCard"

const titles = [
    'Home',
    'Live',
    'My Videos',
    'Settings',
]

const moviePoster = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054'

const Sidebar = () => {

    const [selected, setSelected] = useState(0)

    return (
        <div className='h-full flex flex-col  bg-gradient-to-top p-8'>
            <div className="drop-shadow-2xl"><MovieCard height={448} width={530} movieId={moviePoster} /></div>
            <div className="drop-shadow-2xl"><MovieCard height={448} width={530} movieId={moviePoster} /></div>
            <div className='flex flex-col gap-y-6 px-4'>

            </div>
        </div>
    )
}

export default Sidebar