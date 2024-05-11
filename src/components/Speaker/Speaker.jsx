import React from 'react'
import "./Speaker.css"

export default function Speaker(props) {

    const speakers = [
        {"name": "Dr. Phayung Meesad", "image": "images/speakers/images/Phayung Meesad.png"},
        {"name": "Dr. Dharam Singh Jat", "image": "images/speakers/images/Dharam Singh Jat.png"},
        {"name": "Dr. Durga Mohapatra", "image": "images/speakers/images/Durga Prasad Mohapatra.jpeg"}
    ]
  return (
    <div class="speakerPhoto">
            
              <div class="individualPhoto">
                <a href="/speakers" target="_blank">
                  <img
                    src={props.image}
                    alt={props.name}
                  />
                  <div class="content">
                    <h4>{props.name}</h4>
                  </div>
                </a>
              </div>
            
          </div>
  )
}
