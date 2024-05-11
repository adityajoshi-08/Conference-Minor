import React from 'react'
import "./Panelist.css"

export default function Panelist(props) {
    return (
        <div className='panelist'>
                <div className="panelistContent">
                        <a href={props.profile} target='_blank' rel="noreferrer"><img src={props.image} alt={props.name} /></a>
                        <h2>{props.name}</h2>
                </div>
        </div>
    )
}