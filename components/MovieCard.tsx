import React from 'react'
import './MovieCard.css'
import ProfilePicture from "./ProfilePicture"

function MovieCard({ height, width, movieId, title }) {
    return (
        <div className="movie-card drop-shadow-2xl" style={{
            height: `${height}`, width: `${width}`, backgroundImage: `url(${movieId})`
        }}>
            <div className='py-16'></div>
            <div className='w-full bg-gray-600/60 backdrop-blur-lg p-2'>
                <h1 className="p-1 w-fit rounded-xl">{title}</h1>
            </div>
            {/* <div className="movie-author">0xq8refiudhfmiued</div> */}
            {/* <div className="stakers"><div className="staked">Staked</div><div className="profile-icons"><ProfilePicture/><ProfilePicture/><ProfilePicture/></div></div> */}
        </div>
    )
}

export default MovieCard