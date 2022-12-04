import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import { imageContainer } from '../library/constants'
import { ActionKind } from '../types/Context'
import MovieCard from "./MovieCard"

const titles = [
    'Home',
    'Live',
    'My Videos',
    'Settings',
]

const moviePoster = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054'

const Sidebar = () => {
    const {state, dispatch} = useContext(AppContext)
    const [selected, setSelected] = useState(0)

    return (
        <div className='h-full flex flex-col gap-y-2 bg-gradient-to-top p-8'>
            <h1 className='text-2xl ml-4 text-blue-400'>Favourites</h1>
            <div className="drop-shadow-2xl"><MovieCard height={448} width={530} movieId={imageContainer[3]} /></div>
            <div className="drop-shadow-2xl"><MovieCard height={448} width={530} movieId={imageContainer[4]} /></div>
            <div className='flex flex-col gap-y-6 px-4'></div>
            <button
                className='p-3 bg-violet-500 rounded-xl'
                onClick={() => { 
                    dispatch({
                        type: ActionKind.ADD_MOVIE,
                        payload: true,
                    })
                }}
            >
                Add Movie
            </button>
        </div>
    )
}

export default Sidebar