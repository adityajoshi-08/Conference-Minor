import React, {useState} from 'react'
import "./Panel.css"
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Heading from '../../components/Heading/Heading'
import Panelist from '../../components/Panelist/Panelist'
import data from "../../data/humans.json"


export default function Panel() {
    const [activePanel, setActivePanel] = useState("speaker");
    console.log(data);
  return (

    <div className='panel'>
        <Nav />
        <Heading title="Panel" />
        <div className="panelContent">
            <div className="panelSelector">
                <div className="panelSelectorContent" id={activePanel==="speaker" ? "active" : ""} onClick={() => {setActivePanel("speaker")}}>
                    <h2>Speaker Panel</h2>
                </div>
                <div className="panelSelectorContent" id={activePanel==="organiser" ? "active" : ""} onClick={() => {setActivePanel("organiser")}}>
                    <h2>Organiser Panel</h2>
                </div>
            </div>
            <div className="panelGrid">
                {data[0][activePanel].map((panelist) => {
                    return (
                        <Panelist name={panelist.name} image={panelist.image} profile={panelist.profile} />
                    )
                })}
            </div>
        </div>
        <Footer />
    </div>
  )
}
