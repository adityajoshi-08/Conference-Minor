import React from 'react'
import "./About.css"
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Objective from '../../components/Objective/Objective'

export default function About() {

    const objectives = [
        {
            iconAddress: "images/icons/1.png",
            objectiveContent: "Facilitate knowledge sharing among researchers."
        },
        {
            iconAddress: "images/icons/2.png",
            objectiveContent: "Showcase cutting-edge research in cognitive science and AI."
        },
        {
            iconAddress: "images/icons/3.png",
            objectiveContent: "Explore the societal implications of AI technologies."
        },
        {
            iconAddress: "images/icons/4.png",
            objectiveContent: "Foster collaborations between academia and industry."
        }
    ]
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
                        
                        {objectives.map((objective) => {
                            return (
                                <Objective iconAddress={objective.iconAddress} content={objective.objectiveContent}/>
                            )
                        })}
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}
