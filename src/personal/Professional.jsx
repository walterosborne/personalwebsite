import React, { useEffect, useRef } from "react"
import Navbar from './Navbar.jsx';
import Resume from './Images/Resume.png'
import KO from './Images/KO.jpeg'
import github from './Images/github.svg'
import Bg from './Images/strawberry.png'
import Chapbook from './Images/chapbook.png'
import './Styles/styles.css'
import './Styles/box.css'

const Professional = () => {

    return (
        <>
            <Navbar />
            <img className='bg' src={Bg} alt="Background" />
            <div className='outerbox'>
                <div className='col'>
                    <div className='row'>
                        <a className='colbox' href="https://docs.google.com/document/d/1m-P1HZxFnLftyyt0a02XfmXnd30fiCnkbcBrS8V6yyU/edit?usp=sharing" target='_blank' >
                            <img src={Resume} alt="Resume" />
                            <div className='innercolbox'>
                                <h2>Resume</h2>
                                <p>See a collection of my work<br />relavant to my career aspirations</p>
                            </div>
                        </a>
                        <div className='colbox' >
                            <a className='innerrowbox' href="https://github.com/walterosborne/" target='_blank'>
                                <img id='github' className="littleimg" src={github} alt="Github Logo" />
                                <span>
                                    <h2>Github</h2>
                                    <br />
                                    <p>View the code behind my projects, including this website!</p>
                                </span>
                            </a>
                            <a className='innerrowbox' href="https://play.google.com/store/apps/details?id=com.koservices.koservices2" target='_blank'>
                                <img id='kologo' className="littleimg" src={KO} alt="App" />
                                <span>
                                    <h2>Android App</h2>
                                    <br />
                                    <p>View my published full-stack mobile app, created with Java, XML, and Firebase</p>
                                </span>
                            </a>
                        </div>

                    </div>
                </div >
            </div >
        </>
    )
}

export default Professional
