import React from 'react'
import Bg from './Me.jpeg'
import './About.css'

function About() {
    return (
        <>
            <img id='bg' src={Bg} alt="Background" />
            <div id='infocontainer'>
                <div id='info'>
                    <h1>Hey there! </h1>
                    <h1>Thanks for visiting my website.</h1>
                    <p>My name is Walter, and I'm a current computer science major at the University of Maryland.
                        I'm passionate about programming and
                        entrepreneurship, and as such I enjoy learning new technologies and starting business ventures.
                        In my free time I do food delivery on my bike, play basketball with friends, read, and watch youtube.</p>
                </div>
            </div>
        </>
    )
}

export default About
