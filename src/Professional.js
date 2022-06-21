import React from 'react'
import Resume from './Resume.png'
import KO from './KO.jpeg'
import Bg from './Graf.jpg'
import Grant from './Grant.png'
import Rlogo from './logo.svg'
import './Professional.css'
function Professional() {
    return (
        <div id='gridcont'>
            <div id='grid'>
                <a className='box' id='resumebox' href="https://docs.google.com/document/d/1m-P1HZxFnLftyyt0a02XfmXnd30fiCnkbcBrS8V6yyU/edit?usp=sharing" target='_blank'>
                    <img id='resume' src={Resume} alt="Resume" height="33vh" />
                    <div className='Text'>
                        <h2>Resume</h2>
                        <p>See a collection of my work<br />relavant to my career aspirations</p>
                    </div>
                </a>
                <a className='box' id='appbox' href="https://play.google.com/store/apps/details?id=com.koservices.koservices2" target='_blank'>
                    <img id='kologo' src={KO} alt="App" />
                    <div className='Text'>
                        <h2>Android App</h2>
                        <p>View the full-stack app I published,<br />created with Java, XML, and Firebase</p>
                    </div>
                </a>

                <a className='box' id='websitebox' href='https://github.com/walterosborne/personalwebsite' target='_blank'>
                    <img id='Rlogo' src={Rlogo} alt="React logo" />
                    <div className='Text'>
                        <h2>This Website</h2>
                        <p>walterosborne.net is a React project featuring HTML,CSS, and Javascript, and is continuing to evolve!</p>
                    </div>
                </a>
                <a className='box' id='writsampbox' href='https://docs.google.com/document/d/1nc1mmFRyLKMBNDA2M_maqeRya2hGOvKMIcPtAgSIC5k/edit?usp=sharing' target='_blank'>
                    <img id='grant' src={Grant} alt="Writing Sample" />
                    <div className='Text'>
                        <h2>Writing Sample</h2>
                        <p>Communications skills are important too - check out this proposal I wrote to increase funding to clean the Potomac River</p>
                    </div>
                </a>
            </div>
            <img id='bg' src={Bg} alt="Background" />
        </div>
    )
}

export default Professional