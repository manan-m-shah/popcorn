import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-y-4 p-4'>
                <h1>
                    Movie Title
                </h1>
                <img
                    className='rounded-2xl'
                    src='/first.png'
                    alt='Blender'     
                    placeholder='blur'               
                />
                <div className=''>
                    <div className=''>
                        Starring: xyz
                    </div>
                    <div className=''>
                        Genre: Thriller
                    </div>
                    <div className=''>
                        Language: English
                    </div>
                </div>
                <div className=''>
                    <h2>Description:</h2>
                    <div className=''>
                    Centers on a young surgeon with Savant syndrome who is recruited into the pediatric surgical unit of a prestigious hospital. The question will arise: Can a person who doesn't have the ability to relate to people actually save their lives?
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default page