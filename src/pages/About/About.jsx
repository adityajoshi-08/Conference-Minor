import React from 'react'
import "./About.css"
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default function About() {
  return (
    <>
      <Nav />
      <div class="aboutMain">
        <div class="aboutContainer">
            <div class="aboutUsTag">
                <hr class="aboutUsTagHR" />
                <h2 class="aboutUsTagText">ABOUT ICCAI</h2>
                <hr class="aboutUsTagHR" />
            </div>

            <div class="aboutConference">
                <div class="aboutConferenceSection">
                    <div class="aboutConferenceSectionHeading">
                        <h2>About the conference</h2>
                    </div>
                    
                    <div class="aboutConferenceSectionContent">
                        <p>
                        The ICCAI conference serves as a platform for academics, professionals, and enthusiasts to exchange ideas, share research findings, and discuss emerging trends in cognitive science and artificial intelligence. Through a series of keynote speeches, panel discussions, paper presentations, and workshops, ICCAI aims to foster collaboration and promote interdisciplinary research in these rapidly evolving fields.
                        </p>
                    </div>
                </div>


                <div class="aboutConferenceSection">
                    <div class="aboutConferenceSectionHeading">
                        <h2>Objectives</h2>
                    </div>
                    
                    <div class="aboutConferenceSectionContent">
                        <ul>
                            <li>Facilitate knowledge sharing and networking among researchers and practitioners.</li>
                            <li>Showcase cutting-edge research and innovations in cognitive science and artificial intelligence.</li>
                            <li>Explore the societal implications and ethical considerations of AI technologies.</li>
                            <li>Foster collaborations between academia, industry, and government organizations.</li>
                        </ul>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}
