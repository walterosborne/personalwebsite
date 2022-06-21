import React from 'react'
import Bg from './Me.jpeg'
import './About.css'

function About() {
    return (
        <>
            <img id='bg' src={Bg} alt="Background" />
            <div id='info'>
                <h1>Hey there! </h1>
                <h1>Thanks for visiting my website.</h1>
                <p>My name is Walter, and I'm a current computer science major at</p>
                <p>the University of Maryland. I'm passionate about programming and</p>
                <p>entrepreneurship, and as such I enjoy learning new technologies and </p>
                <p>starting business ventures.  In my free time I do food delivery on my </p>
                <p>bike, play basketball with friends, read, and watch youtube.</p>
            </div>
        </>
    )
}

export default About