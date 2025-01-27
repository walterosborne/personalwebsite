import React, { useEffect, useRef } from "react"
import Navbar from './Navbar.jsx';
import './Styles/styles.css'
import './Styles/box.css'

const Professional = () => {

    return (
        <>
            <Navbar />
            <img className='bg' src='Images/strawberry.png' alt="Background" />
            <div className='outerbox'>
                <div className='col'>
                    <div className='row'>
                        <a className='colbox' href="https://docs.google.com/document/d/1m-P1HZxFnLftyyt0a02XfmXnd30fiCnkbcBrS8V6yyU/edit?usp=sharing" target='_blank' >
                            <img src='Images/Resume.png' alt="Resume" />
                            <div className='innercolbox'>
                                <h2>Resume</h2>
                                <p>See a collection of my work<br />relavant to my career aspirations</p>
                            </div>
                        </a>
                        <div className='colbox' >
                            <a className='innerrowbox' href="https://github.com/walterosborne/" target='_blank'>
                                <img id='github' className="littleimg" src='Images/github.svg' alt="Github Logo" />
                                <span>
                                    <h2>Github</h2>
                                    <br />
                                    <p>View the code behind my projects, including this website!</p>
                                </span>
                            </a>
                            <a className='innerrowbox' href="https://public.tableau.com/app/profile/walter.osborne/viz/Lego_17055400698220/LegobytheNumbers" target='_blank'>
                                <img id='lego' className="littleimg" src='Lego.png' alt="App" />
                                <span>
                                    <h2>Lego Dashboard</h2>
                                    <br />
                                    <p>View the dashboard I created with Python and Tableau in only a few hours to win UMD's 2024 Data Visualization Contest </p>
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
