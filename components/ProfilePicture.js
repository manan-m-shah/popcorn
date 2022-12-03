import React from 'react'
import "./ProfilePicture.css"

function ProfilePicture() {
  return (
     <img
            src={`https://api.multiavatar.com/${0}.svg`}
            width="24px"
            height="24px"
        />
  )
}

export default ProfilePicture