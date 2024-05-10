/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import "./ManipalMap.css"

export default function ManipalMap() {
  return (
    <div class="map">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52643.92092002366!2d75.52744639401158!3d26.843548748533028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1712297196500!5m2!1sen!2sin"
        width="70%"
        height="300"
        allowFullScreen
        loading="lazy"
      />
      </div>
  )
}
