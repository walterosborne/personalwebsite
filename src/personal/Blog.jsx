import React, { useEffect, useRef } from "react"
import Navbar from './Navbar.jsx';
import './Styles/styles.css'
import './Styles/box.css'

const Blog = () => {

    return (
        <>
            <Navbar></Navbar>
            <img className='bg' src='Images/meandmike.png' alt="Background" />
            <div className="outerbox">
                <div className="rowbox">
                    <h3>Page in development!</h3>
                </div>

            </div>
        </>
    )
}

export default Blog
