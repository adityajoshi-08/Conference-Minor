import React from 'react'
import "./Nav.css"

export default function Nav() {
  return (
    <>
    <nav>
      <div class="container">
        <img src="images/logos/ICCAI_Logo.png" alt="" class="logo" />


        <div class="sideElement">
          <a href="/">HOME</a>
        </div>
        <div class="sideElement">
          <a href="/about">ABOUT</a>
        </div>
        <div class="sideElement">
          <a href="/#partners">PARTNERS</a>
        </div>
        <div class="sideElement">
          <a href="">TRACK</a>
        </div>
        <div class="sideElement">
          <a href="/#speakers">SPEAKERS</a>
        </div>
        <div class="sideElement">
          <a href="">COMMITEE</a>
        </div>
        <div class="sideElement">
          <a href="">PREVIOUS CONFERENCES</a>
        </div>
        <div class="sideElement">
          <a href="/#contact">CONTACT</a>
        </div>
      </div>
    </nav>
    </>
  )
}
