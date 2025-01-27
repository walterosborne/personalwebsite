import React from 'react'
import './Styles/box.css'
import Navbar from './Navbar.jsx';

function Default() {
    return (
        <><Navbar />
            <img className='bg' src='Images/Graf.jpg' alt="Background" />
            <div className='outerbox'>
                <div className='colbox'>
                    <div className='innercolbox'>
                        <h2>You should have respected my authoritay... </h2>
                        <p>The page you're looking for doesn't exist. Go explore somewhere else!</p>
                    </div>
                    <img src='Images/C&H.jpg' alt="C&H" id='candh' />
                </div>
            </div>
        </>
    )
}

export default Default
