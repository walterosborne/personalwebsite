import React, { useEffect, useRef } from "react"
import Navbar from './Navbar.jsx';
import Bg from './Images/meandmike.png'
import './Styles/styles.css'
import './Styles/box.css'

const Blog = () => {

    return (
        <>
            <Navbar></Navbar>
            <img className='bg' src={Bg} alt="Background" />
            <div className="outerbox">
                <div className="rowbox">
                    <h3>Page in development!</h3>
                </div>

            </div>
        </>
    )
}

export default Blog
