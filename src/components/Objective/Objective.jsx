import React from 'react'
import "./Objective.css"

export default function Objective(props) {
  return (
    <div className='objective'>
        <div className="iconArea">
            <img className="iconAreaImage" src={props.iconAddress} alt="" srcset="" />
        </div>
        <div className="objectiveContent">
            <span>{props.content}</span>
        </div>
    </div>


  )
}
