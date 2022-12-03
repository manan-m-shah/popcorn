'use client'
import type { NextPage } from 'next'
import { useContext,useState,useEffect } from 'react'
import AppContext from '../context/AppContext'
import { ActionKind } from '../types/Context'
import Image from 'next/image'
import { Player } from '@livepeer/react'
import { videoPlaybackId } from '../library/constants'
import MovieCard from "../components/MovieCard"
import { getMovies } from "../library/web3Provider"
import Web3 from 'web3'

const moviePoster = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054'




const Home: NextPage = () => {
    const { state, dispatch } = useContext(AppContext)
    console.log(state)
    useEffect(() => {
        ;(async () => {
            // await initWeb3();
            // @ts-ignore
            window.web3x = new Web3(window.ethereum)
            if (!localStorage.getItem("isWeb3Connected")) {
                getMovies().then((result) => {
                    console.log("the movies listed are", result)
                })
            }
        })()
    }, [])




    return (
        <div className="grid min-h-screen p-4 w-full">
            <div className='grid grid-cols-3 gap-x-4 gap-y-6'>
                <div className='col-span-3'>
                    <div className="max-h-[150vh]"><MovieCard height={448} width={530} movieId={moviePoster} /></div>
                </div>

                <div className='col-span-3 max-h-[150vh]'>
                    <h1 className='text-2xl ml-4'>Continue Watching</h1>
                </div>
                <div className="drop-shadow-md"><MovieCard height={448} width={530} movieId={moviePoster} /></div>
                <div className=""><MovieCard height={448} width={530} movieId={moviePoster} /></div>
                <div className=""><MovieCard height={448} width={530} movieId={moviePoster} /></div>

                <div className='col-span-3'>
                    <h1 className='text-2xl ml-4'>New Releases</h1>
                </div>
                <div className=""><MovieCard height={448} width={530} movieId={moviePoster} /></div>
                <div className=""><MovieCard height={448} width={530} movieId={moviePoster} /></div>
                <div className=""><MovieCard height={448} width={530} movieId={moviePoster} /></div>
                <div className=""><MovieCard height={448} width={530} movieId={moviePoster} /></div>
                <div className=""><MovieCard height={448} width={530} movieId={moviePoster} /></div>
                <div className=""><MovieCard height={448} width={530} movieId={moviePoster} /></div>
            </div>
        </div>
    )
}

export default Home
