'use client'
import type { NextPage } from 'next'
import { useContext } from 'react'
import AppContext from '../context/AppContext'
import { ActionKind } from '../types/Context'
import Image from 'next/image'
import { Player } from '@livepeer/react'
import { videoPlaybackId } from '../library/constants'
import MovieCard from "../components/MovieCard"
const Home: NextPage = () => {
    const { state, dispatch } = useContext(AppContext)
    console.log(state)
    return (
        <div className="grid min-h-screen p-4 w-full">
            <div className='grid grid-cols-3 gap-x-4 gap-y-6'>
                <div className='col-span-3'>
                    <div className="max-h-[150vh]"><MovieCard height={448} width={530} movieId={1} /></div>
                </div>
                <div className="h-[100vh]"><MovieCard height={448} width={530} movieId={1} /></div>
                <div className="h-[100vh]"><MovieCard height={448} width={530} movieId={1} /></div>
                <div className="h-[100vh]"><MovieCard height={448} width={530} movieId={1} /></div>
                <div className="h-[100vh]"><MovieCard height={448} width={530} movieId={1} /></div>
                <div className="h-[100vh]"><MovieCard height={448} width={530} movieId={1} /></div>
                <div className="h-[100vh]"><MovieCard height={448} width={530} movieId={1} /></div>
                <div className="h-[100vh]"><MovieCard height={448} width={530} movieId={1} /></div>
                <div className="h-[100vh]"><MovieCard height={448} width={530} movieId={1} /></div>
                <div className="h-[100vh]"><MovieCard height={448} width={530} movieId={1} /></div>
            </div>
        </div>
    )
}

export default Home
