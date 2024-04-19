import React from 'react'
import Bg from './Me.jpeg'
import Prof from './professional.jpeg'
import './About.css'
import Navbar from './Navbar.jsx';

function About() {
    return (
        <><Navbar />
            <img id='bg' src={Bg} alt="Background" />
            <div id='infocontainer'>
                <div id='info'>
                    <div>
                        <img id='profimg' src={Prof} alt="" style={{ height: '24vh', width: '18vh' }} />
                        <h1>Hey there! </h1>
                        <h1>Thanks for visiting my website.</h1>
                    </div>
                    <p>My name is Walter, and I'm a computer science major and statistics minor at the University of Maryland.
                        I'm passionate about programming and
                        entrepreneurship, and as such I enjoy learning new technologies and developing software to make life easy.
                        In my free time I enjoy playing basketball with friends, creative writing, weight lifting, and watching tv and youtube.</p>
                </div>
            </div>
        </>
    )
}

export default About
