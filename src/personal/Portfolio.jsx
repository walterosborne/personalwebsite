import React, { useEffect, useRef } from "react"
import Navbar from './Navbar.jsx';
import './Styles/styles.css'
import './Styles/box.css'
import { Link } from 'react-router-dom';

const Portfolio = () => {

    return (
        <>
            <Navbar />
            <img className='bg' src='Images/grass.jpeg' alt="Background" />
            <div className='outerbox'>
                <div className='row'>
                    <Link className='colbox' to="/chapbook" target='_blank'>
                        <img src='Images/chapbook.jpg' alt="Chapbook" />
                        <div className='innercolbox'>
                            <h2>Fiction Chapbook</h2>
                            <p>Explore my creative writing through an interactive game!</p><p style={{ textDecoration: 'underline' }}> Desktop only.</p>
                        </div>
                    </Link>

                </div >
            </div >
        </>
    )
}

export default Portfolio
