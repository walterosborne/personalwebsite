import React from 'react'
import Bg from './Images/Me.png'
import SUG from './Images/sug.png'
import './Styles/box.css'
import Navbar from './Navbar.jsx';

function About() {
    return (
        <><Navbar />
            <img className='bg' src={Bg} alt="Background" />
            <div className='outerbox'>
                <div className='rowbox'>
                    <img id='sug' src={SUG} alt="" />
                    <div className='innercolbox'>
                        <h1>Hey there! </h1>
                        <h2>Thanks for visiting my website.</h2>
                        <p>My name is Walter Osborne, and I am a proud resident of NYC. I graduated from University of Maryland's Jiménez-Porter Writer's House in July 2024,
                            though my degree has some STEM stuff because money and stuff. I've pursued many creative outlets such as stand up comedy, acting and scriptwriting, and short fiction.
                            Additionally, in my free time I enjoy weight lifting and running, watching tv, film, and youtube, and thinking of schemes to stretch a dollar.</p>

                    </div>

                </div>

            </div>
        </>
    )
}

export default About
