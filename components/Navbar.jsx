import React, { useState } from 'react'

const titles = [
    'Home',
    'Live',
    'My Videos',
    'Settings',
]

const Navbar = () => {

    const [selected, setSelected] = useState(0)

    return (
        <div className='flex flex-row justify-between p-4 items-center'>
            <h1 className='text-white font-semibold text-xl'>
                Popcorn
            </h1>
            <div className='flex gap-x-6'>
                {titles.map((title, index) => (
                    <div
                        key={index}
                        className={'rounded-2xl p-4 ' + (index === selected ? 'text-zinc-100' : 'text-zinc-400')}
                    >
                        <h1>{title}</h1>
                    </div>
                ))}
            </div>
            <div>
                <button className='bg-violet-600 hover:bg-violet-500 p-3 text-white rounded-2xl'>
                    Connect
                </button>
            </div>
        </div>
    )
}

export default Navbar