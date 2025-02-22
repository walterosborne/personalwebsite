import React from 'react'
import './Styles/box.css'
import Navbar from './Navbar.jsx';

function About() {
    return (
        <><Navbar />
            <img className='bg' src='Images/Me.png' alt="Background" />
            <div className='outerbox'>
                <div className='rowbox'>
                    <img id='sug' src='Images/sug.png' alt="" />
                    <div className='innercolbox'>
                        <h1>Hey there! </h1>
                        <h2>Thanks for visiting my website.</h2>
                        <p>My name is Walter Osborne, and I am a proud resident of NYC. I graduated from University of Maryland's Jiménez-Porter Writer's House in July 2024,
                            though my degree has some STEM stuff because money and strictly money. I am much too cool and artsy in fact to enjoy coding, and would certainly never make my own website. I've pursued many creative outlets such as stand up comedy, acting and scriptwriting, and short fiction.
                            Additionally, in my free time I enjoy weight lifting and running, watching tv, movies, and youtube, and thinking of schemes to stretch a dollar.</p>

                    </div>

                </div>

            </div>
        </>
    )
}

export default About
