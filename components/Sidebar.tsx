import React, { useState } from 'react'
import MovieCard from "./MovieCard"

const titles = [
    'Home',
    'Live',
    'My Videos',
    'Settings',
]

const Sidebar = () => {

    const [selected, setSelected] = useState(0)

    return (
        <div className='h-full flex flex-col  bg-gradient-to-top py-8'>
            <MovieCard height={ 50}width={  75} /><MovieCard height={ 50}width={75} />
            {/* <div className='flex flex-col gap-y-6 px-4'>
                {titles.map((title, index) => (
                    <div
                        key={index}
                        className={'p-4 rounded-2xl ' + (index === selected ? 'bg-violet-600 text-violet-100' : 'bg-gray-800 text-white')}
                    >
                        <h1>{title}</h1>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-y-6 px-4'>
                <div className='p-4 rounded-2xl bg-violet-600 text-violet-100'>
                    <h1>Connect</h1>
                </div>
            </div> */}
        </div>
    )
}

export default Sidebar