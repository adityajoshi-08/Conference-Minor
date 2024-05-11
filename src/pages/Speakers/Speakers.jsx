import React from 'react'
import "./Speakers.css"
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default function Speakers() {
  return (
    <div>
    <Nav />

    <main>
        <h1>Meet our speakers</h1>
        <div class="speakerDetail" id="DrPhayungMeesad">
            <div class="speakerDetailText">
                <p><b>Dr. Phayung Meesad</b> (S'97) received the B.S. degree in electrical engineering from King Mongkut's Institute of Technology North Bangkok, Thailand, in 1994, and the M.S. and Ph.D. degrees in electrical engineering from Oklahoma State University, Stillwater, in 1998 and 2002, respectively.,He is currently the Associate Dean at the King Mongkut's Institute of Technology. His research interests includes neural networks, fuzzy systems, fuzzy neural networks, genetic algorithms, pattern classification, control systems, signal processing, and machine health monitoring.(Based on document published on 11 August 2003).</p>
                <div class="speakerDetailTextSocialLinks">
                    <a href="https://ieeexplore.ieee.org/author/37325222300">IEEE Explore</a>
                    <span>•</span>
                    <a href="https://www.youtube.com/@PhayungMeesad">YouTube</a>
                    <span>•</span>
                    <a href="https://www.linkedin.com/in/phayung-meesad-5b035194/">LinkedIn</a>
                </div>
            </div>

            <div class="speakerDetailImage">
                <img src="images/speakers/images/Phayung Meesad.png" alt="" />
            </div>
        </div>

        <div class="speakerDetail" id="DrDurgaPrasad">
            <div class="speakerDetailText">
                <p><b>Dr. Durga Prasad Mohapatra</b> received his Ph. D. from Indian Institute of Technology Kharagpur and M. E. from Regional Engineering College (now NIT), Rourkela, in Computer Science and Engineering. He joined the faculty of the Department of Computer Science and Engineering at the National Institute of Technology, Rourkela in 1996, where he is now a full Professor. His research interests include software engineering, real-time systems, discrete mathematics and distributed computing. He has published more than hundred research papers in these fields in various international Journals and Conferences. He has successfully completed three research projects sponsored by DST and UGC. He has guided more than 20 Ph. D. Theses in these areas. He has received Young Scientist Award for the year 2006 by Orissa Bigyan Academy. He has received Prof. K. Arumugam National Award and Maharashtra State National Award for outstanding research work in Software Engineering for the years 2009 and 2010 respectively by Indian Society for Technical Education (ISTE), NewDelhi. He has also received NITRAA Research Excellence award by NIT Rourkela Alumni Association for the year 2019. Dr. Mohapatra has co-authored the book Elements of Discrete Mathematics: A computer Oriented Approach published by Mc-Graw Hill. Currently, he is a member of ACM, CSI, Fellow of Institution of Engineers (I) and Sr. member of IEEE.</p>
                <div class="speakerDetailTextSocialLinks">
                    <a href="https://ieeexplore.ieee.org/author/37086962773">IEEE Explore</a>
                    <span>•</span>
                    <a href="https://scholar.google.com/citations?user=GIkRqS4AAAAJ&hl=en">Google Scholar</a>
                    <span>•</span>
                    <a href="https://www.linkedin.com/in/durga-prasad-mohapatra-9066932a5/">LinkedIn</a>
                </div>
            </div>

            <div class="speakerDetailImage">
                <img src="images/speakers/images/Durga Prasad Mohapatra.jpeg" alt="" />
            </div>
        </div>

        <div class="speakerDetail" id="DrDharamSinghJat">
            <div class="speakerDetailText">
                <p><b>Prof. Dharm Singh Jat</b> received his Master of Engineering and PhD in Computer Science and Engineering from prestigious universities in India. He is a Professor of Computer Science at Namibia University of Science and Technology (NUST). From 1990 to 2014, he was with the College of Technology and Engineering, Maharana Pratap University of Agricultural and Technology—[MPUAT], Udaipur, India. He has guided about 8 PhD and 24 master research scholars.</p>
                <div class="speakerDetailTextSocialLinks">
                    <a href="https://www.computer.org/profiles/dharm-singh-jat">IEEE Explore</a>
                    <span>•</span>
                    <a href="https://scholar.google.com/citations?user=juc4TG0AAAAJ&hl=en">Google Scholar</a>
                </div>
            </div>

            <div class="speakerDetailImage">
                <img src="images/speakers/images/Dharam Singh Jat.png" alt="" />
            </div>
        </div>
    </main>

    <Footer />

    </div>
  )
}
