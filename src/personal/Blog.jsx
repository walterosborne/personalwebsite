import React, { useEffect, useRef } from "react"
import Navbar from './Navbar.jsx';
import './Styles/styles.css'
import './Styles/box.css'
import { Link } from 'react-router-dom';

const Blog = () => {

    return (
        <>
            <Navbar></Navbar>
            <img className='bg' src='Images/meandmike.png' alt="Background" />
            <div className="outerbox">
                <div className="row">
                    <div className="colbox">
                        <img src="/Images/stevecat.webp" alt="" />
                        <Link className='innercolbox' to="/waltspicks">
                            <h2>Walt's Picks</h2>
                            <p>A collection of creative works that I love or simply found notable</p>
                        </Link>
                    </div>
                    <div className="colbox">
                        <img src="/Images/swole.jpg" alt="" />
                        <Link className='innercolbox' to="/reference">
                            <h2>Reference</h2>
                            <p>Guides/notes on how to do things like finance</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
