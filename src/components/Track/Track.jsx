import React from 'react'
import "./Track.css"

export default function Track(props) {
  return (
    <div className='trackDiv'>
        <div className="trackIconArea">
            <img className="trackIconAreaImage" src={props.iconAddress} alt="" srcset="" />
        </div>
        <div className="trackContent">
            <span>{props.content}</span>
        </div>
    </div>
  )
}
