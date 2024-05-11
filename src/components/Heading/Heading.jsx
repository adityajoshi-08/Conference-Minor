import React from 'react'
import "./Heading.css"

export default function Heading(props) {
  return (
    <div class="headingTag">
        <hr class="headingHR" />
        <h1 class="heading">{props.title}</h1>
        <hr class="headingHR" />
    </div>
  )
}
