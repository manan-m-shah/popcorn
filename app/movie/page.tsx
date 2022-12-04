'use client'

import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { ActionKind } from '../../types/Context'
import notify from '../../utils/notify'

const moviePoster = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054'

const page = () => {
    const { state, dispatch } = useContext(AppContext)
    const movie = state.movies[state.activeMovie]

    return (
        <div className='grid grid-cols-2 px-12'>
            <div className='flex flex-col gap-y-4 p-4'>
                <img
                    className='rounded-2xl h-128 w-96'
                    src={moviePoster}
                    alt='Blender'
                />
            </div>
            <div className='p-4'>
                <div className='flex flex-col gap-y-4 p-4'>
                    <h1 className='text-4xl'>
                        {movie?.title}
                    </h1>
                    <div className='flex flex-col gap-y-4'>
                        <h1>Starring</h1>
                        <div className='flex gap-x-2 gap-y-2'>
                            <h3 className='p-2 bg-purple-400 rounded-2xl w-fit'>Aniket</h3>
                            <h3 className='p-2 bg-green-400 rounded-2xl w-fit'>Manan</h3>
                            <h3 className='p-2 bg-blue-400 rounded-2xl w-fit'>Rishi</h3>
                            <h3 className='p-2 bg-orange-400 rounded-2xl w-fit'>Nirman</h3>
                            <h3 className='p-2 bg-pink-400 rounded-2xl w-fit'>Anu</h3>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <h1>Genre</h1>
                        <div className='flex gap-x-2 gap-y-2'>
                            <h3 className='p-2 bg-red-500 rounded-2xl w-fit'>Thriller</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-4 p-4'>
                    <h3>{movie?.description}</h3>
                    <div className='font-thin'>
                        Centers on a young surgeon with Savant syndrome who is recruited into the pediatric surgical unit of a prestigious hospital. The question will arise: Can a person who doesn't have the ability to relate to people actually save their lives?
                    </div>
                </div>
                <div className='grid grid-cols-1 w-full p-8 px-0 gap-y-4'>
                    {
                        (
                            <button className='w-full p-3 bg-blue-500 rounded-2xl'
                            // onClick={() => { 
                            //     notify('info', 'Coming Soon!')
                            // }}
                            >
                                Play
                            </button>
                        )
                    }
                    <button
                        className='w-full p-3 bg-violet-500 rounded-2xl'
                        onClick={() => {
                            dispatch({
                                type: ActionKind.STAKE_MODAL,
                                payload: true,
                            })
                        }}
                    >
                        Stake
                    </button>
                    <div className='flex gap-x-2'>
                        <h1>Total Collection</h1>
                        <h1 className='text-violet-300'>{movie?.profit} ETH</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page