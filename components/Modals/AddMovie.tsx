import React, { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext'
import { ActionKind } from '../../types/Context';

const Stake = () => {
    const { state, dispatch } = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [playbackId, setPlaybackId] = useState('')
    const [nftAddress, setNftAddress] = useState('')

    console.log(state.addMovie)

    const handleSubmit = async () => {
        // check if all fields are filled
        if (title === '' || description === '' || image === '' || playbackId === '' || nftAddress === '') {
            alert('Please fill all fields')
            return
        }
        console.log('submitting')
    }

    return (
        state.addMovie ? (
            <>
                <div className='justify-center backdrop-blur-md items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                    <div className='relative w-full my-6 mx-auto max-w-lg bg-zinc-800 p-16 rounded-2xl text-white flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-2 w-full justify-center items-center'>
                            {/* 
                                name, description, image, playbackid, timestart, timeend
                             */}
                            <input
                                className='p-3 pl-8 bg-zinc-900 w-full rounded-2xl border-2 border-zinc-600'
                                placeholder='title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <input
                                className='p-3 pl-8 bg-zinc-900 w-full rounded-2xl border-2 border-zinc-600'
                                placeholder='description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input
                                className='p-3 pl-8 bg-zinc-900 w-full rounded-2xl border-2 border-zinc-600'
                                placeholder='image'
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <input
                                className='p-3 pl-8 bg-zinc-900 w-full rounded-2xl border-2 border-zinc-600'
                                placeholder='playback id'
                                value={playbackId}
                                onChange={(e) => setPlaybackId(e.target.value)}
                            />
                            <input
                                className='p-3 pl-8 bg-zinc-900 w-full rounded-2xl border-2 border-zinc-600'
                                placeholder='nft address'
                                value={nftAddress}
                                onChange={(e) => setNftAddress(e.target.value)}
                            />
                        </div>
                        <button
                            className='p-3 rounded-xl w-full bg-blue-500'
                            onClick={handleSubmit}
                        >
                            Add Movie
                        </button>
                        <button
                            className='p-3 rounded-xl w-full bg-violet-500'
                            onClick={() => {
                                dispatch({
                                    type: ActionKind.ADD_MOVIE,
                                    payload: false,
                                })
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
            </>
        ) : (
            <></>
        )
    )
}

export default Stake