import React from 'react'
import Bg from './Me.jpeg'
import './About.css'
import Navbar from './Navbar.jsx';

function About() {
    return (
        <><Navbar />
            <img id='bg' src={Bg} alt="Background" />
            <div id='infocontainer'>
                <div id='info'>
                    <h1>Hey there! </h1>
                    <h1>Thanks for visiting my website.</h1>
                    <p>My name is Walter, and I'm a computer science major and statistics minor at the University of Maryland.
                        I'm passionate about programming and
                        entrepreneurship, and as such I enjoy learning new technologies and starting business ventures.
                        In my free time I enjoy doing food delivery on my bike, playing basketball with friends, reading, and watching youtube.</p>
                </div>
            </div>
        </>
    )
}

export default About
