import React from 'react'
import "./Speaker.css"

export default function Speaker(props) {

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
