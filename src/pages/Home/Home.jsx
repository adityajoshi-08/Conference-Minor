/* eslint-disable no-whitespace-before-property */
/* eslint-disable jsx-a11y/iframe-has-title */
import "./Home.css"
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer';
import ManipalMap from '../../components/ManipalMap/ManipalMap';
import React, { useState, useEffect } from 'react';


export default function Home() {

  var countDownDate = new Date("Oct 23, 2024 00:00:00").getTime();
  setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24)) ;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) ;
    var seconds = Math.floor ((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document. getElementById ("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);

  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = ["one","two","three"];
  // image dimensions - 1920x1080

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment backgroundIndex cyclically
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000); // 10 seconds interval

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [backgrounds.length]);

  return (
    <>
      <Nav />

      <div className="main"
        style={{
          background: `url("${process.env.PUBLIC_URL}/images/Backgrounds/${backgrounds[backgroundIndex]}.jpg")`,
          backgroundSize: 'cover',
          height: '100vh',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div class="conferceInfoMain">
          <span>Join us for the</span><br />
          <span id="conferenceNameSpanMain"
            ><h3>
              International Conference of Cognitive and Artificial Intelligence
            </h3></span
          >
          <span class="datesMain">1 Day • 23rd October • Hybrid</span>
          <br />
          <span class="locationMain"
            >at 
            <a href="https://maps.app.goo.gl/SSKBxJNvmNVRXxNa7" target="_blank" rel="noreferrer"
              ><b> Manipal University - Jaipur</b></a
            ></span
          >
        </div>
        <div class="launchTime">
          <div class="launchTimeSingleBlock">
            <p id="days">00</p>
            <span>Days</span>
          </div>

          <div class="launchTimeSingleBlock">
            <p id="hours">00</p>
            <span>Hours</span>
          </div>

          <div class="launchTimeSingleBlock">
            <p id="minutes">00</p>
            <span>Minutes</span>
          </div>

          <div class="launchTimeSingleBlock">
            <p id="seconds">00</p>
            <span>Seconds</span>
          </div>
        </div>
        <div class="registrations">
          <h2>Registrations open soon</h2>
        </div>
      </div>

      <div id="partners">
        <div class="orgyPartner">
          <h3>ORGANISER PARTNER</h3>
          <div class="organisingPartners">
            <div class="organisingPartner">
              <img src="images/logos/GDSC Logo Full.png" alt="" />
            </div>
            <div class="organisingPartner">
              <img src="images/logos/GDSC Logo Full.png" alt="" />
            </div>
          </div>
        </div>

        <div class="orgyPartner">
          <h3>SPONSOR PARTNER</h3>
          <div class="sponsorPartners">
            <div class="sponsorPartner">
              <img src="images/logos/GDSC Logo Full.png" alt="" />
            </div>
            <div class="sponsorPartner">
              <img src="images/logos/GDSC Logo Full.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id="speakers">
        <div class="containerSpeaker">
          <h1>OUR SPEAKERS</h1>
          <div class="speakerPhoto">
            <div class="speakerPhotoRow">
              <div class="individualPhoto">
                <a href="/speaker.html" target="_blank">
                  <img
                    src="images/speakers/images/Phayung Meesad.png"
                    alt="Phayung Meesad"
                  />
                  <div class="content">
                    <h4>Dr. Phayung Meesad</h4>
                  </div>
                </a>
              </div>

              <div class="individualPhoto">
                <a href="/speaker.html" target="_blank">
                  <img
                    src="images/speakers/images/Dharam Singh Jat.png"
                    alt="Dharam Singh Jat"
                  />
                  <div class="content">
                    <h4>Dr. Dharam Singh Jat</h4>
                  </div>
                </a>
              </div>

              <div class="individualPhoto">
                <a href="/speaker.html" target="_blank">
                  <img
                    src="images/speakers/images/Durga Prasad Mohapatra.jpeg"
                    alt="Durga Prasad Mohapatra"
                  />
                  <div class="content">
                    <h4>Dr. Durga Mohapatra</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="joinUs">
        <div class="joinUsContainer">
          <h2>Become a part of ICCAI</h2>
          <div class="joinUsContainerRow">
            <div class="CFP">
              <h4>Call for papers!</h4>
              <p>Join us as a speaker for the ICCAI conference</p>
              <button>Click here</button>
            </div>

            <div class="CFP">
              <h4>Call for sponsors!</h4>
              <p>Sponsor the ICCAI and create an impact on the community</p>
              <button>Click here</button>
            </div>

            <div class="CFP">
              <h4>Call for volunteers!</h4>
              <p>Join our dynamic team and help us make an impact</p>
              <button>Click here</button>
            </div>
          </div>
        </div>
      </div>

      <div id="contact">
        <div class="contactContainer">
          <div class="personsContact">
            <h3>Contact Us</h3>
            <h1>Let's Get In Touch</h1>
            <br />
            <span
              ><b>Dr. Devesh Kumar Srivastava</b>: +91-8290755160 <br /><b
                >Dr. Sandeep Joshi</b
              >: +91-9571449301</span
            ><br />
            <span
              >devesh.srivastava@jaipur.manipal.edu<br />sandeep.joshi@jaipur.manipal.edu</span
            >
          </div>
          <br /><br />
          <div class="addressContact">
            <span>Dehmi Kalan, Jaipur-Ajmer Expressway,</span>
            <span>Near GVK Toll Plaza, Jaipur, Rajasthan 303007</span><br />
            <span>PHONE: +91 141- 3999-100 (Ext. 258/576)</span>
          </div>
        </div>
      </div>

      <ManipalMap />

      <Footer />
    </>
  )
}
