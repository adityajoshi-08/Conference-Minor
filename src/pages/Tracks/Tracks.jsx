import React from 'react'
import "./Tracks.css"
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Track from '../../components/Track/Track'
import Heading from '../../components/Heading/Heading'

export default function Tracks() {
    const tracks = [
        {
            "iconAddress": "images/tracks/1.gif",
            "title":"Generative AI and Machine Learning"
        },
        {
            "iconAddress": "images/tracks/2.gif",
            "title":"Blockchain and Web3"
        },
        {
            "iconAddress": "images/tracks/3.gif",
            "title":"IOT and Embedded Systems"
        },
        {
            "iconAddress": "images/tracks/4.gif",
            "title":"Augmented/Virtual Realtiy"
        },
        {
            "iconAddress": "images/tracks/5.gif",
            "title":"Cloud and DevOps"
        },
        {
            "iconAddress": "images/tracks/6.gif",
            "title":"Open Innovation • Public Good"
        },
    ]
  return (
    <>
        <Nav />
        <Heading title="Tracks" />
            <div className="tracks">
                {tracks.map((track) => {
                    return (
                        <Track iconAddress={track.iconAddress} content={track.title} />
                    )
                })}
            </div>
        <Footer />
    </>

  )
}
