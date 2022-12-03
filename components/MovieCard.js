import React from 'react'
import './MovieCard.css'
import ProfilePicture from "./ProfilePicture"

function MovieCard({ height, width}) {
    return (
        <div className="movie-card " style={{
            height: `${266}`, width: `${480}`}}>
            <div className="movie-title">Spiderman</div>
            <div className="movie-author">0xq8refiudhfmiued</div>
            <div className="stakers"><div className="staked">Staked</div><div className="profile-icons"><ProfilePicture/><ProfilePicture/><ProfilePicture/></div></div>

        </div>
    )
}

export default MovieCard