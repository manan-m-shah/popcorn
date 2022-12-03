import React, { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext'
import { ActionKind } from '../../types/Context';

const Stake = () => {
    const { state, dispatch } = useContext(AppContext)
    const [value, setValue] = useState(100)

    console.log(state.stakeModal)

    return (
        state.stakeModal ? (
            <>
                <div className='justify-center backdrop-blur-md items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                    <div className='relative w-full my-6 mx-auto max-w-lg bg-zinc-800 p-16 rounded-2xl text-white flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 w-full justify-center items-center'>
                            <button
                                className='text-7xl text-zinc-300 hover:text-white hover:scale-105'
                                onClick={() => {
                                    if (value < 100) {
                                        setValue(0)
                                    } else {
                                        setValue(oldValue => oldValue - 100)
                                    }

                                }}
                            >
                                -
                            </button>
                            <input
                                className='p-3 ml-2 bg-zinc-700 rounded-2xl text-center text-xl w-[100px] py-6 placeholder-gray-400 border-zinc-900 border-2'
                                type="number"
                                placeholder='100'
                                value={value}
                            />
                            <button
                                className='text-7xl text-zinc-300 hover:text-white hover:scale-105'
                                onClick={() => {
                                    setValue(oldValue => oldValue + 100)
                                }}
                            >
                                +
                            </button>
                        </div>
                        <button className='p-3 rounded-xl w-full bg-blue-500'>
                            Stake
                        </button>
                        <button
                            className='p-3 rounded-xl w-full bg-violet-500'
                            onClick={() => {
                                dispatch({
                                    type: ActionKind.STAKE_MODAL,
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